<template>
  <div>
    <l-n-b></l-n-b>
    <r-n-b></r-n-b>
    <my-header></my-header>
    <billboard></billboard>
    <direct></direct>
    <hot-focus></hot-focus>
    <time-deal></time-deal>
    <airlift></airlift>
    <plan-banner></plan-banner>
    <wide-banner></wide-banner>
    <best-product></best-product>
    <todays-chance></todays-chance>
    <promotion></promotion>
    <mds-recommendation></mds-recommendation>
    <partner></partner>
    <global-banner></global-banner>
    <my-footer></my-footer>
  </div>
</template>

<script>
import LNB from "~/src/components/LNB"
import MyHeader from "~/src/components/MyHeader"
// 경로 별칭을 쓰는 것을 추천해요~
import Billboard from "./components/Billboard"
import Airlift from "./components/Airlift"
import RNB from "./components/RNB"
import MyFooter from './components/MyFooter'
import GlobalBanner from "./components/GlobalBanner"
import BestProduct from './components/BestProduct'
import Direct from './components/Direct'
import MdsRecommendation from './components/MdsRecommendation'
import HotFocus from './components/HotFocus'
import TimeDeal from './components/TimeDeal'
import PlanBanner from "./components/PlanBanner"
import Promotion from "./components/Promotion"
import TodaysChance from './components/TodaysChance'
import WideBanner from './components/WideBanner'
import Partner from "./components/Partner"

export default {
  components: {
    LNB,
    RNB,
    MyHeader,
    Billboard,
    Airlift,
    MyFooter,
    GlobalBanner,
    BestProduct,
    Direct,
    MdsRecommendation,
    HotFocus,
    TimeDeal,
    PlanBanner,
    Promotion,
    TodaysChance,
    WideBanner,
    Partner
  }
}
</script>

<style lang="scss">
// CSS(SCSS)는 큰 따옴표가 권장됩니다~
@import "./scss/main.scss";
</style>
