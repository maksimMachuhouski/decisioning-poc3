import { versionIsHigherOrEqual } from 'src/utils/versions';
import { GoldRulesInterface } from '../gold-rules-interface';
import {
  CreditPolicyInput2_1,
  CreditPolicyOutput2_1,
  CreditPolicyOutput2_2,
} from '../gold-rules-types';
import { GoldGroupRule } from './gold-group-rule';
import { GoldRule1 } from './gold-rule1';
import { GoldRule2 } from './gold-rule2';

export class GoldRulesV2_1_1 implements GoldRulesInterface {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  public run(
    inputs: CreditPolicyInput2_1,
  ): CreditPolicyOutput2_1 | CreditPolicyOutput2_2 {
    const mrr1 = new GoldRule1(this.version).run(inputs.fico);
    const mrr2 = new GoldRule2(this.version).run(inputs.bk);

    let approved = true;

    if (!mrr1.triggered || !mrr2.triggered) {
      approved = false;
    }

    if (approved) {
      approved = new GoldGroupRule(this.version).run(inputs) as boolean;
    }

    if (versionIsHigherOrEqual(this.version, '2.2.1')) {
      return {
        version: this.version,
        inputs: inputs,
        approved: approved,
      };
    } else {
      return {
        version: this.version,
        inputs: inputs,
        approved: approved,
        someUnneededOutput: false,
      };
    }
  }
}
