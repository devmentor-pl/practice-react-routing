import React from 'react'

const FilterNameForm = ({ handleInputChange, handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
			<input onChange={handleInputChange} placeholder="Szukaj kursu" type="text"></input>
			<button type="submit">Filtruj</button>
		</form>
	)
}

export default FilterNameForm
