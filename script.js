const stations = [
  {
    title: "На Волне Yum.fm",
    src: "http://yumfm.hostingradio.ru:8020/yumfm128.mp3"
  },{
    title: "Радио Best FM",
    src: "http://best128.streamr.ru/"
  },{
    title: "Радио ENERGY",
    src: "http://ic2.101.ru:8000/v1_1"
  },{
    title: "Rock FM 95.2",
    src: "http://nashe.streamr.ru/rock-128.mp3"
  },{
    title: "Радио ПАССАЖ",
    src: "http://listen.radiopassazh.ru/hd"
  },{
    title: "Радио Maximum",
    src: "http://icecast.radiomaximum.cdnvideo.ru/maximum.mp3"
  },{
    title: "Авторадио",
    src: "http://den.101.ru:4000/ar_78_01"
 },{
    title: "Зайцев FM",
    src: "http://radio.zaycev.fm:9002/ZaycevFM(128)"
  }
];

var app = new Vue({
  el: "#app",
  data: {
    stations: stations,
    activeStation: 0,
    isPause: false
  },
  methods: {
    play(src, i) {
      this.$refs.audio.src = src;
      this.activeStation = i;
      this.go();
    },
    stop() {
      if (!this.isPause) {
        this.isPause = true;
        this.$refs.audio.pause();
        this.$refs.audioSvg.pauseAnimations();
      } else {
        this.go()
      }
    },
    go() {
      this.isPause = false;
      this.$refs.audio.play();
      this.$refs.audioSvg.unpauseAnimations();
    }
  }
});