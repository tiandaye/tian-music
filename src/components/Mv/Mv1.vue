<template lang="html">

  <transition name="showRouter">
    <div class="mv-list">
       <video-player  ref="videoPlayer"
                       :options="playerOptions"
                       @play="onPlayerPlay($event)"
                       @pause="onPlayerPause($event)"
                       @ended="onPlayerEnded($event)"
                       @loadeddata="onPlayerLoadeddata($event)"
                       @waiting="onPlayerWaiting($event)"
                       @playing="onPlayerPlaying($event)"
                       @timeupdate="onPlayerTimeupdate($event)"
                       @canplay="onPlayerCanplay($event)"
                       @canplaythrough="onPlayerCanplaythrough($event)"
                       @ready="playerReadied"
                       @statechanged="playerStateChanged($event)">
        </video-player>
     
      
      <div class="tips">没有更多mv了～</div>

    </div>
  </transition>

</template>

<script>
import api from '../../api'
export default {
  name: 'Mv1',
  beforeCreate() {
    this.$store.commit('showMiniMusic', false);
  },
  beforeMount() {
    this.fetchData()
  },
  mounted() {
    //头部高亮
    this.$store.commit('changeLinkBorderIndex', 4);
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  data() {
    return {
      mvDetail: [],
      video: {
        type: 'video/mp4',
        source: '',
        poster: ''
      },


      playerOptions: {
        // component options
        start: 0,
        playsinline: false,
        // videojs options
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [],/*{
          type: "video/mp4",
          src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        }*/
        poster: "/static/images/author.jpg",//海报
      }
    }
  },
  methods: {
 fetchData() {
      this.mvDetail = []
      this.$http.get(api.getMv(this.$route.params.id)).then(response => {

        let data = response.data.data

        this.mvDetail = data

        this.video.poster = data.cover
        this.mvDetail.name = data.name

        //this.$root.$emit('change-poster',this.video.poster)

        document.title = data.name

        if(data.brs[480] != undefined){
          this.video.source = data.brs[480];//'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
        }else {
          this.video.source = data.brs[240];
        }
        console.log(this.video.source)
        this.playerOptions.sources.push({type: "video/mp4", src: this.video.source})
        //this.$root.$emit('change-source',this.video.source)

        //console.warn(response)
      }, response => {
        console.log('error')
      })
    },


    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    onPlayerEnded(player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied(player) {
      console.log('example 01: the player is readied', player)
    }
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
  .mv-list {
    padding-top: 4px;
    padding-left: 4px;
    padding-right: 4px;
    // padding-bottom: 40px;
    flex:8;
    overflow: auto;
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
