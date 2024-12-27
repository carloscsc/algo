export function quicksort(nuns: number[]): number[] {
	if (nuns.length < 2) return nuns

	const randomIndex = Math.floor(Math.random() * nuns.length)
	const pivot = nuns.splice(randomIndex, 1)[0]
	const smaller = []
	const bigger = []

	for (let i = 0; i < nuns.length; i++) {
		if (nuns[i] < pivot) smaller.push(nuns[i])
		else bigger.push(nuns[i])
	}

	return [...quicksort(smaller), pivot, ...quicksort(bigger)]
}
