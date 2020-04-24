import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import Content from './content'

export class Entry extends React.Component {
  constructor(props) {
    super(props)
    this.onInView = this.onInView.bind(this)
    this.state = { inView: false }
  }

  onInView(inView) {
    this.setState({ inView })
  }

  render() {
    const { children, icon, ...props } = this.props
    const { inView } = this.state

    const { totalWidth, lineWidth, circleWidth, triangleHeight, trianglePosition, triangleOffset, paddingTop, lineColor, circleColor, activeColor,
      mediaWidthSmall, twoSidedOverlap, animations } = this.props.config

    const styles = {
      base: {
        listStyleType: 'none',
        position: 'relative', // base for map position
        width: lineWidth + 'px',
        margin: `0 ${totalWidth / 2}px -${twoSidedOverlap}px ${totalWidth / 2}px`,
        paddingTop: paddingTop + 'px',
        paddingBottom: '5px',
        background: lineColor,
        [`@media screen and (max-width: ${mediaWidthSmall}px)`]: {
          margin: '0 auto 0 ${circleWidth / 2 + 5}px',
        },
        '@media print': {
          margin: 0,
          width: '100%',
          paddingTop: 0,
        },
      },
      circle: {
        base: {
          position: 'absolute',
					top: `${
						trianglePosition == 'top'
							? `${paddingTop +
									triangleOffset -
									circleWidth / 2 +
									triangleHeight}px`
							: 'auto'
					}`,
					bottom: `${
						trianglePosition == 'bottom'
							? `${0 + triangleOffset - circleWidth / 2 + triangleHeight}px`
							: 'auto'
					}`,
          transform: 'translateX(-50%)',
          width: circleWidth + 'px',
          height: circleWidth + 'px',
          borderRadius: '50%',
          background: circleColor,
          transition: animations ? 'background .5s ease-in-out' : null,
          zIndex: 1,
        },
        inner: { 
          base: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }
        },
        inView: {
          background: circleColor,
        }
      },
    }

    return (
      <div style={[styles.base]}>
        <div>
          <Content {...props}
            inView={inView} onInView={this.onInView}
          >
            {children}
          </Content>
        </div>
        <span className='no-print' style={[
          styles.circle.base,
          inView && styles.circle.inView,
        ]}>
          <span style={[styles.circle.inner.base]}>{icon}</span>
        </span>
      </div>
    )
  }
}

Entry.propTypes = {
  children: PropTypes.node.isRequired,
  even: PropTypes.bool.isRequired,
  config: PropTypes.object.isRequired,
  icon: PropTypes.node,
}

export default Radium(Entry)
