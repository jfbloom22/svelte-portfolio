<script lang="ts" context="module">
	export type HeroLine = { text: string; align: 'left' | 'right'; delay: number };
</script>

<script lang="ts">
	export let lines: HeroLine[] = [];
	export let primaryName = 'Jonathan';
	export let secondaryName = 'Flower';
</script>

<section class="hero-section">
	<div class="hero-name-stack">
		<span class="hero-name hero-name--primary">{primaryName}</span>
		<span class="hero-name hero-name--secondary">{secondaryName}</span>
	</div>
	<div class="hero-lines">
		{#each lines as line (line.text)}
			<h2 class={`hero-line hero-line--${line.align}`} style={`animation-delay:${line.delay}s`}>
				{line.text}
			</h2>
		{/each}
	</div>
</section>

<style>
	.hero-section {
		position: relative;
		min-height: clamp(520px, 95vh, 1000px);
		padding-block: clamp(4rem, 8vh, 6rem);
		overflow: hidden;
	}

	.hero-name-stack {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		text-transform: lowercase;
		gap: clamp(0.4rem, 1vw, 1rem);
		margin-left: clamp(3rem, 12vw, 18vw);
		margin-top: clamp(2rem, 12vh, 8rem);
	}

	.hero-name {
		font-size: clamp(3rem, 11vw, 10rem);
		font-weight: var(--font-weight-black);
		letter-spacing: var(--tracking-tight-xl);
		line-height: 0.9;
	}

	.hero-lines {
		position: absolute;
		z-index: 1;
		top: 48%;
		left: clamp(45vw, 52vw, 58vw);
		transform: translate(-15%, -20%);
		display: flex;
		flex-direction: column;
		gap: clamp(0.45rem, 2vh, 1.25rem);
	}

	.hero-line {
		font-size: clamp(1.3rem, 3.5vw, 3rem);
		letter-spacing: var(--tracking-tight-md);
		color: #4a4a4c;
		text-align: left;
		opacity: 0;
		transform: translateY(15px);
		animation: hero-fade var(--motion-duration-lg) var(--motion-ease-out) forwards;
	}

	.hero-line--left {
		text-align: left;
	}

	.hero-line--right {
		text-align: right;
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
			padding-block: 4rem;
		}

		.hero-name-stack {
			margin-left: 1rem;
			align-items: flex-start;
		}

		.hero-lines {
			position: relative;
			top: auto;
			left: auto;
			transform: none;
			align-items: flex-start;
			text-align: left;
			margin-top: 2rem;
			margin-left: 1rem;
		}
	}
</style>
