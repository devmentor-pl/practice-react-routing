import React from 'react'
import { StyledTrack } from './styles'

const Track = (props, state) => <StyledTrack {...props} index={state.index} />

export default Track
