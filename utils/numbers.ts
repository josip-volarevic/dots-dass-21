export const generateRandom = (max = 1, min = 0) => {
	return Math.floor(Math.random() * max + min)
}
