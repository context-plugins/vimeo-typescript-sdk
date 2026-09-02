import { s, type EnumSchema } from "../core/index.js";

export const Display = {
  Advanced: "Advanced",
  Basic: "Basic",
  Business: "Business",
  BusinessLive: "Business Live",
  Creator: "Creator",
  Custom: "Custom",
  Free: "Free",
  OttCustom: "Ott Custom",
  Plus: "Plus",
  Premium: "Premium",
  Pro: "Pro",
  ProLive: "Pro Live",
  ProUnlimited: "Pro Unlimited",
  Producer: "Producer",
  Production: "Production",
  Professional: "Professional",
  Standard: "Standard",
  Starter: "Starter",
  Studio: "Studio",
} as const;
export type Display = (typeof Display)[keyof typeof Display] | (string & {});

export const displaySchema: EnumSchema<Display> = s.enumOf<Display>(Display);
