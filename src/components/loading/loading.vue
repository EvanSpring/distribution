<template>
  <div class="loading">
    <div class="loading-inner">
      <div class="ball-spin-fade-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .loading
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 90px;
    top: 40%;
    left: 0;
    bottom: 0;
    right: 0;
    .loading-inner
      display: flex;
      height: 100px;
      align-items: center;
      justify-content: center;

  @-webkit-keyframes ball-spin-fade-loader {
    50% {
      opacity: 0.3;
      -webkit-transform: scale(0.4);
      transform: scale(0.4);
    }

    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes ball-spin-fade-loader {
    50% {
      opacity: 0.3;
      -webkit-transform: scale(0.4);
      transform: scale(0.4);
    }

    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  .ball-spin-fade-loader {
    position: relative;
  }

  .ball-spin-fade-loader > div:nth-child(1) {
    top: 25px;
    left: 0;
    -webkit-animation: ball-spin-fade-loader 1s 0s linear infinite;
    animation: ball-spin-fade-loader 1s 0s linear infinite;
  }

  .ball-spin-fade-loader > div:nth-child(2) {
    top: 17.04545px;
    left: 17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.12s linear infinite;
    animation: ball-spin-fade-loader 1s 0.12s linear infinite;
  }

  .ball-spin-fade-loader > div:nth-child(3) {
    top: 0;
    left: 25px;
    -webkit-animation: ball-spin-fade-loader 1s 0.24s linear infinite;
    animation: ball-spin-fade-loader 1s 0.24s linear infinite;
  }

  .ball-spin-fade-loader > div:nth-child(4) {
    top: -17.04545px;
    left: 17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.36s linear infinite;
    animation: ball-spin-fade-loader 1s 0.36s linear infinite;
  }

  .ball-spin-fade-loader > div:nth-child(5) {
    top: -25px;
    left: 0;
    -webkit-animation: ball-spin-fade-loader 1s 0.48s linear infinite;
    animation: ball-spin-fade-loader 1s 0.48s linear infinite;
  }

  .ball-spin-fade-loader > div:nth-child(6) {
    top: -17.04545px;
    left: -17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.6s linear infinite;
    animation: ball-spin-fade-loader 1s 0.6s linear infinite;
  }

  .ball-spin-fade-loader > div:nth-child(7) {
    top: 0;
    left: -25px;
    -webkit-animation: ball-spin-fade-loader 1s 0.72s linear infinite;
    animation: ball-spin-fade-loader 1s 0.72s linear infinite;
  }

  .ball-spin-fade-loader > div:nth-child(8) {
    top: 17.04545px;
    left: -17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.84s linear infinite;
    animation: ball-spin-fade-loader 1s 0.84s linear infinite;
  }

  .ball-spin-fade-loader > div {
    position: absolute;
    width: 15px;
    height: 15px;
    margin: 2px;
    border-radius: 50%;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    background-color: #F23030;
  }
</style>
