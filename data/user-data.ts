import { userPassword } from "../config/env-vars";

type credentials = { username: string; password: string };

export const validUser: credentials = {
  password: userPassword,
  username: "standard_user",
};

export const lockedOutUser: credentials = {
  password: userPassword,
  username: "locked_out_user",
};
