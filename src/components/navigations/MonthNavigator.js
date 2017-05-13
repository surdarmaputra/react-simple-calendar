import React from 'react'
import { months, defaultStyles } from '../../variables'

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
		margin: '0'
	},
	navigationButton: {
		border: '1px solid ' + defaultStyles.primaryColor,
		background: 'transparent',
		borderRadius: '3px',
		color: defaultStyles.primaryColor,
		cursor: 'pointer',
		display: 'inline-block',
		margin: '0',
		padding: '10px 15px',
	},
	monthDropdown: {
		color: defaultStyles.primaryColor,
		display: 'inline-block',
		padding: '10px 0',
		textAlign: 'center',
		width: '150px'
	}
}

export default MonthNavigator