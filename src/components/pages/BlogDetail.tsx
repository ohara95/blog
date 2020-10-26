import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../../context/inputReducer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const BlogDetail = () => {
  const { state } = useContext(Context);
  const history = useHistory();
  const { id }: { id: string } = useParams();

  const blog = state.find((blog: any) => blog.id === id);
  return (
    <>
      <Button
        onClick={() => {
          history.push("/");
        }}
      >
        戻る
      </Button>
      <div>
        <Typography gutterBottom variant="h2" component="h2">
          {blog.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {blog.subTitle}
        </Typography>
        <Typography gutterBottom variant="h6" component="h2">
          {blog.content}
        </Typography>
      </div>
    </>
  );
};

export default BlogDetail;
