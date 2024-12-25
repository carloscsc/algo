import { fat } from './fatorial'

describe('Fatorial tests', () => {
	it('Shold return a factorial number', () => {
		expect(fat(3)).toBe(6)
	})
})
