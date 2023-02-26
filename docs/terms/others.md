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

### かまぼこ突風伝

鱼板疾风传。 [满](characters#千鸟-满)喜爱的小说。

### アビ・エシュフ

Abi-Eshuh。[时](characters#飞鸟马-时)使用的武装机甲名称。
