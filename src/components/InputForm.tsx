import React, { useState, useContext } from "react";
import { Context } from "../context/inputReducer";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    button: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

const Form = () => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const { addBlog } = useContext(Context);

  return (
    <FormControl className={classes.text}>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        variant="outlined"
        label="タイトル"
      />
      <TextField
        value={subTitle}
        onChange={(e) => setSubTitle(e.target.value)}
        variant="outlined"
        label="サブタイトル"
      />
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        variant="outlined"
        label="内容"
      />
      <Button
        onClick={() => {
          addBlog(title, subTitle, text, () => {
            setText("");
            setSubTitle("");
            setTitle("");
          });
        }}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        投稿
      </Button>
    </FormControl>
  );
};

export default Form;
