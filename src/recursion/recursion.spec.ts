import { AreaDivider } from './divide-area'
import { fat } from './fatorial'
import { recursiveSum } from './sum'

describe('Fatorial tests', () => {
	it('Shold return a factorial number', () => {
		expect(fat(3)).toBe(6)
	})
})

describe('Area divider test', () => {
	it('Should display the bigger square that area can be divided in eqaul partes', () => {
		expect(AreaDivider(1600, 900)).toStrictEqual({ width: 100, height: 100 })
		expect(AreaDivider(1920, 1080)).toStrictEqual({ width: 120, height: 120 })
		expect(AreaDivider(900, 900)).toStrictEqual({ width: 450, height: 450 })
	})
})

describe('Sum an array', () => {
	it('Should sum all elements of an array', () => {
		expect(recursiveSum([2, 4, 6])).toBe(12)
	})
})
