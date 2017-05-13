import React from 'react'
import { days } from '../../variables'

const DayHeader = (props) => {
	return (
		<div style={style}>
			{days[props.day]}
		</div>
	)
}

const style = {
	border: '1px solid #3F8CA6',
	display: 'inline-block',
	padding: '5px 0',
	textAlign: 'center',
	width: (100/7 - 0.2) + '%'
}

export default DayHeader