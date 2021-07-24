import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import cx from "classnames";

const Cards = () => {
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.positif)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Positif
            </Typography>
            <Typography variant="h5">Data</Typography>
            <Typography color="textSecondary">Date</Typography>
            <Typography variant="body2">
              Number Of Active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.sembuh)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Sembuh
            </Typography>
            <Typography variant="h5">Data</Typography>
            <Typography color="textSecondary">Date</Typography>
            <Typography variant="body2">
              Number Of Active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.meninggal)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Meninggal
            </Typography>
            <Typography variant="h5">Data</Typography>
            <Typography color="textSecondary">Date</Typography>
            <Typography variant="body2">
              Number Of Active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
