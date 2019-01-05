import React from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import { Input, Label } from 'semantic-ui-react'

const InputExemple = ({Info, Entree}) => (
    <div className = "Input">
        <Label> {Info}</Label>
        <Input placeholder={Entree} />
    </div>
)
export default InputExemple