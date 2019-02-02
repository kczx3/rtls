import React from 'react';
import { CssBaseline, Grid, Divider, Paper, withStyles } from "@material-ui/core";
import DeveloperForm from './DeveloperForm';
import DeveloperList from './DeveloperList';

const styles = (theme) => ({
    root: {
        ...theme.mixins.gutters(),
        marginTop: theme.spacing.unit * 3,
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        minWidth: (2/3)*100 + "%"
    }
});

const App = ({classes}) => (
    <CssBaseline>
        <Grid container justify="center" >
            <Paper className={classes.root}>
                <DeveloperForm />
                <Divider />
                <Grid container item xs={12}>
                    <DeveloperList />
                </Grid>
            </Paper>
        </Grid>
    </CssBaseline>
);

export default withStyles(styles)(App);
