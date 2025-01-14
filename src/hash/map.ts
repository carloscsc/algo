const collection = new Map<string, string>()

collection.set('a', 'value1')
collection.set('b', 'value2')
collection.set('c', 'value3')

console.log(collection.get('a'))
console.log(collection.size)

for (const [key, value] of collection) {
	console.log(key, value)
}
