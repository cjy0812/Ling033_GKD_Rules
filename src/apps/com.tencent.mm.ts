import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 1,
      name: '小程序-快乘车-自动打开乘车码',
      matchTime: 15000,
      rules: [
        {
          activityIds: [
            '.plugin.appbrand.ui.AppBrandUI1',
            '.plugin.appbrand.ui.AppBrandUI00',
          ],
          matches:
            '@[text="乘车码"][visibleToUser=true] -2 [text="我的"] -3 Image < View <<2 WebView',
          snapshotUrls: [
            'https://i.gkd.li/i/26025291',
            'https://i.gkd.li/i/26025387',
          ],
          exampleUrls: 'https://e.gkd.li/24e5e952-b654-4591-b58c-d5ed5c08b746',
        },
      ],
    },
  ],
});
