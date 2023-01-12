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
import { getLevelsString } from 'constants/levels'
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
	const [message, setMessage] = useState('')
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

		setMessage(getLevelsString(depressionRate, anxietyRate, stressRate))
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
						Pred Vama je upitnik koji obuhvaća ispitivanje nekih simptoma depresije, anksioznosti i stresa koji mogu, u
						različitoj mjeri, biti prisutni u svakodnevnom životu. Ispunjavanje upitnika može Vam pomoći da jasnije
						identificirate svoje eventualne teškoće. Po ispunjavanju upitnika dobit ćete interpretaciju Vaših rezultata
						s općenitim opisom teškoća s kojima se suočavaju osobe s različitim stupnjevima izraženosti depresivnosti,
						anksioznosti i stresa.
						<br />
						<br />
						<strong>NAPOMENA:</strong> Upitnik nije namijenjen dijagnosticiranju psihičkih poremećaja i ne upućuje na
						kliničke dijagnoze, već je namijenjen informiranju i usmjeravanju na vlastito mentalno zdravlje. Neovisno o
						rezultatima, ako ste, u bilo kojem smislu, zabrinuti za vlastito mentalno zdravlje, potražite stručnu
						psihološku pomoć. Molimo Vas, pažljivo pročitajte svaku tvrdnju i za svaku tvrdnju zaokružite broj u stupcu
						koji najbolje opisuje kako ste se osjećali u zadnjih tjedan dana.
					</Typography>

					<Box>
						<Box className='answer-example' mt={2}>
							<span className='number'>1</span>
							<Radio disabled size='medium' />
							<span>Uopće se nije odnosilo na mene</span>
						</Box>
						<Box className='answer-example'>
							<span className='number'>2</span>
							<Radio disabled size='medium' />
							<span>Odnosilo se na mene u određenoj mjeri ili neko vrijeme</span>
						</Box>
						<Box className='answer-example'>
							<span className='number'>3</span>
							<Radio disabled size='medium' />
							<span>Odnosilo se na mene u većoj mjeri ili dobar dio vremena</span>
						</Box>
						<Box className='answer-example'>
							<span className='number'>4</span>
							<Radio disabled size='medium' />
							<span>Gotovo u potpunosti ili većinu vremena odnosilo se na mene</span>
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
								Završi
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
					<Typography variant='body1' className='dialog-text'>
						{message}
					</Typography>
				</DialogContent>
			</Dialog>
		</Box>
	)
}

const FormRadioButtonField: React.FC<FieldAttributes<RadioProps>> = ({ name, ...props }) => {
	return <Field type='radio' id={name} name={name} as={Radio} {...props} />
}

export default Home
