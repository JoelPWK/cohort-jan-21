import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { CardActionArea } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

//fake data

const MyRecipes = (props) => {
  const [recipeData, setRecipieData] = useState([
    {
      name: "chicken",
      author: "Jim",
      user: "https://i.pravatar.cc/100",
      instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      photo: "https://picsum.photos/200",
      likes: Math.floor(Math.random() * 100),
    },
    {
      name: "Veg",
      author: "Tim",
      user: "https://i.pravatar.cc/100",
      instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      photo: "https://picsum.photos/200",
      likes: Math.floor(Math.random() * 100),
    },
    {
      name: "Pudding",
      author: "Lynn",
      user: "https://i.pravatar.cc/100",
      instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      photo: "https://picsum.photos/200",
      likes: Math.floor(Math.random() * 100),
    },
  ]);

  //materialui card styling:

  const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
      backgroundColor: "#d3d3d3",
    },
    media: {
      height: 300,
    },
  });
  //initialising the use of styles as 'classes'
  const classes = useStyles();

  return (
    <>
      {recipeData.map((recipeData) => {
        return (
          <Card className={classes.card}>
              <CardActionArea onClick={() => {alert('clicked')}}>
            <CardContent>
              <Typography variant="h3" component="h3">
                {recipeData.name}
              </Typography>
                <CardMedia className={classes.media} image={recipeData.photo}  />
              <Typography color="primary" variant="h5">
                {recipeData.instructions}
              </Typography>
              <CardActions>
                  <Button>
                      Save Recipe
                  </Button>
              </CardActions>
            </CardContent>
              </CardActionArea>
          </Card>
        );
      })}
    </>
  );
};

export default MyRecipes;

// export default function OutlinedCard() {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   return (
//     <Card className={classes.root} variant="outlined">
//       <CardContent>
//         <Typography className={classes.title} color="textSecondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="h2">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           adjective
//         </Typography>
//         <Typography variant="body2" component="p">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
