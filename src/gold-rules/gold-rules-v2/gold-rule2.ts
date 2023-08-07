import { MinimumRequirementRuleInterface } from '../gold-rules-interface';
import { MinimumRequirementRuleOutput } from '../gold-rules-types';

export class GoldRule2 implements MinimumRequirementRuleInterface {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  public run(bk: number): MinimumRequirementRuleOutput {
    let ret: MinimumRequirementRuleOutput;
    if (bk < 1000) {
      ret = { triggered: true, message: null };
    } else {
      ret = { triggered: false, message: 'bk too high: ' + bk + ' >= 1000' };
    }
    return ret;
  }
}
