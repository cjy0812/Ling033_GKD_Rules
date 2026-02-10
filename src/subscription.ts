import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 233,
  name: 'L自用GKD订阅',
  version: 0,
  author: 'Ling',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/cjy0812/Ling033_GKD_Rules/issues/new/choose',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
