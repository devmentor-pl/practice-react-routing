import styled from 'styled-components'
import ReactSlider from 'react-slider'

export const StyledSlider = styled(ReactSlider)`
	width: 100%;
	height: 20px;
	max-width: 400px;
`

export const StyledThumb = styled.div`
	height: 20px;
	line-height: 20px;
	width: 20px;
	text-align: center;
	background-color: #0259e3;
	color: #ddd;
	border-radius: 50%;
	cursor: grab;
	font-size: 10px;
`

export const StyledTrack = styled.div`
	top: 0;
	bottom: 0;
	background: ${props => (props.index === 2 ? '#ddd' : props.index === 1 ? '#68b04c' : '#ddd')};
	border-radius: 999px;
`
