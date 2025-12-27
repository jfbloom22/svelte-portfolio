<script lang="ts">
	export let title = '';
	export let accent = '';
	export let showDot = true;
</script>

<div class="section-heading">
	<h2 class="jf-section-heading">
		{title}
		{#if accent}
			<span class="text-muted">{accent}</span>
		{/if}
		{#if showDot}
			<span class="text-muted">.</span>
		{/if}
	</h2>
	<slot />
</div>

<style>
	.section-heading {
		display: grid;
		gap: 0.25rem;
	}
</style>
