export default class UtilLibrary {
  public name(): string {
    return 'UtilLibrary';
  }

  public getCurrentTime(): string {
    return new Date().toTimeString();
  }
}
