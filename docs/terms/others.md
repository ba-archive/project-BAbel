<script setup lang="ts">
import { onMounted } from "vue";
import { transformVoicedOrSemiVoiced } from "../utils/CJKService";

onMounted(() => {
  const hash = decodeURIComponent(window.location.hash).slice(1);
  if (hash) {
    const elements = document.querySelectorAll("h2, h3, h4, h5, h6");
    const elementList = Array.from(elements).filter(element => {
      return element.id;
    });
    if (0 === elementList.length) {
      return;
    }
    const transformedHash = transformVoicedOrSemiVoiced(hash);
    for (const element of elementList) {
      if (element.id === transformedHash) {
        element.scrollIntoView({ block: "center", behavior: "smooth" });
        break;
      }
    }
  }
});
</script>

# 游戏内其他名词一览表

## 分类还没想好，莫急

---test---

## あーん

1. （指小孩张大嘴哭时发出的声音及其样子）哇哇。

2. 嘴张得大大的。

## あたふた

匆匆忙忙，慌慌张张，慌手慌脚。

## あっけらかん

1. （因事出意外而惊呆）傻了眼，呆若木鸡。

2. 无忧无虑，坦率，满不在乎，若无其事。

3. 空荡荡，空落落。

## あっさり

1. （味道）清淡。

2. （颜色、式样等）淡雅，不鲜艳刺目，素净，素淡。

3. （性格、态度等）直爽，干脆，淡泊。

4. 轻而易举地，一下子。

## あっぷあっぷ　

1. 溺水挣扎的样子

2. 陷入困境、拼命挣扎的样子。

## あんぐり　

比喻无意识地或不由自主地张大嘴巴的样子。

## いじいじ　

1. 怯生生，缩手缩脚，畏畏缩缩。

2. 比喻性格乖僻。

---test---

### かまぼこ突風伝

鱼板疾风传。 满喜爱的小说。

### アビ・エシュフ

Abi-Eshuh。时使用的武装机甲名称。
