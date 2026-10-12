import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The selected video title font family. */
export const TitleFontFamily = {
  Anton: "anton",
  ArchivoBlack: "archivo_black",
  BebasNeue: "bebas_neue",
  BricolageGrotesque: "bricolage_grotesque",
  Caveat: "caveat",
  DmSans: "dm_sans",
  DmSerifDisplay: "dm_serif_display",
  Fraunces: "fraunces",
  HankenGrotesk: "hanken_grotesk",
  IbmPlexSerif: "ibm_plex_serif",
  InstrumentSerif: "instrument_serif",
  Inter: "inter",
  JetbrainsMono: "jetbrains_mono",
  Lora: "lora",
  Montserrat: "montserrat",
  Outfit: "outfit",
  PlayfairDisplay: "playfair_display",
  Poppins: "poppins",
  Roboto: "roboto",
  SpaceGrotesk: "space_grotesk",
} as const;
export type TitleFontFamily = (typeof TitleFontFamily)[keyof typeof TitleFontFamily] | (string & {});

export const titleFontFamilySchema: EnumSchema<TitleFontFamily> = s.enumOf<TitleFontFamily>(TitleFontFamily);
