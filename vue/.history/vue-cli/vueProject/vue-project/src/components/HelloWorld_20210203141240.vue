<template>
  <div>
   <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-four-fifths">
          <h1 class="title">
            JavaScript Camera
          </h1>
          <video autoplay id="video"></video>
          <button class="button is-hidden" id="btnPlay">
            <span class="icon is-small">
              <i class="fas fa-play"></i>
            </span>
          </button>
          <button class="button" id="btnPause">
            <span class="icon is-small">
              <i class="fas fa-pause"></i>
            </span>
          </button>
          <button class="button is-success" id="btnScreenshot">
            <span class="icon is-small">
              <i class="fas fa-camera"></i>
            </span>
          </button>
          <button class="button" id="btnChangeCamera">
            <span class="icon">
              <i class="fas fa-sync-alt"></i>
            </span>
            <span>Switch camera</span>
          </button>
        </div>
        <div class="column">
          <h2 class="title">Screenshots</h2>
          <div id="screenshots"></div>
        </div>
      </div>
    </div>
  </section>
  <canvas class="is-hidden" id="canvas"></canvas>
  </div>
</template>
 
<script>
 
  export default {
    data () {
      return {
        json: {
          msg: 'demo of jsoneditor'
        }
      }
    },
    components: {
    },
    mounted () {
      this.init()
    },
 
    methods: {
      init () {
        if (! in window.navigator || !"getUserMedia" in window.navigator.mediaDevices) {
          alert("Camera API is not available in your browser");
          return;
        }
      }
    }
  }
</script>