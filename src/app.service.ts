import { Injectable } from '@nestjs/common';
import {
  CreditPolicyInput1_1,
  CreditPolicyInput1_2,
  CreditPolicyInput2_1,
} from './gold-rules/gold-rules-types';
import { GoldRulesV1 } from './gold-rules/gold-rules-v1/gold-rules-v1';
import { GoldRulesV2 } from './gold-rules/gold-rules-v2/gold-rules-v2';

@Injectable()
export class AppService {
  getHello(): string {
    let ret = '';

    let currentVersion = '1.1.1';
    const input1: CreditPolicyInput1_1 = {
      someWeirdParam: false,
      loanAmount: 10000,
    };
    ret += JSON.stringify(new GoldRulesV1(currentVersion).run(input1));

    currentVersion = '1.2.1';
    const input2: CreditPolicyInput1_2 = {
      fico: 700,
      loanAmount: 10000,
    };

    ret += '<br>' + JSON.stringify(new GoldRulesV1(currentVersion).run(input2));

    currentVersion = '1.2.2';
    const input3: CreditPolicyInput1_2 = {
      fico: 700,
      loanAmount: 10000,
    };

    ret += '<br>' + JSON.stringify(new GoldRulesV1(currentVersion).run(input3));

    const input4: CreditPolicyInput2_1 = {
      fico: 700,
      bk: 550,
      dti: 0.5,
      income: 10000,
      loanAmount: 10000,
    };

    currentVersion = '2.1.1';
    ret += '<br>' + JSON.stringify(new GoldRulesV2(currentVersion).run(input4));

    currentVersion = '2.2.1';
    ret += '<br>' + JSON.stringify(new GoldRulesV2(currentVersion).run(input4));

    currentVersion = '2.3.1';
    ret += '<br>' + JSON.stringify(new GoldRulesV2(currentVersion).run(input4));

    return ret;
  }
}
