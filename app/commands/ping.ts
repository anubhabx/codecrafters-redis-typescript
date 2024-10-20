function ping(str?: string | undefined): string {
  return str ? `+${str}\r\n` : "+PONG\r\n";
}

export { ping };
