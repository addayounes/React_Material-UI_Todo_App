import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const NoTodo = () => {
    const useStyles = makeStyles(theme => ({
        noTodo: {
            fontWeight: 600,
            display: 'flex',
            justifyContent: 'center',
            marginTop: theme.spacing(1.5),
            opacity: .7
       }
    }))
    const classes = useStyles()
    return (
        <Typography className={classes.noTodo}>
            Todos will show up here when you add them
        </Typography>
    )
}

export default NoTodo
