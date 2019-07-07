"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownWrapper = function (_Component) {
  (0, _inherits3.default)(DropdownWrapper, _Component);

  function DropdownWrapper(props) {
    (0, _classCallCheck3.default)(this, DropdownWrapper);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DropdownWrapper.__proto__ || Object.getPrototypeOf(DropdownWrapper)).call(this, props));

    _this.componentDidMount = function () {
      var _this$props = _this.props,
          closeOnEsc = _this$props.closeOnEsc,
          _this$props$closeOnOu = _this$props.closeOnOutsideClick,
          closeOnOutsideClick = _this$props$closeOnOu === undefined ? true : _this$props$closeOnOu;


      if (closeOnEsc) {
        window.addEventListener("keydown", _this.handleKeyDown);
      }

      if (closeOnOutsideClick) {
        window.addEventListener("click", _this.onClickOutsideHandler);
      }
    };

    _this.componentWillUnmount = function () {
      var _this$props2 = _this.props,
          closeOnEsc = _this$props2.closeOnEsc,
          _this$props2$closeOnO = _this$props2.closeOnOutsideClick,
          closeOnOutsideClick = _this$props2$closeOnO === undefined ? true : _this$props2$closeOnO;

      if (closeOnEsc) {
        window.removeEventListener("keydown", _this.handleKeyDown);
      }
      if (closeOnOutsideClick) {
        window.removeEventListener("click", _this.onClickOutsideHandler);
      }
    };

    _this.onClickOutsideHandler = function (event) {
      var isShow = _this.state.isShow;

      if (isShow && !_this.toggleContainer.current.contains(event.target)) {
        _this.changeStatus(false);
      }
    };

    _this.handleKeyDown = function (event) {
      var isShow = _this.state.isShow;

      if (isShow && event.key === "Escape") {
        _this.changeStatus(false);
      }
    };

    _this.changeStatus = function (event) {
      var onStateChange = _this.props.onStateChange;

      if (typeof onStateChange === "function") {
        onStateChange(!!event);
      }
      _this.setState({
        isShow: !!event
      });
    };

    _this.toggleContainer = (0, _react.createRef)();

    _this.state = {
      isShow: false
    };
    return _this;
  }

  (0, _createClass3.default)(DropdownWrapper, [{
    key: "render",
    value: function render() {
      var isShow = this.state.isShow;
      var _props = this.props,
          Content = _props.children,
          _props$wrapperProps = _props.wrapperProps,
          wrapperProps = _props$wrapperProps === undefined ? {} : _props$wrapperProps;


      return _react2.default.createElement(
        "div",
        (0, _extends3.default)({}, wrapperProps, { ref: this.toggleContainer }),
        _react2.default.createElement(Content, { isShow: isShow, changeStatus: this.changeStatus })
      );
    }
  }]);
  return DropdownWrapper;
}(_react.Component);

exports.default = DropdownWrapper;