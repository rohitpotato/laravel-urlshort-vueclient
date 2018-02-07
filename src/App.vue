<template>
  <div id="app">
  <p class="notice">This is an open source project by <a href="https://github.com/rohitpotato" target="_blank" class="result__url">Rohit Kashyap</a></a></p>
  <message></message>
    <router-view></router-view>
  </div>
</template>

<script>
import Message from '@/app/global/components/Message'
export default {
  name: 'App',
  components: {

  		Message
  }
}
</script>

<style lang="scss">
 	@import '~styles/app.scss';

	* {
		box-sizing: border-box;
	}

	body, html {

		height: 100%;

	}

	body {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		margin: 0;
		background-repeat: no-repeat;
		background-size: cover;
		background-image: url('https://www.hover.com/blog/wp-content/uploads/2014/11/hv_URLshortener_1000x500.jpg');
		
	}

	#app {

		height: 100%;

	}
</style>
