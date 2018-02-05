import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

export class Content extends React.Component {
  constructor(props) {
    super(props)
    this.onScroll = this.onScroll.bind(this)
  }

  areChildrenInView() {
    const rect = this.children.getBoundingClientRect()
    const vwHeight = window.innerHeight || document.documentElement.clientHeight
    return (
      ( rect.bottom >= 0 && rect.bottom <= vwHeight ) ||
      ( rect.top >= 0 && rect.top <= vwHeight )
    )
  }

  componentDidMount() {
    if (this.props.config.animations) {
      window.addEventListener('scroll', this.onScroll)
      window.addEventListener('resize', this.onScroll)
      this.onScroll()
    }
  } 

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.onScroll)
  }

  onScroll() {
    const inView = this.areChildrenInView()
    this.props.onInView(inView)
  }

  render() {
    const { children, even, inView, config } = this.props

    const { circleWidth, mediaWidthMed, paddingToItem, paddingToItemSmall,
      itemWidth, itemWidthMed, animations, lineWidth, evenItemOffset,
      offsetHidden, triangleWidth, triangleOffset, triangleHeight,
      activeColor, mediaWidthSmall, smallItemWidthPadding, itemPadding }
      = config

    const offsetEven = circleWidth + paddingToItem + triangleWidth - lineWidth
      + evenItemOffset
    const offsetEvenNml = offsetEven + itemWidth
    const offsetEvenMed = offsetEven + itemWidthMed

    const triangleLeft = {
      right: `-${triangleWidth - 1}px`,
      borderWidth:
        `${triangleHeight}px 0 ${triangleHeight}px ${triangleWidth}px`,
      borderColor: `transparent transparent transparent ${activeColor}`,
    }
    const triangleRight = {
      left: `-${triangleWidth - 1}px`,
      borderWidth:
        `${triangleHeight}px ${triangleWidth}px ${triangleHeight}px 0`,
      borderColor: `transparent ${activeColor} transparent transparent`,
    }

    const mediaMed = `@media screen and (min-width: ${mediaWidthSmall}px)
       and (max-width: ${mediaWidthMed}px)`
    const mediaSmall = `@media screen and (max-width: ${mediaWidthSmall}px)`
    const mediaPrint = '@media print'

    const styles = {
      base: {
        position: 'relative',
        bottom: '0',
        width: itemWidth + 'px',
        padding: itemPadding + 'px',
        background: activeColor,
        visibility: animations ? 'hidden' : null,
        opacity: animations ? 0 : 1,
        transition: animations ? 'all .5s ease-in-out' : null,
        [mediaMed]: {
          width: itemWidthMed + 'px',
        },
        [mediaSmall]: {
          width: `calc(100vw - ${triangleWidth + circleWidth +
            smallItemWidthPadding}px)`,
        },
        [mediaPrint]: {
          width: '100%',
          left: 0,
          transform: null,
        }
      },
      inView: {
        transform: 'none',
        visibility: 'visible',
        opacity: '1',
      },
      even: {
        left: `-${offsetEvenNml}px`,
        transform: animations ? `translate3d(-${offsetHidden}px,0,0)` : null,
        [mediaMed]: {
          left: `-${offsetEvenMed}px`,
        },
        [mediaSmall]: {
          left: paddingToItemSmall + triangleWidth + 'px',
        },
      },
      odd: {
        left: paddingToItem + triangleWidth + 'px',
        transform: animations ? `translate3d(${offsetHidden}px,0,0)` : null,
        [mediaSmall]: {
          left: paddingToItemSmall + triangleWidth + 'px',
        },
      },
      triangle: {
        base: {
          position: 'absolute',
          bottom: triangleOffset + 'px',
          width: '0',
          height: '0',
          borderStyle: 'solid',
        },
        even: {
          ...triangleLeft,
          [mediaSmall]: triangleRight
        },
        odd: triangleRight,
      }
    }

    let propsToAdd = {}
    if (config.addEvenPropToChildren) {
      propsToAdd = {
        ...propsToAdd,
        even,
      }
    }

    return (
      <div style={[
        styles.base,
        even ? styles.even : styles.odd,
        inView && styles.inView,
      ]}>
        <span style={[
          styles.triangle.base,
          even ? styles.triangle.even : styles.triangle.odd,
          inView && styles.triangle.inView,
        ]}/>
        <div ref={c => this.children = c}>
          {React.cloneElement(children, propsToAdd)}
        </div>
      </div>
    )
  }
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
  even: PropTypes.bool.isRequired,
  inView: PropTypes.bool.isRequired,
  onInView: PropTypes.func,
  config: PropTypes.object.isRequired,
}

export default Radium(Content)
