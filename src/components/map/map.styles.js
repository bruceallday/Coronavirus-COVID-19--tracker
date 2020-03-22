import { makeStyles } from '@material-ui/styles/'

export const useStyles = makeStyles({
    map: {
        position: 'fixed',
        marginTop: '3.7%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    appBar: {
        backgroundColor: '#363636',
        marginTop: '49%',
        marginRight: '35%',
        height: '100%',
        width: '66%',
        position: 'fixed'
    },

    toolbar: {
        display: 'flex',
        flexDirection: 'row',
    },

    title:{
        margin: 20,
        fontSize: 28,
        fontWeight: 'lighter'
    },

    loader: { 
        marginLeft: '31vw', 
        marginTop: '33vh' 
    },

    aboutWindow: {
        backgroundColor: '#363636',
        width: '65vw',
        height: '80vh', 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5,
        position: 'absolute',
        zIndex: 99
    }
})