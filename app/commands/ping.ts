import { decodeRESPMEssage } from "../utils";

function ping(str?: string | undefined): string {
  str = str ? decodeRESPMEssage(str) : decodeRESPMEssage("PONG");

  return str;
}

export { ping };
