import React, {Component} from 'react';
import {loadBeers} from './services/api';

const BeerContext = React.createContext();

class BeerProvider extends Component {
    state = {
        bottles: [],
        loading: true
    };

    componentDidMount() {
        this.getData();
    }

    getData = () =>
        loadBeers().then(res => {
            let data = res.data;
            let bottles = this.formatData(data);
            this.setState({bottles, loading: false});
            return bottles;
        });

    getBottleDetail = slug => {
        let tempBottle = [...this.state.bottles];
        const bottle = tempBottle.find(bottle => bottle.slug === slug);
        return bottle;
    };

    addData = value => {
        let currentData = [value, ...this.state.bottles];
        this.setState({bottles: currentData});
        console.log(this.state.bottles);
    };

    formatData(data) {
        let tempData = data.map(item => {
            let tempStyle = item.style;
            let beerStyle = tempStyle ? tempStyle.name : 'Unknown style';
            let description = tempStyle
                ? tempStyle.description
                : 'no description';
            let slug = this.generateSlug(item.name);
            let ibu = item.ibu ? item.ibu : 'N/D';

            let bottles = {
                ...item,
                beerStyle,
                description,
                slug,
                ibu
            };
            return bottles;
        });
        return tempData;
    }

    generateSlug(name) {
        return name
            .split(' ')
            .join('-')
            .toLowerCase();
    }

    render() {
        return (
            <BeerContext.Provider
                value={{
                    ...this.state,
                    getBottleDetail: this.getBottleDetail,
                    addData: this.addData,
                    generateSlug: this.generateSlug
                }}>
                {this.props.children}
            </BeerContext.Provider>
        );
    }
}

const BeerConsumer = BeerContext.Consumer;

export {BeerProvider, BeerConsumer, BeerContext};
