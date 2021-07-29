import { grey, blue } from '../../../constants/colors'

const styles = {
  root: {
    width: 360,
  },
  slide: {
    paddingLeft: 0,
    color: '#fff',
    
  },
  media: {
    width : 242,
    height: 0,
    left : 0,
    paddingTop: '56.25%', // 16:9
  },
  menuItem : {
    padding: '0 40px',
    margin: '5px 10px',
    userSelect: 'none',
    cursor: 'pointer',
    border: 'none',
  },
  topBanner : {
    minWidth : 360,
    height : 20,
    backgroundColor : blue.darkSky,
    borderRadius : 0,
    marginRight : -10,
    marginLeft : -10
  },
  card : {
    display: 'flex',
    minWidth: '100%',
    overflowX : 'auto',
    '&: webkitScrollbar' :{
      display : 'none'
    }
  },
};

export default styles;
