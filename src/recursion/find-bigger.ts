export function findBigger(nuns: number[], acc: number): number {
	if (nuns[0] === undefined) return acc

	const actual = nuns.shift() || 0

	if (actual > acc) return findBigger(nuns, actual)
	return findBigger(nuns, acc)
}
