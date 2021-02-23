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
        constraints :{
          video: {
            width: {
              min: 1280,
              ideal: 1920,
              max: 2560,
            },
            height: {
              min: 720,
              ideal: 1080,
              max: 1440,
            }
          }
        },
        useFrontCamera: true,
        videoStream: {},
        video: {}
        btnPlay: {} = document.querySelector("#btnPlay")
        btnPause: {} = document.querySelector("#btnPause")
        btnScreenshot: {} = document.querySelector("#btnScreenshot")
        btnChangeCamera: {} = document.querySelector("#btnChangeCamera")
        screenshotsContainer: {} = document.querySelector("#screenshots")
        canvas: {}
      }
    },
    components: {
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        if (window.navigator.indexof("mediaDevices") === -1 || window.navigator.mediaDevices.indexof("getUserMedia") === -1) {
          alert("Camera API is not available in your browser")
          return
        }
        video = document.querySelector("#video")
        btnPlay = document.querySelector("#btnPlay")
        btnPause = document.querySelector("#btnPause")
        btnScreenshot = document.querySelector("#btnScreenshot")
        btnChangeCamera = document.querySelector("#btnChangeCamera")
        screenshotsContainer = document.querySelector("#screenshots")
        canvas = document.querySelector("#canvas")
      },
      btnPlay () {
        video.play();
        btnPlay.classList.add("is-hidden")
        btnPause.classList.remove("is-hidden")
      }
    }
  }
</script>