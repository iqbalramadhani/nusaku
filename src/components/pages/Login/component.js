import React from 'react' 
import PropTypes from 'prop-types' 
import Router from 'next/router'

import SimpleForm from '../../layouts/SimpleForm'
import LoginForm from '../../organisms/LoginForm'
import LoginOptions from '../../organisms/LoginOptions' 
import LoginFooter from '../../elements/LoginFooter' 
import ChildAppBar from '../../elements/ChildAppBar'

export default class Component extends React.Component {

    render() {
      const { classes } = this.props

      /**
       * CATATAN:
       *  - Berikut contoh penggunaan layout "SimpleForm"
       *  - Dengan LoginForm sebagai mainContent dan LoginOptions sebagai supportingContent
      */

      return (
        <div>
          <SimpleForm 
            mainContent={
              <LoginForm />
            }
            supportingContent={
              <LoginOptions />
            }
            appBar={<ChildAppBar upFunc={()=>{Router.push('/')}}/>}
            footer={<LoginFooter variant='login'/>}

          />
        </div>
      
      ) 
    }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
} 
