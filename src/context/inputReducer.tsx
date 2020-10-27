import createDataContext from "./createDataContext";
import shortid from "shortid";

type State = "id" | "title" | "subTitle" | "content";
type ActionType = "add_blog" | "edit_blog" | "delete_blog";
type PayloadState = {
  id?: string;
  title?: string;
  subTitle?: string;
  content?: string;
};

type StateProps = {
  [param in State]: string;
};

type Action = {
  type: ActionType;
  payload: StateProps;
};

const inputReducer = (state: StateProps[], action: Action) => {
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
      return state.filter((input) => input.id !== action.payload.id);
    default:
      return state;
  }
};

const addBlog = (
  dispatch: React.Dispatch<{ type: ActionType; payload: PayloadState }>
) => {
  return (
    title: string,
    subTitle: string,
    content: string,
    callback: () => void
  ) => {
    dispatch({ type: "add_blog", payload: { title, subTitle, content } });
    if (callback) callback();
  };
};

const editBlog = (
  dispatch: React.Dispatch<{ type: ActionType; payload: PayloadState }>
) => {
  return (id: string, title: string, content: string, callback: () => void) => {
    // createReducerでdispatchで発火させてるからここでも使える
    dispatch({
      type: "edit_blog",
      payload: { id, title, content },
    });
    if (callback) callback();
  };
};

const deleteBlog = (
  dispatch: React.Dispatch<{ type: ActionType; payload: PayloadState }>
) => {
  return (id: string) => {
    dispatch({
      type: "delete_blog",
      payload: { id },
    });
  };
};

export const { Context, Provider } = createDataContext(
  inputReducer,
  { addBlog, editBlog, deleteBlog },
  []
);
