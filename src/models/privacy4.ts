import { s, type Schema } from "../core/index.js";
import { comment2Schema, type Comment2 } from "./comment2.js";
import { invite2Schema, type Invite2 } from "./invite2.js";
import { join1Schema, type Join1 } from "./join1.js";
import { videos7Schema, type Videos7 } from "./videos7.js";
import { view5Schema, type View5 } from "./view5.js";

export type Privacy4 = {
  comment: Comment2;
  invite: Invite2;
  join: Join1;
  videos: Videos7;
  view: View5;
};

export const privacy4Schema: Schema<Privacy4> = s.object<Privacy4>({
  comment: comment2Schema,
  invite: invite2Schema,
  join: join1Schema,
  videos: videos7Schema,
  view: view5Schema,
});
