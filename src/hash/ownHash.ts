export default class HashTable<T> {
	private table: (T | undefined)[]
	size: number

	constructor() {
		this.table = new Array(127)
		this.size = 0
	}

	private hash(data: string | number): number {
		let total = 0
		if (typeof data === 'string') {
			for (let i = 0; i < data.length; i++) {
				total += data.charCodeAt(i)
			}
		} else {
			total = data
		}
		return total % this.table.length
	}

	set(key: string | number, value: T): void {
		const position = this.hash(key)
		this.table[position] = value
		this.size++
	}

	get(key: string | number): T | undefined {
		return this.table[this.hash(key)]
	}

	remove(key: string | number): void {
		const position = this.hash(key)
		this.table[position] = undefined
		this.size--
	}
}
