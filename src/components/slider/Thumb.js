import React from 'react'
import { StyledThumb } from './styles'

const Thumb = (props, state) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>

export default Thumb
