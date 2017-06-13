import React from 'react'
import { defaultStyles } from '../../variables'

const BlockWidget = (props) => {
	let style = Object.assign({}, 
		styles.common, 
		(props.disabled) ? styles.disabled : styles.active, 
		(props.today) ? styles.today : {},
		(props.holiday) ? styles.holiday : {}
	)
	let eventCount = props.events.length

	return (
		<div style={style}>
			{eventCount} event{eventCount > 1 ? 's' : ''}
		</div>
	)
}

const styles = {
	common: {
		border: '1px solid  ' + defaultStyles.borderColor,
		borderRadius: '50px',
		bottom: '0',
		boxSizing: 'border-box',
		color: defaultStyles.borderColor,
		display: 'inline-block',
		fontSize: '0.7em',
		margin: '5px',
		padding: '3px 8px',
		position: 'absolute',
		right: '0',
		zIndex: '2'
	},
	active: {
		border: '1px solid ' + defaultStyles.primaryColor,
		color: defaultStyles.primaryColor
	},
	today: {
		border: '1px solid ' + defaultStyles.highlightColor,
		color: defaultStyles.highlightColor
	},
	disabled: {
		border: '1px solid #F2F2F2',
		color: '#D2D2D2'
	},
	holiday: {	
		border: '1px solid ' + defaultStyles.holidayColor,
		color: defaultStyles.holidayColor
	}

}

export default BlockWidget
