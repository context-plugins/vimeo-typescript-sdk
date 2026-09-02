import { s, type Schema } from "../core/index.js";

export type Domain = {
  allowHd: boolean;
  domain: string;
  uri: string;
};

export const domainSchema: Schema<Domain> = s.object<Domain>({
  allowHd: s.boolean(),
  domain: s.string(),
  uri: s.string(),
  _keysMap: {
    allowHd: "allow_hd",
  },
});
