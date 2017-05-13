import React from 'react'
import { days, defaultStyles } from '../../variables'

const DayHeader = (props) => {
	let style = Object.assign({}, styles.common, (props.day === 0) ? styles.holiday : {})
	return (
		<div style={style}>
			{days[props.day]}
		</div>
	)
}

const styles = {
	common: {
		background: 'transparent',
		borderBottom: '1px solid ' + defaultStyles.primaryColor,
		borderTop: '1px solid ' + defaultStyles.primaryColor,
		boxSizing: 'border-box',
		color: defaultStyles.primaryColor,
		display: 'inline-block',
		fontSize: '0.9em',
		lineHeight: '1.8em',
		overflow: 'hidden',
		padding: '5px 0',
		textAlign: 'center',
		width: 100/7 + '%'
	},
	holiday: {
		color: defaultStyles.holidayColor
	}	
}

export default DayHeader