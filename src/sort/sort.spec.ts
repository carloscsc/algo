import insertionSort from './Insertion-sort'
describe('Sort Tests', () => {
	it('should sort an array in ascending order', () => {
		const arr = [5, 3, 8, 4, 2, 1, 9, 7, 1, 6]

		expect(insertionSort(arr)).toEqual([1, 1, 2, 3, 4, 5, 6, 7, 8, 9])
	})
})
