import { connect, ConnectedProps } from 'react-redux'

import { IAppState } from 'store'
import Component from './Component'
import { bindActionCreators } from 'redux'
import { fetchRatesByCurrency } from 'actions/common'

const mapStateToProps = (state: IAppState) => ({
  fetching: state.common.fetching,
  currency: state.common.currency,
  dynamic: state.common.dynamic,

})


const mapActionsToProps = (dispatch) => bindActionCreators({
  fetchRatesByCurrency,

}, dispatch)


const connector = connect(mapStateToProps, mapActionsToProps)
export type TReduxProps = ConnectedProps<typeof connector>
export default connector(Component)
