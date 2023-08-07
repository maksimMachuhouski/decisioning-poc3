import { GoldRulesInterface } from '../gold-rules-interface';
import { CreditPolicyInput1_2, CreditPolicyOutput1 } from '../gold-rules-types';

export class GoldRulesV1_2_2 implements GoldRulesInterface {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  public run(inputs: CreditPolicyInput1_2): CreditPolicyOutput1 {
    const ret: CreditPolicyOutput1 = {
      version: this.version,
      inputs: inputs,
      approved: inputs.fico >= 640,
    };

    return ret;
  }
}
