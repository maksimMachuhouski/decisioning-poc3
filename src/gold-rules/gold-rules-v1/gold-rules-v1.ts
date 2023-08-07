import { versionIsHigherOrEqual } from 'src/utils/versions';
import { GoldRulesInterface } from '../gold-rules-interface';
import {
  CreditPolicyInput1_1,
  CreditPolicyInput1_2,
  CreditPolicyOutput1,
} from '../gold-rules-types';
/*
import { GoldRulesV1_1_1 } from './gold-rules-v1.1.1';
import { GoldRulesV1_2_1 } from './gold-rules-v1.2.1';
import { GoldRulesV1_2_2 } from './gold-rules-v1.2.2';
*/

export class GoldRulesV1 implements GoldRulesInterface {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  public run(
    inputs: CreditPolicyInput1_1 | CreditPolicyInput1_2,
  ): CreditPolicyOutput1 {
    let approved = false;
    if (versionIsHigherOrEqual(this.version, '1.2.2')) {
      approved = (inputs as CreditPolicyInput1_2).fico >= 640;
    } else if (versionIsHigherOrEqual(this.version, '1.2.1')) {
      approved = (inputs as CreditPolicyInput1_2).fico > 640;
    } else {
      approved = (inputs as CreditPolicyInput1_1).someWeirdParam;
    }

    const ret: CreditPolicyOutput1 = {
      version: this.version,
      inputs: inputs,
      approved: approved,
    };

    return ret;
  }
}
