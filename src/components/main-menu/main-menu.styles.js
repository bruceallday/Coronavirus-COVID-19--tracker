import { makeStyles } from '@material-ui/styles/'

export const useStyles = makeStyles({
    root: {
        // backgroundColor: 'red',
        width: '50%',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '3%',
        zIndex: 9,
        // marginLeft: '50%',

        //MAPGL // MAPBOX
        marginLeft: '15%',

       
    },

    navIcon: {
        color: '#363636',
        width: 40,
        height: 40,
    },

    '@media (max-width: 1600px)': {
        root: {
            width: '50%',
            position: 'absolute',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: '3%',
            marginLeft: '50%',
            zIndex: 9,
        },
    },

    '@media (max-width: 1200px)': {
        root: {
            marginTop: '5%',
        },
    },
    '@media (max-width: 772px)': {
        root: {
            marginTop: '6%',
        },
    }
});