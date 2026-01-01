<script lang="ts">
	import { inView } from '$lib/actions/in-view';
	import BackgroundScene from '$lib/components/BackgroundScene.svelte';
	import HeroSection, { type HeroLine } from '$lib/components/HeroSection.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';

	let { data } = $props();

	let projects = $derived(
		(data.projects ?? []) as {
			slug: string;
			title: string;
			summary?: string;
			year?: number | string;
			tags?: string[];
			heroImage?: string;
		}[]
	);

	let latestPosts = $derived(
		(data.latestPosts ?? []) as {
			title: string;
			url: string;
			date?: string;
			thumbnailUrl?: string;
			thumbnailAlt?: string;
			category?: string;
			excerpt?: string;
		}[]
	);

	const heroLines: HeroLine[] = [
		{ text: 'ai adoption strategist.', align: 'right', delay: 0.1 },
		{ text: 'software architect.', align: 'left', delay: 0.25 },
		{ text: 'servant leader.', align: 'right', delay: 0.4 },
		{ text: 'ai engineer.', align: 'left', delay: 0.55 },
		{ text: 'verifiably human.', align: 'right', delay: 0.7 }
	];

	const bioHistory = `AI Adoption Strategist. Born in Texas. Currently in Atlanta, GA. I deliver extraordinary value through servant leadership,
Agile Scrum Methodologies, full stack engineering, and Generative AI.

How did I get here? Produced short films with visionary directors and talented videographers. Helped law firms go paperless with virtualized cloud hosting infrastructure. Crafted and deployed enterprise software solutions that make work enjoyable and efficient.  Architected AI solutions where I orchestrated human enginuity, conventional software engineering, and multipole AI agents together to deliver value.

Here's the thing... the technology usually isn't the hard part. The psychology is. I've built solutions I was proud of — and still watched them stall in adoption.

Partnering with my cofounder Neil Morelli, PhD (industrial-organizational psychology), changed how I think about rollout. At Workplace Labs, we combine AI engineering and organizational behavior to show people how easy it is to leverage AI and drive effective adoption. If you're tasked with making AI actually stick across your org, let's talk.`;

	const skills = [
		{ number: '1.', text: 'Designing and shipping thoughtful software that makes work easier.' },
		{ number: '2.', text: 'Leading teams with calm clarity (and a bias for what actually works).' },
		{ number: '3.', text: 'Running hands-on AI adoption workshops that build real capability — not hype.' },
		{ number: '4.', text: 'Helping orgs spot real AI leverage, set guardrails, and drive usage that sticks.' }
	];

	const tools = [
		{
			name: 'Bear',
			description: 'The most elegant note taking markdown app available in the Apple ecosystem.',
			image: { src: '/images/u4fPSX9Q_400x400-1381493564.webp', alt: 'Bear' }
		},
		{
			name: 'Spark Mail',
			description: 'Great UI and support for grouping emails by sender.',
			image: { src: '/images/spark.svg', alt: 'Spark Mail logo' }
		},
		{
			name: 'Cursor',
			description: 'My daily driver for AI-assisted coding. Fast iteration, great ergonomics, and solid defaults.',
			image: { src: '/images/cursor.svg', alt: 'Cursor logo' }
		},
		{
			name: 'Pixelmator Pro',
			description: 'Photoshop but elegant and easy to use.',
			image: { src: '/images/ico_pixelamtor-pro-2.02x.webp', alt: 'Pixelmator Pro logo' }
		},
		{
			name: 'Open WebUI',
			description: 'ChatGPT Teams, but self-hosted with all the frontier models plus local & private models.',
			image: { src: '/images/open-webui.webp', alt: 'Open WebUI logo' }
		}
	];

	const codingApps = [
		{ name: 'Cursor', image: { src: '/images/cursor.svg', alt: 'Cursor logo' } },
		{ name: 'Warp', image: { src: '/images/warp.svg', alt: 'Warp logo' } },
		{ name: 'DevUtils', image: { src: '/images/1200x630bb-526247306.webp', alt: 'DevUtils logo' } }
	];

	const socials = [
		{ label: '@linkedin', url: 'https://www.linkedin.com/in/jonathan-flower/', count: '1163' },
		{ label: '@twitter', url: 'https://twitter.com/jfBLOOM22', count: '109' },
		{ label: '@dev.to', url: 'https://dev.to/jfbloom22', count: '22' }
	];

	const clients = [
		{ name: 'Oransi', logo: '/images/clients/oransi_logo.webp' },
		{ name: 'Gif.games', logo: '/images/clients/gifgamesxyz-150x150.png' },
		{ name: 'Coinonia Labs', logo: '/images/clients/coinonia-512.png' },
		{ name: 'Beacon Madaes', logo: '/images/clients/beacon-madaes.webp' }
	];
</script>

<BackgroundScene />

<main class="site-shell">
	<HeroSection primaryName="Jonathan" secondaryName="Flower" lines={heroLines} />

	<section class="jf-section jf-section--tall bio-section">
		<div class="container grid-12">
			<div class="bio-history type-lead col-span-12 lg:col-span-6 lg:col-start-2">
				{#each bioHistory.split('\n\n') as paragraph (paragraph)}
					<p class="bio-paragraph">{paragraph}</p>
				{/each}
			</div>

			<div class="bio-images col-span-12 lg:col-span-4 lg:col-start-8">
				<img class="bio-image" src="/images/IMG_6620.webp" alt="Jonathan Flower portrait" loading="lazy" />
				<img
					class="bio-image bio-image--square"
					src="/images/me-at-the-beach.webp"
					alt="Jonathan Flower at the beach"
					loading="lazy"
				/>
			</div>

			<div class="bio-motto jf-card col-span-12 md:col-span-6 md:col-start-2">
				<h4>«Simple, strategic and impactful.»</h4>
				<h6>— This is my mantra and method.</h6>
			</div>
		</div>
	</section>

	<section class="jf-section jf-section--tall jf-section--full skills-section section-reveal" use:inView>
		<div class="container grid-12">
			<div class="col-span-12 lg:col-span-6 lg:col-start-2">
				<SectionHeading title="proskills" accent=":" showDot={false} />
			</div>
			<div class="skills-grid col-span-12 lg:col-span-10 lg:col-start-2">
				{#each skills as skill (skill.number)}
					<article class="skill-card jf-card">
						<span class="skill-number">{skill.number}</span>
						<p>{skill.text}</p>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section class="jf-section jf-section--tall jf-section--full projects-section section-reveal" use:inView>
		<div class="container grid-12">
			<div class="col-span-12 lg:col-span-6 lg:col-start-2">
				<SectionHeading title="projects" accent="." showDot={false}>
					<p class="text-muted">A curated selection of recent work.</p>
				</SectionHeading>
			</div>
			<div class="container-working-with col-span-12 lg:col-span-5 lg:col-start-8">
				<h6>working with:</h6>
				<div class="clients-logos">
					{#each clients as client (client.name)}
						<img class="clients-logo-image" src={client.logo} alt={`${client.name} logo`} loading="lazy" />
					{/each}
				</div>
			</div>
			<div class="projects-list col-span-12 lg:col-span-10 lg:col-start-2">
				{#each projects as project (project.slug)}
					<ProjectCard {project} />
				{/each}
			</div>
		</div>
	</section>

	<section class="jf-section jf-section--tall jf-section--full writing-section section-reveal" use:inView>
		<div class="container grid-12">
			<div class="col-span-12 lg:col-span-6 lg:col-start-2">
				<SectionHeading title="my" accent="insights" showDot={false}>
					<p class="text-muted">
						What I learn as I strive for excellence in life, software development, and servant leadership.
					</p>
				</SectionHeading>
			</div>

			<div class="col-span-12 lg:col-span-10 lg:col-start-2">
				{#if latestPosts.length}
					<ul class="writing-list">
						{#each latestPosts as post (post.url)}
							<li class="writing-card jf-card">
								<a
									href={`https://${post.url.replace(/^https?:\/\//, '')}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<div class="writing-card__body">
										<div class="writing-card__meta">
											<p class="writing-card__title">{post.title}</p>
											{#if post.date}
												<span class="writing-card__date">{post.date}</span>
											{/if}
										</div>
										{#if post.category || post.excerpt}
											<div class="writing-card__excerpt">
												{#if post.category}
													<span class="writing-card__pill">{post.category}</span>
												{/if}
												{#if post.excerpt}
													<p>{post.excerpt}</p>
												{/if}
											</div>
										{/if}
									</div>
									{#if post.thumbnailUrl}
										<div class="writing-card__thumb">
											<img src={post.thumbnailUrl} alt={post.thumbnailAlt ?? post.title} loading="lazy" />
										</div>
									{/if}
								</a>
							</li>
						{/each}
					</ul>
				{:else}
					<p class="text-muted">No posts found (WordPress fetch failed).</p>
				{/if}
			</div>
		</div>
	</section>

	<section class="jf-section jf-section--tall jf-section--full tools-section section-reveal" use:inView>
		<div class="container grid-12">
			<div class="col-span-12 lg:col-span-6 lg:col-start-2">
				<SectionHeading title="tools & services" accent="I'm using" showDot={false} />
			</div>
			<div class="tools-container col-span-12 lg:col-span-10 lg:col-start-2">
				{#each tools as tool, index (tool.name)}
					<article class={`tools-item ${index % 2 === 1 ? 'small' : ''}`}>
						<img class="tools-image" src={tool.image.src} alt={tool.image.alt} loading="lazy" />
						<div class="tools-item-content">
							<h4>{tool.name}</h4>
							<p class="tools-item-about">{tool.description}</p>
						</div>
					</article>
				{/each}

				<div class="tools-item tall">
					<h4>Coding Apps<span class="text-muted">:</span></h4>
					{#each codingApps as app (app.name)}
						<div class="tools-item-tall">
							<img src={app.image.src} alt={app.image.alt} loading="lazy" />
							<span>{app.name}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="jf-section jf-section--tall contact-section section-reveal" use:inView>
		<div class="container grid-12">
			<div class="col-span-12 lg:col-span-6 lg:col-start-2">
				<SectionHeading title="connect" accent="with me:" showDot={false} />
			</div>
			<div class="contact-container col-span-12 lg:col-span-4 lg:col-start-8">
				<a
					class="contact-link"
					href="https://www.linkedin.com/in/jonathan-flower/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Connect on LinkedIn
				</a>
			</div>
		</div>
	</section>

	<section class="jf-section jf-section--tall jf-section--full follow-section section-reveal" use:inView>
		<div class="container grid-12">
			<div class="col-span-12 lg:col-span-6 lg:col-start-2">
				<SectionHeading title="follow me" accent=":" showDot={false} />
			</div>
			<div class="follow-me-socials col-span-12 lg:col-span-9 lg:col-start-2">
				{#each socials as social (social.label)}
					<div class="follow-me-item">
						<a
							class="follow-link"
							href={`https://${social.url.replace(/^https?:\/\//, '')}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							{social.label}
						</a>
						<div class="follow-counter">{social.count}</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</main>

<style>
	.site-shell {
		position: relative;
		margin: 0 auto;
		max-width: none;
		padding: 0;
	}

	.section-reveal {
		opacity: 1;
		transform: translateY(0);
	}

	.section-reveal:global(.is-visible) {
		transition:
			opacity var(--motion-duration-lg) var(--motion-ease-out),
			transform var(--motion-duration-lg) var(--motion-ease-out);
		opacity: 1;
		transform: translateY(0);
	}

	@starting-style {
		.section-reveal:global(.is-visible) {
			opacity: 0;
			transform: translateY(30px);
		}
	}

	.bio-history {
		position: relative;
	}

	.bio-images {
		display: grid;
		gap: clamp(1rem, 3vw, 2rem);
		align-content: start;
	}

	.bio-image {
		width: 100%;
		height: auto;
		border-radius: var(--card-radius);
		box-shadow: var(--card-shadow);
		object-fit: cover;
	}

	.bio-image--square {
		aspect-ratio: 1 / 1;
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
		gap: clamp(1.5rem, 3vw, 3rem);
	}

	.container-working-with {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: clamp(1rem, 4vw, 3rem);
	}

	.clients-logos {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		gap: 2vw;
		align-items: center;
	}

	.clients-logo-image {
		max-width: 100%;
		opacity: 0.6;
		transition: opacity var(--motion-duration-sm) var(--motion-ease-out);
	}

	.clients-logo-image:hover {
		opacity: 1;
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
	}

	.writing-card a {
		display: grid;
		grid-template-columns: minmax(0, 1fr) clamp(160px, 22vw, 240px);
		gap: clamp(0.75rem, 2vw, 2rem);
		align-items: stretch;
	}

	.writing-card__thumb {
		width: 100%;
		border-radius: calc(var(--card-radius) - 12px);
		overflow: hidden;
		display: flex;
		align-items: stretch;
	}

	.writing-card__thumb img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.writing-card__body {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.writing-card__meta {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
	}

	.writing-card__title {
		font-size: clamp(1.2rem, 2vw, 1.5rem);
		font-weight: var(--font-weight-medium);
	}

	.writing-card__date {
		font-size: 0.85rem;
		color: var(--color-muted);
	}

	.writing-card__excerpt {
		display: grid;
		gap: 0.4rem;
		color: var(--color-muted);
	}

	.writing-card__excerpt p {
		margin: 0;
		font-size: 0.9rem;
		line-height: 1.45;
	}

	.writing-card__pill {
		display: inline-flex;
		align-items: center;
		background-color: color-mix(in srgb, var(--color-accent) 10%, transparent);
		color: var(--color-accent);
		border-radius: 999px;
		padding: 0.15rem 0.75rem;
		font-size: 0.75rem;
		text-transform: lowercase;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: clamp(1rem, 3vw, 3rem);
	}

	.skill-card {
		padding: clamp(1.5rem, 3vw, 3rem);
		display: grid;
		gap: 0.5rem;
	}

	.skill-number {
		font-size: 1.1rem;
		font-weight: var(--font-weight-bold);
		color: var(--color-muted);
	}

	.tools-container {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(1rem, 2.5vw, 2rem);
	}

	.tools-section {
		padding-block: clamp(8rem, 25vh, 16rem);
	}

	.tools-item {
		background-color: var(--color-surface);
		padding: clamp(1.5rem, 3vw, 3rem);
		display: grid;
		gap: 1vh;
	}

	.tools-item.small {
		grid-template-columns: 64px 1fr;
		align-items: center;
		padding-inline: clamp(1.5rem, 3vw, 2.5rem);
	}

	.tools-item.tall {
		align-content: start;
		align-items: start;
		gap: 3vh;
		padding-inline: clamp(1.5rem, 3vw, 2.5rem);
	}

	.tools-image {
		width: 128px;
		height: 128px;
		margin-bottom: 2vh;
		object-fit: contain;
		display: block;
	}

	.tools-item.small .tools-image {
		width: 64px;
		height: 64px;
		margin-bottom: 0;
	}

	.tools-item-content {
		display: grid;
		gap: 1vh;
	}

	.tools-item-about {
		color: var(--color-muted);
		margin-bottom: 0;
	}

	.tools-item-tall {
		display: grid;
		grid-template-columns: 48px auto;
		align-items: center;
		gap: 2vw;
	}

	.tools-item-tall img {
		width: 48px;
		height: 48px;
		object-fit: contain;
	}

	.tools-item-tall span {
		font-weight: var(--font-weight-medium);
	}

	.contact-container {
		display: grid;
		gap: clamp(1rem, 3vh, 2.5rem);
	}

	.contact-link {
		color: var(--color-muted);
		letter-spacing: -0.02em;
		font-size: 1.5em;
		font-weight: var(--font-weight-semibold);
		line-height: 1;
		text-decoration: none;
		transition: color var(--motion-duration-sm) var(--motion-ease-out);
	}

	.contact-link:hover {
		color: var(--color-accent);
	}

	.follow-me-socials {
		display: grid;
		gap: clamp(1rem, 3vh, 2rem);
	}

	.follow-me-item {
		background-color: var(--color-surface);
		display: grid;
		grid-template-columns: 1.5fr 1fr;
		place-items: center start;
		padding: clamp(1.25rem, 3vw, 2.5rem);
	}

	.follow-link {
		color: var(--color-muted);
		letter-spacing: -0.02em;
		font-size: 1.8em;
		font-weight: var(--font-weight-semibold);
		line-height: 1;
		text-decoration: none;
		transition: color var(--motion-duration-sm) var(--motion-ease-out);
	}

	.follow-link:hover {
		color: var(--color-accent);
	}

	.follow-counter {
		font-size: 1.5em;
		line-height: 1;
	}

	@media (max-width: 1024px) {
		.container-quote {
			padding-inline: clamp(1.5rem, 6vw, 3rem);
		}

		.tools-container {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.container-working-with {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
	}

	@media (max-width: 768px) {
		.clients-logos {
			grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
			gap: 1.5rem;
		}

		.container-quote {
			padding: clamp(2rem, 8vh, 4rem) clamp(1.5rem, 6vw, 3rem);
		}

		.quote-author {
			gap: 1.5rem;
		}

		.tools-container {
			grid-template-columns: 1fr;
			padding-inline: 0;
			gap: 1.25rem;
		}

		.tools-item {
			padding: 1.5rem;
		}

		.tools-item.small {
			grid-template-columns: 56px 1fr;
			padding-inline: 1.5rem;
		}

		.tools-item.tall {
			padding-inline: 1.5rem;
		}

		.tools-image {
			width: 96px;
			height: 96px;
		}

		.tools-item.small .tools-image {
			width: 56px;
			height: 56px;
		}

		.follow-me-item {
			grid-template-columns: 1fr auto;
			padding: 1.25rem 1.5rem;
		}

		.follow-me-item.first,
		.follow-me-item.second,
		.follow-me-item.third {
			margin: 0;
		}
	}


	@media (max-width: 768px) {
		.site-shell {
			padding-inline: 1rem;
		}
	}
</style>
