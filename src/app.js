import React from 'react'
import ReactDOM from 'react-dom'

import CalendarWrapper from './components/CalendarWrapper'

const Calendar = (props) => {
	return (
		<div style={style}>
			<CalendarWrapper />
		</div>
	)
}

const style = {
	width: '800px',
	margin: 'auto'
}

ReactDOM.render(<Calendar /> , document.getElementById('root'))