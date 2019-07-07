import React, { createRef, Component } from "react";

class DropdownWrapper extends Component {
  constructor(props) {
    super(props);
    this.toggleContainer = createRef();

    this.state = {
      isShow: props.initialStatus || false,
    };
  }

  componentDidMount = () => {
    const { closeOnEsc, closeOnOutsideClick = true } = this.props;

    if (closeOnEsc) {
      window.addEventListener("keydown", this.handleKeyDown);
    }

    if (closeOnOutsideClick) {
      window.addEventListener("click", this.onClickOutsideHandler);
    }
  };

  componentWillUnmount = () => {
    const { closeOnEsc, closeOnOutsideClick = true } = this.props;
    if (closeOnEsc) {
      window.removeEventListener("keydown", this.handleKeyDown);
    }
    if (closeOnOutsideClick) {
      window.removeEventListener("click", this.onClickOutsideHandler);
    }
  };

  onClickOutsideHandler = event => {
    const { isShow } = this.state;
    if (isShow && !this.toggleContainer.current.contains(event.target)) {
      this.changeStatus(false);
    }
  };

  handleKeyDown = event => {
    const { isShow } = this.state;
    if (isShow && event.key === "Escape") {
      this.changeStatus(false);
    }
  };

  changeStatus = event => {
    const { onStateChange } = this.props;
    if (typeof onStateChange === "function") {
      onStateChange(!!event);
    }
    this.setState({
      isShow: !!event
    });
  };

  render() {
    const { isShow } = this.state;
    let { children: Content, wrapperProps = {} } = this.props;

    return (
      <div {...wrapperProps} ref={this.toggleContainer}>
        <Content isShow={isShow} changeStatus={this.changeStatus} />
      </div>
    );
  }
}

export default DropdownWrapper;
