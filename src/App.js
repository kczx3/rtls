import React, { Component } from 'react';
import { CssBaseline, Grid, Divider, Paper, withStyles } from "@material-ui/core";
import DeveloperForm from './DeveloperForm';
import DeveloperList from './DeveloperList';

import { devTeam } from './constants';

const styles = (theme) => ({
    root: {
        ...theme.mixins.gutters(),
        marginTop: theme.spacing.unit * 3,
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        minWidth: (2/3)*100 + "%"
    }
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devTeam
        };
    }

    handleNewDev = ({name, position, level}) => {
        this.setState({
            devTeam: [
                ...this.state.devTeam,
                {name, position, level}
            ]
        });
    }

    render() {
        return (
            <CssBaseline>
                <Grid container justify="center" >
                    <Paper className={this.props.classes.root}>
                        <DeveloperForm />
                        <Divider />
                        <Grid container item xs={12}>
                            <DeveloperList />
                        </Grid>
                    </Paper>
                </Grid>
            </CssBaseline>
        );
    }
}

export default withStyles(styles)(App);
