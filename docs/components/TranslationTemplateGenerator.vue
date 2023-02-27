<script setup lang="ts">
import PreMaintenance from './post-templates/PreMaintenance.vue';
import StartMaintenance from './post-templates/StartMaintenance.vue';
import PostMaintenance from './post-templates/PostMaintenance.vue';
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { useClipboard } from '@vueuse/core';
import 'element-plus/theme-chalk/el-message.css';

const { copy } = useClipboard({ legacy: true });

const templates = [
  {
    type: 'pre-maintenance',
    name: '维护准备',
    component: PreMaintenance,
  },
  {
    type: 'start-maintenance',
    name: '维护开始',
    component: StartMaintenance,
  },
  {
    type: 'post-maintenance',
    name: '维护结束',
    component: PostMaintenance,
  },
];

const selection = ref('pre-maintenance');

const contentText = ref('');

function handleCopyRequest() {
  copy(contentText.value).catch(e => {
    ElMessage({ message: `复制失败，请手动复制: ${e}`, type: 'error' });
  });
  ElMessage({ message: '已复制到剪贴板', type: 'success' });
}

function handleContentUpdate(content: string) {
  contentText.value = content;
}
</script>

<template>
  <ClientOnly>
    <el-card shadow="never">
      <template #header>
        <el-select v-model="selection" filterable>
          <el-option
            v-for="template in templates"
            :key="template.type"
            :label="template.name"
            :value="template.type"
          />
        </el-select>
      </template>
      <div class="content-wrapper flex-vertical rounded-small">
        <component
          :is="
            templates.find(template => template.type === selection)
              ?.component || null
          "
          @update:content="handleContentUpdate"
        />
      </div>
      <el-divider />
      <el-space>
        <el-button @click="handleCopyRequest" type="primary">复制</el-button>
        <div class="tips">
          <el-space>
            <!--eslint-disable max-len-->
            <el-icon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330">
                <path
                  d="M165 0C74.019 0 0 74.02 0 165.001 0 255.982 74.019 330 165 330s165-74.018 165-164.999S255.981 0 165 0zm0 300c-74.44 0-135-60.56-135-134.999S90.56 30 165 30s135 60.562 135 135.001C300 239.44 239.439 300 165 300z"
                  fill="#999999"
                  data-original="#000000"
                  class=""
                ></path>
                <path
                  d="M164.998 70c-11.026 0-19.996 8.976-19.996 20.009 0 11.023 8.97 19.991 19.996 19.991 11.026 0 19.996-8.968 19.996-19.991 0-11.033-8.97-20.009-19.996-20.009zM165 140c-8.284 0-15 6.716-15 15v90c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-90c0-8.284-6.716-15-15-15z"
                  fill="#999999"
                  data-original="#000000"
                  class=""
                ></path>
              </svg>
            </el-icon>
            <!--eslint-enable max-len-->
            <span>模板内容可以手动修正</span>
          </el-space>
        </div>
      </el-space>
    </el-card>
  </ClientOnly>
</template>

<style scoped lang="scss">
.tips {
  display: flex;
  align-items: center;
  color: #999999;
  font-size: 0.875rem;
  user-select: none;
  margin-left: 0.75rem;
}
</style>
