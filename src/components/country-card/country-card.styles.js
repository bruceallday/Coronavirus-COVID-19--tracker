import { makeStyles } from '@material-ui/styles/'

export const useStyles = makeStyles({
    root: {
        width: '30vh',
        height: '17vh',
        margin: 10,
        padding: 5,
        color: 'white',
        backgroundColor: '#363636',
    },
    '@media (min-width: 1024px)': {
        root: {
            width: "35vw",
            height: '21vh',
        }
    },
    '@media (min-width: 1366px)': {
        root: {
            width: "17vw",
            height: '17vh',
        }
    },
});