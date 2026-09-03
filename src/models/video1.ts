import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { live1Schema, type Live1 } from "./live1.js";

export type Video1 = {
  comments: number;
  createdTime: string;
  duration: number;
  likes: number;
  live: Live1;
  manageLink: string;
  options: string[];
  title: string;
  uri: string;
};

export const video1Schema: Schema<Video1> = s.object<Video1>({
  comments: s.number(),
  createdTime: s.string(),
  duration: s.number(),
  likes: s.number(),
  live: live1Schema,
  manageLink: s.string(),
  options: s.array(s.string()),
  title: s.string(),
  uri: s.string(),
  _keysMap: {
    createdTime: "created_time",
    manageLink: "manage_link",
  },
});
