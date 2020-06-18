import { makeStyles } from '@material-ui/styles/'

export const useStyles = makeStyles({
  root: {
    color: 'cyan',
    width: 45,
    height: 45,
  },

  menuWindow: {
    backgroundColor: '#363636',
  },

  linkText: {
    color: 'cyan',
    textDecoration: 'none',
    textTransform: 'none',
    width: 90,
    zIndex: 9999,
    display: 'none',
  },

  menuContainer: {
    position: 'absolute',
    marginLeft: '77vw',
    marginTop: '-20%'
  },

});