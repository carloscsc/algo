import insertionSort from './Insertion-sort'
import mergeSort from './merge-sort'
import { quicksort } from './quicks-sort'
import { findSmallIndex, selectionSort } from './selection-sort'
describe('Insertion Sort', () => {
	it('should sort an array in ascending order', () => {
		const arr = [5, 3, 8, 4, 2, 1, 9, 7, 6]
		expect(insertionSort(arr)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
	})

	it('should sort an array with repeated values in ascending order', () => {
		const arr = [0, 1, 4, 6, 5, 1, 0, 1, 3]
		expect(insertionSort(arr)).toStrictEqual([0, 0, 1, 1, 1, 3, 4, 5, 6])
	})
})

describe('selection Sort', () => {
	it('Should return the smallest number', () => {
		const arr = [100, 2, 3, 4, 6, 7, 8, 9, 1]

		expect(findSmallIndex(arr)).toBe(8)
	})

	it('Should return a ordered array', () => {
		const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
		expect(selectionSort(arr)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
	})
})

describe('Quick Sort', () => {
	it('Should return a ordered array using QuickSort', () => {
		expect(quicksort([9, 8, 7, 6, 5, 4, 3, 2, 1])).toStrictEqual([
			1, 2, 3, 4, 5, 6, 7, 8, 9,
		])
	})
})

describe('Merge Sort', () => {
	it('Should return a sorted array', () => {
		expect(mergeSort([1, 2, 4, 6, 9, 10, 12, 90, 3, 5])).toStrictEqual([
			1, 2, 3, 4, 5, 6, 9, 10, 12, 90,
		])
	})
})
