import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup'
import classNames from 'classnames';
import styles from './Cards.module.css';

export const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    console.log(lastUpdate);
    // Check if there is no data
    if(!confirmed){
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center"> 
                <Grid item component={Card} xs={12} md={3} className={classNames(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography variant="h4" className={classNames(styles.infectedData)}>
                            <CountUp start={0} end={confirmed.value} duration={3.5} separator="," />
                        </Typography>
                        <Typography variant="body2" className={classNames(styles.information)}>Positif Covid</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={classNames(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography variant="h4" className={classNames(styles.recoveredData)}>
                            <CountUp start={0} end={recovered.value} duration={3.5} separator="," />
                        </Typography>
                        <Typography variant="body2" className={classNames(styles.information)}>Sembuh dari Covid</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={classNames(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography variant="h4" className={classNames(styles.deathsData)}>
                            <CountUp start={0} end={deaths.value} duration={3.5} separator="," />
                        </Typography>
                        <Typography variant="body2" className={classNames(styles.information)}>Meninggal akibat Covid</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
