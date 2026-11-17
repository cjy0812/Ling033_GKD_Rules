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
      key: 26,
      name: '功能类-付款后自动延点完成/返回商家',
      desc: '6s后点击完成/返回商家按钮',
      fastQuery: true,
      actionDelay: 6000,
      rules: [
        {
          key: 0,
          activityIds: '.framework.app.UIPageFragmentActivity',
          matches:
            '[vid="kinda_button_impl_wrapper"][desc="完成" || desc="返回商家"]',
          exampleUrls:
            'https://m.gkd.li/57941037/a5177d9d-6745-443f-baf5-af57153430d8',
          snapshotUrls: [
            'https://i.gkd.li/i/14662147', // 返回商家
            'https://i.gkd.li/i/14399355', // 完成
            'https://i.gkd.li/i/24157874',
            'https://i.gkd.li/i/33430797',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/14532946',
        },
        {
          key: 1,
          versionCode: { minimum: 2980 },
          activityIds: [
            '.plugin.lite.ui.WxaLiteAppTransparentLiteUI',
            '.plugin.lite.ui.WxaLiteAppLiteUI',
            '.plugin.lite.ui.WxaLiteAppPayTransparentLiteUI',
          ],
          matches:
            '@Button[desc="完成" || desc="返回商家" || desc="Done"][visibleToUser=true] -n [desc="支付成功"] < * <<6 FrameLayout <<3 [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/e7acbb38-c602-4ea4-88ec-7604c3aeae06',
          snapshotUrls: [
            'https://i.gkd.li/i/24141842', // 返回商家
            'https://i.gkd.li/i/29681932', // 完成
            'https://i.gkd.li/i/31693084', // 完成
            'https://i.gkd.li/i/33480728', // 返回商家
          ],
        },
      ],
    },
    {
      key: 3,
      name: '功能类-交易-动态码(自动确认)',
      desc: '静态码 -> 动态码(监管要求) -> 点击[识别并支付]',
      fastQuery: true,
      activityIds: '.plugin.remittance.ui.RemittanceF2fDynamicCodeUI',
      rules: [
        {
          matches:
            '[text^="根据"][text*="交易"][text*="动态码"][text$="点击页面按钮识别并完成支付"] < [childCount=1] + LinearLayout[childCount=5] > Button[text="识别并支付"][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            // 监管要求
            'https://i.gkd.li/i/34995049', // 超额
            // 法律要求
            'https://i.gkd.li/i/34995351',
          ],
          exampleUrls: 'https://e.gkd.li/a0ef6a48-e469-412b-ac6a-493683b44341',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-快速切换账号',
      desc: '排除第一个',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      activityIds: '.plugin.setting.ui.setting.SettingsSwitchAccountUI',
      rules: [
        {
          matches:
            'RelativeLayout[childCount=2] < @FrameLayout[clickable=true][index!=0] <n LinearLayout - RelativeLayout > [text$="以切换账号"][visibleToUser=true]',
          snapshotUrls: [
            //2个账号
            'https://i.gkd.li/i/26159956', // 第一个登录
            'https://i.gkd.li/i/29710717', // 第二个登录
            // 3个账号
            'https://i.gkd.li/i/34995719',
          ],
          exampleUrls: 'https://e.gkd.li/0ee723f0-e6e5-4018-9cfa-7a8de22b91e1',
        },
      ],
    },
  ],
});
