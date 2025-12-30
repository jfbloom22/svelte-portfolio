<script lang="ts">
	import './layout.css';

	let { children } = $props();

	const siteUrl = 'https://www.jonathanflower.com';
	const ogImage = `${siteUrl}/images/IMG_6620.webp`;
</script>

<svelte:head>
	<title>Jonathan Flower — Software Architect</title>
	<meta
		name="description"
		content="Jonathan Flower is a software architect and servant leader delivering extraordinary value through thoughtful product design, engineering, and generative AI."
	/>
	<meta property="og:site_name" content="Jonathan Flower" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Jonathan Flower — Software Architect" />
	<meta
		property="og:description"
		content="Software architect and servant leader delivering extraordinary value through thoughtful product design, engineering, and generative AI."
	/>
	<meta property="og:url" content={`${siteUrl}/`} />
	<meta property="og:image" content={ogImage} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Jonathan Flower — Software Architect" />
	<meta
		name="twitter:description"
		content="Software architect and servant leader delivering extraordinary value through thoughtful product design, engineering, and generative AI."
	/>
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:domain" content="www.jonathanflower.com" />
	<link rel="canonical" href={`${siteUrl}/`} />
	<link rel="icon" href="/images/favicon.png" type="image/png" />
	<link rel="apple-touch-icon" href="/images/webclip.png" />
</svelte:head>
{@render children()}
