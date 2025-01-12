import { createClient } from 'redis';

const client = createClient();
await client.connect();

await client.set('key', 'value');
const value = await client.get('key');
console.log('value', value);

await client.disconnect();
