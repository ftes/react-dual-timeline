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

    _this.state = { twoSided: true };
    _this.onTwoSidedChange = _this.onTwoSidedChange.bind(_this);
    _this.componentWillReceiveProps(props);
    return _this;
  }

  /**
   * Merge config with default only once (optimize)
   */


  _createClass(Timeline, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      //eslint-disable-next-line no-unused-vars
      var children = newProps.children,
          config = _objectWithoutProperties(newProps, ['children']); // children are not config


      this.mergedConfig = _extends({}, _config2.default, config);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var mediaWidthSmall = this.mergedConfig.mediaWidthSmall;

      if (window && window.matchMedia) {
        this.mqTwoSided = window.matchMedia('(min-width: ' + mediaWidthSmall + 'px)');
        this.mqTwoSided.addListener(this.onTwoSidedChange);
        this.onTwoSidedChange(this.mqTwoSided);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.mqTwoSided) {
        this.mqTwoSided.removeListener(this.onTwoSidedChange);
      }
    }
  }, {
    key: 'onTwoSidedChange',
    value: function onTwoSidedChange(mq) {
      this.setState({ twoSided: mq.matches });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var _mergedConfig = this.mergedConfig,
          color = _mergedConfig.color,
          twoSidedOverlap = _mergedConfig.twoSidedOverlap;

      var twoSided = this.state.twoSided;
      var i = 0;

      var styles = {
        base: _defineProperty({
          textAlign: 'center',
          paddingBottom: twoSided && twoSidedOverlap + 'px',
          color: color,
          overflow: 'hidden'
        }, this.mqTwoSidedString, {
          marginBottom: twoSidedOverlap + 'px'
        })
      };

      return _react2.default.createElement(
        'div',
        { style: [styles.base] },
        _react2.default.Children.map(children, function (c) {
          return _react2.default.createElement(
            _entry2.default,
            { even: i++ % 2 === 0 && twoSided, config: _this2.mergedConfig,
              icon: c.props.icon },
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

  // global
  paddingTop: _react.PropTypes.number,
  mediaWidthMed: _react.PropTypes.number,
  mediaWidthSmall: _react.PropTypes.number,
  activeColor: _react.PropTypes.string,
  color: _react.PropTypes.string,
  twoSidedOverlap: _react.PropTypes.number,
  animations: _react.PropTypes.bool,
  addEvenPropToChildren: _react.PropTypes.bool,

  // line
  lineColor: _react.PropTypes.string,
  circleWidth: _react.PropTypes.number,
  paddingToItem: _react.PropTypes.number,
  paddingToItemSmall: _react.PropTypes.number,
  lineWidth: _react.PropTypes.number,

  // triangle
  triangleWidth: _react.PropTypes.number,
  triangleHeight: _react.PropTypes.number,

  // list item content
  itemWidth: _react.PropTypes.number,
  itemWidthMed: _react.PropTypes.number,
  offsetHidden: _react.PropTypes.number,
  triangleOffset: _react.PropTypes.number,
  smallItemWidthPadding: _react.PropTypes.number,
  itemPadding: _react.PropTypes.number,
  evenItemOffset: _react.PropTypes.number
};

exports.default = (0, _radium2.default)(Timeline);