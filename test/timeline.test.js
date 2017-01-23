import React from 'react'
import { shallow } from 'enzyme'

import Timeline from '../src'

describe('Timeline', () => {
  it('passes smoke test', () => {
    shallow(<Timeline><div></div></Timeline>)
  })

  it('inserts children', () => {
    const tl =
      shallow(<Timeline><div>1</div><div>2</div><div>3</div></Timeline>)
    expect(tl.contains(<div>1</div>)).toEqual(true)
    expect(tl.contains(<div>2</div>)).toEqual(true)
    expect(tl.contains(<div>3</div>)).toEqual(true)
  })
})