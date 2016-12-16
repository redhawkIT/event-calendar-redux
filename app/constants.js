export const FIREBASE = 'https://redux-dashboard.firebaseio.com/'

export const TOGGLE_FORM = 'TOGGLE_FORM'
export const ADD_EVENT = 'ADD_EVENT'
export const DISPLAY_ALL = 'DISPLAY_ALL'

//    /////
//    MATERIAL-UI THEME & INLINE STYLES
//    /////
//  Theme Components
import {fade} from 'material-ui/utils/colorManipulator'
import spacing from 'material-ui/styles/spacing'
import {
  blueGrey800, blueGrey900, grey400,
  blueGrey600,
  cyan500, cyan800, cyan400,
  blueGrey300,
  fullWhite
} from 'material-ui/styles/colors'

export const styleAsTrue = true

export const Theme = {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: blueGrey800,
    primary2Color: blueGrey900,
    primary3Color: grey400,
    accent1Color: cyan500,
    accent2Color: cyan800,
    accent3Color: cyan400,

    textColor: fullWhite,
    secondaryTextColor: fade(fullWhite, 0.7),
    alternateTextColor: fullWhite,

    canvasColor: blueGrey300,
    borderColor: fade(fullWhite, 0.3),

    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12)
  },
  appBar: {
    position: 'fixed',
    top: 0
  },
  drawer: {
    width: 250,
    marginTop: 64,
    paddingBottom: 64
  },
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: blueGrey600
  }
}
