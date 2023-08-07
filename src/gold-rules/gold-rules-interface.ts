import {
  CreditPolicyInput1_1,
  CreditPolicyInput1_2,
  CreditPolicyOutput1,
  CreditPolicyOutput2_1,
  CreditPolicyOutput2_2,
  MinimumRequirementRuleOutput,
} from './gold-rules-types';

export interface GoldRulesInterface {
  run(
    inputs: CreditPolicyInput1_1 | CreditPolicyInput1_2,
  ): CreditPolicyOutput1 | CreditPolicyOutput2_1 | CreditPolicyOutput2_2;
}

export interface MinimumRequirementRuleInterface {
  run(inputs: any): MinimumRequirementRuleOutput;
}
