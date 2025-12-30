<script lang="ts">
	import type { ComponentType } from 'svelte';
	import BackgroundScene from '$lib/components/BackgroundScene.svelte';
	import { resolve } from '$app/paths';

	let { data } = $props();

	let project = $derived(data.project as {
		slug: string;
		metadata: {
			title: string;
			summary?: string;
			role?: string;
			year?: number | string;
			tags?: string[];
			heroImage?: string;
			gallery?: string[];
		};
		component: ComponentType;
	});

	const projectLabel = 'Project:';
	let lightboxOpen = $state(false);
	let lightboxImage = $state('');
	let lightboxAlt = $state('');

	function openLightbox(src: string, alt: string) {
		lightboxImage = src;
		lightboxAlt = alt;
		lightboxOpen = true;
	}

	function closeLightbox() {
		lightboxOpen = false;
		lightboxImage = '';
		lightboxAlt = '';
	}
</script>

<svelte:head>
	<title>{project.metadata.title} | Jonathan Flower</title>
	{#if project.metadata.summary}
		<meta name="description" content={project.metadata.summary} />
	{/if}
</svelte:head>

<BackgroundScene />

<section class="section project">
	<div class="project-content">
		<div class="header-logo header-logo-wrap">
			<a class="header-logo__link" href={resolve('/')}>
				<img
					src="/images/_archive/myself0.5x.webp"
					alt="Jonathan Flower"
					loading="lazy"
					class="header-logo__image"
				/>
			</a>
			<div>{projectLabel}</div>
		</div>

		<h1 class="project-page-heading">{project.metadata.title}</h1>

		<div class="project-page-meta">
			{#if project.metadata.role}
				<h6>{project.metadata.role}</h6>
			{/if}
			{#if project.metadata.tags?.length}
				<h6>{project.metadata.tags.join(', ')}</h6>
			{/if}
			{#if project.metadata.year}
				<h6>{project.metadata.year}</h6>
			{/if}
		</div>

		{#if project.metadata.summary}
			<p class="project-page-description">{project.metadata.summary}</p>
		{/if}
	</div>

	<div class="project-image-wrap">
		{#if project.metadata.heroImage}
			<img class="project-image" src={project.metadata.heroImage} alt={project.metadata.title} loading="lazy" />
		{/if}
	</div>
</section>

<section class="section project project-detail">
	<div class="rich-text-block in-project-page">
		{#if project.component}
			{@const ProjectComponent = project.component}
			<ProjectComponent />
		{/if}
	</div>

	{#if project.metadata.gallery?.length}
		<div class="project-gallery">
			{#each project.metadata.gallery as image (image)}
				<div class="project-gallery-item">
					<button
						type="button"
						class="project-gallery-button"
						onclick={() => openLightbox(image, project.metadata.title)}
					>
						<img src={image} alt={`${project.metadata.title} gallery`} loading="lazy" />
					</button>
				</div>
			{/each}
		</div>
	{/if}
</section>

{#if lightboxOpen}
	<div
		class="lightbox"
		role="dialog"
		aria-modal="true"
		tabindex="0"
		onclick={(event) => {
			if (event.target === event.currentTarget) closeLightbox();
		}}
		onkeydown={(event) => {
			if (event.key === 'Escape') closeLightbox();
		}}
	>
		<div class="lightbox-content">
			<button type="button" class="lightbox-close" onclick={closeLightbox} aria-label="Close image">
				×
			</button>
			<img src={lightboxImage} alt={lightboxAlt} />
		</div>
	</div>
{/if}

<style>
	.section.project {
		display: grid;
		grid-template-columns: 60% 40%;
		align-items: start;
		min-height: 80vh;
		padding-top: 0;
		padding-bottom: 0;
		column-gap: 5vw;
	}

	.project-content {
		min-height: 80vh;
		padding-top: 12vh;
		padding-right: 5vw;
		line-height: 1.2;
	}

	.header-logo {
		display: grid;
		grid-template-columns: 10vh 1fr;
		align-items: center;
		gap: 2vw;
		color: var(--color-muted);
		letter-spacing: -0.04em;
		margin-bottom: 6vh;
		margin-left: 7vw;
		font-size: 1.6em;
		font-weight: var(--font-weight-medium);
		line-height: 1;
	}

	.header-logo__link {
		display: inline-flex;
	}

	.header-logo__image {
		width: 8vh;
		height: 8vh;
		object-fit: contain;
	}

	.project-page-heading {
		margin-bottom: 2vh;
		margin-left: 7vw;
		font-size: 9vh;
		display: inline-block;
		line-height: 0.95;
	}

	.project-page-description {
		letter-spacing: -0.01em;
		max-width: 560px;
		margin-bottom: 0;
		margin-left: 7vw;
		font-size: 1.6em;
		font-weight: var(--font-weight-medium);
		line-height: 1.4;
	}

	.project-page-meta {
		display: grid;
		grid-template-columns: auto auto 1fr;
		place-items: center start;
		gap: 30px;
		min-height: 6vh;
		margin-left: 7vw;
		margin-top: 1vh;
		font-size: 0.9em;
		color: var(--color-muted);
		letter-spacing: -0.02em;
	}

	.project-image-wrap {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		min-height: 80vh;
		line-height: 1.2;
		padding-top: 10vh;
	}

	.project-image {
		width: min(100%, 480px);
		height: auto;
		display: block;
	}

	.project-detail {
		grid-template-columns: 60% 40%;
		padding-top: 8vh;
		padding-bottom: 10vh;
		column-gap: 5vw;
	}

	.rich-text-block.in-project-page {
		background-color: var(--color-surface);
		max-width: 560px;
		margin-bottom: 8vh;
		margin-left: 14vw;
		padding: 5vh 4vw 4vh;
	}

	.project-gallery {
		column-count: 2;
		column-gap: 0;
		margin-left: auto;
		margin-right: auto;
		padding-right: 2vw;
		padding-top: 1vh;
	}

	.project-gallery-item {
		break-inside: avoid;
		margin-bottom: 2vw;
	}

	.project-gallery-item img {
		width: 100%;
		height: auto;
		display: block;
	}

	.project-gallery-button {
		border: none;
		padding: 0;
		margin: 0;
		background: transparent;
		cursor: zoom-in;
		width: 100%;
	}

	.lightbox {
		position: fixed;
		inset: 0;
		display: grid;
		place-items: center;
		z-index: 50;
		background: rgb(0 0 0 / 0.6);
		padding: 5vh 5vw;
	}

	.lightbox:focus {
		outline: none;
	}

	.lightbox-content {
		position: relative;
		max-width: 90vw;
		max-height: 90vh;
		background: var(--color-surface);
		box-shadow: var(--card-shadow);
		border-radius: 16px;
		padding: 1rem;
	}

	.lightbox-content img {
		max-width: 85vw;
		max-height: 80vh;
		display: block;
		height: auto;
		width: auto;
	}

	.lightbox-close {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		border: none;
		background: var(--color-fg);
		color: var(--color-surface);
		border-radius: 999px;
		width: 32px;
		height: 32px;
		display: grid;
		place-items: center;
		cursor: pointer;
		font-size: 1.2rem;
		line-height: 1;
	}

	.rich-text-block.in-project-page :global(h2),
	.rich-text-block.in-project-page :global(h3) {
		margin-top: 2rem;
	}

	.rich-text-block.in-project-page :global(p) {
		margin: 0 0 1rem;
		line-height: 1.6;
	}

	.rich-text-block.in-project-page :global(img) {
		width: 100%;
		height: auto;
		display: block;
		margin: 2rem 0;
		border-radius: 12px;
	}

	@media (max-width: 1024px) {
		.section.project {
			grid-template-columns: 1fr;
			row-gap: 5vh;
		}

		.project-content {
			min-height: auto;
			padding-right: 7vw;
		}

		.header-logo {
			margin-left: 7vw;
		}

		.project-page-heading {
			margin-left: 7vw;
			margin-bottom: 4vh;
		}

		.project-page-meta {
			grid-template-columns: auto auto;
			margin-top: 0;
		}

		.project-image-wrap {
			min-height: auto;
			padding-left: 20vw;
			padding-top: 0;
		}

		.project-detail {
			grid-template-columns: 1fr;
			padding-top: 4vh;
			padding-bottom: 6vh;
		}

		.rich-text-block.in-project-page {
			margin-left: 7vw;
			margin-right: 7vw;
			padding-left: 7vw;
			padding-right: 7vw;
		}

		.project-gallery {
			column-count: 2;
			padding-right: 0;
			margin: 0 7vw 5vh;
		}
	}

	@media (max-width: 768px) {
		.header-logo {
			grid-template-columns: 10vw 1fr;
		}

		.project-page-heading {
			font-size: clamp(2rem, 8vw, 3.5rem);
		}

		.project-image {
			height: auto;
			max-height: none;
			object-fit: contain;
		}

		.project-page-meta {
			margin-left: 7vw;
			margin-bottom: 1vh;
			font-size: 1em;
		}

		.project-image-wrap {
			padding-left: 0;
		}

		.rich-text-block.in-project-page {
			margin-left: 0;
			margin-right: 0;
			padding-left: 7vw;
			padding-right: 7vw;
		}

		.project-gallery {
			column-count: 1;
			margin: 0 7vw 5vh;
		}
	}
</style>
