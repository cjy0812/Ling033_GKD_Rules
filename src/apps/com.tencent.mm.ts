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
    {
      key: 2,
      name: '功能类-付款后自动点击完成/返回商家',
      desc: '6s后点击完成/返回商家按钮',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.framework.app.UIPageFragmentActivity',
          actionDelay: 6000,
          matches:
            '[vid="kinda_button_impl_wrapper"][desc="完成" || desc="返回商家"]',
          exampleUrls:
            'https://m.gkd.li/57941037/a5177d9d-6745-443f-baf5-af57153430d8',
          snapshotUrls: [
            'https://i.gkd.li/i/14399355',
            'https://i.gkd.li/i/14662147',
            'https://i.gkd.li/i/24157874',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/14532946',
        },
        {
          key: 1,
          versionCode: { minimum: 2980 },
          activityIds: '.plugin.lite.ui.WxaLiteAppTransparentLiteUI',
          actionDelay: 6000,
          matches: 'Button[desc="返回商家"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/e7acbb38-c602-4ea4-88ec-7604c3aeae06',
          snapshotUrls: 'https://i.gkd.li/i/24141842',
        },
      ],
    },
  ],
});
