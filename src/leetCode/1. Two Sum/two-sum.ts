const input = [2, 7, 11, 15]
const target = 9

function twoSum(nums: number[], target: number): number[] {
	const hTable = new Map<number, number>()
	for (let i = 0; i <= nums.length; i++) {
		const diff = target - nums[i]
		if (hTable.get(diff) !== undefined) {
			return [hTable.get(diff) as number, i]
		}
		hTable.set(nums[i], i)
	}
	return []
}

console.log(twoSum(input, target))
