<template>
  <div>
    <div class="navbar">
      <div class="responsive-menu">
        <a href="" class="navbar-brand">SAM FIRDAUS FASHION</a>
        <a href="javascript:void(0);" @click="toogleMenu"><img src="/img/icons/menu-burger.svg" class="icon-menu" /></a>
      </div>
      <div class="top-navbar" v-bind:class="[responsiveActive ? '': 'responsive-navbar']">
        <a href="" class="navbar-brand">SAM FIRDAUS FASHION</a>
        <a href="" class="active">Home</a>
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
          <a href="" @mouseover="chartHover = true" @mousedown="chartHover = false">Shopping Bag (0)</a>
          <a href="javascript:void(0)" @click="login">Sign In/Join</a>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="hero-image">
          <div class="hero-text">
            <h1>{{ heroTitle }}</h1>
            <button class="hero-button">SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="title-shop">
          <h2><span>WHICH ONE WILL BE YOURS</span></h2>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="column-card-shop">
          <div class="shop-card">
            <img src="/img/shop/product-1.jpg" class="img-shop-card" />
            <button class="buy-button">TAKE ME OUT</button>

            <div class="product-label">
              <div clas="product">Printed Hoodie Hoop</div>
              <div class="price">IDR 299.900</div>
            </div>
          </div>
        </div>

        <div class="column-card-shop">
          <div class="shop-card">
            <img src="/img/shop/product-2.jpg" class="img-shop-card" />
            <button class="buy-button">TAKE ME OUT</button>

            <div class="product-label">
              <div clas="product">Printed Hoodie Hoop</div>
              <div class="price">IDR 299.900</div>
            </div>
          </div>
        </div>

        <div class="column-card-shop">
          <div class="shop-card">
            <img src="/img/shop/product-3.jpg" class="img-shop-card" />
            <button class="buy-button">TAKE ME OUT</button>

            <div class="product-label">
              <div clas="product">Printed Hoodie Hoop</div>
              <div class="price">IDR 299.900</div>
            </div>
          </div>
        </div>

        <div class="column-card-shop">
          <div class="shop-card">
            <img src="/img/shop/product-4.jpg" class="img-shop-card" />
            <button class="buy-button">TAKE ME OUT</button>

            <div class="product-label">
              <div clas="product">Printed Hoodie Hoop</div>
              <div class="price">IDR 299.900</div>
            </div>
          </div>
        </div>

        <div class="column-card-shop">
          <div class="shop-card">
            <img src="/img/shop/product-4.jpg" class="img-shop-card" />
            <button class="buy-button">TAKE ME OUT</button>

            <div class="product-label">
              <div clas="product">Printed Hoodie Hoop</div>
              <div class="price">IDR 299.900</div>
            </div>
          </div>
        </div>

        <div class="column-card-shop">
          <div class="shop-card">
            <img src="/img/shop/product-3.jpg" class="img-shop-card" />
            <button class="buy-button">TAKE ME OUT</button>

            <div class="product-label">
              <div clas="product">Printed Hoodie Hoop</div>
              <div class="price">IDR 299.900</div>
            </div>
          </div>
        </div>

        <div class="column-card-shop">
          <div class="shop-card">
            <img src="/img/shop/product-2.jpg" class="img-shop-card" />
            <button class="buy-button">TAKE ME OUT</button>

            <div class="product-label">
              <div clas="product">Printed Hoodie Hoop</div>
              <div class="price">IDR 299.900</div>
            </div>
          </div>
        </div>

        <div class="column-card-shop">
          <div class="shop-card">
            <img src="/img/shop/product-3.jpg" class="img-shop-card" />
            <button class="buy-button">TAKE ME OUT</button>

            <div class="product-label">
              <div clas="product">Printed Hoodie Hoop</div>
              <div class="price">IDR 299.900</div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="load-more">
          <button class="load-more-button">
            LOAD MORE PRODUCTS
          </button>
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
        <p>SAM FIRDAUS FASHION &copy; 2019</p>
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

  </div>
</template>
<script>
  export default {
    data: () => ({
      responsiveActive: true,
      heroTitle: 'WARDROBE ESSENTIALS FROM IDR 149,900',
      modal: false,
      loginSection: true,
      joinSection: false,
      chartHover: false,
    }),

    methods: {
      toogleMenu() {
        if (this.responsiveActive) {
          this.responsiveActive = false;
        } else {
          this.responsiveActive = true;
        }
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
      }
    }
  }
</script>