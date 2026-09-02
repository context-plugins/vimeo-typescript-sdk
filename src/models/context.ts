import { s, type Schema } from "../core/index.js";
import { actionSchema, type Action } from "./action.js";

export type Context = {
  action: Action;
  resource: Record<string, unknown> | null;
  resourceType: string;
};

export const contextSchema: Schema<Context> = s.object<Context>({
  action: actionSchema,
  resource: s.nullable(s.record(s.string(), s.unknown())),
  resourceType: s.string(),
  _keysMap: {
    resourceType: "resource_type",
  },
});
