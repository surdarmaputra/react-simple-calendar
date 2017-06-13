import React from 'react'
import { defaultStyles } from '../../variables'
import BlockWidget from './BlockWidget'

const DayBlock = (props) => {
	let style = Object.assign({}, 
		styles.common, 
		(props.disabled) ? styles.disabled : styles.active, 
		(props.today) ? styles.today : {},
		(props.holiday) ? styles.holiday : {}
	)
	
	let blockWidget = (typeof props.events !== 'undefined' && props.events !== null && props.events.constructor === Array) ? <BlockWidget 
				date={props.date}
				events={props.events} 
				disabled={props.disabled}
				today={props.today}
				holiday={props.holiday}
				onDateClick={props.onDateClick} /> : '';


	return (
		<div style={style} onClick={() => (typeof props.onDateClick !== 'undefined' && props.onDateClick !== null) ? props.onDateClick(props.date, props.events) : {}}>
			<div style={styles.content}>
				{props.date.getDate()}
			</div>
			{blockWidget}
		</div>
	)
}

const styles = {
	common: {
		boxSizing: 'border-box',
		cursor: 'pointer',
		display: 'inline-block',
		marginBottom: '-5px',
		overflow: 'hidden',
		padding: '5px 0',
		paddingTop: 100/7/2 + '%',
		position: 'relative',
		textAlign: 'left',
		width: 100/7 + '%'
	},
	active: {
		border: '1px solid ' + defaultStyles.borderColor,
		color: defaultStyles.primaryColor
	},
	today: {
		border: '1px solid ' + defaultStyles.highlightColor,
		color: defaultStyles.highlightColor,
		zIndex: 1
	},
	disabled: {
		background: '#F8F8F8',
		border: '1px solid #F2F2F2',
		color: '#D2D2D2'
	},
	content: {
		position: 'absolute',
		padding: '5px',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0
	},
	holiday: {
		color: defaultStyles.holidayColor
	}
}

export default DayBlock
