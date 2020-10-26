import React, { useContext } from "react";
import { Context } from "../context/inputReducer";
import { useHistory } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const InputList = () => {
  const { state, deleteBlog } = useContext(Context);
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      {state.map((blog: any) => (
        <Grid item key={blog.id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {blog.title}
              </Typography>
              <Typography>{blog.content}</Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  history.push(`/detail/${blog.id}`);
                }}
              >
                View
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  history.push(`/edit/${blog.id}`);
                }}
              >
                Edit
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  deleteBlog(blog.id);
                }}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default InputList;
