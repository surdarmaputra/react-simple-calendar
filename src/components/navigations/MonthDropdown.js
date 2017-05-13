import React from 'react'
import { months, defaultStyles } from '../../variables'

class MonthDropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedMonth: props.currentMonth,
			selectedYear: props.currentYear
		}

		this.onMonthChange = this.onMonthChange.bind(this)
		this.onYearChange = this.onYearChange.bind(this)
		this.goToMonth = this.goToMonth.bind(this)
	}

	onMonthChange(event) {
		this.setState({selectedMonth: parseInt(event.target.value)})
	}

	onYearChange(event) {
		this.setState({selectedYear: event.target.value})
	}

	goToMonth() {
		this.props.goToMonth(this.state.selectedMonth, this.state.selectedYear)
		this.props.toggleMonthDropdownModal()
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			selectedMonth: nextProps.currentMonth, 
			selectedYear: nextProps.currentYear
		})
	}

	render() {
		let startYear = (this.props.currentYear > 100) ? this.props.currentYear - 100 : this.props.currentYear
		let endYear = startYear + 200

		let yearOptions = []
		let monthOptions = []

		for (let year = startYear; year <= endYear; year++) {
			yearOptions.push(<option key={'year-opt-' + year} value={year}>{year}</option>)
		}

		months.map((month, index) => {monthOptions.push(<option key={'month-opt-' + index} value={index}>{month}</option>)})

		return (
			<div style={{display: (this.props.show === true) ? 'block' : 'none'}}>
				<div style={styles.backdrop} onClick={this.props.toggleMonthDropdownModal}></div>
				<div style={styles.modal}>
					<h4>Jump to:</h4>
					<select style={styles.dropdown} value={this.state.selectedMonth} onChange={this.onMonthChange}>
						{monthOptions}
					</select>
					<select style={styles.dropdown} value={this.state.selectedYear} onChange={this.onYearChange}>
						{yearOptions}
					</select>
					<button style={styles.button} onClick={this.goToMonth}>Jump Now</button>
				</div>
			</div>
		)
	}
}

const styles = {
	backdrop: {
		background: '#000',
		height: '100%',
		left: 0,
		opacity: '0.8',
		position: 'fixed',
		top: 0,
		width: '100%',
		zIndex: '998'
	},
	modal: {
		background: '#FFF',
		color: '#232323',
		left: '50%',
		padding: '10px 30px 20px',
		opacity: 1,
		position: 'absolute',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		width: '300px',
		zIndex: '999'
	},
	dropdown: {
		background: '#FFF',
		border: '1px solid #232323',
		borderRadius: '3px',
		color: '#232323',
		margin: '5px',
		padding: '10px'
	},
	button: {
		border: '1px solid ' + defaultStyles.primaryColor,
		borderRadius: '3px',
		background: 'transparent',
		color: defaultStyles.primaryColor,
		cursor: 'pointer',
		display: 'block',
		margin: '30px auto',
		padding: '10px 15px',
		width: '50%'
	}
}

export default MonthDropdown