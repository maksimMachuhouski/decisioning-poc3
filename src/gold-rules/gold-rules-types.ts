// credit policy input types:

export type CreditPolicyInput1_1 = {
  someWeirdParam: boolean;
  loanAmount: number;
};

export type CreditPolicyInput1_2 = {
  fico: number;
  loanAmount: number;
};

export type CreditPolicyInput2_1 = {
  fico: number;
  bk: number;
  dti: number;
  income: number;
  loanAmount: number;
};

export type CreditPolicyInput2_2 = {
  fico: number;
  bk: number;
  dti: number;
  income: number;
  loanAmount: number;
  rbAmount: number;
};

// credit policy output types:

export type CreditPolicyOutput1 = {
  version: string;
  inputs: CreditPolicyInput1_1 | CreditPolicyInput1_2;
  approved: boolean;
};

export type CreditPolicyOutput2_1 = {
  version: string;
  inputs: CreditPolicyInput1_1 | CreditPolicyInput1_2;
  approved: boolean;
  someUnneededOutput: boolean;
};

export type CreditPolicyOutput2_2 = {
  version: string;
  inputs: CreditPolicyInput1_1 | CreditPolicyInput1_2;
  approved: boolean;
};

export type CreditPolicyOutput2_3 = {
  version: string;
  inputs: CreditPolicyInput1_1 | CreditPolicyInput1_2;
  rbEligible: boolean;
  approved: boolean;
};

// method output types:

export type MinimumRequirementRuleOutput = {
  triggered: boolean;
  message: string;
};
