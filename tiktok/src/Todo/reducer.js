import { SetJob, AddJob, DeleteJob } from "./constant";
export const initState = {
  job: "",
  jobs: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SetJob:
      return {
        ...state,
        job: action.payload,
      };

    case AddJob:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };

    case DeleteJob:
      const newjob = [...state.jobs];
      newjob.splice(action.payload, 1);
      return {
        ...state,
        jobs: newjob,
      };

    default:
      throw new Error("Invalid");
  }
};

export default reducer;
