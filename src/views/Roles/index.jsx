import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Custom components


// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  }
});

class Roles extends Component {
    render() {
        const { classes } = this.props;
        return (
            <DashboardLayout title="Roles">
                <div className={classes.root}>
                <Grid
                    container
                    spacing={4}
                ></Grid>
                    <h2>Hello roles</h2>
                </div>
            </DashboardLayout>
        );
    }
}

export default withStyles(styles)(Roles);