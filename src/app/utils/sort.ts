export class Sort {
  static sortStringsDesc = (a: string, b: string): number => {
    return a.localeCompare(b);
  }
}

