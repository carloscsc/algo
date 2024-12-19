import insertionSort from './Insertion-sort'
describe('Insertion Sort', () => {
	it('should sort an array in ascending order', () => {
		const arr = [5, 3, 8, 4, 2, 1, 9, 7, 6]
		expect(insertionSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
	})

	it('should sort an array with repeated values in ascending order', () => {
		const arr = [0, 1, 4, 6, 5, 1, 0, 1, 3]
		expect(insertionSort(arr)).toEqual([0, 0, 1, 1, 1, 3, 4, 5, 6])
	})
})
