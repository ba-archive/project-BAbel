<template>
  <el-space direction="vertical" alignment="normal" class="header">
    <el-space>
      <el-date-picker
        v-model="maintenanceEndTime"
        type="datetime"
        placeholder="选择日期"
        format="YYYY/MM/DD HH:mm"
        :default-time="defaultTime"
        :shortcuts="shortcuts"
      />
      <el-checkbox v-model="tokyoTime">日本时间</el-checkbox>
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

const defaultTime = new Date(new Date().setHours(18, 0, 0, 0));
const detailsUrl = ref('');
const maintenanceEndTime = ref(defaultTime);
const tokyoTime = ref(false);
// eslint-disable-next-line max-len
const contentText = ref(
  '【日服资讯】【定期维护】\n游戏定期维护已开始。\n请注意，维护期间无法进入游戏。\n结束时间预计在北京时间18点左右。\n\n※根据实际情况，开服时间可能会进行调整。\n#碧蓝档案##蔚蓝档案#'
);

const shortcuts = [
  {
    text: '今天 16 点',
    value: () => new Date().setHours(16, 0, 0, 0),
  },
  {
    text: '今天 18 点',
    value: () => new Date().setHours(18, 0, 0, 0),
  },
  {
    text: '今天 21 点',
    value: () => new Date().setHours(21, 0, 0, 0),
  },
];

const settings = computed(() => {
  return {
    tokyoTime: tokyoTime.value,
    maintenanceEndTime: maintenanceEndTime.value,
    detailsUrl: detailsUrl.value,
  };
});

watch(
  () => settings.value,
  () => {
    const { tokyoTime, maintenanceEndTime, detailsUrl } = unref(settings);
    const maintenanceEndDateTime = new Date(maintenanceEndTime);

    if (tokyoTime) {
      maintenanceEndDateTime.setHours(maintenanceEndDateTime.getHours() - 1);
    }

    const getDetailsText = () => {
      return detailsUrl.length > 0 ? `\n\n▼详情\n${detailsUrl}` : '';
    };

    // eslint-disable-next-line max-len
    contentText.value = `【日服资讯】【定期维护】\n游戏定期维护已开始。\n请注意，维护期间无法进入游戏。\n结束时间预计在北京时间${maintenanceEndDateTime.getHours()}点左右。${getDetailsText()}\n\n※根据实际情况，开服时间可能会进行调整。\n#碧蓝档案##蔚蓝档案#`;
    emit('update:content', contentText.value);
  },
  { deep: true }
);

watch(
  () => contentText.value,
  () => {
    emit('update:content', contentText.value);
  }
);
</script>

<style scoped lang="scss">
.title {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
