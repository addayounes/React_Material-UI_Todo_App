import { Button, ButtonGroup, Chip, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react'

const Todo = ({classes, toDoObject}) => {
    return(
        <Grid container direction='column'>
            <Grid item>
                <Typography className={classes.todoHeading} variant='h6'>{toDoObject.name}</Typography>
            </Grid>
            <Grid item>
                <Typography className={classes.todo} variant='subtitle1'>{toDoObject.date}</Typography>
            </Grid>
        </Grid>
    )
}
const Task = ({toDoObject, deleteTodo, completeTodo, setReminder, editTodo}) => {
    const useStyles = makeStyles((theme) => ({
        paper: {
          padding: theme.spacing(1.5, 3),
          margin: theme.spacing(1.5),
          transition: '.15s ease-out',
          position: 'relative',
          cursor: 'pointer',
          backgroundColor: !toDoObject.completed ? 'none' : theme.palette.success.light,
          [theme.breakpoints.down('xs')]: {paddingRight: theme.spacing(1),marginInline: 0},
          '&:hover' : {
            backgroundColor: !toDoObject.completed && theme.palette.secondary.light
           }
        },
        deleteBtn: {
            marginLeft: theme.spacing(1),
            border: '1px solid' + theme.palette.error.main,
            color: theme.palette.error.main,
            '&:hover' : {
                backgroundColor: theme.palette.error.main,
                color: 'white'
            },
            [theme.breakpoints.down('sm')]: {display: 'none'}
        },
        completeBtn: {
            border: '1px solid' + theme.palette.success.main,
            color: theme.palette.success.main,
            '&:hover' : {
                backgroundColor: theme.palette.success.main,
                color: 'white'
            },
            [theme.breakpoints.down('sm')]: {display: 'none'}
        },
        editBtn: {
            '&:hover' : {
                backgroundColor: theme.palette.secondary.main,
                color: 'white'
            },
            [theme.breakpoints.down('sm')]: {display: 'none'}
        },
        todo: {
            [theme.breakpoints.down('xs')]: {marginBottom: theme.spacing(1)},
        },
        todoHeading: {
            fontWeight: 600,
            textTransform: 'capitalize'
        },
        icons: {
            display: 'none',
            [theme.breakpoints.down('sm')]: {
                display: 'inline-flex',
                margin: theme.spacing(0, 1)
            }
        },
        before: {
            '&:before': {
                content: '""',
                position: 'absolute',
                left: -1,
                top: -1,
                width: '8px',
                height: '103%',
                backgroundColor: !toDoObject.completed ? theme.palette.primary.main : theme.palette.success.main,
                borderTopLeftRadius: '4px',
                borderBottomLeftRadius: '4px'
            }
        },
        hideDone: {[theme.breakpoints.down('sm')]: {display: 'none'}},
        completeIcon: {color: theme.palette.success.main},
        deleteIcon: {color: theme.palette.error.main},
        editIcon: {color: theme.palette.secondary.main, marginRight: 0},
        alignToRight: {display: 'flex', justifyContent: 'flex-end'}
      }));
      const classes = useStyles();
    return (
        <div>
            <Paper onDoubleClick={() => !toDoObject.completed && setReminder(toDoObject.id)} variant="outlined" className={classes.paper}>
                <Grid className={`${toDoObject.reminder ? classes.before : ""} `} container alignItems="center" justify="flex-start">
                    <Grid item lg={8} sm={9} xs={10}>
                        <Todo toDoObject={toDoObject} classes={classes} />
                    </Grid>
                    <Grid className={classes.alignToRight} item lg={4} sm={3} xs={2}>
                            <ButtonGroup>
                                {!toDoObject.completed && <Button onClick={() => editTodo(toDoObject)} className={classes.editBtn} color='secondary' size="small" startIcon={<EditIcon />} variant="outlined">Edit</Button>}
                                {!toDoObject.completed && <EditIcon className={`${classes.icons} ${classes.editIcon}`} onClick={() => editTodo(toDoObject)} />}
                                {
                                !toDoObject.completed ? 
                                <Button onClick={() => completeTodo(toDoObject.id)} size="small" startIcon={<DoneIcon />} variant="outlined" className={classes.completeBtn}>Complete</Button>
                                : <Chip variant="outlined" label="Done" className={classes.hideDone} />
                                }
                                <Button onClick={() => deleteTodo(toDoObject.id)} size="small" startIcon={<DeleteIcon />} variant="outlined" className={classes.deleteBtn}>Delete</Button>
                            </ButtonGroup>
                            {
                            !toDoObject.completed && <DoneIcon onClick={() => completeTodo(toDoObject.id)} className={`${classes.icons} ${classes.completeIcon}`} />
                            }
                            <DeleteIcon onClick={() => deleteTodo(toDoObject.id)} className={`${classes.icons} ${classes.deleteIcon}`} />
                    </Grid>
                </Grid>
            </Paper>
            
        </div>
    )
}

export default Task
