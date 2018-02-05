'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timeline = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
  children: _propTypes2.default.node.isRequired,

  // global
  paddingTop: _propTypes2.default.number,
  mediaWidthMed: _propTypes2.default.number,
  mediaWidthSmall: _propTypes2.default.number,
  activeColor: _propTypes2.default.string,
  color: _propTypes2.default.string,
  twoSidedOverlap: _propTypes2.default.number,
  animations: _propTypes2.default.bool,
  addEvenPropToChildren: _propTypes2.default.bool,

  // line
  lineColor: _propTypes2.default.string,
  circleWidth: _propTypes2.default.number,
  paddingToItem: _propTypes2.default.number,
  paddingToItemSmall: _propTypes2.default.number,
  lineWidth: _propTypes2.default.number,

  // triangle
  triangleWidth: _propTypes2.default.number,
  triangleHeight: _propTypes2.default.number,

  // list item content
  itemWidth: _propTypes2.default.number,
  itemWidthMed: _propTypes2.default.number,
  offsetHidden: _propTypes2.default.number,
  triangleOffset: _propTypes2.default.number,
  smallItemWidthPadding: _propTypes2.default.number,
  itemPadding: _propTypes2.default.number,
  evenItemOffset: _propTypes2.default.number
};

exports.default = (0, _radium2.default)(Timeline);