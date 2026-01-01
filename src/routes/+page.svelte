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

	const testimonial = {
		quote: 'The most important – fast understanding of the business needs and translating into code — not many companies can do it.',
		author: 'Alexander Losev',
		company: 'BeaconMadaes',
		image: {
			src: '/images/62900db5070f782a68ab352c_Alexander-Losev.webp',
			alt: 'Alexander Losev headshot'
		}
	};

	const tools = [
		{
			name: 'Bear',
			description: 'The most elegant note taking markdown app available in the Apple ecosystem.',
			image: { src: '/images/u4fPSX9Q_400x400-1381493564.webp', alt: 'Bear' }
		},
		{
			name: 'Unibox',
			description: 'Once you group emails by sender, there is no going back.',
			image: { src: '/images/Unibox.webp', alt: 'Unibox' }
		},
		{
			name: 'Visual Studio Code',
			description: 'VS Code has become a powerful IDE and it is fast. Who could ask for more?',
			image: { src: '/images/Visual-Studio-Code-Logo-1.png', alt: 'Visual Studio Code logo' }
		},
		{
			name: 'Pixelmator Pro',
			description: 'Photoshop but elegant and easy to use.',
			image: { src: '/images/ico_pixelamtor-pro-2.02x.webp', alt: 'Pixelmator Pro logo' }
		},
		{
			name: 'PrivateLLM',
			description: 'ChatGPT but private and works offline.',
			image: { src: '/images/privatellm.webp', alt: 'PrivateLLM logo' }
		}
	];

	const codingApps = [
		{ name: 'Visual Studio Code', image: { src: '/images/Visual-Studio-Code-Logo-1.png', alt: 'VS Code logo' } },
		{
			name: 'Github Copilot',
			image: { src: '/images/Microsoft.VisualStudio.Services.Icons-2076853151.webp', alt: 'Github Copilot logo' }
		},
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

	<section class="jf-section bio-section">
		<div class="bio-history">
			{#each bioHistory.split('\n\n') as paragraph (paragraph)}
				<p class="bio-paragraph">{paragraph}</p>
			{/each}
		</div>

		<div class="bio-images">
			<img class="bio-image" src="/images/IMG_6620.webp" alt="Jonathan Flower portrait" loading="lazy" />
			<img
				class="bio-image bio-image--square"
				src="/images/me-at-the-beach.webp"
				alt="Jonathan Flower at the beach"
				loading="lazy"
			/>
		</div>

		<div class="bio-motto jf-card">
			<h4>«Simple, strategic and impactful.»</h4>
			<h6>— This is my mantra and method.</h6>
		</div>
	</section>

	<section class="jf-section skills-section section-reveal" use:inView>
		<SectionHeading title="proskills" accent=":" showDot={false} />
		<div class="skills-grid">
			{#each skills as skill (skill.number)}
				<article class="skill-card jf-card">
					<span class="skill-number">{skill.number}</span>
					<p>{skill.text}</p>
				</article>
			{/each}
		</div>
	</section>

	<section class="jf-section projects-section section-reveal" use:inView>
		<SectionHeading title="projects" accent="." showDot={false}>
			<p class="text-muted">A curated selection of recent work.</p>
		</SectionHeading>
		<div class="container-working-with">
			<h6>working with:</h6>
			<div class="clients-logos">
				{#each clients as client (client.name)}
					<img class="clients-logo-image" src={client.logo} alt={`${client.name} logo`} loading="lazy" />
				{/each}
			</div>
		</div>
		<div class="projects-list">
			{#each projects as project (project.slug)}
				<ProjectCard {project} />
			{/each}
		</div>
	</section>

	<section class="jf-section testimonial-section section-reveal" use:inView>
		<h2 class="quote-heading">
			client says<span class="text-muted">:</span>
		</h2>
		<div class="container-quote">
			<p class="quote-paragraph">«{testimonial.quote}»</p>
			<div class="quote-author">
				<img class="testimonial-image" src={testimonial.image.src} alt={testimonial.image.alt} loading="lazy" />
				<div class="quote-author-name">
					<h5>{testimonial.author}</h5>
					<h6>{testimonial.company}</h6>
				</div>
			</div>
		</div>
	</section>

	<section class="jf-section writing-section section-reveal" use:inView>
		<SectionHeading title="my" accent="insights" showDot={false}>
			<p class="text-muted">
				What I learn as I strive for excellence in life, software development, and servant leadership.
			</p>
		</SectionHeading>

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
	</section>

	<section class="jf-section tools-section section-reveal" use:inView>
		<div class="tools-container">
			<div class="tools-item large">
				<h2 class="tools-heading-copy">
					<span class="text-muted">tools & services<br /></span>
					I'm using<span class="text-muted">:</span>
				</h2>
			</div>

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
	</section>

	<section class="jf-section contact-section section-reveal" use:inView>
		<h2 class="contact-heading">
			connect<br />with me<span class="text-muted">:</span>
		</h2>
		<div class="contact-container">
			<a
				class="contact-link"
				href="https://www.linkedin.com/in/jonathan-flower/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Connect on LinkedIn
			</a>
		</div>
	</section>

	<section class="jf-section follow-section section-reveal" use:inView>
		<h2 class="follow-me-heading">
			follow me<span class="text-muted">:</span>
		</h2>
		<div class="follow-me-socials">
			{#each socials as social, index (social.label)}
				<div class={`follow-me-item ${index === 0 ? 'first' : index === 1 ? 'second' : 'third'}`}>
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
	</section>
</main>

<style>
	.site-shell {
		position: relative;
		margin: 0 auto;
		max-width: var(--site-shell-max-width);
		padding-inline: var(--site-shell-padding-x);
		padding-block: var(--site-shell-padding-y);
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
		display: flex;
		flex-direction: column;
		margin-left: 10%;
		margin-right: 10%;
	}

	.container-working-with {
		display: grid;
		grid-template-columns: 20vw auto;
		align-items: center;
		margin-bottom: 10vh;
		margin-left: 20%;
		margin-right: 5vw;
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


	.writing-section {
		display: grid;
		gap: clamp(1.5rem, 5vw, 5rem);
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

	.skills-section {
		display: grid;
		gap: clamp(1.5rem, 5vw, 5rem);
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

	.quote-heading {
		margin-left: 20%;
		line-height: 0.8;
	}

	.container-quote {
		background-color: var(--color-surface);
		margin-left: 20%;
		margin-right: 20%;
		padding-top: 15vh;
		padding-left: 10vw;
		padding-right: 10vw;
		padding-bottom: 8vh;
	}

	.quote-paragraph {
		letter-spacing: -0.015em;
		margin-bottom: 10vh;
		font-size: 1.7em;
		font-weight: var(--font-weight-medium);
		line-height: 1.35;
	}

	.quote-author {
		display: grid;
		grid-template-columns: 10vw auto;
		gap: 5vw;
		margin-left: -5vw;
	}

	.quote-author-name {
		display: grid;
		gap: 5px;
		align-content: center;
	}

	.testimonial-image {
		width: min(10vw, 72px);
		height: min(10vw, 72px);
		border-radius: var(--radius-pill);
		object-fit: cover;
	}

	.tools-container {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.5vw;
		padding-inline: 2vw;
	}

	.tools-item {
		background-color: var(--color-surface);
		padding: 3vw 4vw;
		display: grid;
		gap: 1vh;
	}

	.tools-item.small {
		grid-template-columns: 64px 1fr;
		align-items: center;
		padding-inline: 2vw;
	}

	.tools-item.large {
		display: flex;
		align-items: center;
	}

	.tools-item.tall {
		align-content: start;
		align-items: start;
		gap: 3vh;
		padding-inline: 3vw;
	}

	.tools-heading-copy {
		line-height: 0.9;
	}

	.tools-image {
		max-width: 128px;
		margin-bottom: 2vh;
	}

	.tools-item.small .tools-image {
		max-width: 64px;
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

	.contact-heading {
		margin-left: 20%;
		font-size: 22vh;
		font-weight: var(--font-weight-black);
		line-height: 0.7;
	}

	.contact-container {
		display: grid;
		gap: 3vh;
		margin-bottom: 20vh;
		margin-left: 60%;
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

	.follow-me-heading {
		margin-bottom: 10vh;
		margin-left: 20%;
	}

	.follow-me-socials {
		display: grid;
		gap: 2vh;
		margin-bottom: 10vh;
		margin-left: 30%;
		margin-right: 20%;
	}

	.follow-me-item {
		background-color: var(--color-surface);
		display: grid;
		grid-template-columns: 1.5fr 1fr;
		place-items: center start;
		padding: 4% 5%;
	}

	.follow-me-item.first {
		margin-right: 10vw;
	}

	.follow-me-item.second {
		margin-left: 10vw;
	}

	.follow-me-item.third {
		margin-left: 5vw;
		margin-right: 5vw;
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
		.container-working-with {
			grid-template-columns: 1fr;
			gap: 2vh;
			margin-left: 10%;
			margin-right: 10%;
		}

		.quote-heading {
			margin-left: 10%;
		}

		.container-quote {
			margin-left: 10%;
			margin-right: 10%;
			padding-left: 6vw;
			padding-right: 6vw;
		}

		.tools-container {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.contact-container {
			margin-left: 40%;
		}

		.follow-me-socials {
			margin-left: 20%;
			margin-right: 10%;
		}
	}

	@media (max-width: 768px) {
		.clients-logos {
			grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
			gap: 1.5rem;
		}

		.quote-heading {
			margin-left: 0;
			font-size: clamp(2.5rem, 10vw, 5rem);
			line-height: 0.9;
		}

		.container-quote {
			margin-left: 0;
			margin-right: 0;
			padding: 10vh 6vw 8vh;
		}

		.quote-author {
			grid-template-columns: 72px 1fr;
			margin-left: 0;
			gap: 1.5rem;
		}

		.contact-heading {
			margin-left: 0;
			font-size: clamp(3rem, 16vw, 7rem);
		}

		.contact-container {
			margin-left: 0;
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

		.follow-me-heading {
			margin-left: 0;
		}

		.follow-me-socials {
			margin-left: 0;
			margin-right: 0;
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
