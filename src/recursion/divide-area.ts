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
