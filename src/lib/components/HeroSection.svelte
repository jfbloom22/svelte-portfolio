<script lang="ts" module>
	export type HeroLine = { text: string; align: 'left' | 'right'; delay: number };
</script>

<script lang="ts">
	let {
		lines = [],
		primaryName = 'Jonathan',
		secondaryName = 'Flower'
	} = $props<{
		lines?: HeroLine[];
		primaryName?: string;
		secondaryName?: string;
	}>();
</script>

<section class="hero-section">
	<h1 class="hero-heading">{primaryName}<br />{secondaryName}</h1>
	{#each lines as line (line.text)}
		<h2 class:left={line.align === 'left'} class="hero-title" style={`animation-delay:${line.delay}s`}>
			{line.text}
		</h2>
	{/each}
</section>

<style>
	.hero-section {
		position: relative;
		min-height: 100vh;
		padding-top: 20vh;
		padding-bottom: 0;
		padding-inline: 0;

		/* Full-bleed inside the `site-shell` max-width container */
		left: 50%;
		margin-left: -50vw;
		width: 100vw;
	}

	.hero-heading {
		width: 60vw;
		margin-left: 20vw;
		margin-bottom: 10vh;
		position: relative;
		opacity: 0;
		animation: hero-fade var(--motion-duration-lg) var(--motion-ease-out) forwards;
	}

	.hero-title {
		color: var(--color-hero-muted);
		width: 30vw;
		margin-left: 60vw;
		font-size: 5vh;
		line-height: 1;
		position: relative;
		opacity: 0;
		transform: translateY(15px);
		animation: hero-fade var(--motion-duration-lg) var(--motion-ease-out) forwards;
	}

	.hero-title.left {
		text-align: right;
		margin-left: 30vw;
	}

	@keyframes hero-fade {
		from {
			opacity: 0;
			transform: translateY(20px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 479px) {
		.hero-section {
			padding-top: 25vh;
		}

		.hero-heading {
			margin-left: 10vw;
			margin-bottom: 5vh;
		}

		.hero-title {
			width: 60vw;
			margin-left: 30vw;
			font-size: 4vh;
		}

		.hero-title.left {
			margin-left: 10vw;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.hero-heading,
		.hero-title {
			animation: none;
			opacity: 1;
			transform: none;
		}
	}
</style>
