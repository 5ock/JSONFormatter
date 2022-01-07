import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import './App.css'

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '20px',
		flexGrow: 1,
	},
	block: {
		textAlign: 'center',
		marginBottom: '10px'
	},
	textareaStyle: {
		width: '80%',
		resize: 'vertical'
	},
}))

const App = (props) => {
	const { id } = props
	const jsonData = useRef()
	const classes = useStyles()
	const [ jsonFormatted, setJsonFormatted ] = useState()

	const handleFormat = () => {
		if(typeof JSON.parse(jsonData.current) === 'object')
		setJsonFormatted(JSON.stringify(JSON.parse(jsonData.current), null, 4))
	}

	return (<div id={id}>
		<Grid container className={classes.root}>
        	<Grid item xs={12} className={classes.block}>
				<textarea className={classes.textareaStyle} onChange={ v => jsonData.current = v.target.value } rows='5' />
			</Grid>
        	<Grid item xs={12} className={classes.block}>
				<Button variant="contained" color="primary" onClick={handleFormat}>Process</Button>
			</Grid>	
        	<Grid item xs={12} className={classes.block}>
				<textarea className={classes.textareaStyle} rows='40' value={jsonFormatted} />
			</Grid>
		</Grid>
	</div>)
}

App.propTypes = {
	id: PropTypes.string
}

App.defaultProps = {
	id: 'g-json-format'
}

export default App;
