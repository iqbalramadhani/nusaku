import { blue, green, grey } from '../../../constants/colors'
import { relative } from 'path';

const styles = {
  styleCount: {
    display: "inline-block",
  },
  box : {
    width: 52,
    height: 30,
    background: green.lightOlive,
    color : "#fff",
    textAlign : 'center',
    borderRadius: 2,
    display: "inline-block",
    fontSize : 12,
    fontWeight: "bold",
    fontStyle: "normal",
    fontSstretch: "normal",
    lineHeight: "normal",
    letterSpacing: 0.1,
    fontFamily: "'Open Sans', sans-serif",
    paddingTop:1,   
    
  },
  box1 : {
    width: 26,
    height: 30,
    background: green.lightOlive,
    color : "#fff",
    textAlign : 'center',
    borderRadius: 2,
    display: "inline-block",
    fontSize : 12,
    fontWeight: "bold",
    fontStyle: "normal",
    fontSstretch: "normal",
    lineHeight: "normal",
    letterSpacing: 0.1,
    fontFamily: "'Open Sans', sans-serif",
    
  },
  point : {
    color : green.lightOlive,
    display: "inline-block",
    width: 8,
    height: 26,
    fontSize:12,
    fontWeight: "bold",
  },
  text : {

  },
  gridContainer : {
    display: "grid",
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: 1,
    
  },
};

export default styles;
