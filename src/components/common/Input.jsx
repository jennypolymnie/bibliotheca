import React from 'react'
import { Input, Label } from 'semantic-ui-react'

const InputExemple = ({Info, Entree}) => (
    <div className = "Input">
        <Label> {Info}</Label>
        <Input placeholder={Entree} />
    </div>
)
export default InputExemple