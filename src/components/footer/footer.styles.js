import { makeStyles, withStyles } from '@material-ui/styles/'

export const useStyles = makeStyles({

    appBar: {
        backgroundColor: '#363636',
        marginTop: '85vh',
        marginRight: '35%',
        height: '17vh',
        width: '66%',
        position: 'fixed'
    },

    toolbar: {
        display: 'flex',
        flexDirection: 'row',
    },

    title: {
        margin: 20,
        fontSize: 28,
        fontWeight: 'lighter'
    },

    '@media (max-width: 414px)': {

        appBar: {
            marginTop: 0,
            marginRight: 0,
            height: '25vh',
            width: '100%',
            position: 'fixed'
        },
    },

    '@media (max-width: 1024px)': {
        appBar: {
            marginTop: '82vh',
            height: '18vh',
            padding: 9
        },
        title: {
            margin: 20,
            fontSize: 22,
            fontWeight: 'lighter'
        },
       
    },

    '@media (max-width: 1215)': {
        appBar: {
            padding: 10
        }
    },

    '@media (max-width: 1305px)': {
        title: {
            padding: 2,
            margin: 10,
        },
    },

    '@media (max-width: 1400px)': {
        title: {
            fontSize: '1.8em',
            padding: 5,
        },
    },

});