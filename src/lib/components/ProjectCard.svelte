<script lang="ts" module>
	export type ProjectListItem = {
		slug: string;
		title: string;
		summary?: string;
		year?: number | string;
		tags?: string[];
	};
</script>

<script lang="ts">
	import { resolve } from '$app/paths';

	let { project } = $props<{ project: ProjectListItem }>();
</script>

<a class="project-card jf-card" href={resolve('/project/[slug]', { slug: project.slug })}>
	<div class="project-card__header">
		<h3>{project.title}</h3>
		{#if project.year}
			<span class="project-card__year">{project.year}</span>
		{/if}
	</div>
	{#if project.summary}
		<p class="text-muted project-card__summary">{project.summary}</p>
	{/if}
	{#if project.tags?.length}
		<div class="project-card__tags">
			{#each project.tags as tag (tag)}
				<span>{tag}</span>
			{/each}
		</div>
	{/if}
	</a>

<style>
	.project-card {
		padding: clamp(1.5rem, 4vw, 4rem);
		display: grid;
		gap: 1rem;
		opacity: 0;
		transform: translateY(20px);
		animation: rise var(--motion-duration-md) var(--motion-ease-out) forwards;
	}

	.project-card:nth-child(1) {
		animation-delay: 0.1s;
	}

	.project-card:nth-child(2) {
		animation-delay: 0.2s;
	}

	.project-card:nth-child(3) {
		animation-delay: 0.3s;
	}

	.project-card:nth-child(4) {
		animation-delay: 0.4s;
	}

	.project-card__header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
	}

	.project-card__year {
		font-size: 0.85rem;
		color: var(--color-muted);
		background-color: color-mix(in srgb, var(--color-muted) 15%, transparent);
		padding: 0.2rem 0.75rem;
		border-radius: var(--radius-pill);
	}

	.project-card__summary {
		font-size: 1rem;
		line-height: 1.5;
	}

	.project-card__tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.project-card__tags span {
		font-size: 0.8rem;
		padding: 0.2rem 0.85rem;
		border-radius: var(--radius-pill);
		background-color: color-mix(in srgb, var(--color-muted) 10%, transparent);
		color: var(--color-fg);
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
</style>
