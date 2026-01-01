<script lang="ts">
	import './layout.css';

	let { children } = $props();

	const siteUrl = 'https://www.jonathanflower.com';
	const ogImage = `${siteUrl}/images/IMG_6620.webp`;
</script>

<svelte:head>
	<title>Jonathan Flower — AI Adoption Strategist</title>
	<meta
		name="description"
		content="AI Adoption Strategist and software architect bridging AI engineering and organizational psychology. Cofounder at Workplace Labs."
	/>
	<meta property="og:site_name" content="Jonathan Flower" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Jonathan Flower — AI Adoption Strategist" />
	<meta
		property="og:description"
		content="AI Adoption Strategist and software architect bridging AI engineering and organizational psychology. Cofounder at Workplace Labs."
	/>
	<meta property="og:url" content={`${siteUrl}/`} />
	<meta property="og:image" content={ogImage} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Jonathan Flower — AI Adoption Strategist" />
	<meta
		name="twitter:description"
		content="AI Adoption Strategist and software architect bridging AI engineering and organizational psychology. Cofounder at Workplace Labs."
	/>
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:domain" content="www.jonathanflower.com" />
	<link rel="canonical" href={`${siteUrl}/`} />
	<link rel="icon" href="/images/favicon.png" type="image/png" />
	<link rel="apple-touch-icon" href="/images/webclip.png" />
</svelte:head>
{@render children()}
