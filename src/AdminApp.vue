<template>
    <div>
        <div class="container">
			<div class="contain-to-grid sticky">
				<nav class="top-bar" data-topbar role="navigation" data-options="sticky_on: large">
					<section class="top-bar-section">
						<!-- Right Nav Section -->
						<ul class="right">
							<li><router-link :to='{name: "dealer_login"}'>Dealer Login</router-link></li>
						</ul>
					</section>
				</nav>
			</div>

			<div class="header_image">
				<img src="http://placehold.it/1200x300" alt="Header banner image" title="Header banner image">
			</div>

			<!-- START COARTNT -->
			<div class="row">

				<aside class="medium-3 show-for-medium-up columns sidebar">
					<form action="#" method="get">
					<input name="s" placeholder="Product Search"/>
					<input class="button" type="submit">
					</form>
					<ul class="sidebar_menu">
						<li><router-link :to='{name: "admin_app"}'>Home</router-link></li>
						<li><router-link :to='{name: "dealer_register"}'>Become a Dealer</router-link></li>
						<li>Dealer Tools</li>
						<ul>
							<li><router-link :to='{name: "dealer_dashboard"}'>Dealer Dashboard</router-link></li>
						</ul>
					</ul>
				</aside>

				<div>
					<div class="small-12 medium-9 columns">
						<div id="content">
							<router-view></router-view>
						</div>
					</div>
				</div>
			</div>
			<!-- END CONTENT -->

			<footer>&copy;2016 Big Cloud Media, All Rights Reserved</footer>
        </div>
    </div>
</template>

<script>
	export default {
        created: function() {
            window.document.title = "Trinventory Admin Service"

        }
    }
</script>

<style type="text/css">
	ul {
		list-style-type: none;
	}
</style>