import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Grid, Select, InputLabel, MenuItem, FormControl, Button } from '@material-ui/core';
import { positions, levels } from './constants';
import { addDeveloper } from './redux/actions';

class DeveloperForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            position: "",
            level: "",
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.name && this.state.position) {
            this.props.addDeveloper(this.state);
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField
                            label="Name"
                            name="name"
                            margin="normal"
                            fullWidth
                            onChange={this.handleChange}
                            autoComplete="off"
                            required />
                    </Grid>
                    <Grid container spacing={16}>
                        <Grid item xs={12} md={5}>
                            <FormControl fullWidth margin="normal" required>
                                <InputLabel htmlFor="dev-position">Position</InputLabel>
                                <Select
                                    onChange={this.handleChange}
                                    value={this.state.position}
                                    inputProps={{name: "position", id: "dev-position"}}>
                                    <MenuItem value=""></MenuItem>
                                    {
                                        positions.map(position =>
                                            position.available && <MenuItem key={position.key} value={position.value}>{position.value}</MenuItem>
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel htmlFor="dev-level">Level</InputLabel>
                                <Select label="Level" onChange={this.handleChange} value={this.state.level} inputProps={{name: "level", id: "dev-level"}}>
                                <MenuItem value=""></MenuItem>
                                    {
                                        levels.map(level => <MenuItem key={level.key} value={level.value}>{level.value}</MenuItem>)
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item container xs={12} md={2} alignItems="flex-end" justify="center">
                            <FormControl margin="normal">
                                <Button variant="contained" color="primary" onClick={this.handleSubmit}>Add</Button>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

export default connect(
    null,
    { addDeveloper }
)(DeveloperForm);
