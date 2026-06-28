import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 2,
      name: '全屏广告-话题视频推荐',
      desc: '使用上滑来跳过话题视频',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          swipeArg: {
            start: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.6',
            },
            end: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.3',
            },
            duration: 114, //滑动时长
          },
          matches:
            '@FlattenUIText - UISvg - [text^="上滑继续"] -3 LynxFlattenUI[desc="立即参与"] - FlattenUIText - [text="不感兴趣"] -n [text*="人参与"][text$="次播放"][clickable=true] -2 UIView - FlattenUIText -2 [text*="人参与"][text$="次播放"][clickable=false] - LynxFlattenUI[clickable=true] <n * <<(12-n) FrameLayout <n RelativeLayout <4 * <5 FrameLayout[childCount=6] <2 [vid="viewpager"][desc="视频"] +3 [vid="bottom_space"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25025682',
          exampleUrls: 'https://e.gkd.li/b0552070-ca9d-4d84-92ab-ed31d36a2ba8',
        },
      ],
    },
    // 推广视频
    {
      key: 3,
      name: '全屏广告-推广视频',
      desc: '通过滑动操作跳过广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          actionCd: 300,
          actionDelay: 200, //刷视频时,让下一个视频完整显示才触发[上滑]
          swipeArg: {
            start: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.6',
            },
            end: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.3',
            },
            duration: 200, //滑动时长
          },
          activityIds: '.main.MainActivity',
          matches:
            '(FrameLayout[id=null][text=null][desc=null][clickable=false][focusable=true][visibleToUser=true] > [text="广告"][desc="广告"]) || (FrameLayout[text=null][desc=null][id!=null][childCount=1][index=1][clickable=true][visibleToUser=true] > [vid="desc"][text$="广告" || text$="（推广）"])',
          snapshotUrls: [
            //选择器A
            'https://i.gkd.li/i/29403704', //[text="广告"][desc="广告"] 2026-04-12
            'https://i.gkd.li/i/29403301', //[text="广告"][desc="广告"] 2026-05-30
            //选择器B
            'https://i.gkd.li/i/21142063', //[vid="desc"][text$="广告"] 2025-07-08
            'https://i.gkd.li/i/29403811', //[vid="desc"][text$="（推广）"] 2026-04-12
          ],
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-推广视频-应用',
      desc: '通过返回操作跳过广告',
      rules: [
        {
          fastQuery: true,
          actionCd: 300,
          actionDelay: 200, //刷视频时,让下一个视频完整显示才触发[上滑]
          swipeArg: {
            start: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.6',
            },
            end: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.3',
            },
            duration: 200, //滑动时长
          },
          activityIds: '.main.MainActivity',
          matches: '[text="应用"][text.length<6][index=1][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/21142589', //应用
          ],
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-推广视频-游戏',
      desc: '通过返回操作跳过广告',
      rules: [
        {
          fastQuery: true,
          actionCd: 300,
          actionDelay: 200, //刷视频时,让下一个视频完整显示才触发[上滑]
          swipeArg: {
            start: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.6',
            },
            end: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.3',
            },
            duration: 200, //滑动时长
          },
          activityIds: '.main.MainActivity',
          matches: '[text$="游戏"][text.length<6][index=1][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/21142871', //游戏
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-推广视频-购物',
      desc: '通过返回操作跳过广告',
      rules: [
        {
          fastQuery: true,
          actionCd: 300,
          actionDelay: 200, //刷视频时,让下一个视频完整显示才触发[上滑]
          swipeArg: {
            start: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.6',
            },
            end: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.3',
            },
            duration: 200, //滑动时长
          },
          activityIds: '.main.MainActivity',
          matches: '[text="购物"][text.length<6][index=1][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/21142249',
        },
      ],
    },
    {
      key: 8,
      name: '全屏广告-推广视频-咨询',
      desc: '通过返回操作跳过广告',
      rules: [
        {
          fastQuery: true,
          actionCd: 300,
          actionDelay: 200, //刷视频时,让下一个视频完整显示才触发[上滑]
          swipeArg: {
            start: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.6',
            },
            end: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.3',
            },
            duration: 200, //滑动时长
          },
          activityIds: '.main.MainActivity',
          matches: '[text="咨询"][text.length<6][index=1][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25570382',
        },
      ],
    },
    {
      key: 9,
      name: '全屏广告-推广视频-服务',
      rules: [
        {
          fastQuery: true,
          actionCd: 300,
          actionDelay: 200, //刷视频时,让下一个视频完整显示才触发[上滑]
          swipeArg: {
            start: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.6',
            },
            end: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.3',
            },
            duration: 200, //滑动时长
          },
          activityIds: '.main.MainActivity',
          matches: '[text="服务"][text.length<6][index=1][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/29403479', //服务
        },
      ],
    },
    {
      key: 10,
      name: '全屏广告-推广视频-预约',
      rules: [
        {
          fastQuery: true,
          actionCd: 300,
          actionDelay: 200, //刷视频时,让下一个视频完整显示才触发[上滑]
          swipeArg: {
            start: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.6',
            },
            end: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.3',
            },
            duration: 200, //滑动时长
          },
          activityIds: '.main.MainActivity',
          matches: '[text="预约"][text.length<6][index=1][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/21765934', //预约
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告-推广视频-子薇剧场',
      rules: [
        {
          fastQuery: true,
          actionCd: 300,
          actionDelay: 200, //刷视频时,让下一个视频完整显示才触发[上滑]
          swipeArg: {
            start: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.6',
            },
            end: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.3',
            },
            duration: 200, //滑动时长
          },
          activityIds: '.main.MainActivity',
          matches:
            '[text="子薇剧场"][text.length<6][index=1][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/21523849', //子薇剧场
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-推广视频-小游戏',
      desc: '通过返回操作跳过广告',
      rules: [
        {
          fastQuery: true,
          actionCd: 300,
          actionDelay: 200, //刷视频时,让下一个视频完整显示才触发[上滑]
          swipeArg: {
            start: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.6',
            },
            end: {
              x: 'screenWidth/2',
              y: 'screenHeight * 0.3',
            },
            duration: 200, //滑动时长
          },
          activityIds: '.main.MainActivity',
          matches:
            '[text$="小游戏"][text.length<6][index=1][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/21725628', //小游戏
        },
      ],
    },

    // 推广视频_END
    {
      key: 16,
      name: '局部广告-就医防诈骗提示',
      desc: '就医选择官方渠道_横幅-右侧x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '@[clickable=true][text=null][desc=null][id!=null][left!=0][index=3][visibleToUser=true] - [text$="谨防医托诈骗"]',
          snapshotUrls: 'https://i.gkd.li/i/25570930',
          exampleUrls: 'https://e.gkd.li/b91f0f42-a54b-440b-988d-02e6bd762b80',
        },
      ],
    },
  ],
});
