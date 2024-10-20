export function encode_RESP_message(message: string): string {
  return `+${message}\r\n`;
}
