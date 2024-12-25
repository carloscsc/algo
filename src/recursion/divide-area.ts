// Based in the example of chapter 4 (divider and conquer) of the book
// "Understand algorithms" - Aditya Y. Bhargava
// In the book the algo was not provided, so I try to create on my own

// The idea is divider the area in squares, in equal partes, without any area
// left, but the square should be the biggest possible

// OBS: It could be done using the Euclides Algorithm, I choose trying my own
// approach for this problem

export function AreaDivider(
	w: number,
	h: number
): {
	width: number
	height: number
} {
	if (w / h === 2) {
		return {
			width: w / 2,
			height: h,
		}
	}

	if (w === h) {
		return {
			width: w / 2,
			height: h / 2,
		}
	}

	const h2 = w !== h && w % h > 0 ? w % h : h
	const w2 = w !== h2 && w - h2 > 0 ? w - h2 : w
	return AreaDivider(w2, h2)
}
