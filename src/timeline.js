import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import Entry from './entry'
import defaultConfig from './config'

export class Timeline extends React.Component {
  constructor(props) {
    super(props)
    this.state = { twoSided: true }
    this.onTwoSidedChange = this.onTwoSidedChange.bind(this)
    this.componentWillReceiveProps(props)
  }

  /**
   * Merge config with default only once (optimize)
   */
  componentWillReceiveProps(newProps) {
    //eslint-disable-next-line no-unused-vars
    const { children, ...config } = newProps // children are not config
    this.mergedConfig = {
      ...defaultConfig,
      ...config,
    }
  }

  componentWillMount() {
    const { mediaWidthSmall } = this.mergedConfig
    if (window && window.matchMedia) {
      this.mqTwoSided = window.matchMedia(`(min-width: ${mediaWidthSmall}px)`)
      this.mqTwoSided.addListener(this.onTwoSidedChange)
      this.onTwoSidedChange(this.mqTwoSided)
    }
  }

  componentWillUnmount() {
    if (this.mqTwoSided) {
      this.mqTwoSided.removeListener(this.onTwoSidedChange)
    }
  }

  onTwoSidedChange(mq) {
    this.setState({ twoSided: mq.matches })
  }

  render() {
    const { children } = this.props
    const { totalWidth, color, twoSidedOverlap, lineColor, lineWidth, endNodeType, endNodeSize } = this.mergedConfig
    const twoSided = this.state.twoSided
    let i = 0

    const styles = {
      base: {
        textAlign: 'center',
        paddingBottom: twoSided && twoSidedOverlap + 'px',
        color: color,
        overflow: 'hidden',
        [this.mqTwoSidedString]: {
          marginBottom: twoSidedOverlap + 'px',
        }
      },
	  endNode: {
		  base: {
        height: `${endNodeSize}px`,
        width: `${endNodeSize}px`,
        background: lineColor,
        marginLeft: `${totalWidth/2 - endNodeSize/2 + lineWidth/2}px`,
		  },
		  square: {
		  },
		  circle: {
			  borderRadius: `${endNodeSize / 2}px`,
		  }
	  },
    }

    return (
	  <div>
      <div style={[styles.base]}>
        {React.Children.map(children, c =>
          <Entry even={i++ % 2 === 0 && twoSided} config={this.mergedConfig}
            icon={c.props.icon}>
            {c}
          </Entry>
        )}
      </div>
      {endNodeType != 'none' && <div style={[styles.endNode.base, styles.endNode[endNodeType]]} />}
	  </div>
    )
  }
}

Timeline.propTypes = {
  children: PropTypes.node.isRequired,

  // global
  totalWidth: PropTypes.number,
  paddingTop: PropTypes.number,
  mediaWidthMed: PropTypes.number,
  mediaWidthSmall: PropTypes.number,
  activeColor: PropTypes.string,
  color: PropTypes.string,
  twoSidedOverlap: PropTypes.number,
  animations: PropTypes.bool,
  addEvenPropToChildren: PropTypes.bool,

  // line
  lineColor: PropTypes.string,
  lineWidth: PropTypes.number,
  paddingToItem: PropTypes.number,
  paddingToItemSmall: PropTypes.number,
  endNodeType: PropTypes.oneOf(['none', 'circle', 'square']),
  endNodeSize: PropTypes.number,

  // circle
  circleColor: PropTypes.string,
  circleWidth: PropTypes.number,
  
  // triangle
  triangleColor: PropTypes.string,
  triangleWidth: PropTypes.number,
  triangleHeight: PropTypes.number,
  trianglePosition: PropTypes.oneOf(['top', 'bottom']),
  triangleOffset: PropTypes.number,

  // list item content
  itemWidth: PropTypes.number,
  itemWidthMed: PropTypes.number,
  offsetHidden: PropTypes.number,
  smallItemWidthPadding: PropTypes.number,
  itemPadding: PropTypes.number,
  evenItemOffset: PropTypes.number,
}

export default Radium(Timeline)
