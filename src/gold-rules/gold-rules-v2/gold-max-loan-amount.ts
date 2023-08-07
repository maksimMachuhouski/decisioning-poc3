import { versionIsHigherOrEqual } from 'src/utils/versions';

export class GoldMaxLoanAmount {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  public getMaxLoanAmountForGroup(groupNumber: number): number {
    if (versionIsHigherOrEqual(this.version, '2.2.1')) {
      return this.getMaxLoanAmountForGroupV2_2_1(groupNumber);
    } else {
      return this.getMaxLoanAmountForGroupV2_1_1(groupNumber);
    }
  }

  private getMaxLoanAmountForGroupV2_2_1(groupNumber: number): number {
    switch (groupNumber) {
      case 0:
        return 125000;
      case 1:
        return 100000;
      case 2:
        return 65000;
      case 3:
        return 65000;
      case 4:
        return 50000;
    }
  }

  private getMaxLoanAmountForGroupV2_1_1(groupNumber: number): number {
    switch (groupNumber) {
      case 0:
        return 150000;
      case 1:
        return 100000;
      case 2:
        return 80000;
      case 3:
        return 80000;
      case 4:
        return 80000;
    }
  }
}
