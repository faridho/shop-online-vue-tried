<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="bread-crumb">
          <a href="javascript:void(0)" 
            v-if="getToken"
            @click="showChartFull" 
            @mouseover="chartHover = true" 
            @mousedown="chartHover = false">
            Shopping Bag (0)
          </a>
          <a href="javascript:void(0)" @click="logout" v-if="getToken">Logout</a>
          <a href="javascript:void(0)" @click="login" v-if="!getToken">Sign In/Join</a>
          <a href="javascript:void(0)" v-else>Hello, {{ name }}</a>
        </div>
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
            <P>{{ success }}</p>
            <div class="main-form-login">
              <div class="form-label">
                Email
              </div>
              <input type="text" class="form-fill" v-model="email" />
              <div class="form-placeholder">
                Input Email Address
              </div>
            </div>

            <div class="main-form-login">
              <div class="form-label">
                Password
              </div>
              <input type="password" class="form-fill" v-model="password" />
              <div class="form-placeholder">
                Input Password
              </div>
            </div>
            <button class="button-login" @click="submitLogin">LOGIN</button>
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
            <ul v-for="(error, index) in errors" :key="index">
              <li>{{ error }}</li>
            </ul>
            <div class="main-form-login">
              <div class="form-label">
                Name
              </div>
              <input type="text" class="form-fill" v-model="name" />
              <div class="form-placeholder">
                Input Name
              </div>
            </div>

            <div class="main-form-login">
              <div class="form-label">
                Email
              </div>
              <input type="text" class="form-fill" v-model="email" />
              <div class="form-placeholder">
                Input Email Address
              </div>
            </div>

            <div class="main-form-login">
              <div class="form-label">
                Password
              </div>
              <input type="password" class="form-fill" v-model="password" />
              <div class="form-placeholder">
                Input Password
              </div>
            </div>

            <div class="main-form-login">
              <div class="form-label">
                Confirm Password
              </div>
              <input type="password" class="form-fill" v-model="confirmPassword" />
              <div class="form-placeholder">
                Input Confirm Password
              </div>
            </div>
            <button class="button-login" @click="register">JOIN</button>
            <hr>
            <button class="button-join" @click="backLogin">BACK TO LOGIN</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="chartFull" class="chart-full">
      <div class="content-chart" v-if="checkoutLayer">
        <span @click="closeChart" class="close-chart">&times;</span>
        <div class="header-chart">
          <div class="title-chart">{{ titleCart }}</div>
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
        <button @click="checkout" class="button-checkout">CHECK OUT</button>

      </div>

      <div class="content-chart" v-if="requestSendLayer">
        <span @click="closeChart" class="close-chart">&times;</span>
        <div class="header-chart">
          <div class="title-chart">{{ titleCart }}</div>
        </div>
        
        <div class="form-cart">
          <div class="fill-form">
            <input type="text" class="text-box-cart" placeholder="Full Name"/>
          </div>
          <div class="fill-form">
            <input type="checkbox" /> Use address your registered
          </div>
          <div class="fill-form">
            <textarea class="textarea-cart" placeholder="Address"></textarea>
          </div>
        </div>

        <div class="button-group-chart">
          <button @click="checkoutCancel" class="button-checkout-cancel">BACK</button>
          <button @click="checkout" class="button-checkout-send">CHECK OUT</button>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import axios from 'axios';
  import { baseUrl } from '@/views/Plugins/url';

  export default {
    data: () => ({
      modal: false,
      loginSection: true,
      joinSection: false,
      chartFull: false,
      titleCart: 'Shopping Bag',
      checkoutLayer: true,
      requestSendLayer: false,
      baseUrl: baseUrl,
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: [],
      success: ''
    }),

    computed: {
      getToken() {
        const token = localStorage.getItem('token');
        if(token != null) {
          this.name = localStorage.getItem('name');
          return true;
        }
      }
    },

    methods: {
      async register() {
        const payLoad = {
          name: this.name, 
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword
        }

        const register = await axios
        .post(this.baseUrl + 'auth/register', payLoad)
        .then(result => result.data.response);

        if(register.status == false) {
          for (const error of register.message) {
            this.errors.push(error);
          }
        } else {
          this.success = register.message;
          this.loginSection = true;
          this.joinSection = false;
        }  
      },

      async submitLogin() {
        const payLoad = {
          email: this.email,
          password: this.password
        }

        const login = await axios 
          .post(this.baseUrl + 'auth/login', payLoad)
          .then(result => result.data.response)

          if(login.status == false) {
            alert(login.message);
          } else {
            localStorage.setItem('name', login.data.name);
            localStorage.setItem('email', login.data.email);
            localStorage.setItem('token', login.token);
            this.modal = false;
          }
      },

      logout() {
        localStorage.clear();
        alert("Logout success");
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

      showChartFull() {
        this.chartFull = true;
      },

      closeChart() {
        this.chartFull = false;
      },

      checkout() {
        this.checkoutLayer = false;
        this.requestSendLayer = true;
        this.titleCart = 'Checkout';
      },

      checkoutCancel() {
        this.checkoutLayer = true;
        this.requestSendLayer = false;
        this.titleCart = 'Shopping Bag';
      }
    }
  }
</script>