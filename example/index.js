import React from 'react'
import { render } from 'react-dom'
import { StyleRoot } from 'radium'

import Timeline from '../src/timeline'


render(
  <StyleRoot>
    <Timeline activeColor='yellow'>
      <div><h1>Entry 1</h1></div>
      <div>
        <h1>Entry 2</h1>
        <ul>
          <li>arbitrary content in entries</li>
        </ul>
      </div>
      {[0,1,2,3,4,5,6,7,8,9,10].map(i =>
      <div key={i}>
        <h1>{i}</h1>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </div>
      )}
    </Timeline>
  </StyleRoot>,
  document.getElementById('root')
)