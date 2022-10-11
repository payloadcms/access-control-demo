import { Access } from "payload/config";
import { User } from "../payload-types";

export const isLoggedIn: Access<any, User> = ({ req: { user } }) => {
  // Return true if user is logged in, false if not
  return Boolean(user);
}