import { makeStyles, withStyles } from '@material-ui/styles/'

export const useStyles = makeStyles({

    root: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.7)',
        position: 'fixed',
        zIndex: 99,
    },

    linkText: {
        color: 'cyan',
        textDecoration: 'none',
        width: 90,
        textTransform: 'none',
    },

    statsCard: {
        backgroundColor: '#363636',
        // width: '100%',
        // height: '81%',
        // marginRight: 5,
        // display: 'flex',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // overflowY: 'scroll',
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
