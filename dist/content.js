'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = exports.Content = function (_React$Component) {
  _inherits(Content, _React$Component);

  function Content(props) {
    _classCallCheck(this, Content);

    var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

    _this.onScroll = _this.onScroll.bind(_this);
    return _this;
  }

  _createClass(Content, [{
    key: 'areChildrenInView',
    value: function areChildrenInView() {
      var rect = this.children.getBoundingClientRect();
      var vwHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.bottom >= 0 && rect.bottom <= vwHeight || rect.top >= 0 && rect.top <= vwHeight;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.config.animations) {
        window.addEventListener('scroll', this.onScroll);
        window.addEventListener('resize', this.onScroll);
        this.onScroll();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('resize', this.onScroll);
    }
  }, {
    key: 'onScroll',
    value: function onScroll() {
      var inView = this.areChildrenInView();
      this.props.onInView(inView);
    }
  }, {
    key: 'render',
    value: function render() {
      var _base,
          _even,
          _this2 = this;

      var _props = this.props,
          children = _props.children,
          even = _props.even,
          inView = _props.inView,
          config = _props.config;
      var circleWidth = config.circleWidth,
          mediaWidthMed = config.mediaWidthMed,
          paddingToItem = config.paddingToItem,
          paddingToItemSmall = config.paddingToItemSmall,
          itemWidth = config.itemWidth,
          itemWidthMed = config.itemWidthMed,
          animations = config.animations,
          lineWidth = config.lineWidth,
          evenItemOffset = config.evenItemOffset,
          offsetHidden = config.offsetHidden,
          triangleWidth = config.triangleWidth,
          triangleOffset = config.triangleOffset,
          triangleHeight = config.triangleHeight,
          activeColor = config.activeColor,
          mediaWidthSmall = config.mediaWidthSmall,
          smallItemWidthPadding = config.smallItemWidthPadding,
          itemPadding = config.itemPadding;


      var offsetEven = circleWidth + paddingToItem + triangleWidth - lineWidth + evenItemOffset;
      var offsetEvenNml = offsetEven + itemWidth;
      var offsetEvenMed = offsetEven + itemWidthMed;

      var triangleLeft = {
        right: '-' + (triangleWidth - 1) + 'px',
        borderWidth: triangleHeight + 'px 0 ' + triangleHeight + 'px ' + triangleWidth + 'px',
        borderColor: 'transparent transparent transparent ' + activeColor
      };
      var triangleRight = {
        left: '-' + (triangleWidth - 1) + 'px',
        borderWidth: triangleHeight + 'px ' + triangleWidth + 'px ' + triangleHeight + 'px 0',
        borderColor: 'transparent ' + activeColor + ' transparent transparent'
      };

      var mediaMed = '@media screen and (min-width: ' + mediaWidthSmall + 'px)\n       and (max-width: ' + mediaWidthMed + 'px)';
      var mediaSmall = '@media screen and (max-width: ' + mediaWidthSmall + 'px)';
      var mediaPrint = '@media print';

      var styles = {
        base: (_base = {
          position: 'relative',
          bottom: '0',
          width: itemWidth + 'px',
          padding: itemPadding + 'px',
          background: activeColor,
          visibility: animations ? 'hidden' : null,
          opacity: animations ? 0 : 1,
          transition: animations ? 'all .5s ease-in-out' : null
        }, _defineProperty(_base, mediaMed, {
          width: itemWidthMed + 'px'
        }), _defineProperty(_base, mediaSmall, {
          width: 'calc(100vw - ' + (triangleWidth + circleWidth + smallItemWidthPadding) + 'px)'
        }), _defineProperty(_base, mediaPrint, {
          width: '100%',
          left: 0,
          transform: null
        }), _base),
        inView: {
          transform: 'none',
          visibility: 'visible',
          opacity: '1'
        },
        even: (_even = {
          left: '-' + offsetEvenNml + 'px',
          transform: animations ? 'translate3d(-' + offsetHidden + 'px,0,0)' : null
        }, _defineProperty(_even, mediaMed, {
          left: '-' + offsetEvenMed + 'px'
        }), _defineProperty(_even, mediaSmall, {
          left: paddingToItemSmall + triangleWidth + 'px'
        }), _even),
        odd: _defineProperty({
          left: paddingToItem + triangleWidth + 'px',
          transform: animations ? 'translate3d(' + offsetHidden + 'px,0,0)' : null
        }, mediaSmall, {
          left: paddingToItemSmall + triangleWidth + 'px'
        }),
        triangle: {
          base: {
            position: 'absolute',
            bottom: triangleOffset + 'px',
            width: '0',
            height: '0',
            borderStyle: 'solid'
          },
          even: _extends({}, triangleLeft, _defineProperty({}, mediaSmall, triangleRight)),
          odd: triangleRight
        }
      };

      var propsToAdd = {};
      if (config.addEvenPropToChildren) {
        propsToAdd = _extends({}, propsToAdd, {
          even: even
        });
      }

      return _react2.default.createElement(
        'div',
        { style: [styles.base, even ? styles.even : styles.odd, inView && styles.inView] },
        _react2.default.createElement('span', { style: [styles.triangle.base, even ? styles.triangle.even : styles.triangle.odd, inView && styles.triangle.inView] }),
        _react2.default.createElement(
          'div',
          { ref: function ref(c) {
              return _this2.children = c;
            } },
          _react2.default.cloneElement(children, propsToAdd)
        )
      );
    }
  }]);

  return Content;
}(_react2.default.Component);

Content.propTypes = {
  children: _react.PropTypes.node.isRequired,
  even: _react.PropTypes.bool.isRequired,
  inView: _react.PropTypes.bool.isRequired,
  onInView: _react.PropTypes.func,
  config: _react.PropTypes.object.isRequired
};

exports.default = (0, _radium2.default)(Content);