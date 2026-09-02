import { s, type Schema } from "../core/index.js";

export type Custom2 = {
  active: boolean;
  link: string;
  sticky: boolean;
  url: string;
  useLink: boolean;
};

export const custom2Schema: Schema<Custom2> = s.object<Custom2>({
  active: s.boolean(),
  link: s.string(),
  sticky: s.boolean(),
  url: s.string(),
  useLink: s.boolean(),
  _keysMap: {
    useLink: "use_link",
  },
});
