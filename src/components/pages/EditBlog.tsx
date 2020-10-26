import React, { useState, useContext } from "react";
import { Context } from "../../context/inputReducer";
import { useHistory, useParams } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const EditBlog = () => {
  const history = useHistory();
  const { id }: { id: string } = useParams();
  const { state, editBlog } = useContext(Context);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [text, setText] = useState("");

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
      <FormControl>
        <TextField
          label="タイトル"
          defaultValue={blog.title}
          value={title}
          variant="outlined"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          label="サブタイトル"
          defaultValue={blog.subTitle}
          value={subTitle}
          variant="outlined"
          onChange={(e) => {
            setSubTitle(e.target.value);
          }}
        />
        <TextField
          label="内容"
          defaultValue={blog.content}
          value={text}
          variant="outlined"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            editBlog(id, title, text);
          }}
        >
          変更
        </Button>
      </FormControl>
    </>
  );
};

export default EditBlog;
