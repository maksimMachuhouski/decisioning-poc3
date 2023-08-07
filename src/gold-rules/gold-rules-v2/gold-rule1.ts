import { MinimumRequirementRuleInterface } from '../gold-rules-interface';
import { MinimumRequirementRuleOutput } from '../gold-rules-types';

export class GoldRule1 implements MinimumRequirementRuleInterface {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  public run(fico: number): MinimumRequirementRuleOutput {
    let ret: MinimumRequirementRuleOutput;
    if (fico >= 640) {
      ret = { triggered: true, message: null };
    } else {
      ret = { triggered: false, message: 'fico too low: ' + fico + ' < 640' };
    }
    return ret;
  }
}
