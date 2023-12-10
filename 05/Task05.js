import React, { useState,useHistory } from 'react';

const Task05 = () => {

    const initSearch = {
        text: '',
        priceMin: '',
        priceMax: '',
    } 

    const [form, setForm] = useState(initSearch);
    const history = useHistory();


    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

    setForm((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const {priceMin, priceMax, text} = form;

        history.push(`/task05/${priceMin},${priceMax}-${text}`)
    }

    return (
        <>
        <h1>Task05</h1>
        <h1>Task05</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Fraza</label>
                    <input name="text" value={form.text} onChange={handleChange}/>
                </div>
                <div>
                    <label>Cena min</label>
                    <input name="priceMin" value={form.priceMin} onChange={handleChange}/>
                </div>
                <div>
                    <label>Cena max</label>
                    <input name="priceMax" value={form.priceMax} onChange={handleChange} />
                </div>
                <div><input type="submit"/></div>
            </form>

            <Route path="/task05/:minPrice?,:maxPrice?-:searchTerm?">
                <SearchPage/>
            </Route>
        </>
        
    );
}

export default Task05;

