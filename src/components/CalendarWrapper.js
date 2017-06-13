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
		this.toggleEventList = this.toggleEventList.bind(this)
	}

	showPrevMonth() {
		let currentMonth = (this.state.currentDate.getMonth() > 0) ? this.state.currentDate.getMonth() - 1 : 11
		let currentYear = (currentMonth === 11) ? this.state.currentDate.getFullYear() - 1 : this.state.currentDate.getFullYear()
		this.setState({currentDate: new Date(currentYear, currentMonth)})
	}

	showNextMonth() {
		let currentMonth = (this.state.currentDate.getMonth() < 11) ? this.state.currentDate.getMonth() + 1 : 0
		let currentYear = (currentMonth === 0) ? this.state.currentDate.getFullYear() + 1 : this.state.currentDate.getFullYear()
		this.setState({currentDate: new Date(currentYear, currentMonth)})
	}

	goToToday() {
		this.setState({currentDate: new Date()})
	}

	toggleMonthDropdownModal() {
		this.setState({showMonthDropdownModal: !this.state.showMonthDropdownModal})
	}

	goToMonth(month, year) {		
		this.setState({currentDate: new Date(year, month)})
	}

	toggleEventList(date, events = []) {
		console.log('event list opened')
		console.log(date)
		console.log(events)
	}

	render() {
		let style = Object.assign({}, styles, {height: this.props.height, width: this.props.width})
		let events = {
			'2017-06-10': [
				{ title: 'Example' },
				{ title: 'Example 2' }
			]
		}
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
					events={events} 
					toggleEventList={this.toggleEventList} />
			</div>
		)
	}
}

const styles = {
	fontFamily: 'Arial'
}

export default CalendarWrapper
