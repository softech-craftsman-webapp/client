import * as crypto from 'crypto';
export const md5 = (contents) => crypto.createHash('md5').update(contents).digest("hex");