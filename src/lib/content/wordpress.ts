type WpRenderedField = { rendered?: string };

type WpPost = {
	link?: string;
	title?: WpRenderedField;
	excerpt?: WpRenderedField;
	date?: string;
	featured_media?: number;
	_embedded?: {
		'wp:featuredmedia'?: Array<{
			source_url?: string;
			alt_text?: string;
			id?: number;
		}>;
		'wp:term'?: Array<
			Array<{
				id?: number;
				name?: string;
				taxonomy?: string;
			}>
		>;
	};
};

export type ExternalPostListItem = {
	title: string;
	url: string;
	date?: string;
	excerpt?: string;
	category?: string;
	thumbnailUrl?: string;
	thumbnailAlt?: string;
};

function decodeHtmlEntities(input: string) {
	return input
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/&#8217;/g, "'")
		.replace(/&#8216;/g, "'")
		.replace(/&#8220;/g, '"')
		.replace(/&#8221;/g, '"')
		.replace(/&#8211;/g, '-')
		.replace(/&#8212;/g, '-')
		.replace(/&#8230;/g, '...')
		.replace(/&#(\d+);/g, (_, code) => {
			const value = Number(code);
			return Number.isFinite(value) ? String.fromCharCode(value) : _;
		});
}

function stripHtml(input: string) {
	return decodeHtmlEntities(input.replace(/<[^>]*>/g, '').trim());
}

function truncate(text: string, max = 160) {
	if (text.length <= max) return text;
	return text.slice(0, max).replace(/\s+\S*$/, '').trim() + '…';
}

export async function getLatestWordpressPosts(options?: { base?: string; limit?: number; timeoutMs?: number }): Promise<ExternalPostListItem[]> {
	const base = options?.base ?? 'https://blog.jonathanflower.com';
	const limit = options?.limit ?? 5;
	const timeoutMs = options?.timeoutMs ?? 5000;

	const url = new URL('/wp-json/wp/v2/posts', base);
	url.searchParams.set('per_page', String(limit));
	url.searchParams.set('_fields', 'link,title,excerpt,date,featured_media,_embedded');
	url.searchParams.set('_embed', 'wp:featuredmedia,wp:term');

	const response = await fetch(url, {
		headers: { Accept: 'application/json' },
		signal: AbortSignal.timeout(timeoutMs)
	});

	if (!response.ok) {
		throw new Error(`WordPress fetch failed (${response.status} ${response.statusText})`);
	}

	const posts = (await response.json()) as WpPost[];

	const items: ExternalPostListItem[] = [];

	const mediaIds = new Set<number>();

	for (const post of posts) {
		const title = stripHtml(post.title?.rendered ?? '').trim();
		const excerpt = truncate(stripHtml(post.excerpt?.rendered ?? ''));
		const postUrl = post.link ?? '';
		if (!title || !postUrl) continue;

		const date = post.date
			? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
			: undefined;

		const media = post._embedded?.['wp:featuredmedia']?.[0];
		const thumbnailUrl = media?.source_url;
		const thumbnailAlt = media?.alt_text ? stripHtml(media.alt_text) : undefined;

		const terms = post._embedded?.['wp:term'] ?? [];
		const flatTerms = terms.flat();
		const category = flatTerms.find((term) => term.taxonomy === 'category')?.name;

		if (post.featured_media) {
			mediaIds.add(post.featured_media);
		}

		items.push({ title, url: postUrl, date, excerpt, category, thumbnailUrl, thumbnailAlt });
	}

	if (mediaIds.size) {
		const mediaUrl = new URL('/wp-json/wp/v2/media', base);
		mediaUrl.searchParams.set('include', Array.from(mediaIds).join(','));
		mediaUrl.searchParams.set('per_page', String(mediaIds.size));
		mediaUrl.searchParams.set('_fields', 'id,source_url,alt_text');

		const mediaResponse = await fetch(mediaUrl, {
			headers: { Accept: 'application/json' },
			signal: AbortSignal.timeout(timeoutMs)
		});

		if (mediaResponse.ok) {
			const mediaItems = (await mediaResponse.json()) as Array<{
				id?: number;
				source_url?: string;
				alt_text?: string;
			}>;

			const mediaMap = new Map<number, { url?: string; alt?: string }>();
			for (const media of mediaItems) {
				if (!media.id) continue;
				mediaMap.set(media.id, {
					url: media.source_url,
					alt: media.alt_text ? stripHtml(media.alt_text) : undefined
				});
			}

			for (const post of posts) {
				const item = items.find((entry) => entry.url === post.link);
				if (!item || item.thumbnailUrl || !post.featured_media) continue;
				const media = mediaMap.get(post.featured_media);
				if (media?.url) {
					item.thumbnailUrl = media.url;
					item.thumbnailAlt = media.alt;
				}
			}
		}
	}

	return items;
}
