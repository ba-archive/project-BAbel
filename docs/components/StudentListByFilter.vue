<template>
  <div class="filtered-students" v-if="0 !== filteredStudents.length">
    <span>{{ 'school' === props.filterBy ? '学校' : '社团' }}成员：</span>
    <!-- eslint-disable vue/require-v-for-key -->
    <span class="student-link" v-for="student in filteredStudents">
      <a :href="getStudentAnchor(student)" target="_blank">
        {{ student.familyName.cn }}{{ student.name.cn }}
      </a>
    </span>
    <!-- eslint-enable vue/require-v-for-key -->
  </div>
</template>

<script setup lang="ts">
import { Student } from '../types/Students';
import { computed, PropType } from 'vue';

const props = defineProps({
  filterBy: {
    type: String as PropType<'school' | 'club' | 'circle'>,
    default: 'school',
  },
  property: {
    type: String,
    default: '',
  },
  students: {
    type: Array as PropType<Student[]>,
    default: () => [],
  },
});

const filterKeyMap = {
  school: 'affiliation',
  club: 'club',
  circle: 'club',
};

const filteredStudents = computed(() => {
  const excludes = new RegExp(/[()（）]/);
  return props.students.filter(student => {
    return (
      !student.name.cn.match(excludes) &&
      student[filterKeyMap[props.filterBy] as 'affiliation' | 'club'] ===
        props.property
    );
  });
});

function getStudentAnchor(student: Student) {
  return `/terms/characters#${student.familyName.cn}-${student.name.cn}`;
}
</script>

<style scoped lang="scss">
.filtered-students {
  .student-link:not(:last-child)::after {
    content: '，';
  }
}
</style>
