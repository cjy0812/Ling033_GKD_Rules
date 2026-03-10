import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.youtube',
  name: 'YouTube',
  groups: [
    {
      key: 1,
      name: '功能类-自动倍速⏩x1.25⚠️三选一',
      desc: '⚠️误触慎用-提高观看视频效率',
      fastQuery: true,
      actionMaximum: 1,
      activityIds:
        'com.google.android.apps.youtube.app.watchwhile.MainActivity',
      rules: [
        {
          key: 0,
          matchDelay: 3000, // 界面稳定后执行
          matches:
            '[vid="video_metadata_layout"] -3 [vid="watch_player"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25865585',
        },
        {
          key: 1,
          preKeys: [0],
          matches:
            '[vid="player_overflow_button"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25865676',
          exampleUrls: 'https://e.gkd.li/2ea064eb-1af0-4b14-a3b7-a970adeccbd0',
        },
        {
          key: 2,
          preKeys: [1, 4],
          matchDelay: 380, // 界面稳定后执行，否则会点误节点
          anyMatches: [
            '@[clickable=true][desc^="播放速度"] < * - * < RecyclerView <<3 [vid="design_bottom_sheet"][visibleToUser=true]',
            '@[clickable=true] >2 [vid="list_item_text"][text="播放速度"][visibleToUser=true]', // 可简易快速查询
          ],
          excludeMatches:
            '@[clickable=true][desc$="1.25x"] < * - * < RecyclerView <<3 [vid="design_bottom_sheet"][visibleToUser=true]', // 排除点击后
          snapshotUrls: [
            'https://i.gkd.li/i/25865831',
            'https://i.gkd.li/i/25866809', // 可简易快速查询
          ],
          exampleUrls: 'https://e.gkd.li/9e076659-d9a9-4b34-8011-dc7f1692b308',
          excludeSnapshotUrls: 'https://i.gkd.li/i/25870581',
        },
        {
          key: 3,
          preKeys: [2],
          actionMaximum: 1,
          anyMatches:
            '@[clickable=true][desc^="1.25"] <<n HorizontalScrollView -4 * <<2 [vid="bottom_sheet_list"][visibleToUser=true]',
          //          anyMatches: [
          //            '[text="1.25"] < @[clickable=true] <<(4,6) HorizontalScrollView -4 * <<2 [vid="bottom_sheet_list"][visibleToUser=true]',
          //            '@[clickable=true][desc^="1.25"] <<n HorizontalScrollView -4 * <<2 [vid="bottom_sheet_list"][visibleToUser=true]', // 树形式2
          //          ],
          snapshotUrls: [
            'https://i.gkd.li/i/25865993',
            //            'https://i.gkd.li/i/25867869', // 树形式2
          ],
          exampleUrls: 'https://e.gkd.li/5a0ef5ce-ba31-4322-83e6-17f919761111',
        },
        {
          preKeys: [3],
          anyMatches: [
            '[text="1.25"] < @[clickable=true] <<4 HorizontalScrollView -4 * <<2 [vid="bottom_sheet_list"][visibleToUser=true]',
            '@[clickable=true][desc^="1.25"] <<n HorizontalScrollView -4 * <<2 [vid="bottom_sheet_list"][visibleToUser=true]', // 树形式2
          ],
          action: 'back',
        },
        {
          key: 4,
          name: 'full_back',
          preKeys: [2],
          matches: '[desc="拖动手柄"] - [vid="bottom_sheet_list"]',
          action: 'back',
          snapshotUrls: 'https://i.gkd.li/i/25869073',
        },
        {
          name: 'back',
          preKeys: [1],
          matchDelay: 440, // 界面稳定后执行，否则会点误节点
          matches:
            '@[clickable=true][desc$="1.25x"] < * - * < RecyclerView <<3 [vid="design_bottom_sheet"][visibleToUser=true]', // 排除点击后
          action: 'back',
          snapshotUrls: 'https://i.gkd.li/i/25870581',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-自动倍速⏩x1.5⚠️三选一',
      desc: '⚠️误触慎用-提高观看视频效率',
      fastQuery: true,
      actionMaximum: 1,
      activityIds:
        'com.google.android.apps.youtube.app.watchwhile.MainActivity',
      rules: [
        {
          key: 0,
          matchDelay: 3000, // 界面稳定后执行
          matches:
            '[vid="video_metadata_layout"] -3 [vid="watch_player"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25865585',
        },
        {
          key: 1,
          preKeys: [0],
          matches:
            '[vid="player_overflow_button"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25865676',
          exampleUrls: 'https://e.gkd.li/2ea064eb-1af0-4b14-a3b7-a970adeccbd0',
        },
        {
          key: 2,
          preKeys: [1, 4],
          matchDelay: 380, // 界面稳定后执行，否则会点误节点
          anyMatches: [
            '@[clickable=true][desc^="播放速度"] < * - * < RecyclerView <<3 [vid="design_bottom_sheet"][visibleToUser=true]',
            '@[clickable=true] >2 [vid="list_item_text"][text="播放速度"][visibleToUser=true]', // 可简易快速查询
          ],
          excludeMatches:
            '@[clickable=true][desc$="1.5x"] < * - * < RecyclerView <<3 [vid="design_bottom_sheet"][visibleToUser=true]', // 排除点击后
          snapshotUrls: [
            'https://i.gkd.li/i/25865831',
            'https://i.gkd.li/i/25866809', // 可简易快速查询
          ],
          exampleUrls: 'https://e.gkd.li/9e076659-d9a9-4b34-8011-dc7f1692b308',
          excludeSnapshotUrls: 'https://i.gkd.li/i/25870581',
        },
        {
          key: 3,
          preKeys: [2],
          actionMaximum: 1,
          anyMatches:
            '@[clickable=true][desc^="1.5"] <<n HorizontalScrollView -4 * <<2 [vid="bottom_sheet_list"][visibleToUser=true]',
          //          anyMatches: [
          //            '[text="1.25"] < @[clickable=true] <<(4,6) HorizontalScrollView -4 * <<2 [vid="bottom_sheet_list"][visibleToUser=true]',
          //            '@[clickable=true][desc^="1.25"] <<n HorizontalScrollView -4 * <<2 [vid="bottom_sheet_list"][visibleToUser=true]', // 树形式2
          //          ],
          snapshotUrls: [
            'https://i.gkd.li/i/25865993',
            //            'https://i.gkd.li/i/25867869', // 树形式2
          ],
          exampleUrls: 'https://e.gkd.li/5a0ef5ce-ba31-4322-83e6-17f919761111',
        },
        {
          preKeys: [3],
          anyMatches: [
            '[text="1.5"] < @[clickable=true] <<6 HorizontalScrollView -4 * <<2 [vid="bottom_sheet_list"][visibleToUser=true]',
            '@[clickable=true][desc^="1.5"] <<n HorizontalScrollView -4 * <<2 [vid="bottom_sheet_list"][visibleToUser=true]', // 树形式2
          ],
          action: 'back',
        },
        {
          key: 4,
          name: 'full_back',
          preKeys: [2],
          matches: '[desc="拖动手柄"] - [vid="bottom_sheet_list"]',
          action: 'back',
          snapshotUrls: 'https://i.gkd.li/i/25869073',
        },
        {
          name: 'back',
          preKeys: [1],
          matchDelay: 440, // 界面稳定后执行，否则会点误节点
          matches:
            '@[clickable=true][desc$="1.5x"] < * - * < RecyclerView <<3 [vid="design_bottom_sheet"][visibleToUser=true]', // 排除点击后
          action: 'back',
          snapshotUrls: 'https://i.gkd.li/i/25870581',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-自动倍速⏩x2.0⚠️三选一',
      desc: '⚠️误触慎用-提高观看视频效率',
      fastQuery: true,
      actionMaximum: 1,
      activityIds:
        'com.google.android.apps.youtube.app.watchwhile.MainActivity',
      rules: [
        {
          key: 0,
          matchDelay: 3000, // 界面稳定后执行
          matches:
            '[vid="video_metadata_layout"] -3 [vid="watch_player"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25865585',
        },
        {
          key: 1,
          preKeys: [0],
          matches:
            '[vid="player_overflow_button"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25865676',
          exampleUrls: 'https://e.gkd.li/2ea064eb-1af0-4b14-a3b7-a970adeccbd0',
        },
        {
          key: 2,
          preKeys: [1, 4],
          matchDelay: 380, // 界面稳定后执行，否则会点误节点
          anyMatches: [
            '@[clickable=true][desc^="播放速度"] < * - * < RecyclerView <<3 [vid="design_bottom_sheet"][visibleToUser=true]',
            '@[clickable=true] >2 [vid="list_item_text"][text="播放速度"][visibleToUser=true]', // 可简易快速查询
          ],
          excludeMatches:
            '@[clickable=true][desc$="2.0x"] < * - * < RecyclerView <<3 [vid="design_bottom_sheet"][visibleToUser=true]', // 排除点击后
          snapshotUrls: [
            'https://i.gkd.li/i/25865831',
            'https://i.gkd.li/i/25866809', // 可简易快速查询
          ],
          exampleUrls: 'https://e.gkd.li/9e076659-d9a9-4b34-8011-dc7f1692b308',
          excludeSnapshotUrls: 'https://i.gkd.li/i/25870581',
        },
        {
          key: 3,
          preKeys: [2],
          actionMaximum: 1,
          anyMatches:
            '@[clickable=true][desc^="2.0"] <<n HorizontalScrollView -4 * <<2 [vid="bottom_sheet_list"][visibleToUser=true]',
          //          anyMatches: [
          //            '[text="1.25"] < @[clickable=true] <<(4,6) HorizontalScrollView -4 * <<2 [vid="bottom_sheet_list"][visibleToUser=true]',
          //            '@[clickable=true][desc^="1.25"] <<n HorizontalScrollView -4 * <<2 [vid="bottom_sheet_list"][visibleToUser=true]', // 树形式2
          //          ],
          snapshotUrls: [
            'https://i.gkd.li/i/25865993',
            //            'https://i.gkd.li/i/25867869', // 树形式2
          ],
          exampleUrls: 'https://e.gkd.li/5a0ef5ce-ba31-4322-83e6-17f919761111',
        },
        {
          preKeys: [3],
          anyMatches: [
            '[text="2.0"] < @[clickable=true] <<(4,6) HorizontalScrollView -4 * <<2 [vid="bottom_sheet_list"][visibleToUser=true]',
            '@[clickable=true][desc^="2.0"] <<n HorizontalScrollView -4 * <<2 [vid="bottom_sheet_list"][visibleToUser=true]', // 树形式2
          ],
          action: 'back',
        },
        {
          key: 4,
          name: 'full_back',
          preKeys: [2],
          matches: '[desc="拖动手柄"] - [vid="bottom_sheet_list"]',
          action: 'back',
          snapshotUrls: 'https://i.gkd.li/i/25869073',
        },
        {
          name: 'back',
          preKeys: [1],
          matchDelay: 440, // 界面稳定后执行，否则会点误节点
          matches:
            '@[clickable=true][desc$="2.0x"] < * - * < RecyclerView <<3 [vid="design_bottom_sheet"][visibleToUser=true]', // 排除点击后
          action: 'back',
          snapshotUrls: 'https://i.gkd.li/i/25870581',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-自动倍速⏩x3.0⚠️三选一',
      desc: '⚠️误触慎用-提高观看视频效率-需要会员',
      fastQuery: true,
      actionMaximum: 1,
      activityIds:
        'com.google.android.apps.youtube.app.watchwhile.MainActivity',
      rules: [
        {
          key: 0,
          matchDelay: 3000, // 界面稳定后执行
          matches:
            '[vid="video_metadata_layout"] -3 [vid="watch_player"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25865585',
        },
        {
          key: 1,
          preKeys: [0],
          matches:
            '[vid="player_overflow_button"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25865676',
          exampleUrls: 'https://e.gkd.li/2ea064eb-1af0-4b14-a3b7-a970adeccbd0',
        },
        {
          key: 2,
          preKeys: [1, 4],
          matchDelay: 380, // 界面稳定后执行，否则会点误节点
          anyMatches: [
            '@[clickable=true][desc^="播放速度"] < * - * < RecyclerView <<3 [vid="design_bottom_sheet"][visibleToUser=true]',
            '@[clickable=true] >2 [vid="list_item_text"][text="播放速度"][visibleToUser=true]', // 可简易快速查询
          ],
          excludeMatches:
            '@[clickable=true][desc$="3.0x"] < * - * < RecyclerView <<3 [vid="design_bottom_sheet"][visibleToUser=true]', // 排除点击后
          snapshotUrls: [
            'https://i.gkd.li/i/25865831',
            'https://i.gkd.li/i/25866809', // 可简易快速查询
          ],
          exampleUrls: 'https://e.gkd.li/9e076659-d9a9-4b34-8011-dc7f1692b308',
          excludeSnapshotUrls: 'https://i.gkd.li/i/25870581',
        },
        {
          key: 3,
          preKeys: [2],
          actionMaximum: 1,
          anyMatches:
            '@[clickable=true][desc^="3.0"] <<n HorizontalScrollView -4 * <<2 [vid="bottom_sheet_list"][visibleToUser=true]',
          //          anyMatches: [
          //            '[text="1.25"] < @[clickable=true] <<(4,6) HorizontalScrollView -4 * <<2 [vid="bottom_sheet_list"][visibleToUser=true]',
          //            '@[clickable=true][desc^="1.25"] <<n HorizontalScrollView -4 * <<2 [vid="bottom_sheet_list"][visibleToUser=true]', // 树形式2
          //          ],
          snapshotUrls: [
            'https://i.gkd.li/i/25865993',
            //            'https://i.gkd.li/i/25867869', // 树形式2
          ],
          exampleUrls: 'https://e.gkd.li/5a0ef5ce-ba31-4322-83e6-17f919761111',
        },
        {
          preKeys: [3],
          anyMatches: [
            '[text="3.0"] < @[clickable=true] <<(4,6) HorizontalScrollView -4 * <<2 [vid="bottom_sheet_list"][visibleToUser=true]',
            '@[clickable=true][desc^="3.0"] <<n HorizontalScrollView -4 * <<2 [vid="bottom_sheet_list"][visibleToUser=true]', // 树形式2
          ],
          action: 'back',
        },
        {
          key: 4,
          name: 'full_back',
          preKeys: [2],
          matches: '[desc="拖动手柄"] - [vid="bottom_sheet_list"]',
          action: 'back',
          snapshotUrls: 'https://i.gkd.li/i/25869073',
        },
        {
          name: 'back',
          preKeys: [1],
          matchDelay: 440, // 界面稳定后执行，否则会点误节点
          matches:
            '@[clickable=true][desc$="3.0x"] < * - * < RecyclerView <<3 [vid="design_bottom_sheet"][visibleToUser=true]', // 排除点击后
          action: 'back',
          snapshotUrls: 'https://i.gkd.li/i/25870581',
        },
      ],
    },
  ],
});
