import { makeStyles } from '@material-ui/styles/'

export const useStyles = makeStyles({
  root: {
    width: '48%',
    height: 'auto',
    padding: 5,
    marginBottom: 5,
    marginLeft: 5,
    color: 'white',
    backgroundColor: '#363636',
  },

  '@media (max-width: 1024px)': {
    root: {
      width: "34vw",
      height: '21vh',
    }
  },

  '@media (max-width: 896px)': {
    root: {
      height: 'auto'
    }
  },

  '@media (max-width: 768px)': {
    root: {
      height: '14vh'
    }
  },

  '@media (max-width: 414px)': {
    root: {
      height: '19vh',
      width: '100%',
      zIndex: 99,
    },
  },

  '@media (max-width: 375px)': {
    root: {
      height: '22vh'
    },
  },
});