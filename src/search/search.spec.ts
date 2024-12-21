import binarySearch from './binary-search'

describe('search with binary search', () => {
	it('Shold find a number in', () => {
		const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
		expect(binarySearch(arr, 8)).toBe(7)
	})
})
