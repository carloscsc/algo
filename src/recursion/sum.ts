export function recursiveSum(nos: number[]): number {
	// base case
	if (nos.length === 2) {
		return nos[0] + nos[1]
	}

	const first = nos.shift() || 0
	return first + recursiveSum(nos)
}
