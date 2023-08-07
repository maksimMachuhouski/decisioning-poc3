import { versionIsHigherOrEqual } from 'src/utils/versions';
import { GoldRulesInterface } from '../gold-rules-interface';
import {
  CreditPolicyInput2_1,
  CreditPolicyInput2_2,
  CreditPolicyOutput2_1,
  CreditPolicyOutput2_2,
} from '../gold-rules-types';
import { GoldRulesV2_1_1 } from './gold-rules-v2.1.1';
import { GoldRulesV2_3_1 } from './gold-rules-v2.3.1';

export class GoldRulesV2 implements GoldRulesInterface {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  public run(
    inputs: CreditPolicyInput2_1 | CreditPolicyInput2_2,
  ): CreditPolicyOutput2_1 | CreditPolicyOutput2_2 {
    if (versionIsHigherOrEqual(this.version, '2.3.1')) {
      return new GoldRulesV2_3_1(this.version).run(inputs);
    } else {
      return new GoldRulesV2_1_1(this.version).run(inputs);
    }
  }
}
