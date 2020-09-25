import { connect, ConnectedProps } from 'react-redux'

import { IAppState } from 'store'
import Component from './Component'
import { bindActionCreators } from 'redux'
import { setCurrency } from 'actions/common'

const mapStateToProps = (state: IAppState) => ({
  currency: state.common.currency,
  
})

const mapActionsToProps = (dispatch) => bindActionCreators({
  setCurrency,

}, dispatch)


const connector = connect(mapStateToProps, mapActionsToProps)
export type TReduxProps = ConnectedProps<typeof connector>
export default connector(Component)
