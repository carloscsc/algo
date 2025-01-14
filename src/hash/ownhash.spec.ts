import HashTable from './ownHash'
describe('Implement own hash function', () => {
	it('should set and get values', () => {
		const hashTable = new HashTable()
		hashTable.set('a', 'value1')
		hashTable.set('b', 'value2')
		hashTable.set('c', 'value3')

		expect(hashTable.get('a')).toBe('value1')
		expect(hashTable.get('b')).toBe('value2')
		expect(hashTable.get('c')).toBe('value3')
		expect(hashTable.size).toBe(3)
	})

	it('should remove values', () => {
		const hashTable = new HashTable()
		hashTable.set('a', 'value1')
		hashTable.set('b', 'value2')
		hashTable.set('c', 'value3')

		expect(hashTable.get('a')).toBe('value1')
		expect(hashTable.get('b')).toBe('value2')
		expect(hashTable.get('c')).toBe('value3')
		expect(hashTable.size).toBe(3)

		hashTable.remove('b')
		expect(hashTable.get('b')).toBeUndefined()
		expect(hashTable.size).toBe(2)

		hashTable.set('b', 'value4')
		expect(hashTable.get('b')).toBe('value4')
		expect(hashTable.size).toBe(3)

		hashTable.set(12, '12')
		expect(hashTable.get(12)).toBe('12')
	})
})
