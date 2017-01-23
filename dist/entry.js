'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Entry = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _content = require('./content');

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Entry = exports.Entry = function (_React$Component) {
  _inherits(Entry, _React$Component);

  function Entry(props) {
    _classCallCheck(this, Entry);

    var _this = _possibleConstructorReturn(this, (Entry.__proto__ || Object.getPrototypeOf(Entry)).call(this, props));

    _this.onInView = _this.onInView.bind(_this);
    _this.state = { inView: false };
    return _this;
  }

  _createClass(Entry, [{
    key: 'onInView',
    value: function onInView(inView) {
      this.setState({ inView: inView });
    }
  }, {
    key: 'render',
    value: function render() {
      var _base;

      var _props = this.props,
          children = _props.children,
          icon = _props.icon,
          props = _objectWithoutProperties(_props, ['children', 'icon']);

      var inView = this.state.inView;
      var _props$config = this.props.config,
          lineWidth = _props$config.lineWidth,
          circleWidth = _props$config.circleWidth,
          paddingTop = _props$config.paddingTop,
          lineColor = _props$config.lineColor,
          activeColor = _props$config.activeColor,
          mediaWidthSmall = _props$config.mediaWidthSmall,
          twoSidedOverlap = _props$config.twoSidedOverlap,
          animations = _props$config.animations;


      var styles = {
        base: (_base = {
          listStyleType: 'none',
          position: 'relative', // base for map position
          width: lineWidth + 'px',
          margin: '0 auto -' + twoSidedOverlap + 'px auto',
          paddingTop: paddingTop + 'px',
          background: lineColor
        }, _defineProperty(_base, '@media screen and (max-width: ' + mediaWidthSmall + 'px)', {
          margin: '0 auto 0 20px'
        }), _defineProperty(_base, '@media print', {
          margin: 0,
          width: '100%',
          paddingTop: 0
        }), _base),
        circle: {
          base: {
            position: 'absolute',
            bottom: '0',
            transform: 'translateX(-50%)',
            width: circleWidth + 'px',
            height: circleWidth + 'px',
            borderRadius: '50%',
            background: lineColor,
            transition: animations ? 'background .5s ease-in-out' : null,
            zIndex: 1
          },
          inner: {
            base: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%'
            }
          },
          inView: {
            background: activeColor
          }
        }
      };

      return _react2.default.createElement(
        'div',
        { style: [styles.base] },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _content2.default,
            _extends({}, props, {
              inView: inView, onInView: this.onInView
            }),
            children
          )
        ),
        _react2.default.createElement(
          'span',
          { className: 'no-print', style: [styles.circle.base, inView && styles.circle.inView] },
          _react2.default.createElement(
            'span',
            { style: [styles.circle.inner.base] },
            icon
          )
        )
      );
    }
  }]);

  return Entry;
}(_react2.default.Component);

Entry.propTypes = {
  children: _react.PropTypes.node.isRequired,
  even: _react.PropTypes.bool.isRequired,
  config: _react.PropTypes.object.isRequired,
  icon: _react.PropTypes.node
};

exports.default = (0, _radium2.default)(Entry);