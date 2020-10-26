import createDataContext from "./createDataContext";

const pageReducer = () => {
  switch (action.type) {
    case "viewPreview":
      return {
        ...state,
        currentPage: state.currentPage - 1,
        resourceData: action.data,
      };
    case "viewNext":
      return {
        ...state,
        currentPage: state.currentPage + 1,
        resourceData: action.data,
      };
    default:
      return state;
  }
};
const viewPreview = (dispatch) => {
  const offset = (state.currentPage - 2) * state.per;
  return () => {
    dispatch({ type: viewPreview, payload: offset });
  };
};

export default pageReducer;
