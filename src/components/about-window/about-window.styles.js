import { makeStyles, withStyles } from '@material-ui/styles/'
import TextField from '@material-ui/core/TextField'

export const useStyles = makeStyles({
 
    root: {
        width: '65vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-end',
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
        width: '99.5%', 
        height: '81%', 
        marginRight: 5,
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap',
        overflowY: 'scroll',
    },

    heading: {
        color: 'white', 
        paddingTop: 20, 
        paddingLeft: 20, 
        fontWeight: 'lighter' 
    },

    paragraphText: {
        color: 'white', 
        fontSize: '1.1em'
    },

    adsContainer: { 
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        marginTop: 10, 
        backgroundColor: 'white', 
        padding: 20, 
        borderRadius: 10 
    },

    bmcButton: {
        height: 51,
        width: 217,
        padding: '7px 10px 7px 10px',
        color: 'white',
        borderWidth: 1,
        backgroundColor: '#79D6B5',
        fontSize: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        borderRadius: 5,
        boxShadow: '0px 1px 2px rgba(190, 190, 190, 0.5)'

        
    },

    '@media (max-width: 414px)': {
        root: {
            width: '100vw',
            height: '85vh',
            backgroundColor: 'rgba(0,0,0,.7)',
            justifyContent: 'center',

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