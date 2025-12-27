export type InViewOptions = IntersectionObserverInit & {
	className?: string;
};

export function inView(node: HTMLElement, options: InViewOptions = {}) {
	const { className = 'is-visible', threshold = 0.35, rootMargin = '0px' } = options;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.style.setProperty('--reveal-progress', '1');
					observer.unobserve(node);
				}
			}
		},
		{ threshold, rootMargin }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
