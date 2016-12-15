import * as C from '../constants'

//    /////
//    DEPENDENCIES
//    /////
import React from 'react'

//    /////
//    UI COMPONENTS
//    /////
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'

//    /////
//    CHILDREN
//    /////
import AddEvent from '../containers/AddEvent'
import VisibleEventList from '../containers/VisibleEventList'

import MaterialUIForm from './MaterialUIForm'

//    /////
//    COMPONENT
//    /////
class App extends React.Component {
  constructor (props) {
    super(props)
    let mobileDevice = (window.innerWidth < 768)
    this.state = {
      mobile: mobileDevice,
      nav: !mobileDevice
    }
  }

  resize () {
    let mobileDevice = (window.innerWidth < 768)
    this.setState({
      mobile: mobileDevice,
      nav: !mobileDevice
    })
  }
  componentDidMount () {
    window.addEventListener('resize', this.resize.bind(this))
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.resize.bind(this))
  }

  render () {
    let containerStyle = {
      marginTop: 64,
      //  Margins adjust to the state of the nav
      marginLeft: (this.state.nav ? 250 : 0)
    }
    return (
      <div>

        <Drawer
          open={this.state.nav}
          docked={!this.state.mobile}
          onRequestChange={(nav) => this.setState({nav: !this.state.nav})}
          containerStyle={C.Theme.drawer}
        >
          <AddEvent />
          <MaterialUIForm />
        </Drawer>

        <AppBar
          title='Calendar App'
          onTouchTap={() => this.setState({nav: !this.state.nav})}
          style={C.Theme.appBar}
          />
        <div style={containerStyle}>
          <VisibleEventList />
        </div>

      </div>
    )
  }
}

export default App
