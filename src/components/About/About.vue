<template lang="html">
  <transition name="showAbout">
    <div class="about">
      <i @click="showAbout" class="close"></i>
      <div class="about-content">
        <h1>关于</h1>
        <p class="skill"><b>田大爷，邮箱:q408596288@vip.qq.com。</b></p>
      </div>
      <div @click="showAbout" class="mask"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      isHover: false
    }
  },
  computed: {
    isShowAbout() {
      return this.$store.state.isShowAbout;
    }
  },
  methods: {
    showAbout() {
      this.$store.commit('showAbout', false);
    }
  }
}
</script>

<style lang="scss" scoped>
  a {
    color: #3F51B5;
  }

  .about {
    display: flex;
    position: absolute;
    //z-index: 2;
    z-index: 10002;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    // background-color: rgba(0, 0, 0, .5);
    .close {
      position: absolute;
      //z-index: 3;
      z-index: 10003;
      display: inline-block;
      width: 30px;
      height: 30px;
      background: url('./close.svg') no-repeat;
      background-size: contain;
      top: 11%;
      right: 12%;
    }
    .about-content {
      position: relative;
      //z-index: 2;
      z-index: 10002;
      width: 80%;
      height: 80%;
      background-color: white;
      border-radius: 10px;
      padding: 30px 10px;
      box-shadow: 0 0 20px gray;
      overflow: auto;

      h1 {
        text-align: center;
        font-size: 1.2rem;
        color: #31c27c;
        transition: .3s ease-in-out;
      }
      h1:hover {
        transform: rotate(15deg);
        transition: .3s ease-in-out;
      }

      p {
        text-indent: 1em;
        word-break: break-all;
        margin-top: 6px;

        b {
          display: inline-block;
          transition: .3s ease-in-out;
        }
        b:hover {
          transform: rotate(-10deg);
          transition: .3s ease-in-out;
        }

      }
      p.copyright {
        text-indent: 0;
      }
      div {
        // letter-spacing: 1px;
        padding-left: 50px;
      }
      .help {
        padding: 0;
        width: 100%;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
    .mask {
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 100%;
      background: none;
    }
  }
  .showAbout-enter-active {
    transition: all .4s ease-in-out;
  }
  .showAbout-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .showAbout-enter, .showAbout-leave-active {
    transform: rotateZ(180deg);
    opacity: 0;
  }
</style>
