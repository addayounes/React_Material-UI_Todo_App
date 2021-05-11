import { Container, CssBaseline, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { useState } from "react";
import AddTaskForm from "./Components/AddTaskForm";
import EditTodo from "./Components/EditTodo";
import Tasks from "./Components/Tasks";

function App() {

  const [openEdit, setOpenEdit] = useState(false)
  const [editValue, setEditValue] = useState('')
  const [editableObjct, setEditableObjct] = useState({})
  const editTodo = (obj) => {
      setOpenEdit(true)
      setEditValue(obj.name)
      setEditableObjct(obj)
  }

  const [Todo, setTodo] = useState([
    {id: 1, name: 'Workout For 30 Minutes', date: '2021-05-06T21:45', reminder: true, completed: false},
    {id: 2, name: '1', date: '2025-05-06T23:45', reminder: true, completed: false},
    {id: 3, name: '2', date: '2019-05-06T22:35', reminder: true, completed: false},
    {id: 4, name: '3', date: '2099-05-06T11:45', reminder: true, completed: false},
  ])

  const [sort, setSort] = useState('All')

  let toDo = []

  const sortTodos = (s) => {
    setSort(s)
  }
  
  if(sort === 'All') toDo = Todo;
  else if (sort === 'Doing') toDo = Todo.filter(todo => !todo.completed);
  else if(sort === 'Complete') toDo = Todo.filter(todo => todo.completed);

  const deleteTodo = (id) => {
    setTodo(Todo.filter((todo) => todo.id!==id))
  }
  const addTodo = (newTodoData) => {
    const id = Math.floor(Math.random() * 1000)
    const newTodo = {id, ...newTodoData}
    setTodo([...Todo, newTodo])
  }
  const completeTodo = (id) => {
    setTodo(Todo.map(todo => todo.id===id ? {...todo, completed: true} : todo))
  }

  const setReminder = (id) => {
    setTodo(Todo.map(todo => todo.id===id ? {...todo, reminder: !todo.reminder} : todo))
  }

  const useStyles = makeStyles((theme) => ({
    appPaper: {
      padding: theme.spacing(1, 3),
      margin: theme.spacing(6, 0),
      [theme.breakpoints.down('xs')]: {padding: theme.spacing(1, 1)}
    },
    noteTypo: {
      opacity: .7,
      fontWeight: 500,
      marginLeft: theme.spacing(2)
    },
    hideCaption: {
      [theme.breakpoints.down('sm')]: {display: 'none'}
    }
  }));
  const classes = useStyles();
  return (
    <>
      <Container component="main" maxWidth="lg">
        <CssBaseline>
          <Paper className={classes.appPaper} >
            <Grid  spacing={2} container>
              <Grid lg={4} sm={12} xs={12} item>
                <AddTaskForm addTodo={addTodo} />
                <Typography className={classes.noteTypo + ' ' + classes.hideCaption} variant="caption" >Double Click On Todo To Toggle Reminder</Typography>
              </Grid>
              <Grid lg={8} sm={12} xs={12} item>
                <EditTodo
                editableObjct={editableObjct}
                Todo={Todo}
                setTodo={setTodo}
                editValue={editValue}
                setEditValue={setEditValue}
                openEdit={openEdit}
                setOpenEdit={setOpenEdit}
                />
                <Tasks
                 editTodo={editTodo}
                 setReminder={setReminder}
                 completeTodo={completeTodo}
                 deleteTodo={deleteTodo}
                 sortTodos={sortTodos}
                 toDos={toDo}
                 sortString={sort}
                 />
              </Grid>
            </Grid>
          </Paper>
        </CssBaseline>
      </Container>
    </>
  );
}

export default App;
