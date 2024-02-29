import React, { useState } from 'react'
import { StyledSlider } from './styles'
import Track from './Track'
import Thumb from './Thumb'

const Slider = ({ onChange }) => {
	return (
		<>
			<StyledSlider defaultValue={[0, 100]} renderTrack={Track} renderThumb={Thumb} onChange={onChange} />
		</>
	)
}

export default Slider
