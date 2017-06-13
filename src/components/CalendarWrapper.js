import React from 'react'

import Navigation from './navigations/Navigation'
import CalendarBoard from './boards/CalendarBoard'

class CalendarWrapper extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			currentDate: new Date(),
			showMonthDropdownModal: false
		}

		this.showPrevMonth = this.showPrevMonth.bind(this)
		this.showNextMonth = this.showNextMonth.bind(this)
		this.goToToday = this.goToToday.bind(this)
		this.toggleMonthDropdownModal = this.toggleMonthDropdownModal.bind(this)
		this.goToMonth = this.goToMonth.bind(this)
		this.onDateClick = this.onDateClick.bind(this)
	}

	showPrevMonth() {
		let dateBefore = this.state.currentDate
		let currentMonth = (this.state.currentDate.getMonth() > 0) ? this.state.currentDate.getMonth() - 1 : 11
		let currentYear = (currentMonth === 11) ? this.state.currentDate.getFullYear() - 1 : this.state.currentDate.getFullYear()
		let currentDate = new Date(currentYear, currentMonth)
		this.setState({currentDate: currentDate})
		this.onMonthChange(dateBefore, currentDate)
}

	showNextMonth() {
		let dateBefore = this.state.currentDate
		let currentMonth = (this.state.currentDate.getMonth() < 11) ? this.state.currentDate.getMonth() + 1 : 0
		let currentYear = (currentMonth === 0) ? this.state.currentDate.getFullYear() + 1 : this.state.currentDate.getFullYear()
		let currentDate = new Date(currentYear, currentMonth)
		this.setState({currentDate: currentDate})
		this.onMonthChange(dateBefore, currentDate)
	}

	goToToday() {
		let dateBefore = this.state.currentDate
		let today = new Date()
		this.setState({currentDate: today})
		this.onMonthChange(dateBefore, today)
	}

	toggleMonthDropdownModal() {
		this.setState({showMonthDropdownModal: !this.state.showMonthDropdownModal})
	}

	goToMonth(month, year) {		
		let dateBefore = this.state.currentDate
		let currentDate = new Date(year, month)
		this.setState({currentDate: currentDate})
		this.onMonthChange(dateBefore, currentDate)	
	}

	onDateClick(date, events = []) {
		return (typeof this.props.onDateClick !== 'undefined' && this.props.onDateClick !== null) ? this.props.onDateClick(date, events) : {}
	}

	onMonthChange(dateObjectBefore, dateObjectAfter) {
		return (typeof this.props.onMonthChange !== 'undefined' && this.props.onMonthChange !== null) ? this.props.onMonthChange(dateObjectBefore, dateObjectAfter) : {}
	}

	render() {
		let style = Object.assign({}, styles, {height: this.props.height, width: this.props.width})

		return (
			<div style={style}>
				<Navigation 
					currentYear={this.state.currentDate.getFullYear()}
					currentMonth={this.state.currentDate.getMonth()} 
					showPrevMonth={this.showPrevMonth}
					showNextMonth={this.showNextMonth}
					goToToday={this.goToToday}
					showMonthDropdownModal={this.state.showMonthDropdownModal}
					toggleMonthDropdownModal={this.toggleMonthDropdownModal}
					goToMonth={this.goToMonth} />
				<CalendarBoard 
					currentDate={this.state.currentDate}
					events={this.props.events} 
					onDateClick={this.onDateClick} />
			</div>
		)
	}
}

const styles = {
	fontFamily: 'Arial'
}

export default CalendarWrapper
