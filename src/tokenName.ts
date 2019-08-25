function truncate(str: string, maxLength: number): string {
  if (str.length > maxLength) {
    return str.substr(0, maxLength);
  }
  return str;
}

// todo: it can be only token or declaration
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function tokenName(token: any): string {
  if (typeof token === 'object' && token.name) {
    return token.name;
  }
  if (typeof token === 'function') {
    if (token.name) {
      return token.name;
    }
    const src = token.toString();
    const text = src.replace(/\s*/, ' ').trim();
    return `unnamed:${truncate(text, 40)}`;
  }
  if (Array.isArray(token)) {
    return 'unnamed:[object Array]';
  }
  if (typeof token === 'object') {
    return `unnamed:${token.toString()}`;
  }
  return token.toString();
}
