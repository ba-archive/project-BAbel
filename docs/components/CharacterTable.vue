<script setup lang="ts">
// noinspection TypeScriptUnresolvedFunction
import { PropType } from 'vue';

defineProps({
  familyNameJp: { type: String, default: '' },
  familyNameRuby: { type: String, default: '' },
  givenNameJp: { type: String, default: '' },
  imageName: { type: String, default: '' },
  imageType: { type: String, default: 'webp' },
  exSkillJp: { type: String, default: 'EXスキル' },
  exSkillCn: { type: String, default: 'EX技能译文' },
  normalSkillJp: { type: String, default: 'ノーマルスキル' },
  normalSkillCn: { type: String, default: '普通技能译文' },
  passiveSkillJp: { type: String, default: 'パッシブスキル' },
  passiveSkillCn: { type: String, default: '被动技能译文' },
  subSkillJp: { type: String, default: 'サブスキル' },
  subSkillCn: { type: String, default: '辅助技能译文' },
  uniqueWeaponJp: { type: String, default: '固有武器' },
  uniqueWeaponCn: { type: String, default: '专武译文' },
  uniqueItemJp: { type: String, required: false, default: '' },
  uniqueItemCn: { type: String, required: false, default: '爱用品译文' },
  circle: { type: String, required: false, default: '' },
  connection: {
    type: Array as PropType<string[]>,
    required: false,
    default: [] as string[],
  },
});

function normalizeCircleURI(circle: string): string {
  return (
    '/terms/places-and-circles#' +
    circle
      .replaceAll(
        /[\s\uff20-\uff7e\uff00-\uffef\u3000-\u303f\ufe30-\ufe4f\u0021-\u002F\u003a-\u003f]/g,
        '-'
      )
      .toLowerCase()
  );
}
</script>

<template>
  <table>
    <tr>
      <!-- eslint-disable no-irregular-whitespace -->
      <th class="table-title" colspan="4">
        <ruby
          >{{ familyNameJp }}
          <rt>{{ familyNameRuby }}</rt>
        </ruby>
        {{ familyNameJp.length > 0 ? '　' : ''
        }}{{ givenNameJp.length === 0 ? 'メイ' : givenNameJp }}
      </th>
      <!-- eslint-enable no-irregular-whitespace -->
    </tr>
    <tr>
      <th>技能原文</th>
      <th>技能译文</th>
      <td class="avatar-container" rowspan="5" colspan="4">
        <img
          class="avatar"
          :src="
            imageName.length === 0 || 'placeholder' === imageType
              ? '/empty_image.webp'
              : `/image/characters/${imageName}.${imageType}`
          "
          :alt="
            imageName.length === 0 || 'placeholder' === imageType
              ? 'placeholder'
              : imageName
          "
        />
      </td>
    </tr>
    <tr>
      <td>{{ exSkillJp.length === 0 ? 'EXスキル' : exSkillJp }}</td>
      <td>{{ exSkillCn.length === 0 ? 'EX技能译文' : exSkillCn }}</td>
    </tr>
    <tr>
      <td>
        {{ normalSkillJp.length === 0 ? 'ノーマルスキル' : normalSkillJp }}
      </td>
      <td>{{ normalSkillCn.length === 0 ? '被动技能译文' : normalSkillCn }}</td>
    </tr>
    <tr>
      <td>
        {{ passiveSkillJp.length === 0 ? 'パッシブスキル' : passiveSkillJp }}
      </td>
      <td>
        {{ passiveSkillCn.length === 0 ? '被动技能译文' : passiveSkillCn }}
      </td>
    </tr>
    <tr>
      <td>{{ subSkillJp.length === 0 ? 'サブスキル' : subSkillJp }}</td>
      <td>{{ subSkillCn.length === 0 ? '辅助技能译文' : subSkillCn }}</td>
    </tr>
    <tr v-if="circle.length > 0">
      <th>社团</th>
      <td colspan="2">
        <a :href="normalizeCircleURI(circle)">{{ circle }}</a>
      </td>
    </tr>
    <tr>
      <th>专武原文</th>
      <th colspan="2">专武译文</th>
    </tr>
    <tr>
      <td>{{ uniqueWeaponJp.length === 0 ? '固有武器' : uniqueWeaponJp }}</td>
      <td colspan="2">
        {{ uniqueWeaponCn.length === 0 ? '专武译文' : uniqueWeaponCn }}
      </td>
    </tr>
    <tr v-if="uniqueItemJp.length > 0">
      <th>爱用品原文</th>
      <th colspan="2">爱用品译文</th>
    </tr>
    <tr v-if="uniqueItemJp.length > 0">
      <td>{{ uniqueItemJp }}</td>
      <td colspan="2">{{ uniqueItemCn ? uniqueItemCn : '爱用品译文' }}</td>
    </tr>
    <tr v-if="connection.length > 0">
      <th colspan="4">关联名词</th>
    </tr>
    <tr v-if="connection.length > 0">
      <td colspan="4" class="connections">
        <!-- eslint-disable vue/require-v-for-key -->
        <span v-for="item in connection" v-once>
          <a :href="`/terms/others#${item}`">{{ item }}</a>
        </span>
        <!-- eslint-enable vue/require-v-for-key -->
      </td>
    </tr>
  </table>
</template>

<style scoped>
/*noinspection CssUnresolvedCustomProperty*/
.avatar-container {
  background-color: var(--vp-c-bg-soft);
  min-width: 95px;
}

img.avatar {
  width: 100px;
  border-radius: 0.25rem;
}

.dark img.avatar {
  filter: brightness(0.6);
}

.vp-doc tr:nth-child(2n) {
  background-color: unset;
}

.connections > span:not(:last-child)::after {
  content: ', ';
}
</style>
