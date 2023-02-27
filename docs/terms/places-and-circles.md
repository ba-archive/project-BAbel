<!--suppress ES6UnusedImports -->
<script setup lang="ts">
import { onMounted } from "vue";
import { scrollElementIntoView } from "../utils/anchorPositioningService";
import { matchElementByHash } from "../utils/hashMatchingService";
import axios from "axios";
import { ref } from "vue";
import StudentListByFilter from "../components/StudentListByFilter.vue";

const students = ref([]);

axios.get("https://blue-archive.io/config/json/students.json").then((response) => {
  students.value = response.data;
}).catch((error) => {
  // 渐进式功能，失败了也不影响
});

onMounted(() => {
  const hash = decodeURIComponent(window.location.hash).slice(1);
  if (hash) {
    const elements = document.querySelectorAll("h2, h3, h4, h5, h6");
    const element = matchElementByHash(hash, elements);
    if (element) {
      scrollElementIntoView(element);
    }
  }
});
</script>

<style scoped lang="scss">
.footnote {
  font-size: 0.8em;
  color: #666;
  white-space: pre-wrap;
}
</style>

# 地名、学校名及社团名一览表

## 目录

<details>
<summary>点击展开…</summary>

[[toc]]

</details>

## D.U.

> District of Utnapishtim 乌塔纳皮什提区<sup>1</sup>。语源为《吉尔伽美什史诗》中的人物，其和其妻子作为古代大洪水中仅存的人类获得了永生，是《旧约圣经》中洪水幸存者诺亚的原型<sup>2</sup>。

在此区域的实体有： [夏莱](#夏莱)

<div class="footnote">
<sup>1</sup>: 拱玉书. 吉尔伽美什史诗[M]. 1. 商务印书馆, 2021 :229.<br>
<sup>2</sup>: 拱玉书. 吉尔伽美什史诗[M]. 1. 商务印书馆, 2021 :27.
</div>

## 夏莱

> シャーレ (Schale)

[D.U.](#d-u)内部的实体

## SRT 特殊学园

> SRT 特殊学園

此区域内的实体有：[RABBIT 小队](#rabbit-小队)，[FOX 小队](#fox-小队)

### RABBIT 小队

> RABBIT 小隊

<StudentListByFilter
  filter-by="club"
  property="RABBIT小队"
  :students="students"
/>

### FOX 小队

> FOX 小隊

社团成员：[雪乃](characters#雪乃)，[妮可](characters#妮可)

## 阿比多斯

> アビドス (Abydos)

此区域内的实体有： [阿比多斯高级中学](#阿比多斯高级中学)， [对策委员会](#对策委员会)

## 阿比多斯高级中学

> アビドス高等学校

[阿比多斯](#阿比多斯)内部的学校

校内社团：[对策委员会](#对策委员会)

<StudentListByFilter
  filter-by="school"
  property="阿比多斯"
  :students="students"
/>

### 对策委员会

> 対策委員会

[阿比多斯高级中学](#阿比多斯高级中学)内部的社团

<StudentListByFilter
  filter-by="club"
  property="对策委员会"
  :students="students"
/>

## 阿里乌斯

> アリウス (Arius)，繁中译奥利斯

此区域内的实体有： [阿里乌斯小队](#阿里乌斯小队)

### 阿里乌斯小队

> アリウススクワッド

<StudentListByFilter
  filter-by="club"
  property="阿里乌斯小队"
  :students="students"
/>

## 格黑娜

> ゲヘナ (Gehenna)，语源为欣嫩谷（耶路撒冷的一个谷地）。在希伯来圣经中，这里最初是犹大诸王以火献祭自己孩子给摩洛的地方。从此，这个地方便被认为受到了诅咒，常被作为“炼狱”的代名词。<sup>3</sup>

此区域内的实体有：[万魔殿](#万魔殿)，[风纪委员会](#风纪委员会)，[便利屋 68](#便利屋-68)，[美食研究会](#美食研究会)，[供给部](#供给部)，[急救医学部](#急救医学部)，[温泉开发部](#温泉开发部)，[回家部](#回家部)

<sup>3</sup>: [欣嫩子谷](https://zh.wikipedia.org/wiki/%E6%AC%A3%E5%AB%A9%E5%AD%90%E8%B0%B7)

### 万魔殿

> <ruby>万魔殿<rt>パンデモニウム・ソサエティー</rt></ruby>

<StudentListByFilter
  filter-by="club"
  property="万魔殿"
  :students="students"
/>

### 风纪委员会

> 風紀委員会

<StudentListByFilter
  filter-by="club"
  property="风纪委员会"
  :students="students"
/>

### 便利屋 68

> 便利屋 68

<StudentListByFilter
  filter-by="club"
  property="便利屋68"
  :students="students"
/>

### 美食研究会

> 美食研究会

<StudentListByFilter
  filter-by="club"
  property="美食研究会"
  :students="students"
/>

### 供给部

> 給食部

<StudentListByFilter
  filter-by="club"
  property="供给部"
  :students="students"
/>

### 急救医学部

> 救急医学部

<StudentListByFilter
  filter-by="club"
  property="急救医学部"
  :students="students"
/>

### 温泉开发部

> 温泉開発部

<StudentListByFilter
  filter-by="club"
  property="温泉开发部"
  :students="students"
/>

### 回家部

> 帰宅部

暂时只有杂鱼
