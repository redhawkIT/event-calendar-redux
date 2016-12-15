import React from 'react'
import { reduxForm, Field } from 'redux-form'

import * as C from '../constants'

import MenuItem from 'material-ui/MenuItem'
import {Card} from 'material-ui/Card'
import { RadioButton } from 'material-ui/RadioButton'
import {
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField,
  Toggle
} from 'redux-form-material-ui'

class MaterialUIForm extends React.Component {
  render () {
    return (
      <Card style={C.Theme.card}>
        <form>
          <Field name='username' component={TextField} hintText='Street' />

          <Field name='plan' component={SelectField} hintText='Select a plan'>
            <MenuItem value='monthly' primaryText='Monthly' />
            <MenuItem value='yearly' primaryText='Yearly' />
            <MenuItem value='lifetime' primaryText='Lifetime' />
          </Field>

          <Field name='agreeToTerms' component={Checkbox} label='Agree to terms?' />

          <Field name='receiveEmails' component={Toggle} label='Please spam me!' />

          <Field name='bestFramework' component={RadioButtonGroup}>
            <RadioButton value='react' label='React' />
            <RadioButton value='angular' label='Angular' />
            <RadioButton value='ember' label='Ember' />
          </Field>
        </form>
      </Card>
    )
  }
}

// Decorate with redux-form
MaterialUIForm = reduxForm({
  form: 'materialForm'
})(MaterialUIForm)

export default MaterialUIForm
