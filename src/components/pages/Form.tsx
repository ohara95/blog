import React from "react";
import InputForm from "../InputForm";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Form = () => {
  const history = useHistory();
  return (
    <>
      <Button
        onClick={() => {
          history.push("/");
        }}
      >
        戻る
      </Button>
      <InputForm />
    </>
  );
};

export default Form;
