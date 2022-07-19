import { cartAction } from "../../utils/reducer/reducer";
import { USER_ACTION_TYPES } from "./user-types";

export const setCurrentUser = (user) => {
  cartAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};
