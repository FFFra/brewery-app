import React, {useState} from 'react';

const BeerForm = () => {
    const [value, setValue] = useState('');
    const onChange = event => setValue(event.target.value);
    // localStorage.setItem('myValueInLocalStorage', event.target.value);

    return (
        <div>
            <h1>Add a beer</h1>
            <input value={value} type='text' onChange={onChange} />
            <p>{value}</p>
        </div>
    );
};

export default BeerForm;
