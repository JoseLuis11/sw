export class StringUtils {
  static titleCase(s: string): string {
    const sentence = s.toLowerCase().split(' ');
    for (let i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(' ');
  }
  static getStringWithComas(strings: string[]): string {
    return strings.reduce((accumulator, s, index) => {
      if (index !== strings.length - 1) {
        accumulator += s + ',\n';
      } else {
        accumulator += s;
      }
      return accumulator;
    }, '');
  }
}
