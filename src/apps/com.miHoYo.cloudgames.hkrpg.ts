import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miHoYo.cloudgames.hkrpg',
  name: '云·星穹铁道',
  groups: [
    {
      key: 1,
      name: '功能类-进游戏节点优选',
      desc: '⚠️屎山规则 {[排队状态](空闲>少量)<[延迟]}',
      fastQuery: true,
      activityIds: 'com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity',
      rules: [
        {
          key: 0,
          name: '节点优选',
          matches:
            '@FrameLayout[clickable=true][getChild(1).getChild(2).text="空闲" || getChild(1).getChild(2).text="少量"][(index=0 || ((parent.getChild(0).getChild(1).getChild(2).text="空闲" || parent.getChild(0).getChild(1).getChild(2).text="少量") && ((getChild(1).getChild(2).text="空闲" && parent.getChild(0).getChild(1).getChild(2).text="少量") || (getChild(1).getChild(2).text=parent.getChild(0).getChild(1).getChild(2).text && (getChild(1).getChild(1).text.substring(0,getChild(1).getChild(1).text.indexOf("m")).toInt()<parent.getChild(0).getChild(1).getChild(1).text.substring(0,parent.getChild(0).getChild(1).getChild(1).text.indexOf("m")).toInt() || (getChild(1).getChild(1).text.substring(0,getChild(1).getChild(1).text.indexOf("m")).toInt()=parent.getChild(0).getChild(1).getChild(1).text.substring(0,parent.getChild(0).getChild(1).getChild(1).text.indexOf("m")).toInt() && index<0)))))) && (index=1 || ((parent.getChild(1).getChild(1).getChild(2).text="空闲" || parent.getChild(1).getChild(1).getChild(2).text="少量") && ((getChild(1).getChild(2).text="空闲" && parent.getChild(1).getChild(1).getChild(2).text="少量") || (getChild(1).getChild(2).text=parent.getChild(1).getChild(1).getChild(2).text && (getChild(1).getChild(1).text.substring(0,getChild(1).getChild(1).text.indexOf("m")).toInt()<parent.getChild(1).getChild(1).getChild(1).text.substring(0,parent.getChild(1).getChild(1).getChild(1).text.indexOf("m")).toInt() || (getChild(1).getChild(1).text.substring(0,getChild(1).getChild(1).text.indexOf("m")).toInt()=parent.getChild(1).getChild(1).getChild(1).text.substring(0,parent.getChild(1).getChild(1).getChild(1).text.indexOf("m")).toInt() && index<1)))))) && (index=2 || ((parent.getChild(2).getChild(1).getChild(2).text="空闲" || parent.getChild(2).getChild(1).getChild(2).text="少量") && ((getChild(1).getChild(2).text="空闲" && parent.getChild(2).getChild(1).getChild(2).text="少量") || (getChild(1).getChild(2).text=parent.getChild(2).getChild(1).getChild(2).text && (getChild(1).getChild(1).text.substring(0,getChild(1).getChild(1).text.indexOf("m")).toInt()<parent.getChild(2).getChild(1).getChild(1).text.substring(0,parent.getChild(2).getChild(1).getChild(1).text.indexOf("m")).toInt() || (getChild(1).getChild(1).text.substring(0,getChild(1).getChild(1).text.indexOf("m")).toInt()=parent.getChild(2).getChild(1).getChild(1).text.substring(0,parent.getChild(2).getChild(1).getChild(1).text.indexOf("m")).toInt() && index<2)))))) && (index=3 || ((parent.getChild(3).getChild(1).getChild(2).text="空闲" || parent.getChild(3).getChild(1).getChild(2).text="少量") && ((getChild(1).getChild(2).text="空闲" && parent.getChild(3).getChild(1).getChild(2).text="少量") || (getChild(1).getChild(2).text=parent.getChild(3).getChild(1).getChild(2).text && (getChild(1).getChild(1).text.substring(0,getChild(1).getChild(1).text.indexOf("m")).toInt()<parent.getChild(3).getChild(1).getChild(1).text.substring(0,parent.getChild(3).getChild(1).getChild(1).text.indexOf("m")).toInt() || (getChild(1).getChild(1).text.substring(0,getChild(1).getChild(1).text.indexOf("m")).toInt()=parent.getChild(3).getChild(1).getChild(1).text.substring(0,parent.getChild(3).getChild(1).getChild(1).text.indexOf("m")).toInt() && index<3)))))) && (index=4 || ((parent.getChild(4).getChild(1).getChild(2).text="空闲" || parent.getChild(4).getChild(1).getChild(2).text="少量") && ((getChild(1).getChild(2).text="空闲" && parent.getChild(4).getChild(1).getChild(2).text="少量") || (getChild(1).getChild(2).text=parent.getChild(4).getChild(1).getChild(2).text && (getChild(1).getChild(1).text.substring(0,getChild(1).getChild(1).text.indexOf("m")).toInt()<parent.getChild(4).getChild(1).getChild(1).text.substring(0,parent.getChild(4).getChild(1).getChild(1).text.indexOf("m")).toInt() || (getChild(1).getChild(1).text.substring(0,getChild(1).getChild(1).text.indexOf("m")).toInt()=parent.getChild(4).getChild(1).getChild(1).text.substring(0,parent.getChild(4).getChild(1).getChild(1).text.indexOf("m")).toInt() && index<4))))))] <n RecyclerView[vid="rvNodeList"]',
          snapshotUrls: 'https://i.gkd.li/i/34994661',
          exampleUrls: 'https://e.gkd.li/df8fe86c-2019-4c9d-b836-db61c0570e72',
        },
        {
          preKeys: [0],
          name: '点击进入游戏',
          matches: '[vid="btnEnterGame"][visibleToUser=true]',
        },
      ],
    },
  ],
});
