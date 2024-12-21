export default function binarySearch(arr: number[], item: number): number {
	let init = 0
	let end = arr.length - 1

	while (init <= end) {
		const middle = Math.floor((init + end) / 2)
		const guess = arr[middle]

		console.log(guess, middle)

		if (guess === item) {
			return middle
		}

		if (guess > item) {
			end = middle + 1
		} else {
			init = middle - 1
		}
	}
	return -1
}
