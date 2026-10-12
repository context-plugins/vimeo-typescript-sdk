import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The state of the SSL certificate that is associated with the showcase's domain.
 *
 * Option descriptions:
 *  * `0` - The new certificate has yet to be processed.
 *  * `1` - The new certificate is being processed in the queue.
 *  * `2` - The certificate is being processed for renewal in the queue.
 *  * `3` - The new certificate has failed to be issued in the queue.
 *  * `4` - The certificate has failed to be renewed in the queue.
 *  * `5` - The certificate has been successfully issued.
 *  * `6` - The certificate has been successfully renewed.
 *  * `7` - The certificate has failed in the polling flow.
 *  * `8` - The certificate has failed to be renewed in the polling flow.
 *  * `null` - There is no associated HTTPS domain with this showcase.
 */
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
