import React from 'react';
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        
        marginBottom: "20px",
        width: "700px",
        padding: "10px",
        background: "#3f51b5",
    },
    typography: {
        textAlign: "left",
        color: "#fff",
    }
   });

const Nugget = ({ nugget }) => {
    const classes = useStyles();
     return (
      <Card className={classes.card}>
        <Typography className={classes.typography} component="h6" variant="h5">
            Question : {nugget.question}
        </Typography>
        
        <Typography className={classes.typography} component="h6" variant="h5">
            Answer: {nugget.answer}
        </Typography>
      </Card>
    );
   };


export default Nugget;