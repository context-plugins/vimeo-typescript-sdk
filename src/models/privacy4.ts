import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { comment2Schema, type Comment2 } from "./comment2.js";
import { invite2Schema, type Invite2 } from "./invite2.js";
import { join1Schema, type Join1 } from "./join1.js";
import { videos7Schema, type Videos7 } from "./videos7.js";
import { view5Schema, type View5 } from "./view5.js";

/** The group's privacy settings. */
export type Privacy4 = {
  /**
   * Who can comment on the group.
   *
   * Option descriptions:
   *  * `all` - Anyone can comment on the group.
   *  * `members` - Only group members can comment on the group.
   */
  comment: Comment2;
  /**
   * Who can invite new members to the group.
   *
   * Option descriptions:
   *  * `all` - Anyone can invite new members to the group.
   *  * `members` - Only group members can invite new members to the group.
   */
  invite: Invite2;
  /**
   * Who can join the group.
   *
   * Option descriptions:
   *  * `anybody` - Anyone can join the group.
   *  * `members` - Only people with a Vimeo account can join the group.
   */
  join: Join1;
  /**
   * Who can add videos to the group.
   *
   * Option descriptions:
   *  * `all` - Anyone can add videos to the group.
   *  * `members` - Only group members can add videos to the group.
   */
  videos: Videos7;
  /**
   * Who can access the group.
   *
   * Option descriptions:
   *  * `anybody` - Anyone can access the group. This privacy setting appears as `Public` on the
   *    Vimeo front end.
   *  * `members` - Only group members can access the group.
   */
  view: View5;
};

export const privacy4Schema: Schema<Privacy4> = s.object<Privacy4>({
  comment: comment2Schema,
  invite: invite2Schema,
  join: join1Schema,
  videos: videos7Schema,
  view: view5Schema,
});
