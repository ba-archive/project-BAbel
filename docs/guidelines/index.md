<script setup lang='ts'>
import { ElCollapse, ElCollapseItem } from 'element-plus';
import 'element-plus/es/components/collapse/style/css'
</script>

<style scoped lang="scss">
.el-collapse-item__header {
  user-select: none;

  h3 {
    margin: 0;
  }
}

.el-collapse-item__content {
  p {
    font-size: 1rem;
  }
}

.red {
  color: red;
}

.underline {
  text-decoration: underline;
}
</style>

# 发布规范目录

## 翻译规范

<el-collapse>
  <el-collapse-item>
    <template #title>
      <h3>
        <a href="translation/character-names-and-locations"
          >人名、地名翻译规范</a
        >
      </h3>
    </template>
    <p>1. 无论任何情况，首先应当保持翻译的正确性。</p>
    <p>
      2.
      <strong>地名</strong
      >等带有明显原型的名词：尽可能使用学术界通用译名，优先使用音译，若音译与学术翻译相差过大则音译（以大众接受程度为准）
    </p>
    <p>3. <strong>人名：</strong></p>
    <p>
      3.1. 如果有对应的日语汉字，且日语汉字中不包含中文生僻字，倾向于<span
        class="red"
        ><strong>直接使用日语汉字</strong></span
      >（含有不易输入的生僻字视为没有对应汉字）；
    </p>
    <p>
      3.2.
      没有对应的日语汉字，但是能够搜索到过往其他文学作品等的翻译样例，并且认为过往翻译无误的，倾向于<span
        class="red"
        ><strong>直接使用过往翻译</strong></span
      >；搜索不到过往文学作品翻译样例的，<span class="underline"
        >考虑接受度较广的音译</span
      >。若音译译名为中性或女性，倾向于直接使用；若音译译名受众已经十分广泛【例：诺亚（《圣经》）】且不满足（3）的条件（例：腓特烈），<span
        class="red"
        >倾向于直接使用</span
      >。<span class="red">（如无必要则不对已有的翻译进行改动）</span>
    </p>
    <p>
      3.3.
      若音译译名明显为男性，且角色没有表现出明显的男性气质，经过讨论之后选择带有中性或女性气质，且发音与日语类似的汉字作为名字
    </p>
  </el-collapse-item>
</el-collapse>

### [游戏内专有名词翻译规范](translation/ingame-terms)

[//]: # (## 发布规范)

[//]: # ()
[//]: # (### [PV 技能标准模板]&#40;publication/pv-skills&#41;)
