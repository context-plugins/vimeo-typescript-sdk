import { s, type Schema } from "../core/index.js";

export type UsersProjectsRequest2 = {
  name: string;
};

export const usersProjectsRequest2Schema: Schema<UsersProjectsRequest2> = s.object<UsersProjectsRequest2>({
  name: s.string(),
});
