<template lang="html">

  <transition name="showRouter">
    <div class="index">

      <div class="search-index">
        <search-input></search-input>
      </div>
      <mv-list :search-keyword="searchKeyword"></mv-list>

      <div class="tips">没有更多mv了～</div>

    </div>
  </transition>

</template>

<script>
import MvList from '../MvList'
import SearchInput from '../SearchInput'

export default {
  name: 'Index',
  beforeCreate() {
    this.$store.commit('showMiniMusic', false);
  },
  mounted() {
    //头部高亮
    this.$store.commit('changeLinkBorderIndex', 4);
  },
  computed: {
    // musicData() {
    //   return this.$store.state.musicData;
    // },
  },
 components: {
    SearchInput,
    MvList
  },
  data () {
    return {
      searchKeyword: '林俊杰'//默认搜索泰勒-taylor
    }
  },
  activated() {
    document.title = '田大爷-网易云音乐MV'
  },
  methods: {
  }
}
</script>

<style lang="scss">
.showRouter-enter-active {
  transition: all .4s ease;
}
.showRouter-leave-active {
  transition: all 0 ease;
}
.showRouter-enter, .showRouter-leave-active {
  transform: translateX(-150px);
  opacity: 0;
}
.index {
  overflow: auto;
  //padding-top: 1.4rem;
}
.search-index {
  //width: 100%;
  //position: fixed;
  z-index: 2;
  //top: 0;
  //left: 0;
}
  .mv-list {
    padding-top: 4px;
    padding-left: 4px;
    padding-right: 4px;
    // padding-bottom: 40px;
    flex:8;
    overflow: auto;
  
    //mv 
    .mvlist {
      margin: 0 2%;
      li {
        position: relative;
        display: inline-block;
        width: 49%;
        margin: .2rem 0;
        &:nth-child(2n+1) {
          margin-right: 2%;
        }
        .cover {
          width: 100%;
          height: 2.4rem;
          background-position: center;
          background-repeat: no-repeat;
          background-size: 100%;
        }
        h4 {
          //color: $gray-darker;
          font-weight: normal;
          font-size: 14px;
          //@include line-clamp(1);
        }
        p {
          font-size: 12px;
          color: #999;
        }
        span {
          position: absolute;
          top: 5px;
          right: 10px;
          color: #fff;
          font-size: 12px;
        }
      }
    }


    .mv-item + .mv-item {
      border-top: 1px solid rgba(0, 0, 0, .1);
    }
    .mv-item {
      // box-shadow: 0 0 1px #DD2C00;
      padding: 4px 6px 0 6px;
      position: relative;
      margin-bottom: 4px;
      border-radius: 5px;
      cursor: pointer;
      border: none;

      .mv-img {
        width: 50px;
        height: 50px;
        border-radius: 5px;
      }
      span.mv-name {
        display: inline-block;
        width: 65%;
        vertical-align: top;
        margin-top: 15px;
        margin-left: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: pointer;

        padding-bottom: 20px;
      }
    }
    .tips {
      text-align: center;
      margin: 12px auto;
      width: 200px;
      font-size: 80%;
      color: gray;
    }
  }
</style>
