<script lang="ts">
	let { data } = $props();

	let projects = $derived(
		(data.projects ?? []) as {
			slug: string;
			title: string;
			summary?: string;
			year?: number | string;
			tags?: string[];
		}[]
	);

	let latestPosts = $derived((data.latestPosts ?? []) as { title: string; url: string; date?: string }[]);
</script>

<main class="mx-auto max-w-5xl px-6 py-16">
	<header class="py-10">
		<h1 class="text-5xl font-semibold tracking-tight">
			Jonathan<br />
			Flower
		</h1>
		<p class="mt-6 max-w-2xl text-lg text-neutral-700">
			Software architect. Servant leader. Developer. AI prompt specialist. Verifiably human.
		</p>
	</header>

	<section class="py-12">
		<h2 class="text-2xl font-semibold tracking-tight">Projects</h2>
		<div class="mt-6 grid gap-6 md:grid-cols-2">
			{#each projects as project (project.slug)}
				<a
					class="rounded-2xl border border-neutral-200 bg-white/60 p-6 shadow-sm transition hover:bg-white"
					href={`/project/${project.slug}/`}
				>
					<div class="flex items-baseline justify-between gap-4">
						<h3 class="text-lg font-semibold">{project.title}</h3>
						{#if project.year}
							<span class="text-sm text-neutral-500">{project.year}</span>
						{/if}
					</div>
					{#if project.summary}
						<p class="mt-2 text-sm text-neutral-700">{project.summary}</p>
					{/if}
					{#if project.tags?.length}
						<div class="mt-4 flex flex-wrap gap-2">
							{#each project.tags as tag}
								<span class="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700">{tag}</span>
							{/each}
						</div>
					{/if}
				</a>
			{/each}
		</div>
	</section>

	<section class="py-12">
		<h2 class="text-2xl font-semibold tracking-tight">Latest writing</h2>
		<p class="mt-2 text-neutral-700">
			New posts live on WordPress at <a class="underline" href="https://blog.jonathanflower.com">blog.jonathanflower.com</a
			>.
		</p>

		{#if latestPosts.length}
			<ul class="mt-6 grid gap-3">
				{#each latestPosts as post (post.url)}
					<li>
						<a
							class="block rounded-xl border border-neutral-200 bg-white/60 p-4 hover:bg-white"
							href={post.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<div class="flex flex-wrap items-baseline justify-between gap-3">
								<span class="font-medium">{post.title}</span>
								{#if post.date}
									<span class="text-sm text-neutral-500">{post.date}</span>
								{/if}
							</div>
						</a>
					</li>
				{/each}
			</ul>
		{:else}
			<p class="mt-6 text-sm text-neutral-600">No posts found (build-time fetch failed or returned none).</p>
		{/if}
	</section>
</main>
