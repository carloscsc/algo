export function fat(x: number): number {
	if (x === 1) return x // case base
	return x * fat(x - 1) // case recursion
}
