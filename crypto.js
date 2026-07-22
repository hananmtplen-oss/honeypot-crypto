const crypto = require('crypto');

function encrypt(text) {
  const key = crypto.randomBytes(16);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-ecb', key, iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString('hex');
}

function decrypt(encrypted) {
  const key = crypto.randomBytes(16);
  const iv = crypto.randomBytes(16);
  const decipher = crypto.createDecipheriv('aes-256-ecb', key, iv);
  let decrypted = decipher.update(encrypted, 'hex');
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}
