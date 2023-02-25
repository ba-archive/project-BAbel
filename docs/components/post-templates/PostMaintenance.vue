<template>
  <el-space>
    <span>补偿石头数量</span>
    <el-input-number
      :step="120"
      clearable
      v-model="compensation"
      placeholder="维护详情链接"
    />
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
import { onActivated, onMounted, ref, watch } from 'vue';

const emit = defineEmits<{
  (event: 'update:content', value: string): void;
}>();

const compensation = ref(960);

// eslint-disable-next-line max-len
const contentText = ref(
  '【日服资讯】【定期维护】\n维护已经结束啦！\n以下特别津贴将作为谢礼发送到各位老师邮箱。\n\n维护补偿\n・青辉石 × ' +
    compensation.value.toString() +
    '\n\n感谢各位老师的配合。\n\n※对于不同账号，维护补偿的实际到账时间会存在些许差异，敬请各位知悉。\n#碧蓝档案# #蔚蓝档案#'
);

onMounted(() => {
  emit('update:content', contentText.value);
});

onActivated(() => {
  emit('update:content', contentText.value);
});

watch(
  () => compensation.value,
  () => {
    contentText.value =
      '【日服资讯】【定期维护】\n维护已经结束啦！\n以下特别津贴将作为谢礼发送到各位老师邮箱。\n\n维护补偿\n・青辉石 × ' +
      compensation.value.toString() +
      '\n\n感谢各位老师的配合。\n\n※对于不同账号，维护补偿的实际到账时间会存在些许差异，敬请各位知悉。\n#碧蓝档案# #蔚蓝档案#';
    emit('update:content', contentText.value);
  }
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
