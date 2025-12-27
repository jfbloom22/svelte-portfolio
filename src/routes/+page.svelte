<script lang="ts">
	import BackgroundScene from '$lib/components/BackgroundScene.svelte';
	import HeroSection, { type HeroLine } from '$lib/components/HeroSection.svelte';
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
		{ number: '1', text: 'Passionate about creating exceptional user experiences.' },
		{ number: '2', text: 'Over a decade of leading and inspiring creative teams.' },
		{ number: '3', text: 'Coaching and guiding teams to leverage Generative AI safely and securely.' },
		{ number: '4', text: 'Streamlining processes and facilitating collaboration through Agile Scrum Methodologies.' }
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
		{ label: '@linkedin', url: 'https://www.linkedin.com/in/jonathan-flower/', count: '510' },
		{ label: '@twitter', url: 'https://twitter.com/jfBLOOM22', count: '19' },
		{ label: '@dev.to', url: 'https://dev.to/jfbloom22', count: '22' }
	];
</script>

<BackgroundScene />

<main class="site-shell">
	<HeroSection primaryName="Jonathan" secondaryName="Flower" lines={heroLines} />

	<section class="jf-section breakout bio-section">
		<div class="container-bio">
			<div>
				<p class="bio-history">
					<strong>{bioHistory}</strong>
				</p>
			</div>
			<div>
				<img class="bio-image" src="/images/IMG_6620.webp" alt="Jonathan Flower portrait" loading="lazy" />
			</div>
		</div>
		<div class="container-motto">
			<div>
				<img class="bio-image-square" src="/images/me-at-the-beach.webp" alt="Jonathan Flower at the beach" loading="lazy" />
			</div>
			<div class="motto-content">
				<h4>«Simple, strategic and impactful.»</h4>
				<h6>— This is my mantra and method.</h6>
			</div>
		</div>
	</section>

	<section class="jf-section breakout skills-section section-reveal" use:inView>
		<h2 class="skills-heading">proskills<span class="dot-grey">:</span></h2>
		{#each skills as skill, index (skill.number)}
			<div class={`skills-item ${index === 0 ? 'first' : index === 2 ? 'fourth' : index === 3 ? 'third' : ''}`}>
				<div class="services-counter">
					{skill.number}<span class="dot-grey">.</span>
				</div>
				<p class="services-info">{skill.text}</p>
			</div>
		{/each}
	</section>

	<section class="jf-section breakout projects-section section-reveal" use:inView>
		<h2 class="projects-heading">projects<span class="dot-grey">.</span></h2>
		<div class="projects-list">
			{#each projects as project (project.slug)}
				<ProjectCard {project} />
			{/each}
		</div>
	</section>

	<section class="jf-section breakout testimonial-section">
		<h2 class="quote-heading">client says<span class="dot-grey">:</span></h2>
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

	<section class="jf-section breakout blog-section section-reveal" use:inView>
		<div>
			<h2 class="blog-heading"><span class="span-grey">my</span><br />insights</h2>
		</div>
		<div>
			<p class="paragraph">
				What I learn as I strive for excellence in life, software development, and servant leadership.
			</p>

			{#if latestPosts.length}
				<ul class="blog-list">
					{#each latestPosts as post (post.url)}
						<li class="blog-item">
							<a
								class="blog-item-content"
								href={`https://${post.url.replace(/^https?:\/\//, '')}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<span class="blog-item-icon" aria-hidden="true"></span>
								<div>
									<h4>{post.title}</h4>
									<div class="blog-item-meta">
										<div class="blog-item-category">WordPress</div>
										<div>{post.date ?? ''}</div>
									</div>
								</div>
							</a>
							<div class="blog-item-image"></div>
						</li>
					{/each}
				</ul>
			{:else}
				<p class="text-muted">No posts found (WordPress fetch failed).</p>
			{/if}
		</div>
	</section>

	<section class="jf-section breakout tools-section section-reveal" use:inView>
		<div class="tools-container">
			<div class="tools-item">
				<img class="tools-image" src={tools[0].image.src} alt={tools[0].image.alt} loading="lazy" />
				<h4>{tools[0].name}</h4>
				<p class="tools-item-about">{tools[0].description}</p>
			</div>
			<div class="tools-item large">
				<h2 class="tools-heading-copy">
					<span class="span-grey">tools &amp; services <br /></span>
					I'm using<span class="dot-grey">:</span>
				</h2>
			</div>
			<div class="tools-item small">
				<img src={tools[1].image.src} alt={tools[1].image.alt} loading="lazy" />
				<div class="tools-item-content">
					<h5>{tools[1].name}</h5>
					<p class="tools-item-about">{tools[1].description}</p>
				</div>
			</div>
			<div class="tools-item">
				<img class="tools-image" src={tools[2].image.src} alt={tools[2].image.alt} loading="lazy" />
				<h4>{tools[2].name}</h4>
				<p class="tools-item-about">{tools[2].description}</p>
			</div>
			<div class="tools-item small">
				<img src={tools[3].image.src} alt={tools[3].image.alt} loading="lazy" />
				<div class="tools-item-content">
					<h5>{tools[3].name}</h5>
					<p class="tools-item-about">{tools[3].description}</p>
				</div>
			</div>
			<div class="tools-item tall">
				<h5>Coding Apps<span class="dot-grey">:</span></h5>
				{#each codingApps as app (app.name)}
					<div class="tools-item-tall">
						<img src={app.image.src} alt={app.image.alt} loading="lazy" />
						<h6>{app.name}</h6>
					</div>
				{/each}
			</div>
			<div class="tools-item small">
				<img src={tools[4].image.src} alt={tools[4].image.alt} loading="lazy" />
				<div class="tools-item-content">
					<h5>{tools[4].name}</h5>
					<p class="tools-item-about">{tools[4].description}</p>
				</div>
			</div>
		</div>
	</section>

	<section class="jf-section breakout follow-section section-reveal" use:inView>
		<h2 class="follow-me-heading">follow me<span class="dot-grey">:</span></h2>
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
		--reveal-progress: 0;
		opacity: var(--reveal-progress);
		transform: translateY(calc(30px * (1 - var(--reveal-progress))));
		transition:
			opacity var(--motion-duration-lg) var(--motion-ease-out),
			transform var(--motion-duration-lg) var(--motion-ease-out);
	}

	.bio-section {
		display: grid;
		gap: 20vh;
	}

	.container-bio {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-row-gap: 20vh;
	}

	.bio-history {
		letter-spacing: -0.04em;
		width: 30vw;
		min-width: 320px;
		margin-bottom: 0;
		margin-left: 10vw;
		font-size: 1.4em;
		line-height: 1.7;
		position: sticky;
		top: 20vh;
		white-space: pre-line;
	}

	.bio-image {
		width: 60%;
		margin-top: 50vh;
		display: block;
	}

	.bio-image-square {
		width: 100%;
		display: block;
	}

	.container-motto {
		display: grid;
		grid-template-columns: 55vw 25vw;
		align-items: end;
		margin-left: 10vw;
		margin-right: 10vw;
	}

	.motto-content {
		display: grid;
		grid-row-gap: 3vh;
		margin-left: -10vw;
		font-size: 1.2em;
	}

	.skills-section {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto;
		grid-column-gap: 10vw;
		grid-row-gap: 0;
		align-items: start;
		min-height: auto;
		padding-left: 10vw;
		padding-right: 10vw;
	}

	.skills-heading {
		margin-bottom: 10vh;
		margin-left: 10vw;
	}

	.skills-item {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto auto;
		justify-items: start;
		grid-row-gap: 2vh;
		grid-column-gap: 3vh;
	}

	.skills-item.fourth {
		margin-top: 10vh;
	}

	.skills-item.first {
		margin-top: 15vh;
	}

	.skills-item.third {
		margin-left: -5vw;
	}

	.services-counter {
		letter-spacing: -0.05em;
		margin-left: -0.3em;
		font-size: 2.8em;
		font-weight: var(--font-weight-black);
		line-height: 1;
	}

	.services-info {
		letter-spacing: -0.03em;
		max-width: 320px;
		margin-bottom: 0;
		font-size: 1.2em;
		font-weight: var(--font-weight-medium);
		line-height: 1.6;
	}

	.projects-heading {
		margin-bottom: 1vh;
		margin-left: 20%;
		font-size: 26vh;
	}

	.projects-list {
		margin-left: 10%;
		margin-right: 10%;
	}

	.testimonial-section {
		display: grid;
		gap: 6vh;
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
		padding-bottom: 10vh;
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
		grid-column-gap: 5vw;
		margin-left: -5vw;
		align-items: center;
	}

	.quote-author-name {
		display: grid;
		grid-row-gap: 5px;
	}

	.testimonial-image {
		width: 80px;
		height: 80px;
		object-fit: cover;
	}

	.blog-section {
		display: grid;
		grid-template-columns: 2fr 3fr;
		grid-row-gap: 10vh;
		padding-top: 30vh;
	}

	.blog-heading {
		text-align: right;
		padding-right: 5vw;
		line-height: 0.8;
		position: sticky;
		top: 20vh;
	}

	.paragraph {
		letter-spacing: -0.01em;
		width: 30vw;
		min-width: 400px;
		margin-top: 8px;
		font-size: 1.3em;
		line-height: 1.6;
	}

	.blog-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.blog-item {
		display: grid;
		grid-template-columns: 2fr 1fr;
		align-items: stretch;
		margin-bottom: 10vh;
	}

	.blog-item:first-child {
		margin-top: 30vh;
	}

	.blog-item:last-child {
		margin-bottom: 0;
	}

	.blog-item-content {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		min-height: 20vh;
		padding: 7vh 5vw 7vh 3vw;
		background-color: var(--color-surface);
		color: var(--color-fg);
		text-decoration: none;
		transition: color 0.3s, box-shadow 0.3s;
	}

	.blog-item-content:hover {
		color: var(--color-accent);
		box-shadow: var(--card-shadow);
	}

	.blog-item-meta {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-column-gap: 20px;
		color: var(--color-muted);
		letter-spacing: -0.02em;
		padding-top: 2vh;
		line-height: 1;
	}

	.blog-item-icon {
		width: 5vw;
		height: 5vw;
	}

	.blog-item-category {
		font-weight: var(--font-weight-medium);
	}

	.blog-item-image {
		background-image: url('https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg');
		background-position: 50%;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tools-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: repeat(6, 1fr);
		grid-column-gap: 1.5vw;
		grid-row-gap: 1.5vw;
		padding-left: 2vw;
		padding-right: 2vw;
	}

	.tools-item {
		background-color: var(--color-surface);
		padding: 3vw 4vw;
	}

	.tools-item.small {
		display: grid;
		grid-template-columns: 64px 1fr;
		align-items: center;
		grid-column-gap: 2vw;
		padding-left: 2vw;
		padding-right: 2vw;
	}

	.tools-item.large {
		display: flex;
		align-items: center;
	}

	.tools-item.tall {
		display: grid;
		grid-template-columns: 1fr;
		grid-row-gap: 3vh;
		align-content: start;
		align-items: start;
		padding-left: 3vw;
		padding-right: 3vw;
	}

	.tools-heading-copy {
		line-height: 0.9;
	}

	.tools-image {
		max-width: 128px;
		margin-bottom: 2vh;
	}

	.tools-item-content {
		display: grid;
		grid-row-gap: 1vh;
	}

	.tools-item-tall {
		display: grid;
		grid-template-columns: 48px auto;
		align-items: center;
		grid-column-gap: 2vw;
	}

	.tools-item-about {
		color: var(--color-muted);
		margin-bottom: 0;
	}

	.follow-section {
		display: grid;
		gap: 6vh;
		min-height: auto;
	}

	.follow-me-heading {
		margin-bottom: 10vh;
		margin-left: 20%;
	}

	.follow-me-socials {
		display: grid;
		grid-row-gap: 2vh;
		margin-bottom: 10vh;
		margin-left: 30%;
		margin-right: 20%;
	}

	.follow-me-item {
		display: grid;
		grid-template-columns: 1.5fr 1fr;
		place-items: center start;
		background-color: var(--color-surface);
		padding: 4% 5%;
	}

	.follow-me-item.second {
		margin-left: 10vw;
	}

	.follow-me-item.third {
		margin-left: 5vw;
		margin-right: 5vw;
	}

	.follow-me-item.first {
		margin-right: 10vw;
	}

	.follow-link {
		color: var(--color-muted);
		letter-spacing: -0.02em;
		font-size: 1.8em;
		font-weight: var(--font-weight-semibold);
		line-height: 1;
		text-decoration: none;
		transition: color 0.2s;
	}

	.follow-link:hover {
		color: var(--color-accent);
	}

	.follow-counter {
		font-size: 1.5em;
		line-height: 1;
	}

	.dot-grey,
	.span-grey {
		color: var(--color-muted);
	}

	@media (max-width: 900px) {
		.container-bio {
			grid-template-columns: 1fr;
		}

		.bio-history {
			width: auto;
			min-width: 0;
			margin-left: 5vw;
			position: relative;
			top: auto;
		}

		.bio-image {
			width: 90%;
			margin: 5vh 0 0 5vw;
		}

		.container-motto {
			grid-template-columns: 1fr;
			margin-left: 5vw;
			margin-right: 5vw;
		}

		.motto-content {
			margin-left: 0;
		}

		.skills-section {
			grid-template-columns: 1fr;
			padding-left: 5vw;
			padding-right: 5vw;
		}

		.skills-heading {
			margin-left: 5vw;
		}

		.projects-heading {
			font-size: 18vh;
			margin-left: 5vw;
		}

		.projects-list {
			margin-left: 5vw;
			margin-right: 5vw;
		}

		.quote-heading {
			margin-left: 5vw;
		}

		.container-quote {
			margin-left: 5vw;
			margin-right: 5vw;
		}

		.blog-section {
			grid-template-columns: 1fr;
			padding-top: 15vh;
		}

		.blog-heading {
			text-align: left;
			position: static;
			padding-right: 0;
			margin-left: 5vw;
		}

		.paragraph {
			width: auto;
			min-width: 0;
			margin-left: 5vw;
			margin-right: 5vw;
		}

		.blog-item {
			grid-template-columns: 1fr;
		}

		.blog-item:first-child {
			margin-top: 10vh;
		}

		.tools-container {
			grid-template-columns: 1fr;
			padding-left: 5vw;
			padding-right: 5vw;
		}

		.follow-me-heading {
			margin-left: 5vw;
		}

		.follow-me-socials {
			margin-left: 5vw;
			margin-right: 5vw;
		}

		.follow-me-item.second,
		.follow-me-item.third,
		.follow-me-item.first {
			margin: 0;
		}
	}
</style>
