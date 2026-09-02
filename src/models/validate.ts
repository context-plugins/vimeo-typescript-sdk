import { s, type Schema } from "../core/index.js";

export type Validate = {
  options: string[];
  uri: string;
};

export const validateSchema: Schema<Validate> = s.object<Validate>({
  options: s.array(s.string()),
  uri: s.string(),
});
