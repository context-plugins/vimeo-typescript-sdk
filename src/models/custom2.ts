import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A collection of information relating to custom logos in the embeddable player. */
export type Custom2 = {
  /** Whether the custom logo appears in the embeddable player. */
  active: boolean;
  /** The URL that loads upon clicking the custom logo. */
  link: string;
  /** Whether the custom logo appears even when the player interface is hidden. */
  sticky: boolean;
  /** The URL source of the custom player logo. */
  url: string;
  /** Whether the custom logo should use the URL link. */
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
