import { SchemaOf } from 'yup'
import * as yup from 'yup'

interface Question {
	number: number
	text: string
}

export const questions: Question[] = [
	{ number: 1, text: 'Bilo mi je teško smiriti se.' },
	{ number: 2, text: 'Sušila su mi se usta.' },
	{ number: 3, text: 'Uopće nisam mogao/la doživjeti neki pozitivan osjećaj.' },
	{ number: 4, text: 'Doživio/la sam teškoće s disanjem (npr. ubrzano disanje, gubitak daha bez fizičkog napora).' },
	{ number: 5, text: 'Bilo mi je teško započeti aktivnosti.' },
	{ number: 6, text: 'Bio/la sam sklon/a pretjeranim reakcijama na događaje.' },
	{ number: 7, text: 'Doživljavao/la sam drhtanje (npr. u rukama).' },
	{ number: 8, text: 'Osjećao/la sam se jako nervozno.' },
	{ number: 9, text: 'Zabrinjavale su me situacije u kojima bih mogao/la paničariti ili se osramotiti.' },
	{ number: 10, text: 'Osjetio/la sam kao da se nemam čemu radovati.' },
	{ number: 11, text: 'Osjetio/la sam da postajem uznemiren/a.' },
	{ number: 12, text: 'Bilo mi je teško opustiti se.' },
	{ number: 13, text: 'Bio/la sam potišten/a i tužan/na.' },
	{ number: 14, text: 'Nisam podnosio/la da me išta ometa u onome što sam radio/la.' },
	{ number: 15, text: 'Osjetio/la sam da sam blizu panici.' },
	{ number: 16, text: 'Ništa me nije moglo oduševiti.' },
	{ number: 17, text: 'Osjetio/la sam da ne vrijedim mnogo kao osoba.' },
	{ number: 18, text: 'Događalo mi se da sam bio/la prilično osjetljiv/a.' },
	{
		number: 19,
		text: 'Bio/la sam svjestan/na rada svog srca bez fizičkog napora (npr. osjećaj preskakanja i ubrzanog rada srca).',
	},
	{ number: 20, text: 'Bio/la sam uplašen/a bez opravdanog razloga.' },
	{ number: 21, text: 'Osjetio/la sam kao da život nema smisla.' },
]

export interface FormValues {
	question1?: string
	question2?: string
	question3?: string
	question4?: string
	question5?: string
	question6?: string
	question7?: string
	question8?: string
	question9?: string
	question10?: string
	question11?: string
	question12?: string
	question13?: string
	question14?: string
	question15?: string
	question16?: string
	question17?: string
	question18?: string
	question19?: string
	question20?: string
	question21?: string
}

export const validationSchema: SchemaOf<FormValues> = yup.object({
	question1: yup.string().required('Pitanje 1 je obavezno'),
	question2: yup.string().required('Pitanje 2 je obavezno'),
	question3: yup.string().required('Pitanje 3 je obavezno'),
	question4: yup.string().required('Pitanje 4 je obavezno'),
	question5: yup.string().required('Pitanje 5 je obavezno'),
	question6: yup.string().required('Pitanje 6 je obavezno'),
	question7: yup.string().required('Pitanje 7 je obavezno'),
	question8: yup.string().required('Pitanje 8 je obavezno'),
	question9: yup.string().required('Pitanje 9 je obavezno'),
	question10: yup.string().required('Pitanje 10 je obavezno'),
	question11: yup.string().required('Pitanje 11 je obavezno'),
	question12: yup.string().required('Pitanje 12 je obavezno'),
	question13: yup.string().required('Pitanje 13 je obavezno'),
	question14: yup.string().required('Pitanje 14 je obavezno'),
	question15: yup.string().required('Pitanje 15 je obavezno'),
	question16: yup.string().required('Pitanje 16 je obavezno'),
	question17: yup.string().required('Pitanje 17 je obavezno'),
	question18: yup.string().required('Pitanje 18 je obavezno'),
	question19: yup.string().required('Pitanje 19 je obavezno'),
	question20: yup.string().required('Pitanje 20 je obavezno'),
	question21: yup.string().required('Pitanje 21 je obavezno'),
})

export const initialValues: FormValues = {
	question1: undefined,
	question2: undefined,
	question3: undefined,
	question4: undefined,
	question5: undefined,
	question6: undefined,
	question7: undefined,
	question8: undefined,
	question9: undefined,
	question10: undefined,
	question11: undefined,
	question12: undefined,
	question13: undefined,
	question14: undefined,
	question15: undefined,
	question16: undefined,
	question17: undefined,
	question18: undefined,
	question19: undefined,
	question20: undefined,
	question21: undefined,
}
