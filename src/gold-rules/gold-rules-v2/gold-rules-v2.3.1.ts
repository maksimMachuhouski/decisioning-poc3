import { GoldRulesInterface } from '../gold-rules-interface';
import {
  CreditPolicyInput2_1,
  CreditPolicyOutput2_2,
  CreditPolicyOutput2_3,
} from '../gold-rules-types';
import { GoldGroupRule, groupRuleOutput2_3 } from './gold-group-rule';
import { GoldRule1 } from './gold-rule1';
import { GoldRule2 } from './gold-rule2';

export class GoldRulesV2_3_1 implements GoldRulesInterface {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  public run(inputs: CreditPolicyInput2_1): CreditPolicyOutput2_2 {
    const mrr1 = new GoldRule1(this.version).run(inputs.fico);
    const mrr2 = new GoldRule2(this.version).run(inputs.bk);

    let approved = true;
    let rbEligible = false;

    if (!mrr1.triggered || !mrr2.triggered) {
      approved = false;
    }

    if (approved) {
      const output = new GoldGroupRule(this.version).run(
        inputs,
      ) as groupRuleOutput2_3;
      approved = output.approved;
      rbEligible = output.groupNumber < 4;
    }

    const ret: CreditPolicyOutput2_3 = {
      version: this.version,
      inputs: inputs,
      approved: approved,
      rbEligible: rbEligible,
    };
    return ret;
  }
}
