import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 1,
      name: '功能类-自动进取件列表',
      desc: '我的页面点击待取件后进入列表明细',
      matchTime: 180000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches:
            '@[clickable=true] > [desc$="取件"] +(6-n) [text="큚"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/34985860',
          exampleUrls: 'https://e.gkd.li/6dafd548-52c7-4904-8190-c6e24d2255a4',
        },
      ],
    },
  ],
});
