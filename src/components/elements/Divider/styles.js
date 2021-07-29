import { green } from '../../../constants/colors'
import { blue } from '../../../constants/colors'

/**
 * CATATAN: 
 *  - Hati - hati dalam penggunaan warna, usahakan mengambil dari konstanta yang 
 *    telah disediakan
 *  - Perhatikan kembali nilai-nilai yang sudah ditentukan dari tim desain
 *    Seperti tebal border, jenis typo, dan pewarnaan
*/

const styles = {
  divider : {
    "margin": "0",
    "padding": "0",
    "textAlign": "center",
    "fontFamily": "'Open Sans', sans-serif",
    "fontSize": "13px",
    "fontWeight": "600",
    "color": "#aab2bd",
    "lineHeight": "2",
    "textTransform": "uppercase",
    '&:before' : {
      "display": "inline-block",
      "content": "\" \"",
      "textShadow": "none",
      "width": "40%",
      "borderTop": "1.5px solid #aab2bd",
      "verticalAlign": "top",
      "marginTop": "1em",
      "marginRight": "1em"
    },
    '&:after' : {
      "display": "inline-block",
      "content": "\" \"",
      "textShadow": "none",
      "width": "40%",
      "borderTop": "1.5px solid #aab2bd",
      "verticalAlign": "top",
      "marginTop": "1em",
      "marginLeft": "1em",
    }
  }
};

export default styles;
