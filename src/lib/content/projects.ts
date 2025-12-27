type ProjectFrontmatter = {
	title: string;
	summary?: string;
	role?: string;
	year?: number | string;
	tags?: string[];
	heroImage?: string;
};

type ProjectModule = {
	default: import('svelte').ComponentType;
	metadata?: ProjectFrontmatter;
};

const projectModules = import.meta.glob<ProjectModule>('../../content/projects/*.{md,svx}', {
	eager: true
});

function slugFromPath(path: string) {
	const fileName = path.split('/').at(-1) ?? path;
	return fileName.replace(/\.(md|svx)$/, '');
}

export type ProjectListItem = ProjectFrontmatter & { slug: string };

export function getAllProjects(): ProjectListItem[] {
	const projects = Object.entries(projectModules).map(([path, module]) => {
		const slug = slugFromPath(path);
		const metadata = module.metadata ?? { title: slug };
		return { slug, ...metadata };
	});

	projects.sort((a, b) => String(b.year ?? '').localeCompare(String(a.year ?? '')));
	return projects;
}

export function getProject(slug: string): { slug: string; metadata: ProjectFrontmatter; component: ProjectModule['default'] } {
	for (const [path, module] of Object.entries(projectModules)) {
		if (slugFromPath(path) === slug) {
			return {
				slug,
				metadata: module.metadata ?? { title: slug },
				component: module.default
			};
		}
	}

	throw new Error(`Project not found: ${slug}`);
}
