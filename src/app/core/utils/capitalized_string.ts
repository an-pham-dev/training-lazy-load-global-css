export function stringCapitalize(str: string, separators: string[] = [' ']): string {
  let rs: string = str;
  for (let key of separators) {
    rs = strCapitalize(rs, key);
  }
  return rs;
}
function strCapitalize(str: string, separator = ' ') {
  return str ? str.split(separator).map(i => i.charAt(0).toLocaleUpperCase() + i.slice(1)).join(separator) : '';
}
