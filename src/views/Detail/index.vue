<template>
  <div>
    <div class="navbar">
      <div class="responsive-menu">
        <a href="" class="navbar-brand">FARIDHO'S OUTLET</a>
        <a href="javascript:void(0);" @click="toogleMenu"><img src="/img/icons/menu-burger.svg" class="icon-menu" /></a>
      </div>
      <div class="top-navbar" v-bind:class="[responsiveActive ? '': 'responsive-navbar']">
        <a href="" class="navbar-brand">FARIDHO'S OUTLET</a>
        <a href="">Home</a>
        <div class="drop-down">
          <a href="">Dress</a>
          <div class="drop-down-content">
            <a href="">T-Shirts</a>
            <a href="">Pants</a>
            <a href="">Jeans</a>
          </div>
        </div>
        <div class="drop-down">
          <a href="">Accesories</a>
          <div class="drop-down-content">
            <a href="">Watch</a>
            <a href="">Wallet</a>
          </div>
        </div>
        <div class="search-section">
          <input type="text" class="search-navbar" placeholder="Search..." />
          <button class="btn-search-navbar"> Search</button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="bread-crumb">
          <a href="javascript:void(0)" 
            @click="showChartFull" 
            @mouseover="chartHover = true" 
            @mousedown="chartHover = false">
            Shopping Bag (0)
          </a>
          <a href="javascript:void(0)" @click="login">Sign In/Join</a>
        </div>
      </div>
    </div>

    <div class="container detail">
      <div class="row">
        <div class="column-detail-shop">
          <div class="shop-card">
            <img src="/img/shop/product-2.jpg" class="img-shop-card" />
          </div>
        </div>

        <div class="column-detail-shop">
          <div class="shop-card">
            <img src="/img/shop/product-4.jpg" class="img-shop-card" />
          </div>
        </div>

        <div class="column-detail-shop-pick">
          <div class="detail-select">
            <div class="detail-love">
              <img v-if="like" src="/img/icons/like.svg" class="img-love" @click="liked"/>
              <img v-if="unlike" src="/img/icons/liked.svg" class="img-love" @click="unliked"/>
            </div>
            <div class="detail-over">
              <a href="" class="detail-category">Dress</a>
              <h2 class="detail-description">Treggings Pockets</h2>
              <p class="detail-price">IDR 299.900</p>
            </div>
            <div class="detail-form">
              Size:
              <input type="radio" name="radio" checked> S
              <input type="radio" name="radio"> M 
              <input type="radio" name="radio"> L
            </div>
            <div class="detail-add-chart">
              ADD TO CHART
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="footer">
      <div class="social-media-section">
        <a href=""><img src="/img/icons/instagram.svg" class="icon"></a>
        <a href=""><img src="/img/icons/facebook.svg" class="icon"></a>
        <a href=""><img src="/img/icons/twitter.svg" class="icon"></a>
        <a href=""><img src="/img/icons/youtube.svg" class="icon"></a>
      </div>
      <div class="end-sub-section">
        <p>FARIDHO'S OUTLET &copy; 2019</p>
      </div>
    </div>

    <div class="modal-login" v-show="modal">
      <div class="modal-content">

        <div v-show="loginSection">
          <div class="modal-header">
            <div class="title">
              <p>Account Sign In</p>
            </div>
            <span class="close" @click="close">&times;</span>
          </div>
          <div class="modal-body">
            <div class="main-form-login">
              <div class="form-label">
                Email
              </div>
              <input type="text" class="form-fill" />
              <div class="form-placeholder">
                Input Email Address
              </div>
            </div>

            <div class="main-form-login">
              <div class="form-label">
                Password
              </div>
              <input type="password" class="form-fill" />
              <div class="form-placeholder">
                Input Password
              </div>
            </div>
            <button class="button-login">LOGIN</button>
            <hr>
            <button class="button-join" @click="join">JOIN US</button>
          </div>
        </div>

        <div v-show="joinSection">
          <div class="modal-header">
            <div class="title">
              <p>Create An Account</p>
            </div>
            <span class="close" @click="close">&times;</span>
          </div>
          <div class="modal-body">
            <div class="main-form-login">
              <div class="form-label">
                Email
              </div>
              <input type="text" class="form-fill" />
              <div class="form-placeholder">
                Input Email Address
              </div>
            </div>

            <div class="main-form-login">
              <div class="form-label">
                Password
              </div>
              <input type="password" class="form-fill" />
              <div class="form-placeholder">
                Input Password
              </div>
            </div>

            <div class="main-form-login">
              <div class="form-label">
                Confirm Password
              </div>
              <input type="password" class="form-fill" />
              <div class="form-placeholder">
                Input Confirm Password
              </div>
            </div>
            <button class="button-login">JOIN</button>
            <hr>
            <button class="button-join" @click="backLogin">BACK TO LOGIN</button>
          </div>
        </div>
      </div>
    </div>

    <div class="chart" v-if="chartHover">
      <span class="close-chart" @click="chartHover = false">&times;</span>
      <div class="title-chart">
        <h2>Shopping bag is empty</h2>
      </div>
      <div class="order-chart">
        <div class="order-label">ORDER VALUE</div>
        <div class="order-value">IDR 299.999</div>
      </div>
      <a href="" class="detail-chart">View Chart</a>
    </div>

    <div v-if="chartFull" class="chart-full">
      <div class="content-chart">
        <span @click="closeChart" class="close-chart">&times;</span>
        <div class="header-chart">
          <div class="title-chart">Shopping Bag</div>
        </div>
        <div class="card-item">
          <div class="card-item-left">
            <img src="/img/shop/detail-product-1.png" class="img-item">
          </div>
          <div class="card-item-right">
            <div class="title-item">(2) Hoddie Hop</div>
            <div class="title-price">IDR 299.900</div>
            <div class="cart-action">
              <a href="" class="cart-remove">Return</a>
            </div>
          </div>
        </div>

        <div class="card-item">
          <div class="card-item-left">
            <img src="/img/shop/detail-product-1.png" class="img-item">
          </div>
          <div class="card-item-right">
            <div class="title-item">(2) Hoddie Hop</div>
            <div class="title-price">IDR 299.900</div>
            <div class="cart-action">
              <a href="" class="cart-remove">Return</a>
            </div>
          </div>
        </div>

        <div class="card-item">
          <div class="card-item-left">
            <img src="/img/shop/detail-product-1.png" class="img-item">
          </div>
          <div class="card-item-right">
            <div class="title-item">(2) Hoddie Hop</div>
            <div class="title-price">IDR 299.900</div>
            <div class="cart-action">
              <a href="" class="cart-remove">Return</a>
            </div>
          </div>
        </div>
        <button class="button-checkout">CHECK OUT</button>

      </div>
    </div>

  </div>
</template>
<script>
  export default {
    data: () => ({
      responsiveActive: true,
      heroTitle: 'WARDROBE ESSENTIALS FROM IDR 149,900',
      frontImg: true,
      backImg: false,
      modal: false,
      loginSection: true,
      joinSection: false,
      chartHover: false,
      like: true,
      unlike: false,
      chartFull: false
    }),

    methods: {
      toogleMenu() {
        if (this.responsiveActive) {
          this.responsiveActive = false;
        } else {
          this.responsiveActive = true;
        }
      },

      showChartFull() {
        this.chartFull = true;
      },

      closeChart() {
        this.chartFull = false;
      },

      login() {
        this.modal = true;
      },

      close() {
        this.modal = false;
      },

      join() {
        this.loginSection = false;
        this.joinSection = true;
      },

      backLogin() {
        this.loginSection = true;
        this.joinSection = false;
      },

      liked() {
        this.like = false;
        this.unlike = true;
      },

      unliked() {
        this.like = true;
        this.unlike = false;
      }
    }
  }
</script>