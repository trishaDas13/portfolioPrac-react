import Progress from './Progress';

const ProgrammingLanguages = () => {
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			if (progress <= 100) {
				setProgress((prevProgress) => prevProgress + 0.2)
			}
		}, 1)

		return () => clearInterval(interval)
	}, [progress])

	return (
		<>
			<h3>Programming Languages</h3>
			<div className='flex flex-col gap-6 p-6 bg-black border-white rounded-lg border-opacity-30 bg-opacity-20 border-[2px]'>
				<div className='flex flex-col gap-2'>
					<CategorySubheading name={'JavaScript'} value={'95%'} />
					<Progress value={progress} limit={95} />
				</div>
				<div className='flex flex-col gap-2'>
					<CategorySubheading name={'TypeScript'} value={'65%'} />
					<Progress value={progress} limit={65} />
				</div>
				<div className='flex flex-col gap-2'>
					<CategorySubheading name={'HTML'} value={'100%'} />
					<Progress value={progress} limit={100} />
				</div>
				<div className='flex flex-col gap-2'>
					<CategorySubheading name={'CSS'} value={'95%'} />
					<Progress value={progress} limit={95} />
				</div>
				<div className='flex flex-col gap-2'>
					<CategorySubheading name={'Java'} value={'50%'} />
					<Progress value={progress} limit={50} />
				</div>
			</div>
		</>
	)
}
export default ProgrammingLanguages