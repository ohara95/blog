import createDataContext from "./createDataContext";
import shortid from "shortid";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "add_blog":
      return [
        ...state,
        {
          id: shortid.generate(),
          title: action.payload.title,
          subTitle: action.payload.subTitle,
          content: action.payload.content,
        },
      ];
    case "edit_blog":
      return state.map((input) =>
        input.id === action.payload.id ? action.payload : input
      );
    case "delete_blog":
      return state.filter((input) => input.id !== action.payload);
    default:
      return state;
  }
};

const addBlog = (dispatch) => {
  return (title, subTitle, content, callback) => {
    dispatch({ type: "add_blog", payload: { title, subTitle, content } });
    if (callback) callback();
  };
};

const editBlog = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({
      type: "edit_blog",
      payload: { id, title, content },
    });
    if (callback) callback();
  };
};

const deleteBlog = (dispatch) => {
  return (id) => {
    dispatch({
      type: "delete_blog",
      payload: id,
    });
  };
};

export const { Context, Provider } = createDataContext(
  inputReducer,
  { addBlog, editBlog, deleteBlog },
  []
);
