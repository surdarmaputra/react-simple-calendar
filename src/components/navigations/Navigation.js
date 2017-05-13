import React from 'react'
import MonthNavigator from './MonthNavigator'
import { defaultStyles } from '../../variables'

const Navigation = (props) => {
	return (
		<div style={styles.navigation}>
			<MonthNavigator 
				currentYear={props.currentYear}
				currentMonth={props.currentMonth} 
				showPrevMonth={props.showPrevMonth}
				showNextMonth={props.showNextMonth}
				goToToday={props.goToToday}
				showMonthDropdownModal={props.showMonthDropdownModal}
				toggleMonthDropdownModal={props.toggleMonthDropdownModal}
				goToMonth={props.goToMonth} />
			<button type="button" style={styles.goToToday} onClick={props.goToToday}>Go to Today</button>
		</div>
	)
}

const styles = {
	navigation: {
		padding: '5px',
		marginBottom: '10px',
		textAlign: 'center'
	},
	goToToday: {
		border: '1px solid ' + defaultStyles.highlightColor,
		borderRadius: '3px',
		background: 'transparent',
		color: defaultStyles.highlightColor,
		cursor: 'pointer',
		display: 'inline-block',
		margin: '0 5px',
		padding: '10px 15px'
	}
}

export default Navigation