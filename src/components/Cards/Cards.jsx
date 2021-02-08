import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup'
import styles from './Cards.module.css';

export const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    // Check if there is no data
    if(!confirmed){
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center"> 
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Positif</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={3.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Positif Covid</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Sembuh</Typography>
                        <Typography variant="h5">{recovered.value}</Typography>
                        <Typography color="textSecondary">REAL DATA</Typography>
                        <Typography variant="body2">Sembuh Covid</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Meninggal</Typography>
                        <Typography variant="h5">{deaths.value}</Typography>
                        <Typography color="textSecondary">REAL DATA</Typography>
                        <Typography variant="body2">Meninggal</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
