import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const DropdownQuestion = ({a,b,c,d,e,f}) => (
  <Dropdown text={a}>
    <Dropdown.Menu>
      <Dropdown.Item text={b} />
      <Dropdown.Item text={c} />
      <Dropdown.Item text={d} />
      <Dropdown.Item text={e} />
      <Dropdown.Item text={f} />
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownQuestion