import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsersProjectsRequest2 = {
  name: string;
};

export const usersProjectsRequest2Schema: Schema<UsersProjectsRequest2> = s.object<UsersProjectsRequest2>({
  name: s.string(),
});
