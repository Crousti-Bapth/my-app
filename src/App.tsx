import { PureComponent } from "react";
import { connect } from "react-redux";
import {
  RouteComponentProps,
  withRouter
} from "react-router-dom";
import { Routes } from "./navigation/Routes";
import { StateType } from "./redux/reducers";

/** Types **/
type OwnProps = {};

type StateProps = {
  language: 'fr' | 'en';
};

type DispatchProps = {
};

type Props = OwnProps &
StateProps &
DispatchProps &
RouteComponentProps;

class App extends PureComponent<Props> {
  render() {
    return (
      <Routes />
    );
  }
}

export default withRouter(
  connect<StateProps, DispatchProps, OwnProps, StateType>(
    state => ({
      language: state.locale.language
    }),
    {}
  )(App)
);