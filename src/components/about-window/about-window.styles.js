import { makeStyles, withStyles } from '@material-ui/styles/'
import TextField from '@material-ui/core/TextField'

export const useStyles = makeStyles({
 
    root: {
        width: '65vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.7)',
        position: 'fixed',
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

    aboutCard: { 
        backgroundColor: '#363636', 
        width: '70%', 
        height: '60%', 
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap' 
    },

    heading: {
        color: 'white', 
        paddingTop: 20, 
        paddingLeft: 20, 
        fontWeight: 'lighter' 
    },

    paragraphText: {
        color: 'white', 
        padding: 20, 
        fontSize: '1.1em'
    },

    '@media (max-width: 414px)': {
        root: {
            width: '100vw',
            height: '85vh',
            backgroundColor: 'rgba(0,0,0,.7)',
            zIndex: 999,
            position: 'fixed',
            marginTop: '0vh'
        },

        aboutCard: {
            width: '85%',
            height: '70%',           
        },
        heading: {
            fontSize: 22,
            color: 'white',
            fontWeight: 'lighter'
        },

        paragraphText: {
            color: 'white',
            padding: 10,
            fontSize: '1.1em'
        },
    },

    '@media (max-width: 375px)': {
        root: {
            // height: '85vh',

        },
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