<!--suppress ES6UnusedImports -->
<script setup lang="ts">
import CharacterTable from '../components/CharacterTable.vue';
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

# 人物姓名、武器及技能翻译一览表

## 目录

<details>
<summary>点击展开…</summary>

[[toc]]

</details>

## 阿比多斯高级中学

### 砂狼　白子

<CharacterTable
  family-name-jp="砂狼"
  family-name-ruby="すなおおかみ"
  given-name-jp="シロコ"
  image-name="shiroko"
  ex-skill-jp="ドローン召喚：火力支援"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="手榴弾投擲"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="ピンポイント"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="高速連射"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="WHITE FANG 465"
  unique-weapon-cn="WHITE FANG 465"
  circle="对策委员会"
  unique-item-jp="シロコのドローン"
  unique-item-cn=""
/>

### 小鸟游　星野

<CharacterTable
  family-name-jp="小鳥遊"
  family-name-ruby="たかなし"
  given-name-jp="ホシノ"
  image-name="hoshino"
  ex-skill-jp="戦術的鎮圧"
  ex-skill-cn="战术镇压"
  normal-skill-jp="応急手当"
  normal-skill-cn="急救"
  passive-skill-jp="対策委員会の会長"
  passive-skill-cn="对策委员会的会长"
  sub-skill-jp="鎮圧のベテラン"
  sub-skill-cn="镇压老手"
  unique-weapon-jp="Eye of Horus"
  unique-weapon-cn="Eye of Horus"
  circle="对策委员会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 十六夜　野宫

<CharacterTable
  family-name-jp="十六夜"
  family-name-ruby="いざよい"
  given-name-jp="ノノミ"
  image-name="nonomi"
  ex-skill-jp="お仕置きの時間です～♣"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="じゃ～ん☆"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="めっ、ですよ！"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="綺麗にお掃除します～♧"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="Little machinegun 5"
  unique-weapon-cn="Little machinegun 5"
  circle="对策委员会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 黑见　芹香

<CharacterTable
  family-name-jp="黒見"
  family-name-ruby="くろみ"
  given-name-jp="セリカ"
  image-name="serika"
  ex-skill-jp="邪魔よ！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="狙い撃ち"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="バイト根性"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="バイト根性"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="シンシアリティ"
  unique-weapon-cn="专武译文"
  circle="对策委员会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 奥空　绫音

<CharacterTable
  family-name-jp="奥空"
  family-name-ruby="おくそら"
  given-name-jp="アヤネ"
  image-name="ayane"
  ex-skill-jp="支援特急便"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="学習サポート"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="向学心"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="士気の向上"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="コモンセンス"
  unique-weapon-cn="专武译文"
  circle="对策委员会"
  unique-item-jp=""
  unique-item-cn=""
/>

## 圣三一综合学院

### 百合园　圣娅

<CharacterTable
  family-name-jp="百合園"
  family-name-ruby="ゆりぞの"
  given-name-jp="セイア"
  image-name=""
  circle="茶会"
/>

### 桐藤　渚

<CharacterTable
  family-name-jp="桐藤"
  family-name-ruby="きりふじ"
  given-name-jp="ナギサ"
  image-name="nagisa"
  ex-skill-jp="Time On Target"
  ex-skill-cn="TOT 集火射击"
  normal-skill-jp="Afternoon Tea"
  normal-skill-cn="下午茶时间"
  passive-skill-jp="Pride of Tea Party"
  passive-skill-cn="茶话会的荣耀"
  sub-skill-jp="位高则任重"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="ロイヤルブレンド"
  unique-weapon-cn="专武译文"
  circle="茶会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 圣园　未花

<CharacterTable
  family-name-jp="圣园"
  family-name-ruby="みその"
  given-name-jp="ミカ"
  image-name="mika"
  ex-skill-jp="Kyrie Eleison"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="星の呼び声"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="Gloria Patri"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="Benedictio"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="Quis ut Deus"
  unique-weapon-cn="专武译文"
  circle="茶会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 剑先　鹤城

<CharacterTable
  family-name-jp="剑先"
  family-name-ruby="けんざき"
  given-name-jp="ツルギ"
  image-name="tsurugi"
  ex-skill-jp="奇奇怪怪"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="激情"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="機敏"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="制御不能の力"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="ブラッド&ガンパウダー"
  unique-weapon-cn="专武译文"
  circle="正义实现委员会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 羽川　莲见

<CharacterTable
  family-name-jp="羽川"
  family-name-ruby="はねかわ"
  given-name-jp="ハスミ"
  image-name="hasumi"
  ex-skill-jp="アーマーピアッシング弾"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="冷徹な心"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="照準よし"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="目標探索"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="インペイルメント"
  unique-weapon-cn="专武译文"
  circle="正义实现委员会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 静山　真白

<CharacterTable
  family-name-jp="静山"
  family-name-ruby="しずやま"
  given-name-jp="マシロ"
  image-name="mashiro"
  ex-skill-jp="正義の一撃"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="正義の決断"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="正義の気概"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="正義の結束"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="正義の顕現"
  unique-weapon-cn="专武译文"
  circle="正义实现委员会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 一花

<CharacterTable
  given-name-jp="イチカ"
  image-name=""
  circle="正义实现委员会"
/>

### 阿慈谷　日富美

<CharacterTable
  family-name-jp="阿慈谷"
  family-name-ruby="あじたに"
  given-name-jp="ヒフミ"
  image-name="hifumi"
  ex-skill-jp="助けて、ペロロ様！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="ペロロ様の応援"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="コレクター根性"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="すばしっこいコレクター"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="マイ・ネセシティ"
  unique-weapon-cn="专武译文"
  circle="补习部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 白洲　梓

<CharacterTable
  family-name-jp="白洲"
  family-name-ruby="しらす"
  given-name-jp="アズサ"
  image-name="azusa"
  ex-skill-jp="intulit mortem"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="sagitta mortis"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="過酷な訓練"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="弱点を狙う"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="Et Omnia Vanitas"
  unique-weapon-cn="专武译文"
  circle="补习部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 浦和　花子

<CharacterTable
  family-name-jp="浦和"
  family-name-ruby="うらわ"
  given-name-jp="ハナコ"
  image-name="hanako"
  ex-skill-jp="禁じられた遊びを始めましょう"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="固くなあれ♪"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="ヤル気マンマンです"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="一緒なら恥ずかしくありません！"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="オネストウィッシュ"
  unique-weapon-cn="专武译文"
  circle="补习部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 下江　小春

<CharacterTable
  family-name-jp="下江"
  family-name-ruby="しもえ"
  given-name-jp="コハル"
  image-name="koharu"
  ex-skill-jp="セイなる手榴弾"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="わ、私が治療するっ！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="これでも頑張ってるの！"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="エリートだから！"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="ジャスティス・ブラック"
  unique-weapon-cn="专武译文"
  circle="补习部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 栗村　爱莉

<CharacterTable
  family-name-jp="栗村"
  family-name-ruby="くりむら"
  given-name-jp="アイリ"
  image-name="airi"
  ex-skill-jp="勿体ないけど……えぇいっ！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="頭がキーンってするかも……"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="デザートの力"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="アイリの声援"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="爽やかチョコミント"
  unique-weapon-cn="专武译文"
  circle="放课后甜点部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 伊原木　喜美

<CharacterTable
  family-name-jp="伊原木"
  family-name-ruby="いばらぎ"
  given-name-jp="ヨシミ"
  image-name="yoshimi"
  ex-skill-jp="だ、誰が慌ててるって！？"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="痛い目に遭ってみる？！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="な、舐めないで！"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="私の話を聞きなさいよおっ！"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="スイーツドライバー"
  unique-weapon-cn="专武译文"
  circle="放课后甜点部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 柚鸟　夏

<CharacterTable
  family-name-jp="柚鳥"
  family-name-ruby="ゆとり"
  given-name-jp="ナツ"
  image-name="natsu"
  ex-skill-jp="こういう時のとっておき"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="これ食べて元気出してー"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="腹が減っては……！"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="お口いっぱいの幸せ"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="ビヨンド・ザ・ルミネーション"
  unique-weapon-cn="专武译文"
  circle="放课后甜点部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 杏山　和纱

<CharacterTable
  family-name-jp="杏山"
  family-name-ruby="きょうやま"
  given-name-jp="カズサ"
  image-name="kazusa"
  ex-skill-jp="スイート・ファイア"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="しみついたクセ"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="シュガー・ハイ"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="つまみ食い"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="マビノギオン"
  unique-weapon-cn="专武译文"
  circle="放课后甜点部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 古关　忧

<CharacterTable
  family-name-jp="古関"
  family-name-ruby="こせき"
  given-name-jp="ウイ"
  image-name="ui"
  ex-skill-jp="古書の専門家"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="伝授されていく知識"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="専門家の知見"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="神経過敏"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="ボリュームサプレッサー"
  unique-weapon-cn="专武译文"
  circle="图书委员会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 圆堂　志美子

<CharacterTable
  family-name-jp="円堂"
  family-name-ruby="えんどう"
  given-name-jp="シミコ"
  image-name="shimiko"
  ex-skill-jp="知識の盾"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="心の栄養剤"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="知識を蓄えましょう！"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="みんなで読書会を開きましょう！"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="ライブラリールーラー"
  unique-weapon-cn="专武译文"
  circle="图书委员会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 苍森　美弥

<CharacterTable
  family-name-jp="蒼森"
  family-name-ruby="あおもり"
  given-name-jp="ミネ"
  image-name="mine"
  ex-skill-jp="誇りと信念"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="峻厳な宣告"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="騎士団の意志"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="不屈の勇気"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="救護の証明"
  unique-weapon-cn="专武译文"
  circle="救护骑士团"
  unique-item-jp=""
  unique-item-cn=""
/>

### 朝颜　花绘

<CharacterTable
  family-name-jp="朝顔"
  family-name-ruby="あさがお"
  given-name-jp="ハナエ"
  image-name="hanae"
  ex-skill-jp="治療の時間ですよ～！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="倒れちゃダメです！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="腕前上達"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="みなさん頑張ってくださ～い！"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="ハッピースマイリー"
  unique-weapon-cn="专武译文"
  circle="救护骑士团"
  unique-item-jp=""
  unique-item-cn=""
/>

### 鹫见　芹奈

<CharacterTable
  family-name-jp="鷲見"
  family-name-ruby="すみ"
  given-name-jp="セリナ"
  image-name="serina"
  ex-skill-jp="集中治療セットA"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="緊急治療セットB"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="白衣の天使"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="天使のほほ笑み"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="救護の証明"
  unique-weapon-cn="专武译文"
  circle="救护骑士团"
  unique-item-jp=""
  unique-item-cn=""
/>

### 歌住　樱子

<CharacterTable
  family-name-jp="歌住"
  family-name-ruby="うたずみ"
  given-name-jp="サクラコ"
  image-name="sakurako"
  ex-skill-jp="洗礼の印"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="シスターの身支度"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="罪悪を裁く者"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="光と共にあらんことを"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="浄化の織り手"
  unique-weapon-cn="专武译文"
  circle="修女会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 伊落　玛丽

<CharacterTable
  family-name-jp="伊落"
  family-name-ruby="いおち"
  given-name-jp="マリー"
  image-name="mari"
  ex-skill-jp="聖なる加護"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="浄化の洗礼"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="決然たる思い"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="慈愛の心"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="パイエティー"
  unique-weapon-cn="专武译文"
  circle="修女会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 若叶　日向

<CharacterTable
  family-name-jp="若葉"
  family-name-ruby="わかば"
  given-name-jp="ヒナタ"
  image-name="hinata"
  ex-skill-jp="最終手段"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="まずはお話を……！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="思いがけない展開"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="力仕事はお任せを！"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="ブレッシング"
  unique-weapon-cn="专武译文"
  circle="修女会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 守月　铃美

<CharacterTable
  family-name-jp="守月"
  family-name-ruby="もりづき"
  given-name-jp="スズミ"
  image-name="suzumi"
  ex-skill-jp="オーダーメイド閃光弾"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="自警団の底力"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="緊急回避"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="自警団の猛襲"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="セーフティー"
  unique-weapon-cn="专武译文"
  circle="圣三一自卫队"
  unique-item-jp=""
  unique-item-cn=""
/>

### 宇泽　玲纱

<CharacterTable
  family-name-jp="宇沢"
  family-name-ruby="うざわ"
  given-name-jp="レイサ "
  image-name=""
  unique-item-jp=""
  unique-item-cn=""
  circle="圣三一自卫队"
/>

### エリカ

<CharacterTable
  family-name-jp=""
  family-name-ruby=""
  given-name-jp="エリカ"
  image-name=""
  circle="回家部"
/>

### キララ

<CharacterTable
  family-name-jp=""
  family-name-ruby=""
  given-name-jp="キララ"
  image-name=""
  circle="回家部"
/>

## 格黑娜

### 陆八魔　阿露

<CharacterTable
  family-name-jp="陸八魔"
  family-name-ruby="りくはちま"
  given-name-jp="アル"
  image-name="aru"
  ex-skill-jp="ハードボイルドショット"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="ノワールシュート"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="社長の威厳"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="アウトローの流儀"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="ワインレッド・アドマイアー"
  unique-weapon-cn="专武译文"
  circle="便利屋68"
  unique-item-jp="アルのすごく貴重な財布"
  unique-item-cn="爱用品译文"
/>

### 浅黄　睦月

<CharacterTable
  family-name-jp="浅黄"
  family-name-ruby="あさぎ"
  given-name-jp="ムツキ"
  image-name="mutsuki"
  ex-skill-jp="灼熱のセレナーデ"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="爆裂のアリア"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="楽しく遊ぼう！"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="楽しくいこっか？"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="トリックオアトリック"
  unique-weapon-cn="专武译文"
  circle="便利屋68"
  unique-item-jp=""
  unique-item-cn=""
/>

### 鬼方　佳代子

<CharacterTable
  family-name-jp="鬼方"
  family-name-ruby="おにかた"
  given-name-jp="カヨコ"
  image-name="kayoko"
  ex-skill-jp="パニックブリンガー"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="パニックショット"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="怖い顔"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="仕方ない"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="デモンズロア"
  unique-weapon-cn="专武译文"
  circle="便利屋68"
  unique-item-jp=""
  unique-item-cn=""
/>

### 伊草　遥香

<CharacterTable
  family-name-jp="伊草"
  family-name-ruby="いぐさ"
  given-name-jp="ハルカ"
  image-name="haruka"
  ex-skill-jp="乱れ撃ち"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="トリガーオーバー"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="が、頑張ります！"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="うわああああっ！？"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="ブローアウェイ"
  unique-weapon-cn="专武译文"
  circle="便利屋68"
  unique-item-jp=""
  unique-item-cn=""
/>

### 黑馆　晴奈

<CharacterTable
  family-name-jp="黒舘"
  family-name-ruby="くろだて"
  given-name-jp="ハルナ"
  image-name="haruna"
  ex-skill-jp="貫くエレガンス"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="爆発するエキゾチック"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="美食家の気品"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="美食家の冷静さ"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="爆発するエキゾチック"
  unique-weapon-cn="专武译文"
  circle="美食研究会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 鳄渊　明里

<CharacterTable
  family-name-jp="鰐渕"
  family-name-ruby="わにぶち"
  given-name-jp="アカリ"
  image-name="akari"
  ex-skill-jp="グレネード、大盛りで！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="おかわり、ちょっと辛めで！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="ごちそうさまです！"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="まだまだ食べられますよ！"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="グレネード、大盛りで！"
  unique-weapon-cn="专武译文"
  circle="美食研究会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 狮子堂　泉

<CharacterTable
  family-name-jp="獅子堂"
  family-name-ruby="ししどう"
  given-name-jp="イズミ"
  image-name="izumi"
  ex-skill-jp="チーズチョコレートバーガー！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="よーーい、BANG！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="次は何を食べよっか？"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="美味しいのが一番だよね～"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="デイリーカトラリー"
  unique-weapon-cn="专武译文"
  circle="美食研究会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 赤司　纯子

<CharacterTable
  family-name-jp="赤司"
  family-name-ruby="あかし"
  given-name-jp="ジュンコ"
  image-name="junko"
  ex-skill-jp="空腹のイライラ"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="お腹空いてる時は話しかけないで！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="小柄のメリット"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="空腹の美食家"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="お腹空いてる時は話しかけないで！"
  unique-weapon-cn="专武译文"
  circle="美食研究会"
  unique-item-jp="ダイナーズアウトロー"
  unique-item-cn="爱用品译文"
/>

### 空崎　日奈

<CharacterTable
  family-name-jp="空崎"
  family-name-ruby="そらさき"
  given-name-jp="ヒナ"
  image-name="hina"
  ex-skill-jp="終幕：イシュ・ボシェテ"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="リロードアンドデストロイ"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="冷徹な風紀委員会"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="徹頭徹尾"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="終幕：デストロイヤー"
  unique-weapon-cn="专武译文"
  circle="风纪委员会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 银镜　伊织

<CharacterTable
  family-name-jp="銀鏡"
  family-name-ruby="しろみ"
  given-name-jp="イオリ"
  image-name="iori"
  ex-skill-jp="一網打尽"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="指名手配"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="一撃必中"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="風紀委員の度胸"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="指名手配"
  unique-weapon-cn="专武译文"
  circle="风纪委员会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 火宫　千夏

<CharacterTable
  family-name-jp="火宮"
  family-name-ruby="ひのみや"
  given-name-jp="チナツ"
  image-name="chinatsu"
  ex-skill-jp="戦傷治療"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="戦況の立て直し"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="医療支援を強化"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="防御支援を強化"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="サポートポインター"
  unique-weapon-cn="专武译文"
  circle="风纪委员会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 天雨　亚子

<CharacterTable
  family-name-jp="天雨"
  family-name-ruby="あまう"
  given-name-jp="アコ"
  image-name="ako"
  ex-skill-jp="偵察データを共有します"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="補給プランB"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="支援を開始します"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="サポートはお任せください"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="ホットショット"
  unique-weapon-cn="专武译文"
  circle="风纪委员会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 爱清　枫香

<CharacterTable
  family-name-jp="愛清"
  family-name-ruby="あいきよ"
  given-name-jp="フウカ"
  image-name="fuuka"
  ex-skill-jp="給食の時間です！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="給食部の優しさ"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="新鮮な材料を集めましょう！"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="給食部としての誇り"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="給食部の護身用銃typeA"
  unique-weapon-cn="专武译文"
  circle="供餐部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 牛牧　朱莉

<CharacterTable
  family-name-jp="牛牧"
  family-name-ruby="うしまき"
  given-name-jp="ジュリ"
  image-name="juri"
  ex-skill-jp="ジュリのクッキングタイム！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="最高のお料理"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="やる気は十分！"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="召し上がれ！"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="給食部の護身用銃typeB"
  unique-weapon-cn="专武译文"
  circle="供餐部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 冰室　濑名

<CharacterTable
  family-name-jp="氷室"
  family-name-ruby="ひむろ"
  given-name-jp="セナ"
  image-name="sena"
  ex-skill-jp="緊急出動"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="エネルギー剤注入"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="救急支援"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="可及的速やかに"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="救急用突入キット"
  unique-weapon-cn="专武译文"
  circle="急救医学部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 霞

<CharacterTable
  family-name-jp=""
  family-name-ruby=""
  given-name-jp="カスミ"
  image-name=""
  circle="温泉开发部"
/>

### 下仓　惠

<CharacterTable
  family-name-jp="下倉"
  family-name-ruby="しもくら"
  given-name-jp="メグ"
  image-name="megu"
  ex-skill-jp="熱いの好きだよね～！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="あっためてあげる！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="よゆ～よゆ～！"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="あ～すっきりした！"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="メグマパワー！"
  unique-weapon-cn="专武译文"
  circle="温泉开发部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 枣　伊吕波

<CharacterTable
  family-name-jp="棗"
  family-name-ruby="なつめ"
  given-name-jp="イロハ"
  image-name="iroha"
  ex-skill-jp="行きますよ、虎丸"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="めんどくさいですね……"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="仕方ありません"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="しっかりしてください"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="万魔殿制式拳銃"
  unique-weapon-cn="专武译文"
  circle="万魔殿"
  unique-item-jp=""
  unique-item-cn=""
/>

### 羽沼　真琴

<CharacterTable
  family-name-jp="羽沼"
  family-name-ruby="はぬま"
  given-name-jp="マコト"
  circle="万魔殿"
  image-name=""
/>

### 伊吹

<CharacterTable
  family-name-jp=""
  family-name-ruby=""
  given-name-jp="イブキ"
  circle="万魔殿"
  image-name=""
/>

## 千年科技学院

### 早濑　优香

<CharacterTable
  family-name-jp="早瀬"
  family-name-ruby="はやせ"
  given-name-jp="ユウカ"
  image-name="yuuka"
  ex-skill-jp="Q.E.D"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="I.F.F"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="最適解の導出"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="高速暗算"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="ロジック＆リーズン"
  unique-weapon-cn="专武译文"
  circle="研讨会"
  unique-item-jp="ユウカの関数電卓"
  unique-item-cn="爱用品译文"
/>

### 生盐　诺雅

<CharacterTable
  family-name-jp="生塩"
  family-name-ruby="うしお"
  given-name-jp="ノア"
  image-name="noa"
  ex-skill-jp="緊急出動"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="エネルギー剤注入"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="救急支援"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="可及的速やかに"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="救急用突入キット"
  unique-weapon-cn="专武译文"
  circle="研讨会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 黑崎　小雪

<CharacterTable
  family-name-jp="黒崎"
  family-name-ruby="くろさき"
  given-name-jp="コユキ"
  image-name=""
  ex-skill-jp="トリッキーな変数"
  ex-skill-cn="微妙的变数"
  normal-skill-jp="还以为就一个人吗！？"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="相信奇迹吗？"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="カオス理論"
  sub-skill-cn="混沌理论"
  unique-weapon-jp="固有武器"
  unique-weapon-cn="专武译文"
  circle="研讨会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 调月　莉音

<CharacterTable
  family-name-jp="調月"
  family-name-ruby="つかつき"
  given-name-jp="リオ"
  image-name=""
/>

### 美甘　尼禄

<CharacterTable
  family-name-jp="美甘"
  family-name-ruby="みかも"
  given-name-jp="ネル"
  image-name="neru"
  ex-skill-jp="あぁ？ぶっ殺されてぇか？"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="あぁ？ふざけんな！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="コールサインダブルオー"
  passive-skill-cn="呼号：00"
  sub-skill-jp="激昂"
  sub-skill-cn="激昂"
  unique-weapon-jp="ツイン・ドラゴン"
  unique-weapon-cn="专武译文"
  circle="C&C"
  unique-item-jp=""
  unique-item-cn=""
/>

### 一之濑　明日奈

<CharacterTable
  family-name-jp="一之瀬"
  family-name-ruby="いちのせ"
  given-name-jp="アスナ"
  image-name="asuna"
  ex-skill-jp="行っくよー！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="撃つよーっ！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="これは痛いよ？"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="スピード上げるね？"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="サプライズパーティー"
  unique-weapon-cn="专武译文"
  circle="C&C"
  unique-item-jp=""
  unique-item-cn=""
/>

### 角楯　花凛

<CharacterTable
  family-name-jp="角楯"
  family-name-ruby="かくだて"
  given-name-jp="カリン"
  image-name="karin"
  ex-skill-jp="ターゲット、排除する"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="火力支援、開始"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="武装強化、完了"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="支援活動、開始"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="ホークアイ"
  unique-weapon-cn="专武译文"
  circle="C&C"
  unique-item-jp=""
  unique-item-cn=""
/>

### 室笠　朱音

<CharacterTable
  family-name-jp="室笠"
  family-name-ruby="むろかさ"
  given-name-jp="アカネ"
  image-name="akane"
  ex-skill-jp="優雅に排除します"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="上品に貫きます"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="速やかに前進します"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="的確に制圧します"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="サイレントソリューション"
  unique-weapon-cn="专武译文"
  circle="C&C"
  unique-item-jp=""
  unique-item-cn=""
/>

### 飞鸟马 时

<CharacterTable
  family-name-jp="飛鳥馬"
  family-name-ruby="あすま"
  given-name-jp="トキ"
  image-name="toki"
  ex-skill-jp="システム：アビ・エシュフ"
  ex-skill-cn="系统：Abi-Eshuh"
  normal-skill-jp="戦術的判断"
  normal-skill-cn="战术的判断"
  passive-skill-jp="コールサインゼロフォー"
  passive-skill-cn="呼号：04"
  sub-skill-jp="目には目を"
  sub-skill-cn="以眼还眼"
  unique-weapon-jp="シークレットタイム"
  unique-weapon-cn="专武译文"
  circle="C&C"
  unique-item-jp=""
  unique-item-cn=""
  :connection="['Abi-Eshuh']"
/>

### 小涂　真纪

<CharacterTable
  family-name-jp="小塗"
  family-name-ruby="こぬり"
  given-name-jp="マキ"
  image-name="maki"
  ex-skill-jp="世界をもっと色鮮やかに！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="くらえ、ペイントボール！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="芸術的な演出"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="芸術の苦しみ"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="オートラッカー"
  unique-weapon-cn="专武译文"
  circle="真理部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 小钩　晴

<CharacterTable
  family-name-jp="小鈎"
  family-name-ruby="おまがり"
  given-name-jp="ハレ"
  image-name="hare"
  ex-skill-jp="EMPドローン展開"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="破壊工作：プランA"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="武装強化：プランＢ"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="迎撃システム作動"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="オートエイマー"
  unique-weapon-cn="专武译文"
  circle="真理部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 音濑　小玉

<CharacterTable
  family-name-jp="音瀬"
  family-name-ruby="おとせ"
  given-name-jp="コタマ"
  image-name="kotama"
  ex-skill-jp="傍受開始"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="弱点を盗聴"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="集中解析"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="電波拡散"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="エコーリンク"
  unique-weapon-cn="专武译文"
  circle="真理部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 各务　千寻

<CharacterTable
  family-name-jp="各務"
  family-name-ruby="かがみ"
  given-name-jp="チヒロ"
  image-name="chihiro"
  ex-skill-jp="オーバーライド"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="イントゥ・ザ・バックドア"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="エクスプロイト"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="ファイアウォール構築"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="バックドア"
  unique-weapon-cn="专武译文"
  circle="真理部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 白石　咏叶

<CharacterTable
  family-name-jp="白石"
  family-name-ruby="しらいし"
  given-name-jp="ウタハ"
  image-name="utaha"
  ex-skill-jp="雷ちゃん、召喚"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="雷ちゃんMK-II、駆動"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="技術革命"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="マイスターの誓い"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="マイスター・ゼロ"
  unique-weapon-cn="专武译文"
  circle="工程部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 丰见　小鸟

<CharacterTable
  family-name-jp="豊見"
  family-name-ruby="とよみ"
  given-name-jp="コトリ"
  image-name="kotori"
  ex-skill-jp="ブラックボックス"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="ごめんなさい！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="論点把握能力"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="理解しました！"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="プロフェッサーK"
  unique-weapon-cn="专武译文"
  circle="工程部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 猫塚　响

<CharacterTable
  family-name-jp="猫塚"
  family-name-ruby="ねこづか"
  given-name-jp="ヒビキ"
  image-name="hibiki"
  ex-skill-jp="緊急出動"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="エネルギー剤注入"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="救急支援"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="可及的速やかに"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="救急用突入キット"
  unique-weapon-cn="专武译文"
  circle="工程部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 花冈　柚子

<CharacterTable
  family-name-jp="花岡"
  family-name-ruby="はなおか"
  given-name-jp="ユズ"
  image-name="yuzu"
  ex-skill-jp="ゲームスタート！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="連続コンボ！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="デバッグ中……"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="ふりしぼる勇気"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="にゃん's ダッシュ"
  unique-weapon-cn="专武译文"
  circle="游戏开发部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 才羽　桃井

<CharacterTable
  family-name-jp="才羽"
  family-name-ruby="さいば"
  given-name-jp="モモイ"
  image-name="momoi"
  ex-skill-jp="生みの苦しみ"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="締切厳守"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="クリエイティブセンス"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="開発者シナジー：ミドリ"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="ユニーク・アイディア"
  unique-weapon-cn="专武译文"
  circle="游戏开发部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 才羽　绿

<CharacterTable
  family-name-jp="才羽"
  family-name-ruby="さいば"
  given-name-jp="ミドリ"
  image-name="midori"
  ex-skill-jp="ドローイングアート"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="磨き上げるセンス"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="アーティストインスピレーション"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="開発者シナジー：モモイ"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="フレッシュ・インスピレーション"
  unique-weapon-cn="专武译文"
  circle="游戏开发部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 天童　爱丽丝

<CharacterTable
  family-name-jp="天童"
  family-name-ruby="てんどう"
  given-name-jp="アリス"
  image-name="aris"
  ex-skill-jp="世界の 法則が 崩壊します！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="光よ！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="強化魔法です！"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="覚醒せよ、スーパーノヴァ！"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="光の剣：スーパーノヴァ"
  unique-weapon-cn="专武译文"
  circle="游戏开发部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 明星　日鞠

<CharacterTable
  family-name-jp="明星"
  family-name-ruby="あけぼし"
  given-name-jp="ヒマリ"
  image-name="himari"
  ex-skill-jp="少し驚くかもしれませんね"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="清楚な高嶺の花"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="超天才清楚系病弱美少女の真骨頂"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="清楚な高嶺の花"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="高嶺の花"
  unique-weapon-cn="专武译文"
  circle="特异现象搜查部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 和泉元　艾米

<CharacterTable
  family-name-jp="和泉元"
  family-name-ruby="いずみもと"
  given-name-jp="エイミ"
  image-name="eimi"
  ex-skill-jp="不屈の意志"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="執念の猛撃"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="スペシャリストの休憩"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="強靱な精神力"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="マルチタクティカル"
  unique-weapon-cn="专武译文"
  circle="特异现象搜查部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 乙花　堇

<CharacterTable
  family-name-jp="乙花"
  family-name-ruby="おとはな"
  given-name-jp="スミレ"
  image-name="sumire"
  ex-skill-jp="スパートをかけます！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="ウォーミングアップ"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="ピンポイントアタック"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="テンションアップ"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="ミレニアム製最新型ダンベル"
  unique-weapon-cn="专武译文"
  circle="训练部"
  unique-item-jp=""
  unique-item-cn=""
/>

## 百鬼夜行

### 桑上　果穗

<CharacterTable
  family-name-jp="桑上"
  family-name-ruby="くわかみ"
  given-name-jp="カホ"
  image-name=""
  circle="阴阳部"
/>

### 和乐　千世

<CharacterTable
  family-name-jp="和楽"
  family-name-ruby="わらく"
  given-name-jp="チセ"
  image-name="chise"
  ex-skill-jp="これは痛いかもよ～"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="撃つよ～"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="よーし、頑張ろ～"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="ちょっと痛むよ～"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="五七五式榴弾砲"
  unique-weapon-cn="专武译文"
  circle="阴阳部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 天地　妮娅

<CharacterTable
  family-name-jp="天地"
  family-name-ruby="あまち"
  given-name-jp="ニヤ"
  image-name=""
  circle="阴阳部"
/>

### 春日　椿

<CharacterTable
  family-name-jp="春日"
  family-name-ruby="かすが"
  given-name-jp="ツバキ"
  image-name="tsubaki"
  ex-skill-jp="戦闘用シールド、装着"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="疲れたら寝るのが一番"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="胆力"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="手慣れたリロード"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="安眠のお供Ⅱ"
  unique-weapon-cn="专武译文"
  circle="修行部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 水羽　三森

<CharacterTable
  family-name-jp="水羽"
  family-name-ruby="みずは"
  given-name-jp="ミモリ"
  image-name="mimori"
  ex-skill-jp="お花見日和ですね"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="お弁当を作ってきたんです"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="まだたくさんありますよ"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="味見してみませんか？"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="柔らかな決意"
  unique-weapon-cn="专武译文"
  circle="修行部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 勇美　枫

<CharacterTable
  family-name-jp="勇美"
  family-name-ruby="いさみ"
  given-name-jp="カエデ"
  image-name="kaede"
  ex-skill-jp="カブトムシシールド！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="癒しの波動、とりゃぁっ！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="まだまだ頑張れるよ！"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="癒しの波動、とりゃぁっ！"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="ファニー・ファイアワークス"
  unique-weapon-cn="专武译文"
  circle="修行部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 河和　静子

<CharacterTable
  family-name-jp="河和"
  family-name-ruby="かわわ"
  given-name-jp="シズコ"
  image-name="shizuko"
  ex-skill-jp="営業妨害しないで！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="て、てへぺろっ？"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="にゃんにゃんっ！"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="て、てへぺろっ？"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="桜ボンボン"
  unique-weapon-cn="专武译文"
  circle="祭典运营委员会"
  unique-item-jp=""
  unique-item-cn=""
/>

### 朝比奈　菲娜

<CharacterTable
  family-name-jp="朝比奈"
  family-name-ruby="あさひな"
  given-name-jp="フィーナ"
  image-name="pina"
  ex-skill-jp="連射モード、デス！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="もう一度燃やすのデス！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="鋭い直感"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="射撃準備、OK！"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="仁義なき撃ち合い"
  unique-weapon-cn="专武译文"
  circle="祭典运营委员会"
  unique-item-jp=""
  unique-item-cn=""
/>

### ウミカ

<CharacterTable
  family-name-jp=""
  family-name-ruby=""
  given-name-jp="ウミカ"
  image-name=""
  circle="祭典运营委员会"
/>

### 千鸟　满

<CharacterTable
  family-name-jp="千鳥"
  family-name-ruby="ちどり"
  given-name-jp="ミチル"
  image-name="michiru"
  ex-skill-jp="ミチル流忍法っ！！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="捌け、地獄忍魔刀！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="見て見て、自作の忍術！"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="ミチル流忍術、奥義！"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="ミチル流オーバーフローショットガン"
  unique-weapon-cn="专武译文"
  circle="忍术研究部"
  unique-item-jp=""
  unique-item-cn=""
  :connection="['鱼板疾风传']"
/>

### 久田　泉奈

<CharacterTable
  family-name-jp="久田"
  family-name-ruby="くだ"
  given-name-jp="イズナ"
  image-name="izuna"
  ex-skill-jp="これぞイズナ流忍法！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="秘技！爆裂手裏剣！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="イズナ流、奇襲の術！"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="イズナ流、興起の術！"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="イズナ流スーパー忍具"
  unique-weapon-cn="专武译文"
  circle="忍术研究部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 大野　月咏

<CharacterTable
  family-name-jp="大野"
  family-name-ruby="おおの"
  given-name-jp="ツクヨ"
  image-name="tsukuyo"
  ex-skill-jp="ツクヨ流、忍法……！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="たくさん、練習しましたので……！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="生まれ持った素質"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="まだ、倒れる、わけには……！"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="ツクヨ流サブマシンガン"
  unique-weapon-cn="专武译文"
  circle="忍术研究部"
  unique-item-jp=""
  unique-item-cn=""
/>

### 狐坂　若藻

<CharacterTable
  family-name-jp="狐坂"
  family-name-ruby="こさか"
  given-name-jp="ワカモ"
  image-name="wakamo"
  ex-skill-jp="深紅の花占い"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="乱れ散る花吹雪"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="花開く破壊衝動"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="狂い咲く闘争本能"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="真紅の災厄"
  unique-weapon-cn="专武译文"
  circle="停学"
  unique-item-jp=""
  unique-item-cn=""
/>

## 红冬

### 连河　切里诺

<CharacterTable
  family-name-jp="連河"
  family-name-ruby="れんかわ"
  given-name-jp="チェリノ"
  image-name="cherino"
  ex-skill-jp="親衛隊、集合！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="あいつを粛清しろ！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="これが髭の力だ！"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="髭の権威にひれ伏せ！"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="チーストカ"
  unique-weapon-cn="专武译文"
  circle="红冬事务局"
  unique-item-jp=""
  unique-item-cn=""
/>

### 佐城　巴

<CharacterTable
  family-name-jp="佐城"
  family-name-ruby="さしろ"
  given-name-jp="トモエ"
  image-name="tomoe"
  ex-skill-jp="みなさん、こちらに耳を傾けてください！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="巧妙なアジテーション"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="一瀉千里"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="反駁不能な言い回し"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="ヴィエールナシチ"
  unique-weapon-cn="专武译文"
  circle="红冬事务局"
  unique-item-jp=""
  unique-item-cn=""
/>

### 池仓　玛丽娜

<CharacterTable
  family-name-jp="池倉"
  family-name-ruby="いけくら"
  given-name-jp="マリナ"
  image-name="marina"
  ex-skill-jp="革命的突撃！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="退いてなるものか！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="これは後退ではない！"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="決断力"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="バラライカ"
  unique-weapon-cn="专武译文"
  circle="红冬事务局"
  unique-item-jp=""
  unique-item-cn=""
/>

### 天见　和香

<CharacterTable
  family-name-jp="天見"
  family-name-ruby="あまみ"
  given-name-jp="ノドカ"
  image-name="nodoka"
  ex-skill-jp="頑なな視線"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="美学に基づいた観測"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="特別クラスの絆"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="美学に基づいた観測"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="サジタリウスナイト"
  unique-weapon-cn="专武译文"
  circle="227号特别班"
  unique-item-jp=""
  unique-item-cn=""
/>

### 间宵　时雨

<CharacterTable
  family-name-jp="間宵"
  family-name-ruby="まよい"
  given-name-jp="シグレ"
  image-name="shigure"
  ex-skill-jp="一杯、どう？"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="甘い発酵"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="野生の勘"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="甘い発酵"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="スプリングパンチ"
  unique-weapon-cn="专武译文"
  circle="227号特别班"
  unique-item-jp=""
  unique-item-cn=""
/>

### 秋泉　红叶

<CharacterTable
  family-name-jp="秋泉"
  family-name-ruby="あきいずみ"
  given-name-jp="モミジ"
  image-name=""
  circle="知识解放战线"
/>

### 姫木　メル

<CharacterTable
  family-name-jp="姫木"
  family-name-ruby="ひめき"
  given-name-jp="メル"
  image-name=""
  circle="知识解放战线"
/>

### 安守　ミノリ

<CharacterTable
  family-name-jp="安守"
  family-name-ruby="やすもり"
  given-name-jp="ミノリ"
  image-name=""
  circle="工务部"
/>

## 山海经

### 春原　瞬

<CharacterTable
  family-name-jp="春原"
  family-name-ruby="すのはら"
  given-name-jp="シュン"
  image-name="shun"
  ex-skill-jp="悪い子はどこですか？"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="みなさん、集中してください！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="教官としての品格"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="梅花園の教育"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="愛のムチ"
  unique-weapon-cn="专武译文"
  circle="梅花园"
  unique-item-jp=""
  unique-item-cn=""
/>

### 春原　心奈

<CharacterTable
  family-name-jp="春原"
  family-name-ruby="すのはら"
  given-name-jp="ココナ"
  image-name="kokona"
  ex-skill-jp="たいへんよくできました！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="次も楽しみにしてますよ！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="教官としての責任"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="梅花園の指導法"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="レディーの気品"
  unique-weapon-cn="专武译文"
  circle="梅花园"
  unique-item-jp=""
  unique-item-cn=""
/>

### 药子　沙耶

<CharacterTable
  family-name-jp="薬子"
  family-name-ruby="やくし"
  given-name-jp="サヤ"
  image-name="saya"
  ex-skill-jp="新しい実験なのだ！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="ぼく様はやっぱり偉大なのだ！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="ぼく様だけを信じてて！"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="ぼく様はやっぱり偉大なのだ！"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="ぼく様特製拳銃"
  unique-weapon-cn="专武译文"
  circle="炼丹术研究会"
  unique-item-jp=""
  unique-item-cn=""
/>

### ルミ

<CharacterTable
  family-name-jp=""
  family-name-ruby=""
  given-name-jp="ルミ"
  image-name=""
  circle="玄武商会"
/>

### キサキ

<CharacterTable
  family-name-jp=""
  family-name-ruby=""
  given-name-jp="キサキ"
  image-name=""
  circle="玄龙门"
/>

### ミナ

<CharacterTable
  family-name-jp=""
  family-name-ruby=""
  given-name-jp="ミナ"
  image-name=""
  circle="玄龙门"
/>

## SRT 特殊学园

### 月雪　宫子

<CharacterTable
  family-name-jp="月雪"
  family-name-ruby="つきゆき"
  given-name-jp="ミヤコ"
  image-name="miyako"
  ex-skill-jp="自走式閃光ドローン"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="クレイモア"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="特殊防弾プレート"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="攪乱作戦"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="RABBIT-31式短機関銃"
  unique-weapon-cn="专武译文"
  circle="RABBIT小队"
  unique-item-jp=""
  unique-item-cn=""
/>

### 空井　咲

<CharacterTable
  family-name-jp="空井"
  family-name-ruby="そらい"
  given-name-jp="サキ"
  image-name="saki"
  ex-skill-jp="制圧射撃"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="準備万端"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="ポイントマンの先導"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="準備万端"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="RABBIT-26式機関銃"
  unique-weapon-cn="专武译文"
  circle="RABBIT小队"
  unique-item-jp=""
  unique-item-cn=""
/>

### 霞泽　美游

<CharacterTable
  family-name-jp="霞沢"
  family-name-ruby="かすみざわ"
  given-name-jp="ミユ"
  image-name="miyu"
  ex-skill-jp="小心者の観測"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="予期せぬ角度からの一撃"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="深呼吸"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="狙撃用の特殊弾"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="RABBIT-39式小銃"
  unique-weapon-cn="专武译文"
  circle="RABBIT小队"
  unique-item-jp=""
  unique-item-cn=""
/>

### 风仓　萌绘

<CharacterTable
  family-name-jp="風倉"
  family-name-ruby="かぜくら"
  given-name-jp="モエ"
  image-name="moe"
  ex-skill-jp="集中砲火"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="破滅の快感"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="作戦支援"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="破滅の快感"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp=" RABBIT-224式拳銃"
  unique-weapon-cn="专武译文"
  circle="RABBIT小队"
  unique-item-jp=""
  unique-item-cn=""
/>

### 雪乃

<CharacterTable
  family-name-jp=""
  family-name-ruby=""
  given-name-jp="ユキノ"
  image-name=""
  circle="FOX小队"
/>

### 妮可

<CharacterTable
  family-name-jp=""
  family-name-ruby=""
  given-name-jp="ニコ"
  image-name=""
  circle="FOX小队"
/>

## 瓦尔基里警察学校

### 中务　桐乃

<CharacterTable
  family-name-jp="中務"
  family-name-ruby="なかつかさ"
  given-name-jp="キリノ"
  image-name="kirino"
  ex-skill-jp="交渉はここまでですね……！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="制圧します！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="速やかに処置を！"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="休んでなんていられません！"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="第3号ヴァルキューレ制式拳銃"
  unique-weapon-cn="专武译文"
  circle="生活安全局"
  unique-item-jp=""
  unique-item-cn=""
/>

### 合欢垣　吹雪

<CharacterTable
  family-name-jp="合歓垣"
  family-name-ruby="ねむがき"
  given-name-jp="フブキ"
  image-name="fubuki"
  ex-skill-jp="まずは甘い休息から"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="最後のひと口！"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="交通整理"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="便乗させてもらおっかな"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="第14号ヴァルキューレ制式ライフル"
  unique-weapon-cn="专武译文"
  circle="生活安全局"
  unique-item-jp=""
  unique-item-cn=""
/>

### 尾刃　康娜

<CharacterTable
  family-name-jp="尾刃"
  family-name-ruby="おがた"
  given-name-jp="カンナ"
  image-name="kanna"
  ex-skill-jp="苛烈な尋問"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="狂犬の執念"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="公安局特製弾"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="狂犬の執念"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="第17号ヴァルキューレ制式拳銃"
  unique-weapon-cn="专武译文"
  circle="公安局"
  unique-item-jp=""
  unique-item-cn=""
/>

## 阿里乌斯

### 锭前　纱织

<CharacterTable
  family-name-jp="錠前"
  family-name-ruby="じょうまえ"
  given-name-jp="サオリ"
  image-name="saori"
  ex-skill-jp="et omnia vanitas！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="即時射撃"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="訓練の成果"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="リーダーの責任感"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="アリウス製アサルトライフル"
  unique-weapon-cn="专武译文"
  circle="阿里乌斯小队"
  unique-item-jp=""
  unique-item-cn=""
/>

### 秤　亚津子

<CharacterTable
  family-name-jp="秤"
  family-name-ruby="はかり"
  given-name-jp="アツコ"
  image-name="atsuko"
  ex-skill-jp="これも私の力……？"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="隠れるよ"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="教えられた事"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="痛いのは慣れてる"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="スコルピウス"
  unique-weapon-cn="专武译文"
  circle="阿里乌斯小队"
  unique-item-jp=""
  unique-item-cn=""
/>

### 戒野　美咲

<CharacterTable
  family-name-jp="戒野"
  family-name-ruby="いましの"
  given-name-jp="ミサキ"
  image-name="misaki"
  ex-skill-jp="虚しい世界"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="早く終わらせたい"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="無意味な技術"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="等価交換"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="セイントプレデター"
  unique-weapon-cn="专武译文"
  circle="阿里乌斯小队"
  unique-item-jp=""
  unique-item-cn=""
/>

### 槌永　日和

<CharacterTable
  family-name-jp="槌永"
  family-name-ruby="つちなが"
  given-name-jp="ヒヨリ"
  image-name="hiyori"
  ex-skill-jp="い、痛くなりますよ！"
  ex-skill-cn="EX技能译文"
  normal-skill-jp="雑誌に書いてありました"
  normal-skill-cn="普通技能译文"
  passive-skill-jp="付録の力です"
  passive-skill-cn="被动技能译文"
  sub-skill-jp="雑誌に書いてありました"
  sub-skill-cn="辅助技能译文"
  unique-weapon-jp="アイデンティティ"
  unique-weapon-cn="专武译文"
  circle="阿里乌斯小队"
  unique-item-jp=""
  unique-item-cn=""
/>

## 联邦学生会

### 七神　凛

<CharacterTable
  family-name-jp="七神"
  family-name-ruby="なながみ"
  given-name-jp="リン"
  image-name=""
  circle="联邦学生会"
/>

### 由良木　桃香

<CharacterTable
  family-name-jp="由良木"
  family-name-ruby="ゆらぎ"
  given-name-jp="モモカ"
  image-name=""
  circle="联邦学生会"
/>

### 岩櫃　アユム

<CharacterTable
  family-name-jp="岩櫃"
  family-name-ruby="いわびつ"
  given-name-jp="アユム"
  image-name=""
  circle="联邦学生会"
/>

### 不知火　カヤ

<CharacterTable
  family-name-jp="不知火"
  family-name-ruby="しらぬい"
  given-name-jp="カヤ"
  image-name=""
  circle="联邦学生会"
/>

### 扇喜　アオイ

<CharacterTable
  family-name-jp="扇喜"
  family-name-ruby="おうぎ"
  given-name-jp="アオイ"
  image-name=""
  circle="联邦学生会"
/>

## 克罗诺斯学校

### 川流　シノン

<CharacterTable
  family-name-jp="川流"
  family-name-ruby="かわる"
  given-name-jp="シノン"
  image-name=""
  circle="报导部"
/>

### マイ

<CharacterTable
  family-name-jp=""
  family-name-ruby=""
  given-name-jp="マイ"
  image-name=""
  circle="报导部"
/>

## 钢盔团

### ラブ

<CharacterTable
  family-name-jp=""
  family-name-ruby=""
  given-name-jp="ラブ"
  image-name=""
  circle="钢盔团"
/>

## 狂猎艺术学校

## 奥德赛海洋高等学校

## NPC
