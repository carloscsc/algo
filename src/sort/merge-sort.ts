export default function sortArray(arr: number[]): number[] {
	if (arr.length < 2) {
		return arr
	}

	const middle = Math.floor(arr.length / 2)
	const leftSide = arr.slice(0, middle)
	const rightSide = arr.slice(middle, arr.length)

	return merge(sortArray(leftSide), sortArray(rightSide))
}

function merge(leftSide: number[], rightSide: number[]): number[] {
	const sortedArr: number[] = []

	let leftIndex = 0
	let rightSideIndex = 0

	leftSide.length
	rightSide.length

	while (leftIndex < leftSide.length && rightSideIndex < rightSide.length) {
		if (leftSide[leftIndex] < rightSide[rightSideIndex]) {
			sortedArr.push(leftSide[leftIndex])
			leftIndex = leftIndex + 1
		} else {
			sortedArr.push(rightSide[rightSideIndex])
			rightSideIndex = rightSideIndex + 1
		}
	}
	const merged = sortedArr.concat(
		leftSide.slice(leftIndex),
		rightSide.slice(rightSideIndex)
	)

	return merged
}
