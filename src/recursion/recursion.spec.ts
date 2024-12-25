import { AreaDivider } from './divide-area'
import { fat } from './fatorial'

describe('Fatorial tests', () => {
	it('Shold return a factorial number', () => {
		expect(fat(3)).toBe(6)
	})
})

describe('Area divider test', () => {
	it('Should display the bigger square that area can be divided by equal', () => {
		expect(AreaDivider(1600, 900)).toStrictEqual({ width: 100, height: 100 })
		expect(AreaDivider(1920, 1080)).toStrictEqual({ width: 120, height: 120 })
	})
})
