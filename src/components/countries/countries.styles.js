import { makeStyles, withStyles } from '@material-ui/styles/'
import TextField from '@material-ui/core/TextField/'

export const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: '65vw',
        marginTop: 85,
    },

    textField:{
        width: '32.3vw',
    },

    title: {
        padding: 25,
    },

    toolbar: { 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    textfieldInput: {
        color: 'white',
        fontSize: "1.5em",
    },

});

//CssTextField extends TextField with extra styles
export const CssTextField = withStyles({
    root: {

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


