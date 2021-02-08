import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup'
import classNames from 'classnames';
import classes from './Cards.module.css';

export const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    console.log(lastUpdate);
    // Check if there is no data
    if(!confirmed){
        return 'Loading...';
    }
    return (
        <div className={classes.container}>
            <Grid container spacing={3} justify="center"> 
                <Grid item component={Card} xs={12} md={3} className={classNames(classes.card, classes.infected)}>
                    <CardContent>
                        <Typography variant="h4" className={classNames(classes.infectedData)}>
                            <CountUp start={0} end={confirmed.value} duration={3.5} separator="," />
                        </Typography>
                        <Typography variant="body2">Positif Covid</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={classNames(classes.card, classes.recovered)}>
                    <CardContent>
                        <Typography variant="h4" className={classNames(classes.recoveredData)}>
                            <CountUp start={0} end={recovered.value} duration={3.5} separator="," />
                        </Typography>
                        <Typography variant="body2">Sembuh dari Covid</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={classNames(classes.card, classes.deaths)}>
                    <CardContent>
                        <Typography variant="h4" className={classNames(classes.deathsData)}>
                            <CountUp start={0} end={deaths.value} duration={3.5} separator="," />
                        </Typography>
                        <Typography variant="body2">Meninggal akibat Covid</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
