export default class OrgLibrary {
  public name(): string {
    return 'OrgLibrary';
  }
  public getCurrentTime(): string {
    return 'The time as returned from the org library is ' + new Date().toTimeString();
  }
}
