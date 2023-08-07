import { versionIsHigherOrEqual } from 'src/utils/versions';
import { CreditPolicyInput2_1 } from '../gold-rules-types';
import { GoldGroupNumber } from './gold-group-number';
import { GoldMaxLoanAmount } from './gold-max-loan-amount';

export type groupRuleOutput2_3 = {
  approved: boolean;
  groupNumber: number;
};

export class GoldGroupRule {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  public run(input: CreditPolicyInput2_1): boolean | groupRuleOutput2_3 {
    const groupNumber = new GoldGroupNumber(this.version).getGroupNumber(
      input.fico,
    );

    const maxLoanAmount = new GoldMaxLoanAmount(
      this.version,
    ).getMaxLoanAmountForGroup(groupNumber);

    if (versionIsHigherOrEqual(this.version, '2.3.1')) {
      return {
        approved: input.loanAmount <= maxLoanAmount,
        groupNumber: groupNumber,
      };
    } else {
      return input.loanAmount <= maxLoanAmount;
    }
  }
}
