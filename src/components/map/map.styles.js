import { makeStyles } from '@material-ui/styles/'

export const useStyles = makeStyles({
    map: {
        position: 'fixed',
        marginTop: '3.7%'
    },

    appBar: {
        backgroundColor: '#363636',
        marginTop: '86vh',
        marginRight: '35vw',
        height: '14vh',
        width: '65vw',
    },

    toolbar: {
        display: 'flex',
        flexDirection: 'row',


        // padding: 50,
        // justifyContent: 'flex-start',
        // justifyContent: 'space-evenly',
    },

    title:{
        margin: 20,
    }

})