import { Button, Checkbox, FormControlLabel, Grid,
     makeStyles, Paper, Slide, Snackbar, TextField, Typography } from '@material-ui/core'

import React, { useState } from 'react'

const AddTaskForm = ({addTodo}) => {

    const [name , setName] = useState('')
    const [date , setDate] = useState('')
    const [reminder , setReminder] = useState(false)
    const [completed , setCompleted] = useState(false)
    const [SnackBar , setSnackBar] = useState(false)

    const submitTask = (e) => {
        e.preventDefault()

        if (!name || !date) {
            setSnackBar(true)
            setTimeout(() => setSnackBar(false), 3000)
            return
        }
        addTodo({ name, date, reminder, completed })
        setSnackBar(false)
        setName('')
        setDate('')
        setReminder(false)
  }

    function SlideTransition(props) {
        return <Slide {...props} direction="right" />;
    }

    const useStyles = makeStyles((theme) => ({
        formPaper: {
            padding: theme.spacing(2),
            margin: theme.spacing(2, 0)
        },
        widthStrech: {
            margin: theme.spacing(1.5, 0),
            width: '100%',
            textTransform: 'capitalize'
        },
        h5: {
            margin: theme.spacing(2, 0, 2, 2),
            fontWeight: 600,
            color: theme.palette.secondary.main
        },
        Snackbar: {backgroundColor: theme.palette.error.main}
    }))
    const classes = useStyles()
    return (
        <Paper className={classes.formPaper} variant='outlined'>
            <Grid container direction="column">
                <Grid item>
                    <Typography className={classes.h5} variant='h5'>Add Todo</Typography>
                </Grid>
                <Grid item>
                    <TextField onChange={(e) => setName(e.target.value)} value={name} className={classes.widthStrech} label="Todo" placeholder="ex : Workout 30 minutes" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField 
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                        className={classes.widthStrech}
                        label="Todo Date & Time"
                        type="datetime-local"
                        InputLabelProps={{shrink: true}}
                    />
                </Grid>
                <Grid item>
                    <FormControlLabel className={classes.widthStrech} control={<Checkbox onChange={(e) => setReminder(e.currentTarget.checked)} checked={reminder} value={reminder} color='primary' />} label="Set Reminder"/>
                </Grid>
                <Grid item>
                    <Button onClick={submitTask} color='primary' variant='contained' className={classes.widthStrech} disableElevation>Add Todo</Button>
                    <Snackbar
                        ContentProps={{className: classes.Snackbar}}
                        anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                        open={SnackBar}
                        message="Please Add A Todo & Date"
                        TransitionComponent={SlideTransition}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default AddTaskForm
