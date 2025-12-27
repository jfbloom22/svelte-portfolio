<script lang="ts">
	const horizontalPercents = [10, 20, 30, 40, 50, 60, 70, 80, 90];
	const verticalPercents = [20, 40, 60, 80];
</script>

<div class="background-scene" aria-hidden="true">
	{#each horizontalPercents as value, index}
		<div class="horizontal-line" style={`--pos:${value};--delay:${index * 0.05}s`}></div>
	{/each}

	{#each verticalPercents as value, index}
		<div class="vertical-line" style={`--pos:${value};--delay:${index * 0.05 + 0.2}s`}></div>
	{/each}
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
		opacity: 0.8;
	}

	.horizontal-line,
	.vertical-line {
		position: absolute;
		background-color: color-mix(in srgb, var(--color-muted) 40%, transparent);
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
</style>
