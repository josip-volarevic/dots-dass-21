import React, { useState } from 'react'
import type { NextPage } from 'next'
import { FormValues, initialValues, questions, validationSchema } from 'constants/questions'
import {
	Box,
	Button,
	Container,
	Dialog,
	DialogContent,
	DialogTitle,
	Hidden,
	IconButton,
	Radio,
	RadioGroup,
	RadioProps,
	Slide,
	Typography,
	useMediaQuery,
	useTheme,
	Zoom,
} from '@mui/material'
import { Formik, Form, Field, FieldAttributes } from 'formik'
import Navigation from 'components/layout/Navigation'
import Footer from 'components/layout/Footer'
import Main from 'components/layout/Main'
import { getAnxietyLevel, getDepressionLevel, getStressLevel, Level } from 'constants/levels'
import { TransitionProps } from '@mui/material/transitions'
import CloseIcon from '@mui/icons-material/Close'
import useToggle from 'hooks/useToggle'

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & { children: React.ReactElement },
	ref: React.Ref<unknown>
) {
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

	if (isMobile) return <Slide direction='up' ref={ref} {...props} />
	return <Zoom in ref={ref} {...props} />
})

const Home: NextPage = () => {
	const [depressionRate, setDepressionRate] = useState(0)
	const [anxietyRate, setAnxietyRate] = useState(0)
	const [stressRate, setStressRate] = useState(0)
	const [open, toggleOpen] = useToggle()

	const getResults = (values: FormValues) => {
		const {
			question1,
			question2,
			question3,
			question4,
			question5,
			question6,
			question7,
			question8,
			question9,
			question10,
			question11,
			question12,
			question13,
			question14,
			question15,
			question16,
			question17,
			question18,
			question19,
			question20,
			question21,
		} = values
		if (
			question1 === undefined ||
			question2 === undefined ||
			question3 === undefined ||
			question4 === undefined ||
			question5 === undefined ||
			question6 === undefined ||
			question7 === undefined ||
			question8 === undefined ||
			question9 === undefined ||
			question10 === undefined ||
			question11 === undefined ||
			question12 === undefined ||
			question13 === undefined ||
			question14 === undefined ||
			question15 === undefined ||
			question16 === undefined ||
			question17 === undefined ||
			question18 === undefined ||
			question19 === undefined ||
			question20 === undefined ||
			question21 === undefined
		) {
			return
		}
		const depressionRate = +question3 + +question5 + +question10 + +question13 + +question16 + +question17 + +question21
		const anxietyRate = +question2 + +question4 + +question7 + +question9 + +question15 + +question19 + +question20
		const stressRate = +question1 + +question6 + +question8 + +question11 + +question12 + +question14 + +question18

		setDepressionRate(depressionRate)
		setAnxietyRate(anxietyRate)
		setStressRate(stressRate)
		toggleOpen()
	}

	return (
		<Box className='content'>
			<Navigation />

			<Main className='main'>
				<Container maxWidth='lg'>
					<Typography variant='h2' component='h1' textAlign='center'>
						Dass 21
					</Typography>
					<Typography>
						Pred Vama je upitnik koji obuhva??a ispitivanje nekih simptoma{' '}
						<span className='text--important'>depresije</span>,&nbsp;
						<span className='text--important'>anksioznosti</span> i <span className='text--important'>stresa</span> koji
						mogu, u razli??itoj mjeri, biti prisutni u svakodnevnom ??ivotu. Ispunjavanje upitnika mo??e Vam pomo??i da
						jasnije identificirate svoje eventualne te??ko??e. Po ispunjavanju upitnika dobit ??ete interpretaciju Va??ih
						rezultata s op??enitim opisom te??ko??a s kojima se suo??avaju osobe s razli??itim stupnjevima izra??enosti
						depresivnosti, anksioznosti i stresa.
						<br />
						<br />
						<strong>NAPOMENA:</strong> Upitnik nije namijenjen dijagnosticiranju psihi??kih poreme??aja i ne upu??uje na
						klini??ke dijagnoze, ve?? je namijenjen informiranju i usmjeravanju na vlastito mentalno zdravlje. Neovisno o
						rezultatima, ako ste, u bilo kojem smislu, zabrinuti za vlastito mentalno zdravlje, potra??ite stru??nu
						psiholo??ku pomo??. Molimo Vas, pa??ljivo pro??itajte svaku tvrdnju i za svaku tvrdnju zaokru??ite broj u stupcu
						koji najbolje opisuje kako ste se osje??ali u zadnjih tjedan dana.
					</Typography>

					<Box>
						<Box className='answer-example' mt={2}>
							<span className='number'>1</span>
							<Radio disabled size='medium' />
							<span>Uop??e se nije odnosilo na mene</span>
						</Box>
						<Box className='answer-example'>
							<span className='number'>2</span>
							<Radio disabled size='medium' />
							<span>Odnosilo se na mene u odre??enoj mjeri ili neko vrijeme</span>
						</Box>
						<Box className='answer-example'>
							<span className='number'>3</span>
							<Radio disabled size='medium' />
							<span>Odnosilo se na mene u ve??oj mjeri ili dobar dio vremena</span>
						</Box>
						<Box className='answer-example'>
							<span className='number'>4</span>
							<Radio disabled size='medium' />
							<span>Gotovo u potpunosti ili ve??inu vremena odnosilo se na mene</span>
						</Box>
					</Box>
				</Container>

				<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={getResults}>
					{() => (
						<Form className='dass-21-form'>
							<Box className='dass-21-questionnaire'>
								{questions.map((question) => {
									const qName = `question${question.number}` as keyof FormValues
									return (
										<Box key={question.number} className='question'>
											<Box>
												<Hidden smDown>{question.number}. </Hidden>
												{question.text}
											</Box>
											<RadioGroup
												role='group'
												className='question-radio-group'
												aria-labelledby={`Odgovori za pitanje ${question.number}`}
											>
												<Box className='answer-option'>
													<span>1</span>
													<FormRadioButtonField size='small' name={qName} value='0' />
												</Box>
												<Box className='answer-option'>
													<span>2</span>
													<FormRadioButtonField size='small' name={qName} value='1' />
												</Box>
												<Box className='answer-option'>
													<span>3</span>
													<FormRadioButtonField size='small' name={qName} value='2' />
												</Box>
												<Box className='answer-option'>
													<span>4</span>
													<FormRadioButtonField size='small' name={qName} value='3' />
												</Box>
											</RadioGroup>
										</Box>
									)
								})}
							</Box>

							<Button type='submit' color='secondary' variant='contained' size='large' className='form-button'>
								Zavr??i
							</Button>
						</Form>
					)}
				</Formik>
			</Main>

			<Footer />

			<Dialog
				open={open}
				onClose={toggleOpen}
				classes={{ paper: 'dialog-paper' }}
				TransitionComponent={Transition}
				hideBackdrop
			>
				{/* <Button variant='contained' className='dialog-close-button' onClick={toggleOpen}>
					<CloseIcon />
				</Button> */}
				<DialogTitle variant='h5' fontWeight='bold'>
					Rezultat
					<IconButton
						aria-label='close'
						onClick={toggleOpen}
						sx={{
							position: 'absolute',
							right: 8,
							top: 8,
							color: (theme) => theme.palette.grey[500],
						}}
					>
						<CloseIcon />
					</IconButton>
				</DialogTitle>
				<DialogContent>
					<Message
						depressionRate={depressionRate}
						anxietyRate={anxietyRate}
						stressRate={stressRate}
						type='depression'
					/>
					<hr style={{ margin: '1rem 0' }} />
					<Message depressionRate={depressionRate} anxietyRate={anxietyRate} stressRate={stressRate} type='anxiety' />
					<hr style={{ margin: '1rem 0' }} />
					<Message depressionRate={depressionRate} anxietyRate={anxietyRate} stressRate={stressRate} type='stress' />
				</DialogContent>
			</Dialog>
		</Box>
	)
}

const FormRadioButtonField: React.FC<FieldAttributes<RadioProps>> = ({ name, ...props }) => {
	return <Field type='radio' id={name} name={name} as={Radio} {...props} />
}

export default Home

interface MessageProps {
	depressionRate: number
	anxietyRate: number
	stressRate: number
	type: 'depression' | 'anxiety' | 'stress'
}

const Message: React.FC<MessageProps> = ({ depressionRate, anxietyRate, stressRate, type }) => {
	const dLevel = getDepressionLevel(depressionRate)
	const aLevel = getAnxietyLevel(anxietyRate)
	const sLevel = getStressLevel(stressRate)

	if ((dLevel === Level.Five || dLevel === Level.Four) && type === 'depression') {
		return (
			<Typography variant='body1' className='dialog-text'>
				Odgovori koji upu??uju na to da do??ivljavate zna??ajnu, odnosno&nbsp;
				<span className='text--important'>ekstremno ozbiljnu</span> razinu&nbsp;
				<span className='text--important'>depresivnosti</span> ukazuju na veliku vjerojatnost da Vas uo??eni simptomi
				ometaju u svakodnevnom funkcioniranju. Preporu??ujemo Vam da potra??ite stru??nu psiholo??ku pomo??.\n\nNeke dostupne
				oblike podr??ke u lokalnoj zajednici mo??ete prona??i i na na??oj web stranici u rubrici Izvori podr??ke -&nbsp;
				<a href='https://dots.mentor-split.hr/izvori-podrske-i-mogucnosti' target='_blank' rel='noreferrer'>
					link
				</a>
				, a svakako Vas upu??ujemo i na ostale sadr??aje na ovoj web stranici koji bi Vam mogli pomo??i u prevladavanju
				trenutnih te??ko??a.
			</Typography>
		)
	} else if (dLevel === Level.Three && type === 'depression') {
		return (
			<Typography variant='body1' className='dialog-text'>
				Odgovori koji upu??uju na to da do??ivljavate <span className='text--important'>umjerenu razinu</span>&nbsp;
				<span className='text--important'>depresivnosti</span> ukazuju na vjerojatnost relativno uspje??nog suo??avanja s
				uo??enim simptomima. Ako se te??ko??e koje do??ivljavate nastave jo?? neko vrijeme te ako procijenite da Vas ometaju
				u svakodnevnom funkcioniranju, preporu??ujemo Vam da potra??ite stru??nu psiholo??ku pomo??.\n\nNeke dostupne oblike
				podr??ke u lokalnoj zajednici mo??ete prona??i i na na??oj web stranici u rubrici Izvori podr??ke -&nbsp;
				<a href='https://dots.mentor-split.hr/izvori-podrske-i-mogucnosti' target='_blank' rel='noreferrer'>
					link
				</a>
				, a svakako Vas upu??ujemo i na ostale sadr??aje na ovoj web stranici koji bi Vam mogli pomo??i u prevladavanju
				trenutnih te??ko??a.
			</Typography>
		)
	} else if ((dLevel === Level.Two || dLevel === Level.One) && type === 'depression') {
		return (
			<Typography variant='body1' className='dialog-text'>
				Odgovori koji upu??uju na to da do??ivljavate <span className='text--important'>normalnu/blagu razinu</span>&nbsp;
				<span className='text--important'>depresivnosti</span> ukazuju na uspje??no prevladavanje izazovnih ??ivotnih
				situacija i okolnosti te se ne o??ekuje da izazivaju zna??ajnije te??ko??e u Va??em funkcioniranju u svakodnevnom
				??ivotu.\n\nIpak, upu??ujemo Vas na sadr??aje na ovoj web stranici koji Vam mogu dati dodatne informacije i nau??iti
				Vas razli??ite konstruktivne strategije suo??avanja sa stresom kako biste bili uspje??niji u prevladavanju
				trenutnih te??ko??a i odr??avanju ili unaprje??enju vlastitog mentalnog zdravlja.
			</Typography>
		)
	} else if ((aLevel === Level.Five || aLevel === Level.Four) && type === 'anxiety') {
		return (
			<Typography variant='body1' className='dialog-text'>
				Odgovori koji upu??uju na to da do??ivljavate zna??ajnu, odnosno&nbsp;
				<span className='text--important'>ekstremno ozbiljnu</span> razinu&nbsp;
				<span className='text--important'>anksioznosti</span> ukazuju na veliku vjerojatnost da Vas uo??eni simptomi
				ometaju u svakodnevnom funkcioniranju. Preporu??ujemo Vam da potra??ite stru??nu psiholo??ku pomo??.\n\nNeke dostupne
				oblike podr??ke u lokalnoj zajednici mo??ete prona??i i na na??oj web stranici u rubrici Izvori podr??ke -&nbsp;
				<a href='https://dots.mentor-split.hr/izvori-podrske-i-mogucnosti' target='_blank' rel='noreferrer'>
					link
				</a>
				, a svakako Vas upu??ujemo i na ostale sadr??aje na ovoj web stranici koji bi Vam mogli pomo??i u prevladavanju
				trenutnih te??ko??a.
			</Typography>
		)
	} else if (aLevel === Level.Three && type === 'anxiety') {
		return (
			<Typography variant='body1' className='dialog-text'>
				Odgovori koji upu??uju na to da do??ivljavate <span className='text--important'>umjerenu razinu</span>&nbsp;
				anksioznosti ukazuju na vjerojatnost relativno uspje??nog suo??avanja s uo??enim simptomima. Ako se te??ko??e koje
				do??ivljavate nastave jo?? neko vrijeme te ako procijenite da Vas ometaju u svakodnevnom funkcioniranju,
				preporu??ujemo Vam da potra??ite stru??nu psiholo??ku pomo??.\n\nNeke dostupne oblike podr??ke u lokalnoj zajednici
				mo??ete prona??i i na na??oj web stranici u rubrici Izvori podr??ke -&nbsp;
				<a href='https://dots.mentor-split.hr/izvori-podrske-i-mogucnosti' target='_blank' rel='noreferrer'>
					link
				</a>
				, a svakako Vas upu??ujemo i na ostale sadr??aje na ovoj web stranici koji bi Vam mogli pomo??i u prevladavanju
				trenutnih te??ko??a.
			</Typography>
		)
	} else if ((aLevel === Level.Two || aLevel === Level.One) && type === 'anxiety') {
		return (
			<Typography variant='body1' className='dialog-text'>
				Odgovori koji upu??uju na to da do??ivljavate <span className='text--important'>normalnu/blagu razinu</span>&nbsp;
				anksioznosti ukazuju na uspje??no prevladavanje izazovnih ??ivotnih situacija i okolnosti te se ne o??ekuje da
				izazivaju zna??ajnije te??ko??e u Va??em funkcioniranju u svakodnevnom ??ivotu.\n\nIpak, upu??ujemo Vas na sadr??aje na
				ovoj web stranici koji Vam mogu dati dodatne informacije i nau??iti Vas razli??ite konstruktivne strategije
				suo??avanja sa stresom kako biste bili uspje??niji u prevladavanju trenutnih te??ko??a i odr??avanju ili unaprje??enju
				vlastitog mentalnog zdravlja.
			</Typography>
		)
	} else if ((sLevel === Level.Five || sLevel === Level.Four) && type === 'stress') {
		return (
			<Typography variant='body1' className='dialog-text'>
				Odgovori koji upu??uju na to da do??ivljavate zna??ajnu, odnosno&nbsp;
				<span className='text--important'>ekstremno ozbiljnu</span> razinu&nbsp;
				<span className='text--important'>stresa</span> ukazuju na veliku vjerojatnost da Vas uo??eni simptomi ometaju u
				svakodnevnom funkcioniranju. Preporu??ujemo Vam da potra??ite stru??nu psiholo??ku pomo??.\n\nNeke dostupne oblike
				podr??ke u lokalnoj zajednici mo??ete prona??i i na na??oj web stranici u rubrici Izvori podr??ke -&nbsp;
				<a href='https://dots.mentor-split.hr/izvori-podrske-i-mogucnosti' target='_blank' rel='noreferrer'>
					link
				</a>
				, a svakako Vas upu??ujemo i na ostale sadr??aje na ovoj web stranici koji bi Vam mogli pomo??i u prevladavanju
				trenutnih te??ko??a.
			</Typography>
		)
	} else if (sLevel === Level.Three && type === 'stress') {
		return (
			<Typography variant='body1' className='dialog-text'>
				Odgovori koji upu??uju na to da do??ivljavate <span className='text--important'>umjerenu razinu</span> stresa
				ukazuju na vjerojatnost relativno uspje??nog suo??avanja s uo??enim simptomima. Ako se te??ko??e koje do??ivljavate
				nastave jo?? neko vrijeme te ako procijenite da Vas ometaju u svakodnevnom funkcioniranju, preporu??ujemo Vam da
				potra??ite stru??nu psiholo??ku pomo??.\n\nNeke dostupne oblike podr??ke u lokalnoj zajednici mo??ete prona??i i na
				na??oj web stranici u rubrici Izvori podr??ke -
				<a href='https://dots.mentor-split.hr/izvori-podrske-i-mogucnosti' target='_blank' rel='noreferrer'>
					link
				</a>
				, a svakako Vas upu??ujemo i na ostale sadr??aje na ovoj web stranici koji bi Vam mogli pomo??i u prevladavanju
				trenutnih te??ko??a.
			</Typography>
		)
	} else if ((sLevel === Level.Two || sLevel === Level.One) && type === 'stress') {
		return (
			<Typography variant='body1' className='dialog-text'>
				Odgovori koji upu??uju na to da do??ivljavate&nbsp;
				<span className='text--important'>normalnu/blagu razinu</span>
				&nbsp; <span className='text--important'>stresa</span> ukazuju na uspje??no prevladavanje izazovnih ??ivotnih
				situacija i okolnosti te se ne o??ekuje da izazivaju zna??ajnije te??ko??e u Va??em funkcioniranju u svakodnevnom
				??ivotu.\n\nIpak, upu??ujemo Vas na sadr??aje na ovoj web stranici koji Vam mogu dati dodatne informacije i nau??iti
				Vas razli??ite konstruktivne strategije suo??avanja sa stresom kako biste bili uspje??niji u prevladavanju
				trenutnih te??ko??a i odr??avanju ili unaprje??enju vlastitog mentalnog zdravlja.
			</Typography>
		)
	} else return null
}
