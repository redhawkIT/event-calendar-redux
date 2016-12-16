import React, { PropTypes } from 'react'

import {Container} from 'react-grid-system'
import Paper from 'material-ui/Paper'

import Event from './Event'

const EventList = ({ events }) =>
  <Container>
    <Paper>
      {events.map((event) =>
        <Event
          key={event.id}
          {...event}
        />
      )}
    </Paper>
  </Container>

const propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // dateBegin: PropTypes.string.isRequired,
    // dateEnd: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.array,
    photo: PropTypes.string
  }).isRequired).isRequired
}

export default Object.assign(EventList, { propTypes })
