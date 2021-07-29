import { blue, white, grey } from '../../../constants/colors'

/**
 * CATATAN: 
 *  - Hati - hati dalam penggunaan warna, usahakan mengambil dari konstanta yang 
 *    telah disediakan
 *  - Perhatikan kembali nilai-nilai yang sudah ditentukan dari tim desain
 *    Seperti tebal border, jenis typo, dan pewarnaan
*/

const styles = {
  guestTheme:{
    background: blue.darkSky,
    boxShadow : 'none',
  },
  userTheme:{
    background: white,
    boxShadow : 'none',
    borderBottom : '1px solid' + grey.silver
  },
};

export default styles;
