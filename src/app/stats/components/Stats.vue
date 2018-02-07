<template>
	
	<div class="container container--centered">
		<div class="stats" v-if="stats">
		<h1 class="stats__header">
			Stats of {{ stats.shortened_url }}
		</h1>
		<dl class="dlist">
			<dt class="dlist__title">
				Origin Url
			</dt>
			<dd class="dlist_body">
				{{ stats.original_url }}
			</dd>
		</dl>
		<dl class="dlist">
			<dt class="dlist__title">
				Shortening Requested
			</dt>
			<dd class="dlist_body">
				{{ stats.requested_count }} times
			</dd>
		</dl>
		<dl class="dlist">
			<dt class="dlist__title">
				Used
			</dt>
			<dd class="dlist_body">
				{{ stats.used_count }} times
			</dd>
		</dl>
		<dl class="dlist">
			<dt class="dlist__title">
				Last Requested  
			</dt>
			<dd class="dlist_body">
				{{ stats.last_requested }}
			</dd>
		</dl>
		<dl class="dlist">
			<dt class="dlist__title">
				Last Used
			</dt>
			<dd class="dlist_body">
				{{ stats.last_used || 'Never' }} 
			</dd>
		</dl>

		<a :href="stats.shortened_url" class="button button--yellow">Get me there!</a>

		</div>
		<div class="stats__loading" v-else>One moment</div>
	</div>

</template>

<script>
	
	import { mapActions, mapGetters } from 'vuex'
	export default {

		methods: {

			...mapActions({

				getStats: 'stats/getStats'
			})
		},

		computed: {

			...mapGetters({

				stats: 'stats/stats'
			})
		},

		mounted () {

			this.getStats(this.$route.params.code).catch(() => {

				this.$router.replace({ name: 'nope' })	
			})
		}
	}

</script>

<style lang="scss">
	.stats {
		color: #fff;
		font-size: 1.2em;
		font-weight: 500;
		width: 100%;

		&__header {
			font-size: 1.4em;
			margin: 0;
			margin-bottom: 40px;
			overflow-wrap: break-word;
		}

		&__loading {
			color: #fff;
			font-size: 1.2em;
			font-weight: 500;
		}
	}
</style>