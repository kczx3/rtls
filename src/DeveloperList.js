import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem, ListItemText, withStyles } from "@material-ui/core";

const styles = () => ({
    listRoot: {
        width: "100%"
    }
});

const DeveloperList = props => {
    return (
        <List className={props.classes.listRoot}>
            {props.devTeam.map((dev, i) => (
                <ListItem key={i} button>
                    <ListItemText primary={dev.name} secondary={`${dev.position} ${dev.level}`} />
                </ListItem>
            ))}
        </List>
    );
}

const mapStateToProps = ({ devTeam }) => ({
    devTeam
});

export default withStyles(styles)(connect(mapStateToProps)(DeveloperList));
