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
    {
      key: 3,
      name: '全屏广告-视频推荐广告',
      desc: '通过返回操作跳过广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          action: 'back',
          activityIds: '.main.MainActivity',
          matches: [
            '[desc^="已选中"] > [text="推荐"][visibleToUser=true]', // 其他页面可能会误触回到推荐页
            '([text$="广告"][vid="desc"][visibleToUser=true])',
          ],
          snapshotUrls: 'https://i.gkd.li/i/21142063',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-福利推荐广告',
      desc: '通过返回操作跳过广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: 'FlattenUIText[text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20035670',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-视频推荐广告-应用',
      desc: '通过返回操作跳过广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          action: 'back',
          activityIds: '.main.MainActivity',
          matches: [
            '[desc^="已选中"] > [text="推荐"][visibleToUser=true]', // 其他页面可能会误触回到推荐页
            '(ImageView[childCount=0] + [text="应用"][visibleToUser=true])',
          ],
          snapshotUrls: 'https://i.gkd.li/i/21142589',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-视频推荐广告-游戏',
      desc: '通过返回操作跳过广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          action: 'back',
          activityIds: '.main.MainActivity',
          matches: [
            '[desc^="已选中"] > [text="推荐"][visibleToUser=true]', // 其他页面可能会误触回到推荐页
            '(ImageView[childCount=0] + [text="游戏"][visibleToUser=true])',
          ],
          snapshotUrls: 'https://i.gkd.li/i/21142871',
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-视频推荐广告-购物',
      desc: '通过返回操作跳过广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          action: 'back',
          activityIds: '.main.MainActivity',
          matches: [
            '[desc^="已选中"] > [text="推荐"][visibleToUser=true]', // 其他页面可能会误触回到推荐页
            '(ImageView[childCount=0] + [text="购物"][visibleToUser=true])',
          ],
          snapshotUrls: 'https://i.gkd.li/i/21142249',
        },
      ],
    },
  ],
});
