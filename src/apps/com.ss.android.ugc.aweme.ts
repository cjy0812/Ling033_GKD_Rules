import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 1,
      name: '全屏广告-创作者广告分成',
      desc: '刷视频出现',
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
  ],
});
