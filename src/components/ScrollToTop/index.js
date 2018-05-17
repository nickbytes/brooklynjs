import { Component } from "react";
import { withRouter } from "react-router-dom";

//
// What is this?
//
// https://reacttraining.com/react-router/web/guides/scroll-restoration
//
// Okay, neat.
//
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
