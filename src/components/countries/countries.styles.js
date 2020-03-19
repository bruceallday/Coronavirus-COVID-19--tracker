import { makeStyles, withStyles } from '@material-ui/styles/'
import TextField from '@material-ui/core/TextField/'

export const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: '65vw',
        marginTop: 80,
    },

    textField:{
        width: '29vh',
    },

    title: {
        padding: 25,
    },

    toolbar: { 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

