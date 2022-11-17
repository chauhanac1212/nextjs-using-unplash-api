import { GETDATA } from "./commen";

const initialState = {
  data: "",
};

export const Reducer =  ((state = initialState, action) => {
  switch (action.type) {
    case "GETDATA":
      return {
        ...state,
        data:  action.payload,
      };
    default:
      return state;
  }
})
