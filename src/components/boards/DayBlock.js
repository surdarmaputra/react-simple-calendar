import React from 'react'

const DayBlock = (props) => {
	let style = Object.assign({}, styles.common, (props.disabled) ? styles.disabled : styles.active, (props.today) ? styles.today : {})
	return (
		<div style={style}>
			{props.date.getDate()}
		</div>
	)
}

const styles = {
	common: {
		display: 'inline-block',
		height: '100px',
		lineHeight: '100px',
		padding: '5px 0',
		textAlign: 'center',
		width: (100/7 - 0.2) + '%'
	},
	active: {
		border: '1px solid #3F8CA6',
		color: '#3F8CA6'
	},
	today: {
		border: '1px solid #DD9A53',
		color: '#DD9A53'
	},
	disabled: {
		border: '1px solid #A5B4B9',
		color: '#A5B4B9'
	}
}

export default DayBlock