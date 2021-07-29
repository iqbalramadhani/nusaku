import React from 'react';
import PropTypes from 'prop-types';

export default class Component extends React.Component {
  render() {
    const { classes, variant, placeholder, onChange, width, name, isError, style, type,value} = this.props;
    
    /**
     * Buat element InputField sesuai desain nusaku
     * Variant: Normal, With Prefix (e.g. Form no. telpon), TextArea
     * State: Belum terisi (ada place holder), Terisi, Error (dilengkapi dengan helper text)
     * Event: onChange
     * 
     * CATATAN:
     *  - Untuk error tidak masuk sebagai variant, boolean isError akan dilewatkan props
     *  - Untuk variant normal aku pindahin ke default value, jadi kalo props variant gk diisi
     *    Maka variantnya otomatis normal
     *  - Untuk variant normal sudah aku sesuaikan untuk error case nya
     *    Silahkan diterapkan untuk variant selanjutnya
     */

    let element
    switch (variant) {
      case 'prefix' :
        const inputStyle = isError ? classes.prefix_error : classes.prefix
        element = <div className={ classes.prefix_group_icon } style={{width: width, ...style}}>
                    <input className={inputStyle} placeholder={placeholder} name={name} onChange={onChange} type={type} value={value}/>
                    <div className={classes.prefix_icon}>ID +62</div>
                  </div>
        break;
      case 'textAreaNormal' :
        element = <textarea className={classes.text_area_normal} placeholder={placeholder} name={name} style={{width: width, ...style}} onChange={onChange}/>
        break;
      case 'textAreaNone' :
        element = <textarea className={classes.text_area_none} placeholder={placeholder} name={name} style={{width: width, ...style}} onChange={onChange}/>
        break;
      case 'textSearch' :
        element = <input className={classes.text_area_search} placeholder={placeholder} name={name} style={{width: width, ...style}} onChange={onChange}/>
        break;
      default:{
        const inputStyle = isError ? classes.field_error : classes.field_normal
        element = <input className={inputStyle} style={{width: width, ...style}} name={name} placeholder={placeholder} onChange={onChange} type={type} value={value}/>
        break
      }
    }
    return (
      element
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  isError: PropTypes.bool,
  value : PropTypes.value,
};