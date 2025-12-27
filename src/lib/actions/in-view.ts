export type InViewOptions = IntersectionObserverInit & {
	className?: string;
};

export function inView(node: HTMLElement, options: InViewOptions = {}) {
	const { className = 'is-visible', threshold = 0.35, rootMargin = '0px' } = options;

	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add(className);
		return {
			destroy() {
				// no-op
			}
		};
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add(className);
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
