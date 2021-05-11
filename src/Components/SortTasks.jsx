import { makeStyles, Paper, Tab, Tabs } from '@material-ui/core'
import React from 'react'

const SortTasks = ({Class, sortTodos}) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Paper className={Class} variant='outlined'>
            <Tabs value={value} onChange={handleChange} variant="fullWidth" indicatorColor="primary" textColor="primary">
                <Tab name='1' onClick={() => sortTodos('All')} label="All"></Tab>
                <Tab name='2' onClick={() => sortTodos('Doing')} label="Doing"></Tab>
                <Tab name='3' onClick={() => sortTodos('Complete')} label="Complete"></Tab>
            </Tabs>
        </Paper>
    )
}

export default SortTasks
