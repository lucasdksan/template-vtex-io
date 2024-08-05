export const searchElementDom = ({
	elementSelector,
	elementContainer = document,
	maxCount = 100,
	callback,
}) => {
	const searching = (count = 0) => {
		const elementDom = elementContainer.querySelector(elementSelector);
		if (!!elementDom) {
			callback(elementDom);
		} else if (count < maxCount) {
			setTimeout(() => {
				searching(count + 1);
			}, 50);
		}
	};

	searching();
};
