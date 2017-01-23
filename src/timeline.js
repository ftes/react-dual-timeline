import React, { PropTypes } from 'react'
import Radium from 'radium'

import Entry from './entry'
import defaultConfig from './config'

export class Timeline extends React.Component {
  constructor(props) {
    super(props)
    this.state = { vw: 0 }
    this.updateWidth = this.updateWidth.bind(this)
  }

  componentWillMount() {
    this.updateWidth()
    window.addEventListener('resize', this.updateWidth)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth)
  }

  updateWidth() {
    this.setState({ vw: window.innerWidth })
  }

  render() {
    const { children, config, ...props } = this.props
    
    let i = 0
    const mergedConfig = {
      ...defaultConfig,
      ...config,
    }

    const { mediaWidthSmall, twoSidedOverlap } = mergedConfig

    const styles = {
      base: {
        textAlign: 'center',
        color: mergedConfig.color,
        [`@media screen and (min-width: ${mediaWidthSmall}px)`]: {
          marginBottom: twoSidedOverlap + 'px',
        }
      }
    }

    const allOddOnSmall = this.state.vw <= mergedConfig.mediaWidthSmall

    return (
      <div style={[styles.base]}>
        {React.Children.map(children, c =>
          <Entry even={i++ % 2 === 0 && !allOddOnSmall} config={mergedConfig}
            icon={c.props.icon} {...props}>
            {c}
          </Entry>
        )}
      </div>
    )
  }
}

Timeline.propTypes = {
  children: PropTypes.node.isRequired,
  config: PropTypes.object,
}

export default Radium(Timeline)