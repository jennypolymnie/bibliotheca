import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import './PartnerStudy.css'


const RequestingLabInfo = ({a, b, c, d}) => (

        <div>
          <Form>
            <Form.Group grouped widths='equal'>
              <Form.Field 
                required 
                control={Input} 
                label={a}
                placeholder={b} />
              <Form.Field 
                required
                control={Input}
                label={c}
                placeholder={d} />
            </Form.Group>
          </Form>
        </div>

)

export default RequestingLabInfo