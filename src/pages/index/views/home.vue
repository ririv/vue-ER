<template>
  <div id="Home">
    <classify ref="classify"></classify>
    <transition :name="transitionName">
      <keep-alive>
        <component class="absolute-child-view image-component" :is="componentId"></component>
      </keep-alive>
    </transition>
  </div>
</template>


<script>
import classify from "../../../components/classify.vue"
import imagesView from "../../../components/imagesView.vue"
import carousel from "../../../components/carousel.vue"

export default {
  name: "Home",
  data() {
    return {
      transitionName: "fade",
      show: false,
      tag: ""
      // componentId:"carousel"
    }
  },
  components: {
    classify,
    imagesView,
    carousel,
  },

  created() {
    this.$bus.$on("classify",
      (show, tag) => {
        this.show = show
        this.tag = tag
        this.$nextTick(() => this.$bus.$emit("classifyResult", this.tag))
      }
    )
  },

  computed: {
    componentId() {
      if (this.show === true) {
        return "imagesView"
      }
      else {
        return "carousel"
      }
    }
  },

}
</script>
<style>
.image-component {
  margin-top: 20px;
}

.abc {
  position: absolute;
  text-align: center;
  margin: auto;
  left: 0;
  right: 0;
}
</style>