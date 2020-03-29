import { makeStyles, withStyles } from '@material-ui/styles/'

export const useStyles = makeStyles({

    root: {
        width: '65vw',
        height: '85vh',
        paddingTop: '6%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'rgba(0,0,0,.7)',
        position: 'fixed',
        zIndex: 9,
        overflowY: 'scroll',
    },

    linkText: {
        color: 'cyan',
        textDecoration: 'none',
        width: 90,
        textTransform: 'none',
    },

    newsCard: {
        backgroundColor: '#363636',
        width: '32%',
        height: '65%',
        margin: '0.5%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        zIndex: 99,
    },

    media: {
        height: '100%'
    },

    icon: { 
        width: 30, 
        height: 30, 
        color: 'white', 
        position: 'fixed', 
        zIndex: 999, 
        marginRight: '62%' 
    },

    heading: { 
        color: 'white', 
        padding: 5, 
        fontSize: 21 
    },

    paragraphText: { 
        color: 'white', 
        fontSize: 17, 
        fontWeight: 'lighter', 
        fontStyle: "italic" 
    },
   
    adsContainer: {
        
    }

});
