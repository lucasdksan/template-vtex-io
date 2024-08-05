export const initObservable = ({
	domParent,
	observationList = {
		childList: true,
		subtree: false,
		attributes: false,
		attributeFilter: [],
	},
	callback,
}) => {
	const observer = new MutationObserver(() => callback(domParent));
	observer.observe(domParent, observationList);
};