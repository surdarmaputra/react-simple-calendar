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
	let events = [
		{ title: 'Event 1' }
	]

	return (
		<div style={style}>
			<div style={styles.content}>
				{props.date.getDate()}
			</div>
			<BlockWidget 
				date={props.date}
				events={events} 
				disabled={props.disabled}
				today={props.today}
				holiday={props.holiday}
				toggleEventList={props.toggleEventList} />
		</div>
	)
}

const styles = {
	common: {
		boxSizing: 'border-box',
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
		right: 0
	},
	holiday: {
		color: defaultStyles.holidayColor
	}
}

export default DayBlock
