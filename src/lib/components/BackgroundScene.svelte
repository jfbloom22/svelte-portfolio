<script lang="ts">
	const horizontalPercents = [10, 20, 30, 40, 50, 60, 70, 80, 90];
	const verticalPercents = [20, 40, 60, 80];
</script>

<div class="background-scene" aria-hidden="true">
	{#each horizontalPercents as value, index (value)}
		<div class="horizontal-line" style={`--pos:${value};--delay:${index * 0.05}s`}></div>
	{/each}

	{#each verticalPercents as value, index (value)}
		<div class="vertical-line" style={`--pos:${value};--delay:${index * 0.05 + 0.2}s`}></div>
	{/each}

	<div class="background-circle" style="--delay: 0.15s"></div>
</div>

<style>
	.background-scene {
		position: fixed;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;
		z-index: -1;
		height: 100vh;
	}

	.horizontal-line,
	.vertical-line {
		position: absolute;
		background-color: var(--color-grid-line);
		opacity: 0;
	}

	.horizontal-line {
		left: 0;
		top: calc(var(--pos) * 1%);
		height: 1px;
		width: 100%;
		transform-origin: left;
		transform: scaleX(0);
		animation: draw-x var(--motion-duration-lg) var(--motion-ease-out) forwards;
		animation-delay: var(--delay);
	}

	.vertical-line {
		top: 0;
		left: calc(var(--pos) * 1%);
		width: 1px;
		height: 100%;
		transform-origin: top;
		transform: scaleY(0);
		animation: draw-y var(--motion-duration-lg) var(--motion-ease-out) forwards;
		animation-delay: var(--delay);
	}

	.background-circle {
		position: absolute;
		width: 90vh;
		height: 90vh;
		background-color: var(--color-bg);
		border: 1px solid var(--color-grid-line);
		border-radius: 50%;
		opacity: 0;
		transform: scale(0);
		transform-origin: center;
		animation: pop-circle var(--motion-duration-lg) var(--motion-ease-out) forwards;
		animation-delay: var(--delay);
	}

	@keyframes draw-x {
		0% {
			opacity: 0;
			transform: scaleX(0);
		}

		100% {
			opacity: 1;
			transform: scaleX(1);
		}
	}

	@keyframes draw-y {
		0% {
			opacity: 0;
			transform: scaleY(0);
		}

		100% {
			opacity: 1;
			transform: scaleY(1);
		}
	}

	@keyframes pop-circle {
		0% {
			opacity: 0;
			transform: scale(0);
		}

		100% {
			opacity: 1;
			transform: scale(1);
		}
	}

	@media (max-width: 479px) {
		.background-circle {
			width: 90vw;
			height: 90vw;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.horizontal-line,
		.vertical-line,
		.background-circle {
			animation: none;
			opacity: 1;
			transform: none;
		}
	}
</style>
