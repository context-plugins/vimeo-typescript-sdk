import { s, type Schema } from "../core/index.js";
import { addPrivacyUserSchema, type AddPrivacyUser } from "./add-privacy-user.js";
import { block1Schema, type Block1 } from "./block1.js";
import { connectedApps1Schema, type ConnectedApps1 } from "./connected-apps1.js";
import { follow2Schema, type Follow2 } from "./follow2.js";
import { reportSchema, type Report } from "./report.js";

export type Interactions2 = {
  addPrivacyUser?: AddPrivacyUser;
  block: Block1;
  connectedApps?: ConnectedApps1;
  follow?: Follow2;
  report: Report;
};

export const interactions2Schema: Schema<Interactions2> = s.object<Interactions2>({
  addPrivacyUser: s.optional(s.lazy(() => addPrivacyUserSchema)),
  block: block1Schema,
  connectedApps: s.optional(s.lazy(() => connectedApps1Schema)),
  follow: s.optional(s.lazy(() => follow2Schema)),
  report: reportSchema,
  _keysMap: {
    addPrivacyUser: "add_privacy_user",
    connectedApps: "connected_apps",
  },
});
