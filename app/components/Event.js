import React, { PropTypes } from 'react'

import * as C from '../constants'
import {Card, CardMedia, CardTitle, CardHeader, CardText} from 'material-ui/Card'

const Event = ({ name, dateBegin, dateEnd, description, tags, photo }) =>
  <Card style={C.Theme.card}>
    {photo ?
      <CardMedia
        overlay={<CardTitle title={name} subtitle={dateBegin + '-' + dateEnd} />}
      >
        <img src={photo || null} />
      </CardMedia>
    :
      <CardTitle title={name} subtitle={dateBegin + '-' + dateEnd} />
    }
    {tags &&
      <CardHeader subtitle={tags} />
    }
    <CardText>
      {description}
    </CardText>
  </Card>

const propTypes = {
  name: PropTypes.string.isRequired,
  dateBegin: PropTypes.string.isRequired,
  dateEnd: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array,
  photo: PropTypes.string
}

export default Object.assign(Event, { propTypes })
