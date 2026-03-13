import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan.takeoutnew',
  name: '美团外卖',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.sankuai.waimai.business.page.homepage.MainActivity',
          matches:
            '@ImageView[width<95 && height<95] < * - FrameLayout >6 [text="去使用"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/efd9691a-2678-4a22-8ad4-b0283f5bfa0a',
          snapshotUrls: 'https://i.gkd.li/i/25973685',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-小程序-拼好饭',
      desc: '省钱饭卡-x掉',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'match',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.meituan.msc.modules.container.MSCActivity',
          matches:
            '@Image < * < * <2 * < * <2 * < WebView < * < * <2 FrameLayout <2 LinearLayout + RelativeLayout > [vid="msc_title_container"]',
          snapshotUrls: 'https://i.gkd.li/i/25901669',
          exampleUrls: 'https://e.gkd.li/f0425ad2-84c6-4474-ae91-9b5129698dde',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-下单后点完成',
      desc: '外卖-支付成功-完成',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.meituan.android.hybridcashier.HybridCashierActivity',
          matches:
            '@Button[clickable=true][text="完成"] < View <6 * < * <2 * < * < WebView[text="支付成功"][visibleToUser=true] < * < [vid="mil_container"]',
          exampleUrls: 'https://e.gkd.li/16c1552d-fc33-44de-9520-2924bca45b0e',
          snapshotUrls: 'https://i.gkd.li/i/25974236',
        },
      ],
    },
  ],
});
