import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 1,
      name: '功能类-支付订单后点击[查看订单]',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.jingdong.app.mall.bundle.cashierfinish.view.CashierUserContentCompleteActivity',
          matches: '@[clickable=true] > [text="查看订单"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/29404312',
          exampleUrls: 'https://e.gkd.li/6c5466d4-3238-43b7-8cf5-312f8c8606ef', // 2026-06
        },
      ],
    },
  ],
});
