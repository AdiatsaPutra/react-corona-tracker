import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import {Grid, Typography} from '@material-ui/core';

class App extends React.Component{

    state = {
        data: {}
    }

    // Initial component state
    async componentDidMount(){

        // Call fetch data
        const covidData = await fetchData();

        this.setState({data: covidData})
    }

    render(){
        const {data} = this.state;

        return(
            <div>
                <div className={styles.wrapper}>
                    <Typography variant="h3">Informasi Covid-19</Typography>
                    <Typography variant="body1">Terakhir diperbarui tangal: {new Date(data.lastUpdate).toLocaleDateString()} pukul {new Date(data.lastUpdate).toLocaleTimeString().substring(0, 8)}</Typography>
                    <Typography variant="h6">Data Covid-19 seluruh dunia</Typography>
                        <div className={styles.container}>
                        <Cards data={data}/>
                        {/* <CountryPicker/>
                        <Chart/> */}
                        </div>
                 </div>
            </div>
        )
    }
}

export default App