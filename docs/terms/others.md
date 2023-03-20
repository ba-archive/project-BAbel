<!--suppress ES6UnusedImports -->
<script setup lang="ts">
import { onMounted } from "vue";
import { scrollElementIntoView } from "../utils/anchorPositioningService";
import { matchElementByHash } from "../utils/hashMatchingService";

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

# 游戏内其他名词一览表

## 分类还没想好，莫急

### 鱼板疾风传

> かまぼこ突風伝

[千鸟满](characters#千鸟-满)喜爱的小说。

### Abi-Eshuh

> アビ・エシュフ

[飞鸟马时](characters#飞鸟马-时)使用的武装机甲名称。

### 爱经

> カーマスートラ

活动「古书馆的魔术师」中，替换了[樱子](characters#歌住-樱子)即将在「」中诵读的内容的书籍

<details>
<summary>现实考据…</summary>

古代インドの性愛に関する実在の書物で、その内容から俗に「世界三大性典」などとも呼ばれる代物。

ヒンドゥーの人生には大きな三つの目的（トリヴァルガ）が存在し、その三つとはアルタ（実利）、カーマ（性愛）、ダルマ（法）であると説かれていた。

その内の一つであるカーマについて詳細に語ったのがカーマシャートラ（性愛書）であり、「カーマスートラ」はその中で最も重要とされる経典の一つである。

内容は第一部の一般的な愛についてから始まるが、第二部では急に変態性癖や性技について語り出し、性行為の体位やテクニック、人妻の口説き方から倒錯的なプレイまで、性に関する多岐に渡る内容が7部30章以上にも及んで詳細に記されている。

度々海外でエロジョークのネタとして取り上げられたりもするが、内容自体は割とちゃんとした（？）恋愛・性生活のハウツー本のようなものであるため、たまに言われる「エロ本」という例えは若干正しくない（ポルノ的な意味合いではなく実践面に比重が置かれているため）。

また、その文章自体の文学的価値の高さに加えて当時のインド社会の風俗について知る上でも非常に貴重な資料でもあるのだとか。

作中ではサクラコがすり替えられたこの本を誤読する可能性があった点から、古代語(＝ラテン語)で記されたカーマスートラと言う別の意味で稀覯本となる。

</details>
