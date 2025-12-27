import { getAllProjects } from '$lib/content/projects';
import { getLatestWordpressPosts, type ExternalPostListItem } from '$lib/content/wordpress';

export const prerender = true;

export async function load() {
	const projects = getAllProjects();

	let latestPosts: ExternalPostListItem[] = [];
	try {
		latestPosts = await getLatestWordpressPosts(5);
	} catch {
		latestPosts = [];
	}

	return { projects, latestPosts };
}
