import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 1,
      name: '功能类-支付后自动领积分再退出',
      desc: '一键领取奖励后退出',
      activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '①领取积分[坐标]',
          matches: [
            '[text="支付成功" || text="充值成功" || text="提交成功"]',
            '@[index=0] < LinearLayout[childCount<=4] <<4 FrameLayout[index=1] - FrameLayout[index=0] >4 [text="支付成功"]',
          ],
          position: {
            left: 'width * 0.84',
            top: 'width * 0.06',
          },
          snapshotUrls: 'https://i.gkd.li/i/29407025',
          exampleUrls: 'https://e.gkd.li/24e51b17-60b0-427a-905d-e81da7e6fb12',
        },
        {
          preKeys: [0],
          name: '②点击[完成]',
          actionCd: 400, // 点击完成按钮后，等待400ms，确保领取按钮被点击
          matches: '[text="完成"]',
          snapshotUrls: 'https://i.gkd.li/i/29407026',
        },
      ],
    },
  ],
});
