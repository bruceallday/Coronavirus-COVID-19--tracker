import { makeStyles, withStyles } from '@material-ui/styles/'
import TextField from '@material-ui/core/TextField/'

export const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '40%',
        position: 'relative',
        marginLeft: '60vw',
        marginTop: 55,
    },

    textField:{
        width: '38vw',
        position: 'fixed',
        color: 'white',
        marginLeft: "60vw",
        zIndex: '999'
    },
});

export const CssTextField = withStyles({
    root: {
        backgroundColor: 'white',
        borderRadius: 5,

        '& label.Mui-focused': {
            color: '#363636',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#363636',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#363636',
            },
            '&:hover fieldset': {
                borderColor: '#363636',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#363636',
            },
        },
    },
})(TextField);
