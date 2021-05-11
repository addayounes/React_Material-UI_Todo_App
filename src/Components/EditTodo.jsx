import { Button, Dialog, DialogContent, DialogTitle, Grid, makeStyles, Snackbar, TextField, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import React, { useState } from 'react'

const EditTodo = ({openEdit, editValue, setEditValue, setOpenEdit,Todo , setTodo, editableObjct}) => {
    const [SnackBar, setSnackBar] = useState(false)
    const handleClick = () => {
        setEditValue(editValue)
        if(editValue==='') {
            setSnackBar(true);
            setTimeout(() => setSnackBar(false), 2000);
            return
        }
        setOpenEdit(false)
        setTodo(Todo.map((todo) => todo.id===editableObjct.id ? { ...todo, name: editValue} : todo))
    }
    const handleCloseDialog = () => {
        setOpenEdit(false)
    }
    const useStyles = makeStyles((theme) => ({
        dialog: {padding: theme.spacing(2)},
        btns: {marginTop: theme.spacing(2)},
        btnMargin: {marginLeft: theme.spacing(1)},
        input: {width: '100%'},
        Snackbar: {backgroundColor: theme.palette.error.main}
    }))
    const classes = useStyles()
    const theme = useTheme()
    const isFullScreen = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Dialog
          open={openEdit}
          fullScreen={isFullScreen}
          aria-labelledby="responsive-dialog-title"
          fullWidth
          >
            <DialogTitle id="responsive-dialog-title">Edit Todo</DialogTitle>
            <DialogContent className={classes.dialog}>
                <Grid container direction="column">
                    <Grid item>
                        <TextField
                        onChange={(e) => setEditValue(e.target.value)}
                        value={editValue} label="Todo"
                        className={classes.input}
                        variant="outlined"
                        />
                    </Grid>
                    <Grid item className={classes.btns}>
                            <Button onClick={handleClick} color='primary' variant="contained" disableElevation>Finish</Button>
                            <Button className={classes.btnMargin} onClick={handleCloseDialog} color='secondary' variant="contained" disableElevation>Cancel</Button>
                    </Grid>
                </Grid>
            </DialogContent>
            <Snackbar
                ContentProps={{className: classes.Snackbar}}
                anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                open={SnackBar}
                message="Todos Name Cannot Be Empty"
                className={classes.Snackbar}
            />
        </Dialog>
    )
}

export default EditTodo
