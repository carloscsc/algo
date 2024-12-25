// Based in the example of chapter 4 (divider and conquer) of the book
// "Understand algorithms" - Aditya Y. Bhargava
// In the book the algo was not provided, so I try to create on my own

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

	const h2 = w !== h && w % h > 0 ? w % h : h
	const w2 = w - h2
	return AreaDivider(w2, h2)
}
