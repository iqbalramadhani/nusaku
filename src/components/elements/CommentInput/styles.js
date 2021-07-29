import { red, grey } from '../../../constants/colors'

const styles = {
  container: {
    padding: 8,
    borderRadius: 25,
    border:"1px solid" + grey.cool,
    // backgroundColor: grey.paleTwo,
    // marginLeft: 24, 
    // marginRight: 24,
    // marginBottom: 24,
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 24
  },
  textBox: {
    color: '#aab2bd',
    fontWeight: 600,
    flex: 1,
  },
  textField:{
    overflow: "hidden"
  },
  input: {
    border: "none",
    borderWidth: 0,
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "1rem",
    fontWeight : 500,
    backgroundColor: "transparent",
    "color" : grey.charchoal,
    width: "100%",
    minHeight: "100%",
    padding: 0,
    margin: 0,

    resize: "none",
    overflow: "hidden",

    outline:"0",
    boxSizing:"border-box",
    '&:focus' : {
        "outline": "0",
        "borderColor": 'dodgerBlue',
        "fontWeight" : 600,
        "color" : grey.charchoal,
    }
  },
  sendButtonContainer: {
    float: 'right',
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "14px",
    fontWeight : 900,
  },
  sendButton: {
    fontFamily: "'Open Sans', sans-serif",
    textTransform: 'none',
    fontSize: "1rem",
    fontWeight : 500,
    "color" : "#aab2bd",
    padding: 0,
    margin: 0,
    minHeight: "100%",
  }
};

export default styles;