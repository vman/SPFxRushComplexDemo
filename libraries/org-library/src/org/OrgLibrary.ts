export default class OrgLibrary {
  public name(): string {
    return 'OrgLibrary';
  }
  public getCurrentTime(): string {
    return 'The current time as returned from the corporate library is ' + new Date().toTimeString();
  }
}
