<script lang="ts">
	import BackgroundScene from '$lib/components/BackgroundScene.svelte';

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

	const heroLines = [
		{ text: 'software architect.', delay: 0.1 },
		{ text: 'servant leader.', delay: 0.25 },
		{ text: 'developer.', delay: 0.4 },
		{ text: 'ai prompt specialist.', delay: 0.55 },
		{ text: 'verifiably human.', delay: 0.7 }
	];

	const bioHistory = `Born in Texas. Currently in Atlanta, GA. I deliver extraordinary value through servant leadership,
Agile Scrum Methodologies, full stack coding, and Generative AI.

How did I get here? Produced short films with visionary directors and talented videographers. Helped law firms go paperless with virtualized cloud hosting infrastructure. Crafted and deployed dozens of enterprise software solutions that make work enjoyable and efficient.

Currently working on leveling up my ability to contribute better and faster with Generative AI tools.

I am excited about revolutionizing customer experiences by harnessing the unprecedented capabilities of blockchain and artificial intelligence.`;
</script>

<BackgroundScene />

<main class="site-shell">
	<section class="jf-section hero-section">
		<div class="hero-circle"></div>
		<div class="hero-name-block">
			<span class="hero-name hero-name--first">Jonathan</span>
			<span class="hero-name hero-name--second">Flower</span>
		</div>

		<div class="hero-lines">
			{#each heroLines as line}
				<h2 class="hero-line" style={`animation-delay:${line.delay}s`}>{line.text}</h2>
			{/each}
		</div>
	</section>

	<section class="jf-section bio-section">
		<div class="bio-history">
			{#each bioHistory.split('\n\n') as paragraph}
				<p class="bio-paragraph">{paragraph}</p>
			{/each}
		</div>

		<div class="bio-motto jf-card">
			<h4>«Simple, strategic and impactful.»</h4>
			<h6>— This is my mantra and method.</h6>
		</div>
	</section>

	<section class="jf-section projects-section">
		<div class="section-heading">
			<h2 class="jf-section-heading">projects<span class="text-muted">.</span></h2>
		</div>
		<div class="projects-list">
			{#each projects as project (project.slug)}
				<a class="project-card jf-card" href={`/project/${project.slug}/`}>
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
							{#each project.tags as tag}
								<span>{tag}</span>
							{/each}
						</div>
					{/if}
				</a>
			{/each}
		</div>
	</section>

	<section class="jf-section writing-section">
		<div class="section-heading">
			<h2 class="jf-section-heading">
				my <span class="text-muted">insights</span>
			</h2>
			<p class="text-muted">
				What I learn as I strive for excellence in life, software development, and servant leadership.
			</p>
		</div>

		{#if latestPosts.length}
			<ul class="writing-list">
				{#each latestPosts as post (post.url)}
					<li class="writing-card jf-card">
						<a href={post.url} target="_blank" rel="noopener noreferrer">
							<div class="writing-card__meta">
								<p class="writing-card__title">{post.title}</p>
								{#if post.date}
									<span class="writing-card__date">{post.date}</span>
								{/if}
							</div>
							<span class="writing-card__cta">Read on WordPress ↗</span>
						</a>
					</li>
				{/each}
			</ul>
		{:else}
			<p class="text-muted">No posts found (WordPress fetch failed).</p>
		{/if}
	</section>
</main>

<style>
	.site-shell {
		position: relative;
		margin: 0 auto;
		max-width: 1200px;
		padding-inline: clamp(1.5rem, 4vw, 4rem);
		padding-block: clamp(2rem, 4vw, 4rem);
	}

	.hero-section {
		position: relative;
		min-height: clamp(480px, 90vh, 900px);
		padding-block: clamp(3rem, 8vh, 6rem);
		overflow: hidden;
	}

	.hero-circle {
		position: absolute;
		inset: 50% auto auto 50%;
		width: min(1100px, 90vw);
		aspect-ratio: 1;
		border-radius: 999px;
		border: 1px solid color-mix(in srgb, var(--color-muted) 30%, transparent);
		transform: translate(-50%, -50%);
		background: radial-gradient(circle, rgb(255 255 255 / 0.4), transparent 70%);
	}

	.hero-name-block {
		position: relative;
		z-index: 1;
		text-transform: lowercase;
		display: flex;
		flex-direction: column;
		gap: clamp(0.4rem, 1vw, 0.75rem);
		margin-left: clamp(1rem, 10vw, 12rem);
		margin-top: clamp(0rem, 8vh, 4rem);
	}

	.hero-name {
		font-size: clamp(3rem, 12vw, 11rem);
		font-weight: var(--font-weight-black);
		letter-spacing: var(--tracking-tight-xl);
		line-height: 0.95;
	}

	.hero-lines {
		position: absolute;
		right: clamp(1.5rem, 8vw, 12rem);
		top: 50%;
		transform: translateY(-45%);
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: clamp(0.5rem, 2vh, 1.25rem);
		z-index: 1;
		text-align: right;
	}

	.hero-line {
		font-size: clamp(1.5rem, 4vw, 3.75rem);
		letter-spacing: var(--tracking-tight-md);
		color: color-mix(in srgb, var(--color-fg) 90%, transparent);
		opacity: 0;
		transform: translateY(10px);
		animation: hero-fade var(--motion-duration-lg) var(--motion-ease-out) forwards;
	}

	@keyframes hero-fade {
		0% {
			opacity: 0;
			transform: translateY(20px);
		}

		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.bio-section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: clamp(2rem, 5vw, 5rem);
	}

	.bio-history {
		position: relative;
		font-size: 1.2rem;
		line-height: 1.7;
		letter-spacing: var(--tracking-tight-md);
	}

	.bio-paragraph + .bio-paragraph {
		margin-top: 1.5rem;
	}

	.bio-motto {
		padding: clamp(2rem, 4vw, 4rem);
		display: grid;
		gap: 1rem;
		text-align: left;
	}

	.projects-section .projects-list {
		margin-top: clamp(2rem, 4vh, 4rem);
		display: grid;
		gap: clamp(2rem, 6vh, 6rem);
	}

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
		border-radius: 999px;
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
		border-radius: 999px;
		background-color: color-mix(in srgb, var(--color-muted) 10%, transparent);
		color: var(--color-fg);
	}

	.writing-section {
		display: grid;
		gap: clamp(1.5rem, 5vw, 5rem);
	}

	.section-heading {
		max-width: 520px;
	}

	.writing-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: clamp(1rem, 3vw, 3rem);
	}

	.writing-card {
		padding: clamp(1.25rem, 3vw, 3rem);
		opacity: 0;
		transform: translateY(20px);
		animation: rise var(--motion-duration-md) var(--motion-ease-out) forwards;
	}

	.writing-card:nth-child(1) {
		animation-delay: 0.1s;
	}

	.writing-card:nth-child(2) {
		animation-delay: 0.2s;
	}

	.writing-card:nth-child(3) {
		animation-delay: 0.3s;
	}

	.writing-card:nth-child(4) {
		animation-delay: 0.4s;
	}

	.writing-card:nth-child(5) {
		animation-delay: 0.5s;
	}

	.writing-card a {
		display: grid;
		gap: 0.75rem;
	}

	.writing-card__meta {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
	}

	.writing-card__title {
		font-size: 1.1rem;
		font-weight: var(--font-weight-medium);
	}

	.writing-card__date {
		font-size: 0.85rem;
		color: var(--color-muted);
	}

	.writing-card__cta {
		font-size: 0.95rem;
		color: var(--color-accent);
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

	@media (max-width: 768px) {
		.hero-section {
			min-height: auto;
			padding-block: 4rem;
		}

		.hero-circle {
			width: 140vw;
			left: 40%;
		}

		.hero-name-block {
			margin-left: 0;
			align-items: flex-start;
		}

		.hero-lines {
			position: relative;
			top: auto;
			right: auto;
			transform: none;
			align-items: flex-start;
			text-align: left;
			margin-top: 2rem;
		}

		.site-shell {
			padding-inline: 1rem;
		}
	}
</style>
