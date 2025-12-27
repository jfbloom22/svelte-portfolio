<script lang="ts">
	import type { ComponentType } from 'svelte';

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
		};
		component: ComponentType;
	});
</script>

<svelte:head>
	<title>{project.metadata.title} | Jonathan Flower</title>
	{#if project.metadata.summary}
		<meta name="description" content={project.metadata.summary} />
	{/if}
</svelte:head>

<article class="mx-auto max-w-3xl px-6 py-16">
	<header class="mb-10">
		<h1 class="text-4xl font-semibold tracking-tight">{project.metadata.title}</h1>

		{#if project.metadata.summary}
			<p class="mt-4 text-lg text-neutral-600">{project.metadata.summary}</p>
		{/if}

		<div class="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
			{#if project.metadata.role}
				<div>{project.metadata.role}</div>
			{/if}
			{#if project.metadata.year}
				<div>{project.metadata.year}</div>
			{/if}
			{#if project.metadata.tags?.length}
				<div class="flex flex-wrap gap-2">
					{#each project.metadata.tags as tag}
						<span class="rounded-full bg-neutral-100 px-3 py-1 text-neutral-700">{tag}</span>
					{/each}
				</div>
			{/if}
		</div>
	</header>

	<div class="prose prose-neutral max-w-none">
		{#if project.component}
			{@const ProjectComponent = project.component}
			<ProjectComponent />
		{/if}
	</div>
</article>
