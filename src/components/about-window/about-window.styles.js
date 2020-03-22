import { makeStyles, withStyles } from '@material-ui/styles/'
import TextField from '@material-ui/core/TextField'

export const useStyles = makeStyles({

    root: {
        backgroundColor: '#363636',
        width: '65vw',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.7)',
        position: 'absolute',
        zIndex: 99,
    },
    textfieldInput: {
        color: 'white',
        fontSize: "1.5em",
        width: '250%',
        marginBottom: 15
    },
    linkText: {
        color: 'cyan',
        textDecoration: 'none',
        width: 90,
        textTransform: 'none',
    },

});

export const CssTextField = withStyles({
    root: {

        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInputLabel-root': {
            color: '#999999',
            fontSize: '1.6em',
            fontWeight: 1,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },

        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    },
})(TextField);