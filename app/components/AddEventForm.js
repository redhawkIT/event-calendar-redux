import React from 'react'
import { Field, reduxForm } from 'redux-form'

import * as C from '../constants'

import {Card, CardHeader, CardText} from 'material-ui/Card'
import {
  DatePicker,
  TextField
} from 'redux-form-material-ui'

const AddEventForm = ({ handleSubmit }) =>
  <Card style={C.Theme.card}>
    <CardHeader title='Add an event!' />
    <CardText>
      <form onSubmit={handleSubmit}>
        <div>
          <Field name='name' component={TextField}
            hintText='Name'
            fullWidth={C.styleAsTrue}
          />
        </div>
        <div>
          <Field name='description' component={TextField}
            hintText='Description'
            fullWidth={C.styleAsTrue}
            multiLine={C.styleAsTrue}
            rowsMax={3}
          />
        </div>
        <div>
          <Field name='dateBegin' component={DatePicker}
            hintText='Begins'
            fullWidth={C.styleAsTrue}
            format={null}
          />
        </div>
        <div>
          <Field name='dateEnd' component={DatePicker}
            hintText='Ends'
            fullWidth={C.styleAsTrue}
            format={null}
          />
        </div>
        <div>
          <Field name='tags' component={TextField}
            hintText='Tags'
            fullWidth={C.styleAsTrue}
          />
        </div>
        <div>
          <Field name='photo' component={TextField}
            hintText='Photo'
            fullWidth={C.styleAsTrue}
          />
        </div>
        <input type='submit' value='Add Event' />
      </form>
    </CardText>
  </Card>

export default reduxForm({
  form: 'AddEventForm'
})(AddEventForm)
