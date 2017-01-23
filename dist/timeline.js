'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timeline = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _entry = require('./entry');

var _entry2 = _interopRequireDefault(_entry);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timeline = exports.Timeline = function (_React$Component) {
  _inherits(Timeline, _React$Component);

  function Timeline(props) {
    _classCallCheck(this, Timeline);

    var _this = _possibleConstructorReturn(this, (Timeline.__proto__ || Object.getPrototypeOf(Timeline)).call(this, props));

    _this.state = { vw: 0 };
    _this.updateWidth = _this.updateWidth.bind(_this);
    return _this;
  }

  _createClass(Timeline, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.updateWidth();
      window.addEventListener('resize', this.updateWidth);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateWidth);
    }
  }, {
    key: 'updateWidth',
    value: function updateWidth() {
      this.setState({ vw: window.innerWidth });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          config = _props.config,
          props = _objectWithoutProperties(_props, ['children', 'config']);

      var i = 0;
      var mergedConfig = _extends({}, _config2.default, config);

      var mediaWidthSmall = mergedConfig.mediaWidthSmall,
          twoSidedOverlap = mergedConfig.twoSidedOverlap;


      var styles = {
        base: _defineProperty({
          textAlign: 'center',
          color: mergedConfig.color
        }, '@media screen and (min-width: ' + mediaWidthSmall + 'px)', {
          marginBottom: twoSidedOverlap + 'px'
        })
      };

      var allOddOnSmall = this.state.vw <= mergedConfig.mediaWidthSmall;

      return _react2.default.createElement(
        'div',
        { style: [styles.base] },
        _react2.default.Children.map(children, function (c) {
          return _react2.default.createElement(
            _entry2.default,
            _extends({ even: i++ % 2 === 0 && !allOddOnSmall, config: mergedConfig,
              icon: c.props.icon }, props),
            c
          );
        })
      );
    }
  }]);

  return Timeline;
}(_react2.default.Component);

Timeline.propTypes = {
  children: _react.PropTypes.node.isRequired,
  config: _react.PropTypes.object
};

exports.default = (0, _radium2.default)(Timeline);