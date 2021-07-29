import {grey,blue} from '../../../constants/colors'


const styles = {
  container: {
    width: 310,
  },
  checkboxtext1: {
    color: grey.slate,
    fontWeight: 'bold',
  },
  checkboxtext2: {
    color: blue.darkSky,
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  left : {
    paddingLeft : 0,
  },
  sizing : {
    paddingTop : 0,
    paddingLeft : 0,
    paddingBottom : 0,
    paddingRight :0,
  },
  root: {
    color: grey.slate,
    "&$checked": {
      color: grey.slate
    }
  },
  sizeIcon: {
    fontSize: '20px',
  },
  checked: {},
  size: {
    width: 40,
    height: 40
  }

};

export default styles;
