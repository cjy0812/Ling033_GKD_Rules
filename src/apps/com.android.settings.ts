import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.settings',
  name: '设置',
  groups: [
    {
      key: 1,
      name: '局部广告-电子保修卡',
      desc: '(VIVO📱)首页-x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.android.settings.homepage.SettingsHomepageActivity',
          matches:
            '[vid="dashboard_tile"] > [vid="delete"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25522123',
        },
      ],
    },
  ],
});
