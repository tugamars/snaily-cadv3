import Call from "../../interfaces/Call";
import Logger from "../Logger";
import socket from "../socket";
import { Dispatch } from "redux";
import { handleRequest, isSuccess } from "../functions";
import { GET_911_CALLS, END_911_CALL, UPDATE_911_CALL } from "../types";

interface IDispatch {
  type: string;
  calls?: Call[];
}

export const getActive911Calls = () => async (
  dispatch: Dispatch<IDispatch>
) => {
  try {
    const res = await handleRequest("/global/911-calls", "GET");

    if (isSuccess(res)) {
      dispatch({
        type: GET_911_CALLS,
        calls: res.data.calls,
      });
    }
  } catch (e) {
    Logger.error("GET_ACTIVE_911_CALLS", e);
  }
};

export const update911Call = (
  id: string,
  data: { location: string; description: string; assigned_unit: string }
) => async (dispatch: Dispatch<IDispatch>) => {
  try {
    const res = await handleRequest(`/dispatch/calls/${id}`, "PUT", data);

    if (isSuccess(res)) {
      socket.emit("UPDATE_911_CALLS");
      dispatch({
        type: UPDATE_911_CALL,
        calls: res.data.calls,
      });
    }
  } catch (e) {
    Logger.error(UPDATE_911_CALL, e);
  }
};

export const end911Call = (id: string) => async (
  dispatch: Dispatch<IDispatch>
) => {
  try {
    const res = await handleRequest(`/dispatch/calls/${id}`, "DELETE");

    if (isSuccess(res)) {
      socket.emit("UPDATE_911_CALLS");
      dispatch({ type: END_911_CALL, calls: res.data.calls });
    }
  } catch (e) {
    Logger.error(END_911_CALL, e);
  }
};