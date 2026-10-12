import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A collection of information relating to custom logos in the embeddable player. */
export type Custom = {
  /** Whether the custom logo appears in the embeddable player. */
  active: boolean;
  /** The URL that loads upon clicking the custom logo. */
  link: string | null;
  /** Whether the custom logo appears even when the player interface is hidden. */
  sticky: boolean;
  /** The URL of the selected custom logo. */
  url: string | null;
  /** Whether the custom logo should use the URL link. */
  useLink: boolean;
};

export const customSchema: Schema<Custom> = s.object<Custom>({
  active: s.boolean(),
  link: s.nullable(s.string()),
  sticky: s.boolean(),
  url: s.nullable(s.string()),
  useLink: s.boolean(),
  _keysMap: {
    useLink: "use_link",
  },
});
