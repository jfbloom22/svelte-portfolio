<script lang="ts" module>
	export type ProjectListItem = {
		slug: string;
		title: string;
		summary?: string;
		year?: number | string;
		role?: string;
		tags?: string[];
		heroImage?: string;
	};
</script>

<script lang="ts">
	import { resolve } from '$app/paths';

	let { project } = $props<{ project: ProjectListItem }>();

	const metaLabel = project.role ?? project.tags?.[0] ?? '';
</script>

<a class="projects-item jf-card" href={resolve('/project/[slug]', { slug: project.slug })}>
	{#if project.heroImage}
		<img class="projects-item-image" src={project.heroImage} alt={project.title} loading="lazy" />
	{/if}
	<div class="projects-item-content">
		<h4>{project.title}</h4>
		{#if project.summary}
			<p class="projects-item-summary">{project.summary}</p>
		{/if}
		{#if metaLabel || project.year}
			<div class="projects-item-meta">
				<div>{metaLabel}</div>
				{#if project.year}
					<div class="project-items-year">{project.year}</div>
				{/if}
			</div>
		{/if}
	</div>
</a>

<style>
	.projects-item {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: 1fr;
		grid-auto-columns: 1fr;
		background-color: var(--color-surface);
		width: 50vw;
		max-width: 880px;
		margin-bottom: 10vh;
		opacity: 0;
		transform: translateY(20px);
		animation: rise var(--motion-duration-md) var(--motion-ease-out) forwards;
	}

	.projects-item:nth-child(2n) {
		margin-left: auto;
	}

	.projects-item:last-child {
		margin-bottom: 0;
	}

	.projects-item-image {
		width: 100%;
		display: block;
		object-fit: cover;
	}

	.projects-item-content {
		padding: 8% 10%;
		display: grid;
		gap: 3vh;
	}

	.projects-item:nth-child(1) {
		animation-delay: 0.1s;
	}

	.projects-item:nth-child(2) {
		animation-delay: 0.2s;
	}

	.projects-item:nth-child(3) {
		animation-delay: 0.3s;
	}

	.projects-item:nth-child(4) {
		animation-delay: 0.4s;
	}

	.projects-item-summary {
		color: var(--color-muted);
		letter-spacing: -0.015em;
		margin: 3vh 0;
		font-size: 1.2em;
		font-weight: var(--font-weight-medium);
		line-height: 1.5;
	}

	.projects-item-meta {
		display: grid;
		grid-template-columns: auto auto;
		grid-auto-columns: 1fr;
		align-items: center;
		gap: 20px;
		color: var(--color-muted);
		letter-spacing: -0.02em;
	}

	.project-items-year {
		letter-spacing: -0.04em;
		background-color: #68686b1a;
		border-radius: 2px;
		padding: 4px 10px;
		font-weight: var(--font-weight-medium);
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(20px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 900px) {
		.projects-item {
			width: 90vw;
		}
	}
</style>
