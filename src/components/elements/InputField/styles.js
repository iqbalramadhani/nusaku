//If you need color (grey, green, red, blue, yellow, etc)
import { red, grey } from '../../../constants/colors'
import Typo from '../../elements/Typo'

/**
 * CATATAN: 
 *  - Perhatikan kembali nilai nilai yang sudah ditentukan oleh tim desain
 *    Seperti padding, warna, border, dll.
 *  - Untuk field_normal dan field_error sudah ku sesuaikan
 *    Lanjutkan untuk variant yg lain
*/

const styles = {
    field_normal : {
        border:"1px solid" + grey.cool,
        borderRadius: 10,
        height: 48,
        backgroundColor: grey.paleTwo,

        fontFamily: "'Open Sans', sans-serif",
        fontSize: "14px",
        fontWeight : 600,
        "color" : grey.charchoal,

        outline:"0",
        padding:"8px 14px 9px 20px",
        boxSizing:"border-box",
        '&:focus' : {
            "outline": "0",
            "borderColor": 'dodgerBlue',
            "fontWeight" : 600,
            "color" : grey.charchoal,
        }
    },
    field_error : {
        border:"1px solid" + red.fadedRed,

        borderRadius: 10,
        height: 48,
        backgroundColor: grey.paleTwo,

        fontFamily: "'Open Sans', sans-serif",
        fontSize: "14px",
        fontWeight : 600,
        "color" : grey.charchoal,

        outline:"0",
        padding:"8px 14px 9px 20px",
        boxSizing:"border-box",
        '&:focus' : {
            "outline": "0",
            "borderColor": 'dodgerBlue',
            "fontWeight" : 600,
            "color" : grey.charchoal,
        }
    },
    text_area_normal : {
        "fontFamily": "'Open Sans', sans-serif",
        "fontWeight" : 600,
        fontSize : '14px',
        "color" : grey.charchoal,
        padding : '14px 16px 16px 20px',
        borderRadius : 10,
        '&:focus' : {
            "outline": "0",
            "borderColor": 'dodgerBlue',
            "fontWeight" : 600,
            "color" : grey.slate,
        }
    },
    text_area_none : {
        "fontFamily": "'Open Sans', sans-serif",
        "fontWeight" : 600,
        "color" : grey.charchoal,
        padding : '14px 16px 16px 20px',
        borderRadius : 10,
        resize : 'none',
        '&:focus' : {
            "outline": "0",
            "borderColor": 'dodgerBlue',
            "fontWeight" : 600,
            "color" : grey.slate,
        }
    },
    prefix : {
        border:"1px solid" + grey.cool,
        borderRadius: 10,
        height: 48,
        backgroundColor: grey.paleTwo,
        width : '100%',
        fontFamily: "'Open Sans', sans-serif",
        fontSize: "14px",
        fontWeight : 600,
        "color" : grey.charchoal,

        outline:"0",
        padding:"10px 21px 10px 82px",
        boxSizing:"border-box",
        '&:focus' : {
            "outline": "0",
            "borderColor": 'dodgerBlue',
            "fontWeight" : 600,
            "color" : grey.charchoal,
        }
    },
    prefix_error : {
        border:"1px solid" + red.fadedRed,
        borderRadius: 10,
        height: 48,
        backgroundColor: grey.paleTwo,
        width : '100%',
        fontFamily: "'Open Sans', sans-serif",
        fontSize: "14px",
        fontWeight : 600,
        "color" : grey.charchoal,

        outline:"0",
        padding:"10px 21px 10px 82px",
        boxSizing:"border-box",
        '&:focus' : {
            "outline": "0",
            "borderColor": 'dodgerBlue',
            "fontWeight" : 600,
            "color" : grey.charchoal,
        }
    },
    prefix_group_icon : {
        "position": "relative",
    },
    prefix_icon : {
        fontFamily: "'Open Sans', sans-serif",
        "position": "absolute",
        "top": "0",
        fontSize: "14px",
        fontWeight : 600,
        "lineHeight": "3.2em",
        textAlign : 'center',
        width : 70,
        height : 28,
        margin : 'auto',
        paddingTop : 3,
        "pointerEvents": "none",
        "WebkitTransition": "0.35s ease-in-out",
        "MozTransition": "0.35s ease-in-out",
        "OTransition": "0.35s ease-in-out",
        "transition": "all 0.35s ease-in-out",
        '&:after' : {
            "position": "absolute",
            "top": 10,
            "bottom": 10,
            right: 0,
            height :28,
            "display": "block",
            "borderRight": "2px solid" + grey.cool,
            "content": "\"\"",
            "WebkitTransition": "0.35s ease-in-out",
            "MozTransition": "0.35s ease-in-out",
            "OTransition": "0.35s ease-in-out",
            "transition": "all 0.35s ease-in-out"
        },
    },

    text_area_search : {
        border:"none",
        borderRadius: 10,
        height: 36,
        backgroundColor: grey.pale,
        textAlign : 'center',
        fontFamily: "'Open Sans', sans-serif",
        fontSize: "12px",
        fontWeight : 600,
        "color" : grey.charchoal,

        outline:"0",
        padding:"8px 14px 9px 20px",
        boxSizing:"border-box",
        '&:focus' : {
            "outline": "0",
            "borderColor": 'dodgerBlue',
            "fontWeight" : 600,
            "color" : grey.charchoal,
        }
    },
};

export default styles;
