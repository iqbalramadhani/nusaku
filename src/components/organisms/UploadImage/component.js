import React from 'react';
import PropTypes from 'prop-types';
import Typo from '../../elements/Typo';
import Style from 'style-it';
import { green } from '../../../constants/colors'

export default class Component extends React.Component {

  state = {
    fileName : [{file : '', imageURL : ''}],
  }

  handleImage = (e) => {
    e.preventDefault()
    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
    this.setState({
      fileName: this.state.fileName.concat([{ file : file, imageURL : reader.result }])
    });
    }
    reader.readAsDataURL(file)
    console.log(reader.result)
    console.log(this.state.fileName.length)
  }

  check=()=>{
    console.log(this.state)
  }

  componentDidMount=()=>{
    console.log(this.state.fileName[2])
    console.log(this.state.fileName)
  }

  render() {
    const { classes } = this.props
    const img = 'https://cdn.zeplin.io/5b484cf98ad0118c5fb58780/assets/238533C1-BED8-412F-B08C-141B9DB1E3A1.png'

    return (
      <div className={classes.container}>
        <Typo variant='heading2' style={{marginBottom : 15}}>Upload Foto</Typo>
        <div className={classes.grid}>

          <label style={{width : '100px', height:'100px', paddingRight : '10px'}}>
          {/* Enable inline CSS */}
          <Style  >
          {`
            .hide {
              display: none;
              position: relative;
            }
          `}

            <div className={classes.sampul}>
                <img src='https://cdn.zeplin.io/5b484cf98ad0118c5fb58780/assets/49FC7F92-03D9-4B8D-99F8-7F3D124A8E77.png'/>
                <input className='hide' type='file' name='files'/>
            </div>
          </Style>
          </label>
          {this.state.fileName.map((obj, idx) =>(
          <Style  >
          {`
            .hide {
              display: none;
              position: relative;
            }
          `}
          
          <label key={obj.name} style={{width : '100px', height:'100px', paddingRight : '10px'}} onChange={this.state.fileName.length > 13 ? '' : this.handleImage}>
            <div className={classes.file}>
            <img src={img}/>
                <input className='hide' type='file' name='files'/>
            </div>
          </label>
          
          </Style>
          ))}

        </div>
        { this.state.fileName.length < 3 && this.state.fileName.length > 1?
        <Typo variant='overline' style={{marginTop : 9}}>Yah foto kamu kurang dari 3, ayo tambah lagi.</Typo> : ''
        }
        {this.state.fileName.length >= 3 ?
        <Typo variant='subtitle3' style={{fontWeight: 'normal', color : green.lightOlive, marginTop : 9}}>Asik banget fotonya, mau dong diajak bareng kesini</Typo> : ''
        }
        <button onClick={this.componentDidMount}>cek</button>
      </div>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};