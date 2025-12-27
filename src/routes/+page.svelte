<script lang="ts">
	import BackgroundScene from '$lib/components/BackgroundScene.svelte';
	import HeroSection, { type HeroLine } from '$lib/components/HeroSection.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { inView } from '$lib/actions/in-view';

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
		{ text: 'software architect.', align: 'right', delay: 0.1 },
		{ text: 'servant leader.', align: 'left', delay: 0.25 },
		{ text: 'developer.', align: 'right', delay: 0.4 },
		{ text: 'ai prompt specialist.', align: 'left', delay: 0.55 },
		{ text: 'verifiably human.', align: 'right', delay: 0.7 }
	];

	const bioHistory = `Born in Texas. Currently in Atlanta, GA. I deliver extraordinary value through servant leadership,
Agile Scrum Methodologies, full stack coding, and Generative AI.

How did I get here? Produced short films with visionary directors and talented videographers. Helped law firms go paperless with virtualized cloud hosting infrastructure. Crafted and deployed dozens of enterprise software solutions that make work enjoyable and efficient.

Currently working on leveling up my ability to contribute better and faster with Generative AI tools.

I am excited about revolutionizing customer experiences by harnessing the unprecedented capabilities of blockchain and artificial intelligence.`;

	const skills = [
		{ number: '1.', text: 'Passionate about creating exceptional user experiences.' },
		{ number: '2.', text: 'Over a decade of leading and inspiring creative teams.' },
		{ number: '3.', text: 'Coaching and guiding teams to leverage Generative AI safely and securely.' },
		{ number: '4.', text: 'Streamlining processes and facilitating collaboration through Agile Scrum Methodologies.' }
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
		<div class="projects-list">
			{#each projects as project (project.slug)}
				<ProjectCard {project} />
			{/each}
		</div>
	</section>

	<section class="jf-section testimonial-section">
		<div class="testimonial-card jf-card">
			<p class="testimonial-quote">«{testimonial.quote}»</p>
			<div class="testimonial-author">
				<img class="testimonial-image" src={testimonial.image.src} alt={testimonial.image.alt} loading="lazy" />
				<div>
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
		<SectionHeading title="tools & services" showDot={false}>
			<p class="text-muted">Apps and services I rely on daily.</p>
		</SectionHeading>
		<div class="tools-grid">
			{#each tools as tool (tool.name)}
				<article class="tool-card jf-card">
					<img class="tool-card__image" src={tool.image.src} alt={tool.image.alt} loading="lazy" />
					<h4>{tool.name}</h4>
					<p class="text-muted">{tool.description}</p>
				</article>
			{/each}
		</div>
		<div class="coding-apps jf-card">
			<h5>Coding Apps<span class="text-muted">:</span></h5>
			<div class="coding-apps-list">
				{#each codingApps as app (app.name)}
					<span>
						<img src={app.image.src} alt={app.image.alt} loading="lazy" />
						{app.name}
					</span>
				{/each}
			</div>
		</div>
	</section>

	<section class="jf-section contact-section section-reveal" use:inView>
		<SectionHeading title="contact me" accent=":" showDot={false} />
		<div class="contact-card jf-card">
			<p>Chat with me on <strong>LinkedIn</strong> for the fastest response.</p>
			<a class="contact-link" href="https://www.linkedin.com/in/jonathan-flower/" target="_blank" rel="noopener noreferrer">@linkedin</a>
		</div>
	</section>

	<section class="jf-section follow-section section-reveal" use:inView>
		<SectionHeading title="follow me" accent=":" showDot={false} />
		<div class="follow-grid">
				{#each socials as social (social.label)}
					<a
						class="follow-card jf-card"
						href={`https://${social.url.replace(/^https?:\/\//, '')}`}
						target="_blank"
						rel="noopener noreferrer"
					>
					<div class="follow-card__meta">
						<span>{social.label}</span>
						<span class="text-muted">{social.count}</span>
					</div>
				</a>
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

	.testimonial-section {
		display: grid;
		gap: clamp(1rem, 3vw, 3rem);
	}

	.testimonial-card {
		padding: clamp(2rem, 4vw, 4rem);
		font-size: 1.3rem;
		line-height: 1.6;
	}

	.testimonial-author {
		margin-top: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		font-size: 0.95rem;
		color: var(--color-muted);
	}

	.testimonial-image {
		width: 56px;
		height: 56px;
		border-radius: var(--radius-pill);
		object-fit: cover;
	}

	.tools-section {
		display: grid;
		gap: clamp(2rem, 6vw, 6rem);
	}

	.tools-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: clamp(1rem, 3vw, 3rem);
	}

	.tool-card {
		padding: clamp(1.5rem, 3vw, 3rem);
		display: grid;
		gap: 0.75rem;
	}

	.tool-card__image {
		width: 72px;
		height: 72px;
		object-fit: contain;
	}

	.coding-apps {
		padding: clamp(1.5rem, 3vw, 3rem);
		display: grid;
		gap: 0.5rem;
	}

	.coding-apps-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.coding-apps-list span {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.2rem 0.8rem;
		font-size: 0.85rem;
		border-radius: var(--radius-pill);
		background-color: color-mix(in srgb, var(--color-muted) 10%, transparent);
		color: var(--color-fg);
	}

	.coding-apps-list img {
		width: 18px;
		height: 18px;
		object-fit: contain;
	}

	.contact-section {
		display: grid;
		gap: 1rem;
	}

	.contact-card {
		padding: clamp(1.5rem, 3vw, 3rem);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.contact-link {
		color: var(--color-accent);
		font-size: 1.2rem;
	}

	.follow-section {
		display: grid;
		gap: 1rem;
	}

	.follow-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 1rem;
	}

	.follow-card {
		padding: 1.5rem;
		text-decoration: none;
	}

	.follow-card__meta {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		font-size: 1rem;
		font-weight: var(--font-weight-semibold);
	}


	@media (max-width: 768px) {
		.site-shell {
			padding-inline: 1rem;
		}
	}
</style>
