import { SetJob, AddJob, DeleteJob } from "./constant.js";

export const SetJobAction = (payload) => {
  return {
    type: SetJob,
    payload,
  };
};

export const AddJobAction = (payload) => {
  return {
    type: AddJob,
    payload,
  };
};

export const DeleteJobAction = (payload) => {
  return {
    type: DeleteJob,
    payload,
  };
};
