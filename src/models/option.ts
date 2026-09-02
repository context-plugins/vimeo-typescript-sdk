import { s, type Schema } from "../core/index.js";

export type Option = {
  newValue?: string | null;
  oldValue?: string | null;
};

export const optionSchema: Schema<Option> = s.object<Option>({
  newValue: s.optionalNullable(s.string()),
  oldValue: s.optionalNullable(s.string()),
  _keysMap: {
    newValue: "new_value",
    oldValue: "old_value",
  },
});
