import { registerAs } from '@nestjs/config';

export const appConfig = registerAs('appConfig', () => ({
  env: process.env['APP_ENV'] ?? process.env['NODE_ENV'] ?? 'prod',
  host: process.env['HOST'],
}));

export default appConfig;

export const configModuleOption = {
  isGlobal: true,
  envFilePath: `.env.${process.env['NODE_ENV']}`,
  load: [appConfig],
};
