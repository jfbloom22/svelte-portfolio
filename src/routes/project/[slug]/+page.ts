import { error } from '@sveltejs/kit';
import { getAllProjects, getProject } from '$lib/content/projects';

export const prerender = true;

export function entries() {
	return getAllProjects().map(({ slug }) => ({ slug }));
}

export function load({ params }) {
	try {
		return {
			project: getProject(params.slug)
		};
	} catch {
		throw error(404, 'Not found');
	}
}

