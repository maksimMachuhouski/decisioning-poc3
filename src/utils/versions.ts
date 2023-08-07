/*
  Versions are going to be x.y.z where x, y, and z are positive integers.
  version 1.1.2 is higher than 1.1.1
  version 2.1.1 is higher than 1.2.3
*/
export function versionIsHigherOrEqual(
  currentVersion: string,
  methodVersion: string,
): boolean {
  const currentVersionComponents = currentVersion.split('.');
  const methodVersionComponents = methodVersion.split('.');

  let ret = false;
  if (currentVersionComponents[0] > methodVersionComponents[0]) {
    ret = true;
  } else if (currentVersionComponents[0] == methodVersionComponents[0]) {
    if (currentVersionComponents[1] > methodVersionComponents[1]) {
      ret = true;
    } else if (currentVersionComponents[1] == methodVersionComponents[1]) {
      if (currentVersionComponents[2] >= methodVersionComponents[2]) {
        ret = true;
      }
    }
  }

  return ret;
}
