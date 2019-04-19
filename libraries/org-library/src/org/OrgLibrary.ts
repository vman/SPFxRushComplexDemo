import { UtilLibrary } from "util-library";

export default class OrgLibrary {
  public name(): string {
    return 'OrgLibrary';
  }
  public getCurrentTime(): string {
    console.log(new UtilLibrary().name);
    return 'The time as returned from the org library is ' + new Date().toTimeString();
  }
}
