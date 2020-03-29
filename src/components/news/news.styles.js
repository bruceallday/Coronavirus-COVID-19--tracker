import { makeStyles, withStyles } from '@material-ui/styles/'

export const useStyles = makeStyles({

    root: {
        width: '65vw',
        height: '100vh',
        paddingTop: '6%',
        display: 'flex',
        flexDirection: 'row',
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
        width: '30%',
        height: '50%',
        marginLeft: '0.5%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        zIndex: 99
    },

    media: {
        height: '100%'
    },

    heading: {
        // color: 'white',
        // paddingTop: 20,
        // paddingLeft: 20,
        // fontWeight: 'lighter'
    },

    paragraphText: {
        // color: 'white',
        // padding: 20,
        // fontSize: '1.1em'
    },

    adsContainer: {
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-evenly',
        // flexWrap: 'wrap',
        // marginTop: 10,
        // backgroundColor: 'white',
        // padding: 20,
        // borderRadius: 10
    },
});
