import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

type Props = {
  totalPage: number;
};

const PageButton: FC<Props> = ({ totalPage }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>現在のページ</Button>
        <Button>{totalPage}</Button>
        <Button>次ページ</Button>
      </ButtonGroup>
    </div>
  );
};

export default PageButton;
