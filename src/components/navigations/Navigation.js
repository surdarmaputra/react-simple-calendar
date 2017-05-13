import React from 'react'
import MonthNavigator from './MonthNavigator'

const Navigation = (props) => {
	return (
		<div style={styles.navigation}>
			<MonthNavigator 
				currentYear={props.currentYear}
				currentMonth={props.currentMonth} 
				showPrevMonth={props.showPrevMonth}
				showNextMonth={props.showNextMonth}
				goToToday={props.goToToday}/>
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
		display: 'inline-block',
		margin: '0 5px',
		padding: '5px 10px'
	}
}

export default Navigation