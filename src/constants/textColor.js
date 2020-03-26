import { makeStyles } from '@material-ui/styles/'

export const textStyles = makeStyles({

    linkText: {
        color: 'cyan',
        textDecoration: 'none',
        width: 90,
        textTransform: 'none',
    },

    redtext: {
        color: '#F8333C',
    },

    yellowText: {
        color: '#FCAB10',
    },

    greenText: {
        color: '#44AF69',
    },

    totalsText: {
        fontWeight: 'lighter',
        marginLeft: '4.5%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly', 
        alignItems: 'center' 
    },

    '@media (max-width: 414px)': {
        totalsText: {
            fontWeight: 'lighter',
            marginLeft: 0,
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
        },
    },


    '@media (max-width: 1024px)': {
        totalsText: {
            fontWeight: 'lighter',
            marginLeft: '4.5%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        },
    },

    '@media (max-width: 1400px)': {
        title: {
            fontSize: '3.2em',
            padding: 5
        },

        toolbar: {
            padding: 5,
        },
    },
})
