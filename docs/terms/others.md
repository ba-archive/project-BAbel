<script setup lang="ts">
import { onMounted } from "vue";
import { transformVoicedOrSemiVoiced } from "../utils/CJKService";

onMounted(() => {
  const hash = decodeURIComponent(window.location.hash).slice(1);
  if (hash) {
    const elements = document.querySelectorAll("h2, h3, h4, h5, h6");
    const transformedHash = transformVoicedOrSemiVoiced(hash);
    const elementList = Array.from(elements).filter(element => transformedHash === element.id);
    if (0 === elementList.length) {
      return;
    }
    const element = elementList[0];
    element.scrollIntoView();
  }
});
</script>

# 游戏内其他名词一览表

## 分类还没想好，莫急

### かまぼこ突風伝

鱼板疾风传。 满喜爱的小说。

### アビ・エシュフ

Abi-Eshuh。时使用的武装机甲名称。
