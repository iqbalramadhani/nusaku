import { blue,grey } from '../../../constants/colors'

const styles = {
  footer : {
    height: 58,
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "#ffffff",
    color : grey.slate,
    margin: "auto",
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "12px",
    fontWeight: "600",
    boxShadow: "0 0px 6px rgba(0,0,0,0.16), 0 0px 6px rgba(0,0,0,0.23)"
  },
  text : {
    textDecoration: 'none',
    color: blue.darkSkyTwo,
    '&:visited':{
      textDecoration: 'none',
    }
  },
  position : {
    height : 58,
    paddingTop : 10,
  }
};

export default styles;
