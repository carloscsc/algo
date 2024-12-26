export function countListSize(nuns: number[]): number {
	if (nuns[0] === undefined) return 0

	nuns.shift()
	return 1 + countListSize(nuns)
}
