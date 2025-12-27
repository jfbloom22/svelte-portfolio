<script lang="ts" module>
	export type ProjectListItem = {
		slug: string;
		title: string;
		summary?: string;
		year?: number | string;
		tags?: string[];
		heroImage?: string;
	};
</script>

<script lang="ts">
	import { resolve } from '$app/paths';

	let { project } = $props<{ project: ProjectListItem }>();
</script>

<a class="project-card jf-card" href={resolve('/project/[slug]', { slug: project.slug })}>
	{#if project.heroImage}
		<img class="project-card__image" src={project.heroImage} alt={`${project.title} thumbnail`} loading="lazy" />
	{/if}

	<div class="project-card__content">
		<h4>{project.title}</h4>

		{#if project.summary}
			<p class="project-card__summary">{project.summary}</p>
		{/if}

		<div class="project-card__meta">
			<div class="project-card__tags">
				{#if project.tags?.length}
					{project.tags.join(', ')}
				{/if}
			</div>

			{#if project.year}
				<div class="project-card__year">{project.year}</div>
			{/if}
		</div>
	</div>
</a>

<style>
	.project-card {
		display: grid;
		grid-template-rows: auto 1fr;
		background-color: var(--color-surface);
		overflow: hidden;
		width: 50vw;
		max-width: 880px;
		margin-bottom: 10vh;
	}

	.project-card:nth-child(2n) {
		margin-left: auto;
	}

	.project-card__image {
		display: block;
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	.project-card__content {
		padding: 8% 10%;
	}

	.project-card__summary {
		color: var(--color-muted);
		letter-spacing: -0.015em;
		margin-top: 3vh;
		margin-bottom: 3vh;
		font-size: 1.2em;
		font-weight: var(--font-weight-medium);
		line-height: 1.5;
	}

	.project-card__meta {
		display: grid;
		grid-template-columns: auto auto;
		place-items: center start;
		gap: 20px;
		color: var(--color-muted);
		letter-spacing: -0.02em;
	}

	.project-card__tags {
		min-height: 1em;
	}

	.project-card__year {
		letter-spacing: -0.04em;
		background-color: color-mix(in srgb, var(--color-muted) 10%, transparent);
		border-radius: 2px;
		padding: 4px 10px;
		font-weight: var(--font-weight-medium);
	}

	@media (max-width: 479px) {
		.project-card {
			width: 100%;
			margin-bottom: 5vh;
		}
	}
</style>
