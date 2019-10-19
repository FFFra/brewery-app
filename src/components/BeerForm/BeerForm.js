import React, {useState, useContext} from 'react';
import {BeerContext} from '../../context';

const BeerForm = () => {
    let {addData, generateSlug} = useContext(BeerContext);

    const [bottles, setBottle] = useState({
        name: '',
        beerStyle: '',
        ibu: '',
        abv: '',
        description: '',
        status: '',
        slug: ''
    });

    const onChange = event => {
        const {name, value} = event.target;
        setBottle(prev => ({
            ...prev,
            [name]: value,
            slug: generateSlug(prev.name)
        }));
    };

    return (
        <div>
            <form action=''>
                <h1>Add a beer</h1>
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input name='name' type='text' onChange={onChange} />
                </div>
                <div>
                    <label htmlFor='style'>Style: </label>
                    <input name='beerStyle' type='text' onChange={onChange} />
                </div>
                <div>
                    <label htmlFor='ibu'>IBU: </label>
                    <input name='ibu' type='text' onChange={onChange} />
                </div>
                <div>
                    <label htmlFor='abv'>ABV: </label>
                    <input name='abv' type='text' onChange={onChange} />
                </div>

                <div>
                    <label htmlFor='description'>Description: </label>
                    <input name='description' type='text' onChange={onChange} />
                </div>
                <select name='status' onChange={onChange}>
                    <option value='verified'>Verified</option>
                    <option value='unverified'>Unverified</option>
                </select>
            </form>
            <button onClick={() => addData(bottles)}>Insert</button>
        </div>
    );
};

export default BeerForm;
