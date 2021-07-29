import React from 'react';
import PropTypes from 'prop-types';
import Typo from '../../elements/Typo/styles';
import Link from 'next/link';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

export default class Component extends React.Component {

  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };


  render() {
    const { classes,img} = this.props;
    const { activeStep } = this.state;

    const maxSteps = img.length;

    return (
      <div>
      <SwipeableViews
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >

         {img.map(image => (
            <img src={img[activeStep]} width={360}/>
         ))}
          
        </SwipeableViews>
        <MobileStepper
          steps={maxSteps}
          style={{padding:0,background:"none"}}
          position="static"
          activeStep={activeStep}
          nextButton={
          <Button size="small" disabled={true}/>
        }
        backButton={
          <Button size="small" disabled={true}/>
        }
        />
        </div>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  handleChangeValue : PropTypes.func,
  value : PropTypes.value,
};