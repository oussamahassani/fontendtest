import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
 root: {
   width: 310,
   fontSize:15,
   

 },
 


});
export default function Cardproduct({img,prix,productname,description ,index}) {
  let indexshow = [0,4]
  const classes = useStyles();

  return (
      <div className={classes.root}>
     
    <Card className="card" >
      <CardActionArea>
        <CardMedia
          className="classmedia"
          image={img}
          title="Contemplative Reptile"
        />
        {indexshow.includes(index)? <button className="btnvert btn ">SUR COMMANDE</button> : "" }
        <CardContent>
          
          <p className="colorcontetnt">
          {description}
          </p>
          <h4 className="colorcontetnt" style={{fontWeight: "bold"}}>
           { prix} ML
          </h4>
        </CardContent>
        <CardActions>
        <Box
        display="flex"
        flexWrap="nowrap"
        justifyContent="space-between"
        p={1}
        m={1}
        className="widthhover"
      >
        <Box p={1}  >
        <span className="colorhover" style={{fontWeight:"bolder"}}>VOIR  DETAILS</span>
        </Box>
        <Box p={1} >
        <ArrowForwardIcon className="colorhover" />
        </Box>
        </Box>
      </CardActions>
      </CardActionArea>
      
    </Card>
    </div>
  );
}
    

