import React, { useState } from "react";
import { makeStyles, rgbToHex } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  createMuiTheme,
  withStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
  // root: {
  //   maxWidth:
  // },
  media: {
    height: 340,
  },
});
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const n_useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function renderIngredients(ingredients) {
  return ingredients.map((ingredient) => {
    return (
      <div className="ingredient">
        {/* <FontAwesomeIcon icon={faDotCircle} /> */}
        <input type="checkbox" id="checker" />
        <span>{ingredient}</span>
      </div>
    );
  });
}
const text = (props) => {
  let t = "";
  props.dish.recipe.ingredientLines.map((ingredient) => {
    t += "->" + ingredient + "\n";
  });

  return t;
};

function DishDetail(props) {
  const classes = useStyles();
  const classses = n_useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 main_card">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={props.dish.recipe.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.dish.recipe.label}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Sorce : {props.dish.recipe.source}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                SHARE
              </Button>
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  color="primary"
                  href={props.dish.recipe.url}
                  target="_blank"
                  className="none"
                >
                  {/* <a href={props.dish.recipe.url} target="_blank"> */}
                  VIEW FULL RECIPE
                  {/* </a> */}
                </Button>
              </ThemeProvider>
            </CardActions>
          </Card>
        </div>
        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 ingr">
          <div className="Heading">
            <div>INGREDIENTS</div>
            <div className="logo">
              <CopyToClipboard text={text(props)}>
                <div className={classes.root}>
                  <FontAwesomeIcon
                    icon={faClipboard}
                    alt="copy to clipboard"
                    onClick={handleClick}
                  ></FontAwesomeIcon>
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} severity="success">
                      Ingredients Copied
                    </Alert>
                  </Snackbar>
                </div>
              </CopyToClipboard>
            </div>
          </div>
          <div className="ingredients">
            {renderIngredients(props.dish.recipe.ingredientLines)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishDetail;
