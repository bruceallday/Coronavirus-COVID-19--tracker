import { makeStyles, withStyles } from '@material-ui/styles/'
import TextField from '@material-ui/core/TextField/'

export const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: '65vw',
        marginTop: '10vh',
        width: '35vw'
    },

    textField:{
        width: '33vw',
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
        fontSize: "1.7em",
        padding: 0
    },

    appBar: {
        backgroundColor:'#363636', 
        height: '9.3vh' 
    },


    '@media (max-width: 414px)': {
        root: {
            marginLeft: 0,
            width: '100vw',
            padding: 5,
        },

    },

    '@media (max-width: 1024px)': {
        title: {
            fontSize: 36,
            padding: 5
        },

        toolbar: {
            padding: 5,
        },
    },

    '@media (max-width: 1400px)': {
        title: {
            fontSize: '3.2em',
            padding: 5
        },

        toolbar: {
            padding: 5,
        },
    },

});

//CssTextField extends TextField with extra styles
export const CssTextField = withStyles({
    root: {

        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInputLabel-root': {
            color: '#999999',
            fontSize: '1.6em',
            fontWeight:1,
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


