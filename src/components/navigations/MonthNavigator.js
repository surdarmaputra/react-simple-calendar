import React from 'react'
import { months } from '../../variables'

const MonthNavigator = (props) => {
	return (
		<div style={styles.monthNavigator}>
			<button style={styles.navigationButton} onClick={props.showPrevMonth}>&lt;</button>
			<div style={styles.monthDropdown}>{months[props.currentMonth]} {props.currentYear}</div>
			<button style={styles.navigationButton} onClick={props.showNextMonth}>&gt;</button>
		</div>
	)
}

const styles = {
	monthNavigator: {
		display: 'inline-block',
		margin: '0 5px'
	},
	navigationButton: {
		display: 'inline-block',
		padding: '5px 10px',
		margin: '0 5px',
		cursor: 'pointer'
	},
	monthDropdown: {
		display: 'inline-block',
		textAlign: 'center',
		width: '150px'
	}
}

export default MonthNavigator