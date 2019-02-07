import React from 'react';
import {Radio, Form,} from 'semantic-ui-react';
import './ReviewForm.css'


const ReviewQuestions = ({label, name, value, checked, onChange}) => (

    <Form.Field>
        
          <Radio
              label={label}
              name={name}
              value={value}
              checked={checked}
              onChange={onChange}
              />

    </Form.Field>
    )

          export default ReviewQuestions