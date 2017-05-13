import React from 'react'

import Navigation from './navigations/Navigation'
import CalendarBoard from './boards/CalendarBoard'

export default class CalendarWrapper extends React.Component {
	constructor() {
		super()

		this.state = {
			currentDate: new Date()
		}

		this.showPrevMonth = this.showPrevMonth.bind(this)
		this.showNextMonth = this.showNextMonth.bind(this)
		this.goToToday = this.goToToday.bind(this)
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

	render() {
		return (
			<div>
				<Navigation 
					currentYear={this.state.currentDate.getFullYear()}
					currentMonth={this.state.currentDate.getMonth()} 
					showPrevMonth={this.showPrevMonth}
					showNextMonth={this.showNextMonth}
					goToToday={this.goToToday} />
				<CalendarBoard 
					currentDate={this.state.currentDate} />
			</div>
		)
	}
}