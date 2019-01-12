import React from 'react'
import { Input, Label } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const InputExemple = ({info, entree}) => (
    <div className = "Input">
        <Label> {info}</Label>
        <Input placeholder={entree} />
    </div>
)

InputExemple.PropTypes = {
    info: PropTypes.string.isRequired,
    entree: PropTypes.number.isRequired,
}
export default InputExemple