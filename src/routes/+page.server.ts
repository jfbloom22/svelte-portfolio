import { getAllProjects } from '$lib/content/projects';
import { getLatestWordpressPosts, type ExternalPostListItem } from '$lib/content/wordpress';
import { env } from '$env/dynamic/private';

export const prerender = true;

export async function load({ fetch }) {
	const projects = getAllProjects();

	const base = env.WORDPRESS_API_BASE ?? 'https://blog.jonathanflower.com';
	const limit = Number(env.WORDPRESS_POST_LIMIT ?? '5');
	const timeoutMs = Number(env.WORDPRESS_FETCH_TIMEOUT_MS ?? '5000');

	const latestPosts: ExternalPostListItem[] = await getLatestWordpressPosts({ base, limit, timeoutMs, fetch });

	return { projects, latestPosts };
}
