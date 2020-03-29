import { makeStyles } from '@material-ui/styles/'

export const useStyles = makeStyles({
    root: {
        width: 500,
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '3%',
        marginLeft: '55%',
        zIndex: 9,
    },

    navIcon: {
        color: '#363636',
        width: 40,
        height: 40,
    },
});