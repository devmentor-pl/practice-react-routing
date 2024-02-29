import styled from 'styled-components'
import ReactSlider from 'react-slider'

const StyledSlider = styled(ReactSlider)`
	width: 100%;
	height: 25px;
`

const StyledThumb = styled.div`
	height: 25px;
	line-height: 25px;
	width: 25px;
	text-align: center;
	background-color: #000;
	color: #fff;
	border-radius: 50%;
	cursor: grab;
`

export { StyledSlider, StyledThumb }
