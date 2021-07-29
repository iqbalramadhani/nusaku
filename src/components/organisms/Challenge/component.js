import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typo from '../../elements/Typo'
import Divider from '@material-ui/core/Divider';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { BaseUrl } from '../../../constants/value';
import axios from 'axios';
import Router from 'next/router'

export default class Component extends React.Component {

  state = {
    selected: 'item1',
    alignCenter: true,
    dragging: true,
    clickWhenDrag: false,
    transition: 0.4,
    wheel: true,
    data : []
  };

  constructor(props) {
    super(props);
    this.menu = null;
  }

  onSelect = key => {
    console.log(`onSelect: ${key}`);
    this.setState({ selected: key });
  }

  handleClick = (e) => {  
    
    console.log(e)
    Router.push(`/event_detail?id=${e}`)
  }

  componentDidUpdate(prevProps, prevState) {
    const { alignCenter } = prevState;
    const {
      alignCenter: alignCenterNew
    } = this.state;
    if (alignCenter !== alignCenterNew) {
      this.menu.setState({ initialized: true, mounted: true, xPoint: 0});
      this.menu.setInitial();
      this.menu.forceUpdate();
      this.getChallenge();
    }
  }

  componentDidMount= ()=>{
    this.getChallenge();
  }

  async getChallenge() {
    try {
      const responses = await axios.get(BaseUrl.CONTENT+'/public/events');
      const data = responses.data.data.event.map(obj => obj)
      
      this.setState({data : data})
      console.log(responses.data);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { classes  } = this.props

    let event = this.state.data
    console.log(event)
  
    //fetching data
    const Item = event.map((obj) => {
      return (
        <div key={obj._id}
          className={classes.MenuItem}  style={{paddingLeft : 16}}
        >
          <div>
            <Card>
              <CardMedia
                className={classes.media}
                image="https://cdn.zeplin.io/5b484cf98ad0118c5fb58780/assets/38D54B44-8F26-477A-8249-6687F8F25C2F.png"
              />
            </Card>
          </div>
        </div>
      )
    })

    const {
      selected,
      alignCenter,
      dragging,
      transition,
    } = this.state;
    
    return (
        <div>
          <div className={classes.root} Align='left'>
          <Typo variant='heading3' style={{ marginBottom: 16, paddingLeft : 20}}>Challenge</Typo> 
          
          <ScrollMenu 
            data={Item}
            transition={+transition}
            onSelect={this.onSelect}
            selected={selected}
            alignCenter={!alignCenter}
            dragging={dragging}
          />
          <section className={classes.card} style={{WebkitOverflowScrolling: 'hidden', scrollBehavior: 'smooth'}}>
            {this.state.data.map(value => (
              <div key={value._id} value={value._id} onClick={this.handleClick.bind(this,value._id)} 
                className={classes.MenuItem}  style={{paddingLeft : 16}}
              >
                <div>
                  <Card>
                    <CardMedia
                      className={classes.media}
                      image={value.image.full}
                    />
                  </Card>
                </div>
              </div>
            ))}
          </section>
          <Divider style={{marginTop : 20, marginBottom : 18}}/>
          </div>
        </div>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};