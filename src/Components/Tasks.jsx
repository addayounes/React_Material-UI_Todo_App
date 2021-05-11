import { Grid, makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import SortTasks from './SortTasks';
import Task from './Task';
import NoTodo from "./NoTodo"
import Sort from './Sort';


const Tasks = ({toDos, sortTodos, deleteTodo, completeTodo, setReminder, editTodo, sortString}) => {
    const useStyles = makeStyles((theme) => ({
        tasksPaper: {
          padding: theme.spacing(2, 1),
          margin: theme.spacing(2, 0),
          maxHeight: '78vh',
          minHeight: '78vh',
          [theme.breakpoints.up('sm')]: {overflowY: 'auto'},
          [theme.breakpoints.down('sm')]: {
            overflowY: 'auto',
            maxHeight: 'fit-content'
          }
        },
        sortTasks: {
            margin: theme.spacing(1.5),
            [theme.breakpoints.down('xs')]: {marginInline: 0}
        }
      }));
      const classes = useStyles();
    return (
        <>
            <Paper variant="outlined" className={classes.tasksPaper}>
                <Grid container direction='column'>
                    <Grid item>
                        <SortTasks sortTodos={sortTodos} Class={classes.sortTasks} />
                    </Grid>
                    <Grid item>
                        <Sort Todo={toDos} sortString={sortString} />
                    </Grid>
                    <Grid item>
                        {
                            toDos.length > 0 ?
                            toDos.map(todo => {
                                    return(
                                          <Task editTodo={editTodo} setReminder={setReminder} key={todo.id} toDoObject={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
                                )
                            }) :
                            <NoTodo />
                        }
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default Tasks
