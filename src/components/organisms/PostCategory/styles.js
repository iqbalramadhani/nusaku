import { grey } from '../../../constants/colors'

const styles = {
  root: {
    width: 340,
    margin : 'auto'
  },
  card: {
    maxWidth: 242,
  },
  media: {
    width : 242,
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardPost : {
    paddingTop : 15,
    paddingBottom : 9,
    width : 110,
    borderRadius : 5,
    '&:hover': {
      background: '#aaaa'
    },
    
  },
  caption1 : {
    fontWeight : 600, 
    fontSize : 11, 
    textAlign : 'center'
  },
  regular : {
    paddingTop : 18,
    paddingBottom : 17
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: 5,
  },
};

export default styles;
