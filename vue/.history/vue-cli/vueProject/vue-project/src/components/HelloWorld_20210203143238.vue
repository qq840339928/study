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
        video: {},
        btnPlay: {},
        btnPause: {},
        btnScreenshot: {},
        btnChangeCamera: {},
        screenshotsContainer: {},
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
        (function () {
  if (
    !"mediaDevices" in navigator ||
    !"getUserMedia" in navigator.mediaDevices
  ) {
    alert("Camera API is not available in your browser");
    return;
  }
        if (window.navigator.indexOf("mediaDevices") === -1 || window.navigator.mediaDevices.indexOf("getUserMedia") === -1) {
          alert("Camera API is not available in your browser")
          return
        }
        this.video = document.querySelector("#video")
        this.btnPlay = document.querySelector("#btnPlay")
        this.btnPause = document.querySelector("#btnPause")
        this.btnScreenshot = document.querySelector("#btnScreenshot")
        this.btnChangeCamera = document.querySelector("#btnChangeCamera")
        this.screenshotsContainer = document.querySelector("#screenshots")
        this.canvas = document.querySelector("#canvas")
        this.initializeCamera()
      },
      btnPlayClick () {
        this.video.play();
        this.btnPlay.classList.add("is-hidden")
        this.btnPause.classList.remove("is-hidden")
      },
      btnPauseClick () {
        this.video.pause()
        this.btnPause.classList.add("is-hidden")
        this.btnPlay.classList.remove("is-hidden")
      },
      btnScreenshotClick () {
        let img = document.createElement("img")
        this.canvas.width = this.video.videoWidth
        this.canvas.height = this.video.videoHeight
        this.canvas.getContext("2d").drawImage(this.video, 0, 0)
        img.src = this.canvas.toDataURL("image/png")
        this.screenshotsContainer.prepend(img)
      },
      btnChangeCameraClick () {
        this.useFrontCamera = !this.useFrontCamera
        this.initializeCamera()
      },
      stopVideoStream () {
        if (this.videoStream) {
          this.videoStream.getTracks().forEach((track) => {
            track.stop();
          });
        }
      },
      // initialize
      async initializeCamera() {
        this.stopVideoStream()
        this.constraints.video.facingMode = this.useFrontCamera ? "user" : "environment"
        try {
          this.initvideoStream = await navigator.mediaDevices.getUserMedia(this.constraints)
          this.video.srcObject = this.videoStream
        } catch (err) {
          alert("Could not access the camera")
        }
      }
    }
  }
</script>