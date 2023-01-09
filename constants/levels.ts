export enum Level {
	One,
	Two,
	Three,
	Four,
	Five,
}

export const getDepressionLevel = (rate: number) => {
	if (rate <= 4) {
		return Level.One
	} else if (rate <= 6) {
		return Level.Two
	} else if (rate <= 10) {
		return Level.Three
	} else if (rate <= 13) {
		return Level.Four
	} else if (rate > 13) {
		return Level.Five
	} else return undefined
}

export const getAnxietyLevel = (rate: number) => {
	if (rate <= 3) {
		return Level.One
	} else if (rate <= 5) {
		return Level.Two
	} else if (rate <= 7) {
		return Level.Three
	} else if (rate <= 9) {
		return Level.Four
	} else if (rate > 9) {
		return Level.Five
	} else return undefined
}

export const getStressLevel = (rate: number) => {
	if (rate <= 7) {
		return Level.One
	} else if (rate <= 9) {
		return Level.Two
	} else if (rate <= 12) {
		return Level.Three
	} else if (rate <= 16) {
		return Level.Four
	} else if (rate > 16) {
		return Level.Five
	} else return undefined
}

export const isPersonInBadState = (depressionRate: number, anxietyRate: number, stressRate: number) => {
	const dLevel = getDepressionLevel(depressionRate)
	const aLevel = getAnxietyLevel(anxietyRate)
	const sLevel = getStressLevel(stressRate)

	return (
		dLevel === Level.Five ||
		dLevel === Level.Four ||
		aLevel === Level.Five ||
		aLevel === Level.Four ||
		sLevel === Level.Five ||
		sLevel === Level.Four
	)
}

export const getLevelsString = (depressionRate: number, anxietyRate: number, stressRate: number) => {
	const dLevel = getDepressionLevel(depressionRate)
	const aLevel = getAnxietyLevel(anxietyRate)
	const sLevel = getStressLevel(stressRate)

	if (
		dLevel === Level.Five ||
		dLevel === Level.Four ||
		aLevel === Level.Five ||
		aLevel === Level.Four ||
		sLevel === Level.Five ||
		sLevel === Level.Four
	) {
		return `Odgovori koji upućuju na to da doživljavate značajnu, odnosno ekstremno ozbiljnu razinu depresivnosti/anksioznosti/stresa ukazuju na veliku vjerojatnost da Vas uočeni simptomi ometaju u svakodnevnom funkcioniranju. Preporučujemo Vam da potražite stručnu psihološku pomoć.\n\nNeke dostupne oblike podrške u lokalnoj zajednici možete pronaći i na našoj web stranici u rubrici Izvori podrške - link, a svakako Vas upućujemo i na ostale sadržaje na ovoj web stranici koji bi Vam mogli pomoći u prevladavanju trenutnih teškoća.`
	} else if (dLevel === Level.Three || aLevel === Level.Three || sLevel === Level.Three) {
		return `Odgovori koji upućuju na to da doživljavate umjerenu razinu depresivnosti/anksioznosti/stresa ukazuju na vjerojatnost relativno uspješnog suočavanja s uočenim simptomima. Ako se teškoće koje doživljavate nastave još neko vrijeme te ako procijenite da Vas ometaju u svakodnevnom funkcioniranju, preporučujemo Vam da potražite stručnu psihološku pomoć.\n\nNeke dostupne oblike podrške u lokalnoj zajednici možete pronaći i na našoj web stranici u rubrici Izvori podrške - link, a svakako Vas upućujemo i na ostale sadržaje na ovoj web stranici koji bi Vam mogli pomoći u prevladavanju trenutnih teškoća. `
	} else if (
		dLevel === Level.Two ||
		dLevel === Level.One ||
		aLevel === Level.Two ||
		aLevel === Level.One ||
		sLevel === Level.Two ||
		sLevel === Level.One
	) {
		return `Odgovori koji upućuju na to da doživljavate normalnu/blagu razinu depresivnosti/anksioznosti/stresa ukazuju na uspješno prevladavanje izazovnih životnih situacija i okolnosti te se ne očekuje da izazivaju značajnije teškoće u Vašem funkcioniranju u svakodnevnom životu.\n\nIpak, upućujemo Vas na sadržaje na ovoj web stranici koji Vam mogu dati dodatne informacije i naučiti Vas različite konstruktivne strategije suočavanja sa stresom kako biste bili uspješniji u prevladavanju trenutnih teškoća i održavanju ili unaprjeđenju vlastitog mentalnog zdravlja.`
	} else return ''
}
