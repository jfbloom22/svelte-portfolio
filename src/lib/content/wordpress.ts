type WpRenderedField = { rendered?: string };

type WpPost = {
	link?: string;
	title?: WpRenderedField;
	date?: string;
};

export type ExternalPostListItem = {
	title: string;
	url: string;
	date?: string;
};

function stripHtml(input: string) {
	return input.replace(/<[^>]*>/g, '').trim();
}

export async function getLatestWordpressPosts(options?: { base?: string; limit?: number; timeoutMs?: number }): Promise<ExternalPostListItem[]> {
	const base = options?.base ?? 'https://blog.jonathanflower.com';
	const limit = options?.limit ?? 5;
	const timeoutMs = options?.timeoutMs ?? 5000;

	const url = new URL('/wp-json/wp/v2/posts', base);
	url.searchParams.set('per_page', String(limit));
	url.searchParams.set('_fields', 'link,title,date');

	const response = await fetch(url, {
		headers: { Accept: 'application/json' },
		signal: AbortSignal.timeout(timeoutMs)
	});

	if (!response.ok) {
		throw new Error(`WordPress fetch failed (${response.status} ${response.statusText})`);
	}

	const posts = (await response.json()) as WpPost[];

	const items: ExternalPostListItem[] = [];

	for (const post of posts) {
		const title = stripHtml(post.title?.rendered ?? '').trim();
		const postUrl = post.link ?? '';
		if (!title || !postUrl) continue;

		const date = post.date
			? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
			: undefined;

		items.push({ title, url: postUrl, date });
	}

	return items;
}
