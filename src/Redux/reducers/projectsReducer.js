import { ADD_PROJECT } from "../actions/projectsActions";

const initialState = {
  projects: [
    {
      id: "1",
      title: "let's build that stuff",
      content: "blah blah blah blah",
    },
    {
      id: "2",
      title: "help me find the peach",
      content: "blah blah blah blah",
    },
    {
      id: "3",
      title: "egg hunt with yoshi",
      content: "blah blah blah blah",
    },
  ],
};
export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: [action.payload, ...state.projects],
      };

    default:
      return state;
  }
};
