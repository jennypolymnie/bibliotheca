
import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

const TextArea = ({description}) => (
  <Form>
    <TextArea placeholder= {description} style={{ minHeight: 100 }} />
  </Form>
)

export default TextArea