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

export async function getLatestWordpressPosts(limit = 5): Promise<ExternalPostListItem[]> {
	const url = new URL('https://blog.jonathanflower.com/wp-json/wp/v2/posts');
	url.searchParams.set('per_page', String(limit));
	url.searchParams.set('_fields', 'link,title,date');

	const response = await fetch(url, {
		headers: { Accept: 'application/json' },
		signal: AbortSignal.timeout(5000)
	});

	if (!response.ok) return [];

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
