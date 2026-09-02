import { s, type Schema } from "../core/index.js";
import { disabledSchema, type Disabled } from "./disabled.js";

export type ViewProfile = {
  disabled?: Disabled;
  modOverride?: boolean;
  options?: string[];
  uri?: string;
};

export const viewProfileSchema: Schema<ViewProfile> = s.object<ViewProfile>({
  disabled: s.optional(s.lazy(() => disabledSchema)),
  modOverride: s.optional(s.boolean()),
  options: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
  _keysMap: {
    modOverride: "mod_override",
  },
});
