import { blue, green, grey } from '../../../constants/colors'
import { relative } from 'path';

const styles = {
  large: {
    height: 48,
    color: '#fff',
    background: green.lightOlive,
    fontSize: 14,
    fontWeight: 'bold',
    borderRadius: 10,
    '&:hover': {
      background: green.paleOlive
    },
    // Belum fix
    '&:disabled': {
      background: grey.pale
    }
  },
  small: {
    height: 28,
    color: '#fff',
    background: green.lightOlive,
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius: 5,
    textTransform: 'capitalize',
    letterSpacing: '0.1px',
    '&:hover': {
      background: green.paleOlive
    }
  },
  hollow: {
    border: '1px solid '+blue.darkSky,
    height: 28,
    fontSize: 12,
    fontWeight: 600,
    borderRadius: 5,
    textTransform: 'capitalize',
    letterSpacing: '-0.5px',
  },
  entry : {
    position: relative,
    border: "none",
    borderRadius: 5,
    height: 28,
    textAlign: "center",
    textOverflow: "ellipsis",
    textTransform: "uppercase",
    color: '#fff',
    backgroundColor: green.lightOlive,
    fontSize: 12,
    fontWeight: 600,
    overflow: "hidden",
    outline: "none",
    cursor: "pointer",
    transition: "box-shadow 0.2s",
    '&:hover': {
      background: green.paleOlive
    },
    '&:after': {
      content: "",
      position: "absolute",
      left: "50%",
      top: 18,
      borderRadius: "50%",
      padding: "50%",
      width: 32,
      height: 32,
      backgroundColor: "currentColor",
      opacity: 0,
      transform: "translate(-50%, -50%) scale(1)",
      transition: "opacity 1s, transform 0.5s",
    },
    '&:active-after' :{
      opacity: "0.4",
      transform: "translate(-50%, -50%) scale(0)",
      transition: "transform 0s",
    },
    '&:disabled': {
      background: grey.pale
    },  
  }
};

export default styles;
