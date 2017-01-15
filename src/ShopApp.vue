<template>
    <div>
        <div class="container">
          <div class="contain-to-grid sticky">
            <nav class="top-bar" data-topbar role="navigation" data-options="sticky_on: large">
              <section class="top-bar-section">
                <!-- Right Nav Section -->
                <ul class="right">
                  <li><router-link :to='{name: "shop_app"}'>Home</router-link></li>
                  <li><a href="#" data-reveal-id="myModal">Find an FFL</a></li>
                  <li><a href="/cart">Cart</a></li>
                </ul>
              </section>
            </nav>
          </div>

          <div class="header_image">
            <img src="http://placehold.it/1200x300" alt="Header banner image" title="Header banner image">
          </div>

          <!-- START COARTNT -->
          <div class="row" >

            <aside class="medium-3 show-for-medium-up columns sidebar" >
              <form action="#" method="get">
                <input name="s" placeholder="Product Search"/>
                <input class="button" type="submit">
              </form>
              <menu class="sidebar_menu">
                <li><a href="#">Find an FFL</a></li>
              </menu>
            </aside>

            <div>
              <div class="small-12 medium-9 columns" >
                <div id="content" class="content-box">
                    <router-view>
                        <h2>Admin Console</h2>
                    </router-view>
                </div>
              </div>
            </div>
          </div>
          <!-- END CONTENT -->

          <footer>
            &copy;2016 Big Cloud Media, All Rights Reserved
          </footer>
        </div>
    </div>
</template>

<script>
    export default {
        created: function() {
            window.document.title = "Trinventory Shop Service"     
        }
    }
</script>