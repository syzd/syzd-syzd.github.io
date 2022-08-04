const stations = [
  {
    title: "93,2 FM - Губернское",
    src: "https://str.pcradio.ru/guberniafm_ru-hi"
  },{
    title: "94,6 FM Маяк ",
    src: "https://radio.gtrk35.ru/RadioMayak"
  },{
    title: "95,1 FM - Ретро FM",
    src: "http://109.200.130.38:8000/retro-alushta"
  },{
    title: "95,7 FM Наше радио",
    src: "http://online-1.gkvr.ru:8000/nashe_kaz_64.aac"
  },{
    title: "96,4 FM - Радио Дача",
    src: "http://online-1.gkvr.ru:8000/dacha_eka_64.aac"
  },{
    title: "97,5 FM - Дорожное",
    src: "http://dorognoe.hostingradio.ru:8000/radio"
  },{
    title: "97,9 FM - Европа плюс",
    src: "http://ep256.hostingradio.ru:8052/europaplus256.mp3"
  },{
    title: "98,3 FM - радио Вера",
    src: "https://str.pcradio.ru/radiovera_ru-hi"
  },{
    title: "98,7 FM - Русское Р.",
    src: "http://online-1.gkvr.ru:8000/rusradio96.aac"
  },{
    title: "99,7 FM - Ваня(Самара)",
    src: "http://icecast-rvsamara.cdnvideo.ru/rvsamara"
  },{
    title: "101,4 FM - DFM",
    src: "https://dfm.hostingradio.ru/dfm96.aacp"
  },{
    title: "101,8 FM - Радио Мир",
    src: "https://icecast-mirtv.cdnvideo.ru/radio_mir128"
  },{
    title: "103,4  FM -  Р. России",
    src: "http://online-1.gkvr.ru:8000/rusradio96.aac"
  },{
    title: "103,8  FM - Авторадио",
    src: "https://str.pcradio.ru/avtoradio-hi"
  },{
    title: "104,2 FM Вести FM",
    src: "https://icecast-vgtrk.cdnvideo.ru/vestifm_aac_64kbps"
  },{
    title: "104,6  FM - ENERGY",
    src: "https://pub0202.101.ru:8443/stream/air/aac/64/99"
  },{
    title: "105,9  FM - Юмор FM",
    src: "http://ic7.101.ru:8000/v5_1"
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
