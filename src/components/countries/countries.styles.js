import { makeStyles } from '@material-ui/styles/'

export const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: '1500vh',
        width: '37vw',
        position: 'relative',
        marginLeft: '60vw',
        marginTop: 55,
    },

    textField:{
        width: '36vw',
        position: 'fixed',
        backgroundColor: 'white',
        marginLeft: "60vw",
        zIndex: '999'
    },
});
