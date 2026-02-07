import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 1,
      name: '全屏广告-创作者广告分成',
      desc: '刷视频出现,使用返回来跳过',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ss.android.ugc.aweme.detail.ui.DetailActivity',
          action: 'back',
          matches:
            '[text="激励更好创作"][visibleToUser=true][childCount=0] <<62 LinearLayout [text$="广告"][visibleToUser=true][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/25025779',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-话题视频推荐',
      desc: '使用返回来跳过话题视频',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          action: 'back',
          matches:
            '[desc="不感兴趣"][clickable=false] +3 @[desc="立即参与"][clickable=false][visibleToUser=true] +3 [desc="上滑继续看视频"][clickable=false] <<426 [vid="viewpager"][desc="视频"]',
          snapshotUrls: 'https://i.gkd.li/i/25025682',
        },
      ],
    },
  ],
});
