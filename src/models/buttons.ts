import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A collection of information about the buttons that appear on the interface of the embeddable
 * player.
 */
export type Buttons = {
  /** Whether the button for embeds appears in the embeddable player. */
  embed: boolean;
  /** Whether the button for fullscreen mode appears in the embeddable player. */
  fullscreen: boolean;
  /** Whether the button for HD videos appears in the embeddable player. */
  hd: boolean;
  /** Whether the button for likes appears in the embeddable player. */
  like: boolean;
  /** Whether the button for reactions appears in the embeddable player. */
  reaction?: boolean;
  /** Whether the button for scaling appears in the embeddable player. */
  scaling: boolean;
  /** Whether the button for shares appears in the embeddable player. */
  share: boolean;
  /** Whether the button for watching later appears in the embeddable player. */
  watchlater: boolean;
};

export const buttonsSchema: Schema<Buttons> = s.object<Buttons>({
  embed: s.boolean(),
  fullscreen: s.boolean(),
  hd: s.boolean(),
  like: s.boolean(),
  reaction: s.optional(s.boolean()),
  scaling: s.boolean(),
  share: s.boolean(),
  watchlater: s.boolean(),
});
