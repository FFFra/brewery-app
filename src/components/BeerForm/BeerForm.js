import React, {useState, useContext} from 'react';

import './BeerForm.css';
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
            <h1 className={'form__title'}>Add a beer</h1>
            <form className='form'>
                <div className={'form__container'}>
                    <p className={'form__label'} htmlFor='name'>
                        Name:
                    </p>
                    <input
                        className={'form__input'}
                        name='name'
                        type='text'
                        onChange={onChange}
                    />
                </div>
                <div className={'form__container'}>
                    <p className={'form__label'} htmlFor='style'>
                        Style:{' '}
                    </p>
                    <input
                        className={'form__input'}
                        name='beerStyle'
                        type='text'
                        onChange={onChange}
                    />
                </div>
                <div className={'form__container'}>
                    <p className={'form__label'} htmlFor='ibu'>
                        IBU:{' '}
                    </p>
                    <input
                        className={'form__input'}
                        name='ibu'
                        type='text'
                        onChange={onChange}
                    />
                </div>
                <div className={'form__container'}>
                    <p className={'form__label'} htmlFor='abv'>
                        ABV:{' '}
                    </p>
                    <input
                        className={'form__input'}
                        name='abv'
                        type='text'
                        onChange={onChange}
                    />
                </div>

                <div className={'form__container'}>
                    <p className={'form__label'} htmlFor='description'>
                        Description:{' '}
                    </p>
                    <input
                        className={'form__input'}
                        name='description'
                        type='text'
                        onChange={onChange}
                    />
                </div>
                <div className={'form__container'}>
                    <p className={'form__label'} htmlFor='status'>
                        Status:{' '}
                    </p>
                    <select
                        className={'form__input'}
                        name='status'
                        onChange={onChange}>
                        <option value='verified'>Verified</option>
                        <option value='unverified'>Unverified</option>
                    </select>
                </div>
            </form>
            <button className={'button'} onClick={() => addData(bottles)}>
                Insert
            </button>
        </div>
    );
};

export default BeerForm;
