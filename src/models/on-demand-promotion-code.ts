import { s, type Schema } from "../core/index.js";

export type OnDemandPromotionCode = {
  code: string;
  link: string;
  maxUses: number;
  uses: number;
};

export const onDemandPromotionCodeSchema: Schema<OnDemandPromotionCode> = s.object<OnDemandPromotionCode>({
  code: s.string(),
  link: s.string(),
  maxUses: s.number(),
  uses: s.number(),
  _keysMap: {
    maxUses: "max_uses",
  },
});
