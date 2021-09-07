import { Select } from '@material-ui/core'
import React from 'react'

const LanguageSelect = () => {
    return (
        <div>
            <Select native defaultValue="" id="grouped-native-select">
                <option value={1}>English</option>
                <option value={2}>Urdu</option>
            </Select>
        </div>
    )
}

export default LanguageSelect
