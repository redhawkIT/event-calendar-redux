import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import events from './events'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  form: formReducer,
  events,
  visibilityFilter
})

export default rootReducer
