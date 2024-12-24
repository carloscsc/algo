export function findSmallIndex(arr: number[]): number {
	let small = arr[0]
	let small_i = 0

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < small) {
			small = arr[i]
			small_i = i
		}
	}
	return small_i
}

export function selectionSort(arr: number[]): number[] {
	const newArr: number[] = []
	const arraySize = arr.length

	for (let i = 0; i < arraySize; i++) {
		const small = findSmallIndex(arr)
		newArr.push(arr[small])
		arr.splice(small, 1)
	}

	return newArr
}
