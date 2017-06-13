import React from 'react'
import DayHeader from './DayHeader'
import DayBlock from './DayBlock'

const CalendarBoard = (props) => {
	let currentYear = props.currentDate.getFullYear()
	let currentMonth = props.currentDate.getMonth()
	let currentDay = props.currentDate.getDay()
	let currentMonthFirstDate = new Date(currentYear, currentMonth, 1)
	let currentMonthLastDate = new Date(currentYear, currentMonth + 1, 0)
	let prevMonthLastDate = new Date(currentYear, currentMonth, 0)
	
	let dayHeaders = populateDayHeaders()
	let dayBlocks = []

	let prevMonthLastDates = populatePrevMonthLastDates(currentMonthFirstDate, prevMonthLastDate)
	let currentMonthDates = populateCurrentMonthDates(props.currentDate, props.onDateClick, props.events)
	let nextMontFirstDates = populateNextMonthFirstDates(currentMonthLastDate)

	prevMonthLastDates.map((item) => dayBlocks.push(item))
	currentMonthDates.map((item) => dayBlocks.push(item))
	nextMontFirstDates.map((item) => dayBlocks.push(item))
	
	return (
		<div>
			<div style={styles.dayHeadersWrapper}>
				{dayHeaders}
			</div>
			<div style={styles.dayHeadersWrapper}>
				{dayBlocks}
			</div>
		</div>
	)
}

const populateDayHeaders = () => {
	let dayHeaders = []
	for (let day = 0; day < 7; day++) {
		dayHeaders.push(<DayHeader key={'header-' + day} day={day} />)
	}
	return dayHeaders
}

const populatePrevMonthLastDates = (currentMonthFirstDate, prevMonthLastDate) => {
	let currentMonthFirstDay = currentMonthFirstDate.getDay()
	let dayBlocks = []
	for (let subtract = currentMonthFirstDay-1; subtract >= 0; subtract--) {
		let date = prevMonthLastDate.getDate() - subtract
		let dateObject = new Date(prevMonthLastDate.getFullYear(), prevMonthLastDate.getMonth(), date)
		dayBlocks.push(<DayBlock key={'last-month-' + date} date={dateObject} disabled={true} />)
	}
	return dayBlocks
}

const populateCurrentMonthDates = (currentDate, onDateClickCallback, eventList) => {
	let today = new Date()
	let dayCount = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
	let dayBlocks = []
	for (let date = 1; date <= dayCount; date++) {
		let dateObject = new Date(currentDate.getFullYear(), currentDate.getMonth(), date)
		let eventIndex = generateEventIndex(dateObject)
		let events = (typeof eventList !== 'undefined' && typeof eventList[eventIndex] !== 'undefined') ? eventList[eventIndex] : null
		dayBlocks.push(<DayBlock 
			key={'curr-month-' + date} 
			date={dateObject} 
			today={dateObject.toDateString() == today.toDateString()}
			holiday={dateObject.getDay() === 0}
			events={events}
			onDateClick={onDateClickCallback}/>)
	}
	return dayBlocks
}

const populateNextMonthFirstDates = (currentMonthLastDate) => {
	let currentMonthLastDay = currentMonthLastDate.getDay()
	let dayBlocks = []
	for (let date = 1, iteration = currentMonthLastDay + 1; iteration < 7; iteration++, date++) {
		let dateObject = new Date(currentMonthLastDate.getFullYear(), currentMonthLastDate.getMonth(), date)
		dayBlocks.push(<DayBlock key={'next-month-' + date} date={dateObject} disabled={true} />)
	}
	return dayBlocks
}

const generateEventIndex = (dateObject) => {
	let eventIndex = `${dateObject.getFullYear()}-${leftPad(dateObject.getMonth() + 1, 2, '0')}-${leftPad(dateObject.getDate(), 2, '0')}`
	return eventIndex
}

const leftPad = (initialString, lengthExpected, paddedChar) => {
	let padCount = lengthExpected - (initialString + '').length
	let newString = initialString
	for (let i = 0; i < padCount; i++) {
		newString = paddedChar + newString
	}
	return newString
}

const styles = {
	dayHeadersWrapper: {
		display: 'block',
		marginBottom: '10px'
	},
	dayBlocksWrapper: {
		display: 'block'
	}
}

export default CalendarBoard
