<template>
  <el-space direction="vertical" alignment="normal" class="header">
    <el-space>
      <el-date-picker
        v-model="maintenanceTime"
        type="datetimerange"
        placeholder="选择日期"
        format="YYYY/MM/DD HH:mm"
        :default-time="defaultTime"
        :shortcuts="shortcuts"
      />
      <el-checkbox v-model="tokyoTime">日本时间</el-checkbox>
      <el-checkbox v-model="withUpdateSize">包含更新大小</el-checkbox>
    </el-space>
    <el-space>
      <el-space v-show="withUpdateSize">
        <el-space>
          <span>更新大小</span>
          <el-input-number
            :step="0.5"
            v-model="updateSize"
            placeholder="更新大小"
          />
          <span>GB</span>
        </el-space>
        <el-divider direction="vertical" />
        <el-space>
          <span>增量更新大小</span>
          <el-input-number
            :step="0.5"
            v-model="incrementalUpdateSize"
            placeholder="增量更新大小"
          />
          <span>GB</span>
        </el-space>
      </el-space>
    </el-space>
    <el-space>
      <span>维护详情链接</span>
      <el-input clearable v-model="detailsUrl" placeholder="维护详情链接" />
    </el-space>
  </el-space>
  <el-divider />
  <el-input
    v-model="contentText"
    autosize
    type="textarea"
    placeholder="维护公告会在这里生成"
  />
</template>

<script setup lang="ts">
import { computed, ref, unref, watch } from 'vue';

const emit = defineEmits<{
  (event: 'update:content', value: string): void;
}>();

const maintenanceTime = ref('');
const tokyoTime = ref(false);
const withUpdateSize = ref(false);
const updateSize = ref(5);
const incrementalUpdateSize = ref(4.5);
const contentText = ref('');
const detailsUrl = ref('');

const defaultTime: [Date, Date] = [
  new Date(new Date().setHours(10, 0, 0, 0)),
  new Date(new Date().setHours(18, 0, 0, 0)),
];

const shortcuts = [
  {
    text: '今天 10-18 点',
    value: () => {
      const startDate = new Date();
      const endDate = new Date();
      return [startDate.setHours(10, 0, 0, 0), endDate.setHours(18, 0, 0, 0)];
    },
  },
  {
    text: '今天 10-16 点',
    value: () => {
      const startDate = new Date();
      const endDate = new Date();
      return [startDate.setHours(10, 0, 0, 0), endDate.setHours(16, 0, 0, 0)];
    },
  },
  {
    text: '明天 10-18 点',
    value: () => {
      const date = new Date();
      date.setDate(date.getDate() + 1);
      return [date.setHours(10, 0, 0, 0), date.setHours(18, 0, 0, 0)];
    },
  },
  {
    text: '明天 10-16 点',
    value: () => {
      const date = new Date();
      date.setDate(date.getDate() + 1);
      return [date.setHours(10, 0, 0, 0), date.setHours(16, 0, 0, 0)];
    },
  },
];

const settings = computed(() => {
  return {
    maintenanceStartTime:
      maintenanceTime.value && maintenanceTime.value.length > 0
        ? maintenanceTime.value[0]
        : defaultTime[0],
    maintenanceEndTime:
      maintenanceTime.value && maintenanceTime.value.length > 1
        ? maintenanceTime.value[1]
        : defaultTime[1],
    tokyoTime: tokyoTime.value,
    withUpdateSize: withUpdateSize.value,
    updateSize: updateSize.value,
    incrementalUpdateSize: incrementalUpdateSize.value,
    detailsUrl: detailsUrl.value,
  };
});

watch(
  () => settings,
  settings => {
    const {
      maintenanceStartTime,
      maintenanceEndTime,
      tokyoTime,
      withUpdateSize,
      updateSize,
      incrementalUpdateSize,
      detailsUrl,
    } = unref(settings);
    const startTime = new Date(maintenanceStartTime);
    const endTime = new Date(maintenanceEndTime);

    const weekdays = ['日', '一', '二', '三', '四', '五', '六'];

    if (tokyoTime) {
      startTime.setHours(startTime.getHours() - 1);
      endTime.setHours(endTime.getHours() - 1);
    }

    const getWeekday = (date: Date) => {
      return weekdays[date.getDay()];
    };

    const getMaintenanceTimeRange = (start: Date, end: Date) => {
      const startMonth = start.getMonth() + 1;
      const startDay = start.getDate();
      const startWeekday = getWeekday(start);
      const startHour = start.getHours().toString().padStart(2, '0');
      const startMinute = start.getMinutes().toString().padStart(2, '0');
      const endHour = end.getHours().toString().padStart(2, '0');
      const endMinute = end.getMinutes().toString().padStart(2, '0');
      return `${startMonth}月${startDay}日(星期${startWeekday}) ${startHour}:${startMinute}～${endHour}:${endMinute}`;
    };

    const getDetailsContent = (url: string) => {
      return url?.length > 0
        ? `\n\n▼详情\n${url}`
        : '\n\n▼详细内容\n资讯站将在后续专栏中发布';
    };

    switch (withUpdateSize) {
      case true:
        // eslint-disable-next-line max-len
        contentText.value = `【日服资讯】【定期维护通知】\n游戏将在下述日期进行服务器维护。这次将会有约${updateSize}GB(在覆盖原有数据的情况下约为${incrementalUpdateSize}GB)的数据需要下载，十分感谢各位老师的配合。\n\n▼维护时间\n${getMaintenanceTimeRange(
          startTime,
          endTime
        )}${getDetailsContent(detailsUrl)}\n\n#碧蓝档案##蔚蓝档案#`;
        break;
      case false:
        // eslint-disable-next-line max-len
        contentText.value = `【日服资讯】【定期维护通知】\n游戏将在下述日期进行服务器维护。\n十分感谢老师的配合！\n\n▼维护时间\n${getMaintenanceTimeRange(
          startTime,
          endTime
        )}${getDetailsContent(detailsUrl)}\n\n#碧蓝档案##蔚蓝档案#`;
        break;
    }

    emit('update:content', contentText.value);
  },
  { deep: true }
);

watch(
  () => contentText.value,
  contentText => {
    emit('update:content', contentText);
  }
);
</script>

<style scoped lang="scss">
.title {
  font-size: 1.5rem;
  font-weight: bold;
}

.content {
  white-space: pre-wrap;
}
</style>
