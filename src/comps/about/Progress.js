const Progress = ({ value, limit }) => {
	return (
		<progress
			className='progress progress-warning'
			value={value > limit ? limit : value}
			max='100'
		></progress>
	)
}

export default Progress;