<template lang="html">
  <transition name="showRouter">
    <div class="mv">
      <div class="video-player">
        <video-player :video-poster="this.$route.params.poster?this.$route.params.poster:video.poster" :video-source="video.source" :video-type="video.type"></video-player>
      </div>

      <div class="player-detail">
        <h3>{{ this.$route.params.mvName?this.$route.params.mvName:mvDetail.name }}</h3>
        <div class="pd-s1">
          <a href="javascript:;" class="pull-left">歌手：{{ mvDetail.artistName }}</a>
          <span class="pull-right">播放：{{ mvDetail.playCount | numberConversion }}</span>
        </div>
        <p class="pd-time">发行：{{ mvDetail.publishTime }}</p>
        <p class="pd-intro">{{ mvDetail.desc }}</p>
      </div>
      <comments :mid="this.$route.params.id"></comments>
    </div>
  </transition>
</template>

<script>
import api from '../api'
import VideoPlayer from '../components/VideoPlayer'
const Comments = resolve => require(['../components/Comments'], resolve)//异步加载评论模块

export default {
  name: 'mv',
  beforeCreate() {
    //是否显示 播放界面 - 歌词
    this.$store.commit('showMiniMusic', false)

    // 不显示首页
    // this.$store.commit('showIndex', false);
    
  },
  mounted() {
    //头部 route-link 高亮
    this.$store.commit('changeLinkBorderIndex', 4)

    //音乐播放 停止
    if (this.isPlaying) {
      this.$store.commit('play', false)
      
      this.DOM.audio.pause()   
    }

  },
  computed: {
    audio() {
      return this.$store.state.audio;
    },
    musicData() {
      return this.$store.state.musicData;
    },
    isPlaying() {
      return this.$store.state.isPlaying;
    },
    DOM() {
      return this.$store.state.DOM;
    },
    skinColor() {
      return this.$store.state.skinColor;
    }
  },
  components: {
    VideoPlayer,
    Comments
  },
  data () {
    return {
      mvDetail: [],
      video: {
        type: 'video/mp4',
        source: '',
        poster: ''
      }
    }
  },
  beforeMount() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.mvDetail = []

      this.$http.get(api.getMv(this.$route.params.id)).then(response => {

        let data = response.data.data

        this.mvDetail = data

        this.video.poster = data.cover
        this.mvDetail.name = data.name

        this.$root.$emit('change-poster',this.video.poster)

        document.title = data.name

        if(data.brs[480] != undefined){
          this.video.source = data.brs[480];//'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
        }else {
          this.video.source = data.brs[240];
        }

        this.$root.$emit('change-source',this.video.source)

        //console.warn(response)
      }, response => {
        console.log('error')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "src/style/base/variables";
@import "src/style/base/mixins";

%size {
  width: 100%;
  height: 5.5rem;
}

.mv {
  //padding-top: 5.5rem;
}

.video-player {
  position: relative;
  height: 10rem;
}
.player-detail {
  margin: 0 2%;
  padding: .4rem 0;
  font-size: 13px;
  h3 {
    font-weight: normal;
    font-size: 18px;
    line-height: 1.2;
  }
  .pd-s1 {
    overflow: hidden;
    margin: .3rem 0;
    span {
      color: #999;
    }
  }
  .pd-time {
    color: #999;
  }
  .pd-intro {
    margin-top: .3rem;
    color: $gray-light;
    line-height: 1.8;
  }
}

@include dpr-border(player-detail,#ddd,bottom)
</style>
