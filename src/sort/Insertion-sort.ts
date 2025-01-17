// TODO: implement a insertion sort to multi-levels array

const insertionSort = (arr: number[]): number[] => {
	for (let i = 1; i < arr.length; i++) {
		const key = arr[i]
		let j = i - 1

		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j]
			j = j - 1
		}
		arr[j + 1] = key
	}

	return arr
}

export default insertionSort
