import { blue,grey } from '../../../constants/colors'

const styles = {
  root: {
    flexGrow: 1,
    whiteSpace: "none",
  },
  tabsRoot: {
    borderRadius : 2.5,
  },
  tabsIndicator: {
    backgroundColor: blue.darkSky,
    borderRadius : 2.5,
    height : 5,
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 160,
    fontWeight: 600,
    fontSize:14,
    '&:hover': {
      color: grey.charchoal,
      opacity: 1,
    },
    '&:tabSelected': {
      color: grey.charchoal,
      fontWeight: 14,
    },
    '&:focus': {
      color: grey.charchoal,
    },
  },
  tabSelected: {
    color : grey.charchoal,
  },

  typography: {
  },
};

export default styles;
