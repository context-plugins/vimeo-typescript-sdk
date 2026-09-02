import { s, type Schema } from "../core/index.js";

export type Activate = {
  options: string[];
  uri: string;
};

export const activateSchema: Schema<Activate> = s.object<Activate>({
  options: s.array(s.string()),
  uri: s.string(),
});
