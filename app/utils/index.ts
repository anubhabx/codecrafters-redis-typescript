export function encodeRESPMessage(message: string): string {
  return `+${message}\r\n`;
}

export function decodeRESPMEssage(message: string): string {
  return message.slice(1, -2);
}
