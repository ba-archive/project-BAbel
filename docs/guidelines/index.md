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

li::marker {
  font-size: 1rem;
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
    <ol><li><p><span class="red"><strong>在任何场合和条件下，都不应该使用网络用语。</strong></span></p></li><li><p>除非误译已经存在，并且被玩家群体广泛使用与接受（例：野宫），否则首先应当保持翻译的正确性。</p></li><li><p><strong>地名</strong>等带有明显原型的名词：尽可能使用学术界通用译名，优先使用音译，若音译与学术翻译相差过大则音译（以大众接受程度为准）</p></li><li><p><strong>人名：</strong></p><p>4.1. 如果有对应的日语汉字，且日语汉字中不包含中文生僻字，倾向于<span class="red"><strong>直接使用日语汉字</strong></span>（含有不易输入的生僻字视为没有对应汉字）；</p><p>4.2. 没有对应的日语汉字，但是能够搜索到过往其他文学作品等的翻译样例，并且认为过往翻译无误的，倾向于<span class="red"><strong>直接使用过往翻译</strong></span>；搜索不到过往文学作品翻译样例的，<span class="underline">考虑接受度较广的音译</span>。若音译译名为中性或女性，倾向于直接使用；若音译译名受众已经十分广泛【例：诺亚（《圣经》）】且不满足（3）的条件（例：腓特烈），<span class="red">倾向于直接使用</span>。<span class="red">（如无必要则不对已有的翻译进行改动）</span></p><p>4.3. 若音译译名明显为男性，且角色没有表现出明显的男性气质，经过讨论之后选择带有中性或女性气质，且发音与日语类似的汉字作为名字</p></li><li><p><strong>人称：</strong></p><p>5.1. <strong>～ちゃん：</strong> 在没有实意，仅作为称呼的情况下，推荐选择不翻译；若遇到需要表明被称呼人的“可爱”等属性的情况时，优先使用“小～”，尽量避免使用“酱”。如果人物名字中已经包含“小”（如：小春），则省略。</p><p>例：</p><blockquote><p>うん、見ての通り！私が今日のために特別に用意した「ムツキ<span class="underline"><strong>ちゃん</strong></span>特製のおせち」だよん！</p><p>嗯，如你所见！这就是我为今天特地准备的“睦月特制年节菜”哦！ <br><br> おはようございます、アズサ<span class="underline">**ちゃん**</span>。朝から元気ですね♡</p><p>早上好，<span class="underline">**小梓**</span>。一大早就很有精神呢♡ <br><br> あら、コハル<span class="underline">**ちゃん**</span>おねむですか？</p><p>哎呀，小春是困了吗？</p></blockquote><p>5.2. <strong>～さん：</strong> 在没有实意，仅作为称呼的情况下，推荐选择不翻译；若遇到需要表明“尊重”等情况时，使用“～同学”。</p><p>例：</p><blockquote><p>……コユキ<span class="underline"><strong>さん</strong></span>？</p><p>……小雪? <br><br> あの、シロコ<span class="underline"><strong>さん</strong></span>？</p><p>那个，白子<span class="underline"><strong>同学</strong></span>？</p></blockquote><p>5.3. <strong>～くん：</strong> 同“～さん”。</p><p>5.4. <strong>〜様：</strong> 在没有实意，仅作为尊称连用的情况下，推荐选择不翻译；若遇到需要表明“尊重”等情况时，使用“～先生/～女士/～大人”。若藻的情况，见（5）（6）。女仆的情况，见（5）（7）。</p><p>例：</p><blockquote><p>お客<span class="underline"><strong>様</strong></span>の前で何度も体が固まってしまって、ミスの連発でしたし……</p><p>在客人面前好几次僵住，还接连犯错…… <br><br> あ、あのペロロ<span class="underline"><strong>様</strong></span>のバックですか？</p><p>啊，（老师是说）那个佩洛洛<span class="underline"><strong>大人</strong></span>的包吗？</p></blockquote><p>5.5. <strong>あなた：</strong> 如果不表示亲昵关系（例：若藻），通常使用“你/～先生/～女士”。如果表示亲昵关系（例：若藻），使用“亲爱的/您”。女仆的情况，使用“主人”。</p><p>例：</p><blockquote><p><span class="underline"><strong>あなた</strong></span>の秘密を頂きに参上します　――怪盗コユキ</p><p>让我来揭晓<span class="underline"><strong>你</strong></span>的秘密 ――怪盗小雪 <br><br> つまり<span class="underline"><strong>あなた</strong></span>様にとって今日は、全く夏らしくない一日になってしまうのですね……</p><p>但也就是说，<span class="underline"><strong>您</strong></span>今天将度过完全没有夏日气息的一天是吗…… <br><br><span class="underline"><strong>あなた</strong></span>のメイド、アカネです。ここにあらためてご挨拶申し上げます</p><p>我是<span class="underline"><strong>主人</strong></span>的女仆，朱音。再次向您问好</p></blockquote><p>5.6. <strong>あなた様：</strong> 如果表示亲昵关系（例：若藻），使用“亲爱的/您”。</p><p>例：</p><blockquote><p>つまり<span class="underline"><strong>あなた</strong></span>様にとって今日は、全く夏らしくない一日になってしまうのですね……</p><p>但也就是说，<span class="underline"><strong>您</strong></span>今天将度过完全没有夏日气息的一天是吗……</p></blockquote><p>5.7. <strong>ご主人様：</strong> 女仆的场合，使用“主人”。如果认为含有亲昵关系，可以酌情添加“亲爱的/您”。</p><p>例：</p><blockquote><p>やっぱり<span class="underline"><strong>ご主人様</strong></span>に連絡して正解だったよー</p><p>果然联系<span class="underline"><strong>主人</strong></span>是正确的呢——！ <br><br><span class="underline"><strong>ご主人様</strong></span>と出会えたことが、私にとって最大の幸運です</p><p>能遇到<span class="underline"><strong>主人您</strong></span>，就是我最大的幸运</p></blockquote><p>5.8. <strong>殿：</strong> 如果出现在忍术修行部剧情中，使用“～主公（大人）”。其他情况下酌情使用“～大人”，或“～先生/～女士”。</p><p>例：</p><blockquote><p>さ、さすが主<span class="underline"><strong>殿</strong></span>……！</p><p>不、不愧是<span class="underline"><strong>主公</strong></span>……！</p></blockquote></li></ol>
    </el-collapse-item>
</el-collapse>

### [游戏内专有名词翻译规范](translation/ingame-terms)

[//]: # '## 发布规范'
[//]: #
[//]: # '### [PV 技能标准模板](publication/pv-skills)'
