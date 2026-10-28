import next from 'eslint-config-next';
import nextTs from 'eslint-config-next/typescript';

// ESLint 9 i no 10: eslint-plugin-react (dins d'eslint-config-next) encara no arriba a ESLint 10.
const config = [...next, ...nextTs, { ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'] }];

export default config;
