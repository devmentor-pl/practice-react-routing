import React, { useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import { StyledSlider, StyledThumb } from './styled/StyledSlider.styled'

const RangeInput = () => {
	const [value, setValue] = React.useState([0, 100])

    


	return <StyledSlider defaultValue={[50, 75]} renderTrack={Track} renderThumb={Thumb} />
}

export default RangeInput
