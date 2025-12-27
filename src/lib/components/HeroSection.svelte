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

<section class="hero-section jf-section breakout hero">
	<h1 class="hero-heading">
		{primaryName}
		<br />
		{secondaryName}
	</h1>
	<div class="hero-lines">
		{#each lines as line (line.text)}
			<h2 class={`hero-title ${line.align === 'left' ? 'left' : ''}`} style={`animation-delay:${line.delay}s`}>
				{line.text}
			</h2>
		{/each}
	</div>
</section>

<style>
	.hero-section {
		position: relative;
		min-height: 100vh;
		padding-top: 20vh;
		padding-bottom: 0;
	}

	.hero-heading {
		color: var(--color-fg);
		text-shadow: none;
		width: 60vw;
		margin: 0 0 10vh 20vw;
		font-size: var(--hero-h1-size);
		font-weight: var(--font-weight-black);
		letter-spacing: var(--tracking-tight-xl);
		line-height: 0.97;
		position: relative;
	}

	.hero-lines {
		position: relative;
		margin-top: -2vh;
		display: flex;
		flex-direction: column;
		gap: 2vh;
	}

	.hero-title {
		color: var(--color-hero-muted);
		width: 30vw;
		margin-left: 60vw;
		font-size: var(--hero-line-size);
		line-height: 1;
		letter-spacing: var(--tracking-tight-md);
		opacity: 0;
		transform: translateY(15px);
		animation: hero-fade var(--motion-duration-lg) var(--motion-ease-out) forwards;
	}

	.hero-title.left {
		text-align: right;
		margin-left: 30vw;
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

	@media (max-width: 768px) {
		.hero-section {
			min-height: auto;
			padding-top: 12vh;
			padding-bottom: 4rem;
		}

		.hero-heading {
			width: 90vw;
			margin-left: 5vw;
			font-size: clamp(2.5rem, 10vw, 4rem);
		}

		.hero-lines {
			margin-top: 2rem;
		}

		.hero-title,
		.hero-title.left {
			width: 90vw;
			margin-left: 5vw;
			text-align: left;
			font-size: clamp(1.2rem, 5vw, 2rem);
		}
	}
</style>
