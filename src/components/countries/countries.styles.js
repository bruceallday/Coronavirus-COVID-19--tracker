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
        
        width: '37vw',
        position: 'fixed',
        marginLeft: "60.5vw",
        zIndex: '999'
    },
});

export const CssTextField = withStyles({
    root: {
        backgroundColor: '#363636',
        borderRadius: 5,

        '& label.Mui-focused': {
            color: 'white',
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
