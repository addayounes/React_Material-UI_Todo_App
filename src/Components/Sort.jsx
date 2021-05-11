import React, { useState } from 'react'
import SortIcon from '@material-ui/icons/Sort';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Grid, List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper, Typography } from '@material-ui/core';


const DropDownItem = ({itemText, clickFunc, funcArg, ListIcon}) => {
    return(
        <ListItem button onClick={() => clickFunc(funcArg)}>
            <ListItemIcon>
                <ListIcon />
            </ListItemIcon>
            <ListItemText primary={itemText} />
        </ListItem>
    )
}

const SortList = ({cls, sortTodosPer}) => {
    return (
        <List className={cls}>
            <DropDownItem itemText="Date" clickFunc={sortTodosPer} funcArg="Date" ListIcon={DateRangeIcon} />
            <DropDownItem itemText="Reminder" clickFunc={sortTodosPer} funcArg="Reminder" ListIcon={AddAlertIcon} />
            <DropDownItem itemText="Completed" clickFunc={sortTodosPer} funcArg="Completed" ListIcon={CheckCircleIcon} />
        </List>
    )
}

const Sort = ({Todo, sortString, forceUpdate}) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleSortClick = () => {
        setIsOpen(!isOpen)
    }
    const sortTodosPer = (s) => {
        if(s==='Date') Todo = Todo.sort((a, b) => new Date(a.date) - new Date(b.date))
        if(s==='Completed') Todo.sort((a, b) => b.completed - a.completed)
        if(s==='Reminder') Todo.sort((a, b) => b.reminder - a.reminder)
        setIsOpen(false)
        forceUpdate() // to update the component after sorting tasks so it displays the sorted tasks
    }
    const useStyles = makeStyles(theme => ({
        sortPaper: {
            margin: theme.spacing(0, 1.5),
            padding: theme.spacing(1, 2),
            [theme.breakpoints.down('xs')]: {margin: 0},
            position: 'relative',
        },
        sort: {
            display: 'flex',
            borderRadius: '4px',
            padding: theme.spacing(0, 1),
            cursor: 'pointer',
            transition: '.1s ease-out',
            '&:hover': {
                backgroundColor: theme.palette.secondary.light
            }
        },
        sortTypo: {
            marginRight: theme.spacing(1),
            fontSize: '14px',
            fontWeight: 500,
            marginTop: theme.spacing(.2),
            color: theme.palette.secondary.main
        },
        todoCount: {
            fontWeight: 500,
            color: theme.palette.secondary.main
        },
        sortIcon: {
            color: theme.palette.secondary.main
        },
        sortList: {
            width: '100%',
            maxWidth: 200,
            position: 'absolute',
            right: 0,
            top: 42,
            zIndex: '999',
            backgroundColor: theme.palette.secondary.light,
            borderRadius: '4px',
            display: isOpen ? 'block' : 'none'
        }
    }))
    const classes = useStyles()
    const length = Todo.length
    return (
        <>
            <Paper className={classes.sortPaper} variant="outlined">
                <Grid container direction="row" justify="space-between">
                    <Grid item>
                        <Typography className={classes.todoCount}>
                            {`${length} ${length===1 || length===0 ? "Task" : "Tasks"}`} {`${sortString==='Doing' ? 'To Do' : sortString==='Complete' ? 'Completed' : ''}`}
                            </Typography>
                    </Grid>
                    <Grid item className={classes.sort} onClick={handleSortClick}>
                        <Typography className={classes.sortTypo}>Sort By</Typography>
                        <SortIcon className={classes.sortIcon}/>
                    </Grid>
                </Grid>
                <SortList sortTodosPer={sortTodosPer} cls={classes.sortList} />
            </Paper>
        </>
    )
}

export default Sort
