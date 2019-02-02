import React from 'react';
import { List, ListItem, ListItemText, withStyles } from "@material-ui/core";

const styles = () => ({
    listRoot: {
        width: "100%"
    }
});

const DeveloperList = props => {
    return (
        <List className={props.classes.listRoot}>
            {props.devs.map((dev, i) => (
                <ListItem key={i} button>
                    <ListItemText primary={dev.name} secondary={`${dev.position} ${dev.level}`} />
                </ListItem>
            ))}
        </List>
    );
}

export default withStyles(styles)(DeveloperList);
