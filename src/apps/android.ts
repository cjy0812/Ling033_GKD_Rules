import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'android',
  name: 'Android 系统',
  groups: [
    {
      key: 1,
      name: 'debug-连接电脑选管理文件',
      desc: 'USB已连接-管理文件-取消',
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches:
            '@[clickable=true][text="管理文件"][visibleToUser=true][index=parent.childCount.minus(1)] <<4 [vid="contentPanel"] - [vid="topPanel"] < [vid="parentPanel"]',
          exampleUrls: 'https://e.gkd.li/36b2b5d6-7f6c-4ff5-a8b0-f188135a20ca',
          snapshotUrls: 'https://i.gkd.li/i/25815340',
        },
        {
          preKeys: [0],
          matches:
            '@[clickable=true][text="取消"][visibleToUser=true] <<2 [vid="buttonPanel"] -2 [vid="topPanel"] < [vid="parentPanel"]',
          snapshotUrls: 'https://i.gkd.li/i/25815340',
        },
      ],
    },
  ],
});
