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
		}[]
	);

	let latestPosts = $derived((data.latestPosts ?? []) as { title: string; url: string; date?: string }[]);

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
		company: 'BeaconMadaes'
	};

	const tools = [
		{ name: 'Bear', description: 'The most elegant note taking markdown app available in the Apple ecosystem.' },
		{ name: 'Unibox', description: 'Once you group emails by sender, there is no going back.' },
		{ name: 'Visual Studio Code', description: 'VS Code has become a powerful IDE and it is fast. Who could ask for more?' },
		{ name: 'Pixelmator Pro', description: 'Photoshop but elegant and easy to use.' },
		{ name: 'PrivateLLM', description: 'ChatGPT but private and works offline.' }
	];

	const codingApps = ['Visual Studio Code', 'Github Copilot', 'Warp', 'DevUtils'];

	const socials = [
		{ label: '@linkedin', url: 'https://www.linkedin.com/in/jonathan-flower/', count: '510' },
		{ label: '@twitter', url: 'https://twitter.com/jfBLOOM22', count: '19' },
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

	<section class="jf-section tools-section section-reveal" use:inView>
		<SectionHeading title="tools & services" showDot={false}>
			<p class="text-muted">Apps and services I rely on daily.</p>
		</SectionHeading>
		<div class="tools-grid">
			{#each tools as tool (tool.name)}
				<article class="tool-card jf-card">
					<h4>{tool.name}</h4>
					<p class="text-muted">{tool.description}</p>
				</article>
			{/each}
		</div>
		<div class="coding-apps jf-card">
			<h5>Coding Apps<span class="text-muted">:</span></h5>
				<div class="coding-apps-list">
					{#each codingApps as app (app)}
					<span>{app}</span>
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
		--reveal-progress: 0;
		opacity: var(--reveal-progress);
		transform: translateY(calc(30px * (1 - var(--reveal-progress))));
		transition:
			opacity var(--motion-duration-lg) var(--motion-ease-out),
			transform var(--motion-duration-lg) var(--motion-ease-out);
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
		font-size: 0.95rem;
		color: var(--color-muted);
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
		padding: 0.2rem 0.8rem;
		font-size: 0.85rem;
		border-radius: var(--radius-pill);
		background-color: color-mix(in srgb, var(--color-muted) 10%, transparent);
		color: var(--color-fg);
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
		.site-shell {
			padding-inline: 1rem;
		}
	}
</style>
