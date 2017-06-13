import React from 'react'
import ReactDOM from 'react-dom'

import CalendarWrapper from './components/CalendarWrapper'

const Calendar = (props) => {
	let events = {
		'2017-06-05': [
			{ title: 'Example', description: 'Example' },
			{ title: 'Example', description: 'Example' }
		],
		'2017-06-21': [
			{ title: 'Example' }
		]
	}
	let onDateClick = (date, events) => {
		console.log(date)
		console.log(events)
	} 

	let onMonthChange = (dateObjectBefore, dateObjectAfter) => {
		console.log(dateObjectBefore)
		console.log(dateObjectAfter)
	}

	return (
		<div style={style}>
			<CalendarWrapper 
				events={events}
				onDateClick={onDateClick}
				onMonthChange={onMonthChange} />
		</div>
	)
}

const style = {
	width: '800px',
	margin: 'auto',
	padding: '48px 24px'
}

ReactDOM.render(<Calendar /> , document.getElementById('root'))
