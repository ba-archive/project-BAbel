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
      scrollElementIntoView(element, false);
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

> District of Utnapishtim 乌塔纳皮什提<sup>1</sup>区。语源为《吉尔伽美什史诗》中的人物，其和其妻子作为古代大洪水中仅存的人类获得了永生，是《旧约圣经》中洪水幸存者诺亚的原型<sup>2</sup>。

在此区域的实体有： [夏莱](#夏莱)

<div class="footnote">
<sup>1</sup>: 拱玉书. 吉尔伽美什史诗[M]. 1. 商务印书馆, 2021 :229.<br>
<sup>2</sup>: 拱玉书. 吉尔伽美什史诗[M]. 1. 商务印书馆, 2021 :27.
</div>

## 夏莱

> シャーレ (Schale)

[D.U.](#d-u)内部的实体

## 阿比多斯

> アビドス (Abydos)

此区域内的实体有： [阿比多斯高级中学](#阿比多斯高级中学)｜ [对策委员会](#对策委员会)

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

> アリウス (Arius)｜繁中译奥利斯

此区域内的实体有： [阿里乌斯小队](#阿里乌斯小队)

### 阿里乌斯小队

> アリウススクワッド

<StudentListByFilter
  filter-by="club"
  property="阿里乌斯小队"
  :students="students"
/>

## 瓦尔基里警察学校

> ヴァルキューレ警察学校

<StudentListByFilter
filter-by="school"
property="瓦尔基里"
:students="students"
/>

### 公安局

> 公安局

<StudentListByFilter
filter-by="club"
property="公安局"
:students="students"
/>

### 生活安全局

> 生活安全局

<StudentListByFilter
filter-by="club"
property="生活安全局"
:students="students"
/>

## 克罗诺斯学校

> クロノススクール

此区域内的实体有： [报导部](#报导部)

学校成员：[川流　シノン](characters#川流-シノン)｜[マイ](characters#マイ)

### 报导部

> 報道部

社团成员：[川流　シノン](characters#川流-シノン)｜[マイ](characters#マイ)

## 格黑娜

> ゲヘナ (Gehenna)，语源为欣嫩谷（耶路撒冷的一个谷地）。在希伯来圣经中，这里最初是犹大诸王以火献祭自己孩子给摩洛的地方。从此这个地方便被认为受到了诅咒，常被作为“炼狱”的代名词。<sup>3</sup>

此区域内的实体有：[格黑娜学园](#格黑娜学园)｜[万魔殿](#万魔殿)｜[风纪委员会](#风纪委员会)｜[便利屋 68](#便利屋-68)｜[美食研究会](#美食研究会)｜[供给部](#供给部)｜[急救医学部](#急救医学部)｜[温泉开发部](#温泉开发部)｜[回家部](#回家部)

<sup>3</sup>: [欣嫩子谷](https://zh.wikipedia.org/wiki/%E6%AC%A3%E5%AB%A9%E5%AD%90%E8%B0%B7)

### アビス

> アビス。ゲヘナのヒノム火山にある未開の地。
> 詳細は不明だが、ミレニアムの「廃墟」やトリニティの「カタコンベ」と同質のものとヒマリは推察している。

### アラバ海岸

> アラバ海岸。ゲヘナにあるリゾート地。
> ゲヘナの中でもかなり閑静な場所として知られている。
> ただし、ゲヘナ生徒の基準の閑静であり騒乱事件は散発的に起きている。

## 格黑娜学园

> ゲヘナ学園

[格黑娜](#格黑娜)内部的学校

此区域内的实体有：[万魔殿](#万魔殿)｜[风纪委员会](#风纪委员会)｜[便利屋 68](#便利屋-68)｜[美食研究会](#美食研究会)｜[供给部](#供给部)｜[急救医学部](#急救医学部)｜[温泉开发部](#温泉开发部)｜[回家部](#回家部)

<StudentListByFilter
  filter-by="school"
  property="格黑娜"
  :students="students"
/>

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

社团成员：[エリカ](characters#エリカ)｜[キララ](characters#キララ)

## 山海经高级中学

> 山海経高級中学校

此区域内的实体有：[玄龙门](#玄龙门)｜[炼丹术研究会](#炼丹术研究会)｜[梅花园](#梅花园)｜[玄武商会](#玄武商会)

<StudentListByFilter
  filter-by="school"
  property="山海经"
  :students="students"
/>

### 玄龙门

> 玄龍門

社团成员：キサキ

### 炼丹术研究会

> 練丹術研究会

<StudentListByFilter
  filter-by="club"
  property="炼丹术研究会"
  :students="students"
/>

### 梅花园

> 梅花園

<StudentListByFilter
  filter-by="club"
  property="梅花园"
  :students="students"
/>

### 玄武商会

> 玄武商会

社团成员：[ルミ](characters#ルミ)

## 圣三一综合学园

> トリニティ総合学園

此区域内的实体有：[茶会](#茶会)｜[正义实现委员会](#正义实现委员会)｜[修女会](#修女会)｜[图书委员会](#图书委员会)｜[补习部](#补习部)｜[放课后甜点部](#放课后甜点部)｜[救护骑士团](#救护骑士团)｜[圣三一自卫队](#圣三一自卫队)

<StudentListByFilter
filter-by="school"
property="圣三一"
:students="students"
>
<span class="student-link"><a href="/terms/characters#百合园-圣娅">百合园圣娅</a></span><span class="student-link"><a href="/terms/characters#レイサ">レイサ</a></span>
</StudentListByFilter>

### 茶会

> ティーパーティー

<StudentListByFilter
  filter-by="club"
  property="茶会"
  :students="students"
>   
<span>
<a href="/terms/characters#百合园-圣娅">百合园圣娅</a>
</span>
</StudentListByFilter>

### 正义实现委员会

> 正義実現委員会

<StudentListByFilter
  filter-by="club"
  property="正义实现委员会"
  :students="students"
/>

### 修女会

> シスターフッド

<StudentListByFilter
  filter-by="club"
  property="修女会"
  :students="students"
/>

### 图书委员会

> 図書委員会

<StudentListByFilter
  filter-by="club"
  property="图书委员会"
  :students="students"
/>

### 补习部

> 補習授業部

<StudentListByFilter
  filter-by="club"
  property="补习部"
  :students="students"
/>

### 救护骑士团

> 救護騎士団

<StudentListByFilter
  filter-by="club"
  property="救护骑士团"
  :students="students"
/>

### 放课后甜点部（？）

> 放課後スイーツ部

<StudentListByFilter
  filter-by="club"
  property="放课后甜点部"
  :students="students"
/>

### 圣三一自卫队（？）

> トリニティ自警団

<StudentListByFilter
  filter-by="club"
  property="圣三一自卫队"
  :students="students"
>
<span class="student-link"><a href="/terms/characters#レイサ">レイサ</a></span>
</StudentListByFilter>

## 百鬼夜行联合学院

> 百鬼夜行連合学院

此区域内的实体有：[阴阳部](#阴阳部)｜[祭典运营委员会](#祭典运营委员会)｜[忍术研究部](#忍术研究部)｜[修行部](#修行部)

<StudentListByFilter
  filter-by="school"
  property="百鬼夜行"
  :students="students"
/>

### 阴阳部

> 陰陽部

<StudentListByFilter
  filter-by="club"
  property="阴阳部"
  :students="students"
/>

### 祭典运营委员会

> お祭り運営委員会

<StudentListByFilter
  filter-by="club"
  property="祭典运营委员会"
  :students="students"
>
<span class="student-link"><a href="/terms/characters#ウミカ">ウミカ</a></span>
</StudentListByFilter>

### 忍术研究部

> 忍術研究部

<StudentListByFilter
  filter-by="club"
  property="忍术研究部"
  :students="students"
/>

### 修行部

> 修行部

<StudentListByFilter
  filter-by="club"
  property="修行部"
  :students="students"
/>

### 停学

<span class="student-link"><a href="/terms/characters#狐坂-若藻">狐坂若藻</a></span>

## 千年

> ミレニアム
>
> ミレニアムとは西暦を 1000 年単位で区切ったもの。あるいは千年王国と呼ばれるキリスト教の神が直接地上を支配する終末論のこと。
>
> ブルアカ世界でも西暦が使われているのかは不明だが、西暦はキリスト教由来なので本作の元ネタに多い宗教関連の言葉ではある。

此区域内的实体有：[千年科技学院](#千年科技学院)｜[研讨会](#研讨会)｜[游戏开发部](#游戏开发部)｜[C&C](#c-c)｜[工程部](#工程部)｜[真理部](#真理部)｜[训练部](#训练部)｜[特异现象搜查部](#特异现象搜查部)

## 千年科技学院

> ミレニアムサイエンススクール
>
> 理系を重んじる校風から、数学で最難関にして最重要とされる 7 つの問題「ミレニアム懸賞問題」が元ネタなのではないか、とする説もある。
>
> 2000 年に各問題に 100 万ドルの懸賞金が懸けられたにも関わらず、四半世紀近く経った 2022 年現在でも 1 つしか解かれていない超難問で、人類に残されたフロンティアの一つである。

此区域内的实体有：[研讨会](#研讨会)｜[游戏开发部](#游戏开发部)｜[C&C](#c-c)｜[工程部](#工程部)｜[真理部](#真理部)｜[训练部](#训练部)｜[特异现象搜查部](#特异现象搜查部)

<StudentListByFilter
  filter-by="school"
  property="千年"
  :students="students"
/>

### 研讨会

> セミナー

<StudentListByFilter
  filter-by="club"
  property="研讨会"
  :students="students"
/>

### 游戏开发部

> ゲーム開発部

<StudentListByFilter
  filter-by="club"
  property="游戏开发部"
  :students="students"
/>

### C&C

> Cleaning & Clearing

<StudentListByFilter
  filter-by="club"
  property="C&C"
  :students="students"
/>

### 工程部

> エンジニア部

<StudentListByFilter
  filter-by="club"
  property="工程部"
  :students="students"
/>

### 真理部

> ヴェリタス

<StudentListByFilter
  filter-by="club"
  property="真理部"
  :students="students"
/>

### 训练部

> トレーニング部

<StudentListByFilter
  filter-by="club"
  property="训练部"
  :students="students"
/>

### 特异现象搜查部

> 特異現象捜査部

<StudentListByFilter
  filter-by="club"
  property="特异现象搜查部"
  :students="students"
/>

## 红冬联邦学园

> レッドウィンター連邦学園

此区域内的实体有：[红冬事务局](#红冬事务局)｜[227 号特別班](#227号特別班)｜[知识解放战线](#知识解放战线)｜[工务部](#工务部)

<StudentListByFilter
  filter-by="school"
  property="红冬"
  :students="students"
/>

### 红冬事务局

> レッドウィンター事務局

<StudentListByFilter
  filter-by="club"
  property="红冬事务局"
  :students="students"
/>

### 227 号特别班

> 227 号特別クラス

<StudentListByFilter
  filter-by="club"
  property="227号特别班"
  :students="students"
/>

### 知识解放战线

> 知識解放戦線

### 工务部

> 工務部

## 联邦学生会

> 連邦生徒会

社团成员：[七神凛](characters#七神-凛)｜[由良木桃香](characters#由良木-桃香)｜[岩櫃アユム](characters#岩櫃-アユム)｜[不知火カヤ](characters#不知火-カヤ)｜[扇喜アオイ](characters#扇喜-アオイ)

## SRT 特殊学园

> SRT 特殊学園

此区域内的实体有：[RABBIT 小队](#rabbit小队)｜[FOX 小队](#fox小队)

### RABBIT 小队

> RABBIT 小隊

<StudentListByFilter
  filter-by="club"
  property="RABBIT小队"
  :students="students"
/>

### FOX 小队

> FOX 小隊

社团成员：[雪乃](characters#雪乃)｜[妮可](characters#妮可)

## 其他

> NPC阵营，联动角色等

### 联动

[初音未来](characters#初音未来)

### 钢盔团

> ヘルメット団

社团成员：[ラブ](characters#ラブ)
