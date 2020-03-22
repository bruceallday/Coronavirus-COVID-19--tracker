import { makeStyles, withStyles } from '@material-ui/styles/'
import TextField from '@material-ui/core/TextField/'

export const useStyles = makeStyles(theme => ({
    map: {
        position: 'fixed',
        marginTop: '3.7%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    // appBar: {
    //     backgroundColor: '#363636',
    //     marginTop: '49%',
    //     marginRight: '35%',
    //     height: '100%',
    //     width: '66%',
    //     position: 'fixed'
    // },

    // toolbar: {
    //     display: 'flex',
    //     flexDirection: 'row',
    // },

    // title:{
    //     margin: 20,
    //     fontSize: 28,
    //     fontWeight: 'lighter'
    // },

    loader: { 
        marginLeft: '31vw', 
        marginTop: '33vh' 
    },

    // aboutWindow: {
    //     backgroundColor: '#363636',
    //     width: '65vw',
    //     height: '80vh', 
    //     display: 'flex', 
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: 'rgba(0,0,0,.7)',
    //     position: 'absolute',
    //     zIndex: 99
    // },

    navIconDiv: { 
        position: 'absolute', 
        marginTop: 45, 
        marginLeft: 10, 
        zIndex: 999 
    },

    navIcon: { 
        color: '#363636', 
        width: 40, 
        height: 40, 
    },

    textfieldInput: {
        color: 'white',
        fontSize: "1.7em",
        padding: 0
    },

    textField: {
        width: 300,
    },

})
)
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