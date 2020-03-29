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

    loader: { 
        marginLeft: '31vw', 
        marginTop: '33vh' 
    },

    menuContainer: {
        width: 500,
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '3%',
        marginLeft: '53%',
        zIndex: 9,

    },

    navIcon: { 
        color: '#363636',
        width: 40, 
        height: 40, 
    },

    textfieldInput: {
        color: 'white',
        fontSize: "1.7em",
        padding: 0,
    },

    textField: {
        width: 300,
    },

    '@media (max-width: 414px)': {
        chart: {
            display: 'none',
        },

        loader: {
            marginLeft: '41vw',
            marginTop: '40vh'
        },


        navIconDiv: {
           display: 'none'
        },

    },

    '@media (max-width: 375px)': {
        root: {

        },
    },
    
})
)
