import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The language of the automated closed captions.
 *
 * Option descriptions:
 *  * `af` - The language is Afrikaans.
 *  * `am` - The language is Amharic.
 *  * `ar` - The language is Arabic.
 *  * `as` - The language is Assamese.
 *  * `ast` - The language is Asturian.
 *  * `az` - The language is Azerbaijani.
 *  * `be` - The language is Belarusian.
 *  * `bg` - The language is Bulgarian.
 *  * `bn` - The language is Bengali.
 *  * `bs` - The language is Bosnian.
 *  * `ca` - The language is Catalan.
 *  * `ceb` - The language is Cebuano.
 *  * `cs` - The language is Czech.
 *  * `cy` - The language is Welsh.
 *  * `da` - The language is Danish.
 *  * `de` - The language is German.
 *  * `el` - The language is Greek.
 *  * `en` - The language is English.
 *  * `es` - The language is Spanish.
 *  * `et` - The language is Estonian.
 *  * `fa` - The language is Persian.
 *  * `ff` - The language is Fulah.
 *  * `fi` - The language is Finnish.
 *  * `fil` - The language is Filipino.
 *  * `fr` - The language is French.
 *  * `ga` - The language is Irish.
 *  * `gl` - The language is Galician.
 *  * `gu` - The language is Gujarati.
 *  * `ha` - The language is Hausa.
 *  * `he` - The language is Hebrew.
 *  * `hi` - The language is Hindi.
 *  * `hr` - The language is Croatian.
 *  * `hu` - The language is Hungarian.
 *  * `hy` - The language is Armenian.
 *  * `id` - The language is Indonesian.
 *  * `ig` - The language is Igbo.
 *  * `is` - The language is Icelandic.
 *  * `it` - The language is Italian.
 *  * `ja` - The language is Japanese.
 *  * `jv` - The language is Javanese.
 *  * `ka` - The language is Georgian.
 *  * `kea` - The language is Kabuverdianu.
 *  * `kk` - The language is Kazakh.
 *  * `km` - The language is Khmer.
 *  * `kn` - The language is Kannada.
 *  * `ko` - The language is Korean.
 *  * `ku` - The language is Kurdish.
 *  * `ky` - The language is Kyrgyz.
 *  * `lb` - The language is Luxembourgish.
 *  * `lg` - The language is Ganda.
 *  * `ln` - The language is Lingala.
 *  * `lo` - The language is Lao.
 *  * `lt` - The language is Lithuanian.
 *  * `luo` - The language is Luo.
 *  * `lv` - The language is Latvian.
 *  * `mi` - The language is Maori.
 *  * `mk` - The language is Macedonian.
 *  * `ml` - The language is Malayalam.
 *  * `mn` - The language is Mongolian.
 *  * `mr` - The language is Marathi.
 *  * `ms` - The language is Malay.
 *  * `mt` - The language is Maltese.
 *  * `my` - The language is Burmese.
 *  * `ne` - The language is Nepali.
 *  * `nl` - The language is Dutch.
 *  * `no` - The language is Norwegian.
 *  * `nso` - The language is Northern Sotho.
 *  * `ny` - The language is Nyanja.
 *  * `oc` - The language is Occitan.
 *  * `or` - The language is Odia.
 *  * `pa` - The language is Punjabi.
 *  * `pl` - The language is Polish.
 *  * `ps` - The language is Pashto.
 *  * `pt` - The language is Portuguese.
 *  * `ro` - The language is Romanian.
 *  * `ru` - The language is Russian.
 *  * `sd` - The language is Sindhi.
 *  * `sk` - The language is Slovak.
 *  * `sl` - The language is Slovenian.
 *  * `sn` - The language is Shona.
 *  * `so` - The language is Somali.
 *  * `sr` - The language is Serbian.
 *  * `sv` - The language is Swedish.
 *  * `sw` - The language is Swahili.
 *  * `ta` - The language is Tamil.
 *  * `te` - The language is Telugu.
 *  * `tg` - The language is Tajik.
 *  * `th` - The language is Thai.
 *  * `tr` - The language is Turkish.
 *  * `uk` - The language is Ukrainian.
 *  * `umb` - The language is Umbundu.
 *  * `ur` - The language is Urdu.
 *  * `uz` - The language is Uzbek.
 *  * `vi` - The language is Vietnamese.
 *  * `wo` - The language is Wolof.
 *  * `xh` - The language is Xhosa.
 *  * `zh` - The language is Chinese.
 *  * `zh-HK` - The language is Cantonese (Hong Kong).
 *  * `zu` - The language is Zulu.
 */
export const AutoCcLanguage = {
  Af: "af",
  Am: "am",
  Ar: "ar",
  As: "as",
  Ast: "ast",
  Az: "az",
  Be: "be",
  Bg: "bg",
  Bn: "bn",
  Bs: "bs",
  Ca: "ca",
  Ceb: "ceb",
  Cs: "cs",
  Cy: "cy",
  Da: "da",
  De: "de",
  El: "el",
  En: "en",
  Es: "es",
  Et: "et",
  Fa: "fa",
  Ff: "ff",
  Fi: "fi",
  Fil: "fil",
  Fr: "fr",
  Ga: "ga",
  Gl: "gl",
  Gu: "gu",
  Ha: "ha",
  He: "he",
  Hi: "hi",
  Hr: "hr",
  Hu: "hu",
  Hy: "hy",
  Id: "id",
  Ig: "ig",
  Is: "is",
  It: "it",
  Ja: "ja",
  Jv: "jv",
  Ka: "ka",
  Kea: "kea",
  Kk: "kk",
  Km: "km",
  Kn: "kn",
  Ko: "ko",
  Ku: "ku",
  Ky: "ky",
  Lb: "lb",
  Lg: "lg",
  Ln: "ln",
  Lo: "lo",
  Lt: "lt",
  Luo: "luo",
  Lv: "lv",
  Mi: "mi",
  Mk: "mk",
  Ml: "ml",
  Mn: "mn",
  Mr: "mr",
  Ms: "ms",
  Mt: "mt",
  My: "my",
  Ne: "ne",
  Nl: "nl",
  No: "no",
  Nso: "nso",
  Ny: "ny",
  Oc: "oc",
  Or: "or",
  Pa: "pa",
  Pl: "pl",
  Ps: "ps",
  Pt: "pt",
  Ro: "ro",
  Ru: "ru",
  Sd: "sd",
  Sk: "sk",
  Sl: "sl",
  Sn: "sn",
  So: "so",
  Sr: "sr",
  Sv: "sv",
  Sw: "sw",
  Ta: "ta",
  Te: "te",
  Tg: "tg",
  Th: "th",
  Tr: "tr",
  Uk: "uk",
  Umb: "umb",
  Ur: "ur",
  Uz: "uz",
  Vi: "vi",
  Wo: "wo",
  Xh: "xh",
  Zh: "zh",
  ZhHk: "zh-HK",
  Zu: "zu",
} as const;
export type AutoCcLanguage = (typeof AutoCcLanguage)[keyof typeof AutoCcLanguage] | (string & {});

export const autoCcLanguageSchema: EnumSchema<AutoCcLanguage> = s.enumOf<AutoCcLanguage>(AutoCcLanguage);
