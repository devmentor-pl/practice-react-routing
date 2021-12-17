import React from 'react';
import Shop from "../src/components/Shop";
import {Route, useHistory, useParams} from 'react-router-dom';
import sortFunction from '../src/helpers/sortFun';

const Task04 = () => {
    const history = useHistory();

    const handleChange = (e) => {
		const {value} = e.target
		history.push(`/task04/${value}`);
	}

    const DisplayContent = () => {
		const {sortName = ''} = useParams();
		return <Shop products={sortFunction(sortName)} />
	}

    return (
        <>
            <h1>Task04</h1>
            <select onChange={handleChange}>
                <option value={''}>Sort products</option>
                <option value={'price-desc'}>Highest price</option>
                <option value={'price-asc'}>Lowest Price</option>
		    </select>
			<Route path={['/task04/:sortName', '/task04/']}>
                <DisplayContent/>
			</Route>
        </>
    );
}

export default Task04;

