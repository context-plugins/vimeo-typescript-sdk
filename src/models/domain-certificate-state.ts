import { s, type EnumSchema } from "../core/index.js";

export const DomainCertificateState = {
  _0: "0",
  _1: "1",
  _2: "2",
  _3: "3",
  _4: "4",
  _5: "5",
  _6: "6",
  _7: "7",
  _8: "8",
  Null: "null",
} as const;
export type DomainCertificateState =
  | (typeof DomainCertificateState)[keyof typeof DomainCertificateState]
  | (string & {});

export const domainCertificateStateSchema: EnumSchema<DomainCertificateState> =
  s.enumOf<DomainCertificateState>(DomainCertificateState);
