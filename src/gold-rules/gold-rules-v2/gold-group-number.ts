import { versionIsHigherOrEqual } from 'src/utils/versions';

export class GoldGroupNumber {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  public getGroupNumber(fico: number): number {
    if (versionIsHigherOrEqual(this.version, '2.1.1')) {
      return this.getGroupNumberV2_1_1(fico);
    }
  }

  private getGroupNumberV2_1_1(fico: number): number {
    let groupNumber = -1;

    if (fico >= 640 && fico < 660) {
      groupNumber = 4;
    } else if (fico >= 660 && fico < 680) {
      groupNumber = 3;
    } else if (fico >= 680 && fico < 700) {
      groupNumber = 2;
    } else if (fico >= 700 && fico < 740) {
      groupNumber = 1;
    } else if (fico >= 740) {
      groupNumber = 0;
    }

    return groupNumber;
  }
}
