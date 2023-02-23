<script setup lang="ts">
// noinspection TypeScriptUnresolvedFunction
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
});
</script>

<template>
  <table>
    <tr>
      <!-- eslint-disable no-irregular-whitespace -->
      <th class="table-title" colspan="4">
        <ruby
          >{{ familyNameJp }}<rt>{{ familyNameRuby }}</rt></ruby
        >
        {{ familyNameJp.length > 0 ? '　' : '' }}{{ givenNameJp }}
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
      <td>{{ exSkillJp }}</td>
      <td>{{ exSkillCn }}</td>
    </tr>
    <tr>
      <td>{{ normalSkillJp }}</td>
      <td>{{ normalSkillCn }}</td>
    </tr>
    <tr>
      <td>{{ passiveSkillJp }}</td>
      <td>{{ passiveSkillCn }}</td>
    </tr>
    <tr>
      <td>{{ subSkillJp }}</td>
      <td>{{ subSkillCn }}</td>
    </tr>
    <tr>
      <th>专武原文</th>
      <th colspan="2">专武译文</th>
    </tr>
    <tr>
      <td>{{ uniqueWeaponJp }}</td>
      <td colspan="2">{{ uniqueWeaponCn }}</td>
    </tr>
    <tr v-if="uniqueItemJp.length > 0">
      <th>爱用品原文</th>
      <th colspan="2">爱用品译文</th>
    </tr>
    <tr v-if="uniqueItemJp.length > 0">
      <td>{{ uniqueItemJp }}</td>
      <td colspan="2">{{ uniqueItemCn ? uniqueItemCn : '爱用品译文' }}</td>
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
</style>
