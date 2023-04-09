<template>
    <div>
        <!-- Menu -->

<aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme" style="height: 100%;">

  
<div class="app-brand demo ">
  <router-link to="/" class="app-brand-link">
    <span class="app-brand-logo demo">



</span>
    <span class="app-brand-text demo menu-text fw-bolder ms-2">MiniPos</span>
  </router-link>

  <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none" @click="close_memnu()">
    <i class="bx bx-chevron-left bx-sm align-middle"></i>
  </a>
</div>

<div class="menu-inner-shadow"></div>

<ul class="menu-inner py-1">

  <!-- Dashboard -->
  <li class="menu-item" :class="this.$route.path=='/store'?'active':''">
    <router-link to="/store" class="menu-link" @click="close_ex()">
      <i class='menu-icon bx bx-home'></i>
      <div data-i18n="Analytics">ສະຕ໋ອກສິນຄ້າ</div>
    </router-link>
  </li>

  <li class="menu-item " :class="this.$route.path=='/pos'?'active':''">
    <router-link to="/pos" class="menu-link" @click="close_ex()">
      <i class='menu-icon bx bx-cart-download'></i>
      <div data-i18n="Analytics">ຂາຍ POS</div>
    </router-link>
  </li>

  <li class="menu-item " :class="this.$route.path=='/transection'?'active':''">
    <router-link to="/transection" class="menu-link" @click="close_ex()">
      <i class=' menu-icon bx bxs-bar-chart-alt-2'></i>
      <div data-i18n="Analytics">ການເຄື່ອນໄຫວ</div>
    </router-link>
  </li>

  <li class="menu-item " :class="this.$route.path=='/report'?'active':''">
    <router-link to="/report" class="menu-link" @click="close_ex()">
      <i class='menu-icon bx bx-food-menu'></i>
      <div data-i18n="Analytics">ລາຍງານ</div>
    </router-link>
  </li>

 

 <li class="menu-header small text-uppercase">
      <span class="menu-header-text">Apps &amp; Pages</span>
    </li>

    <li class="menu-item">
      <a href="app-email.html" class="menu-link">
        <i class="menu-icon tf-icons bx bx-envelope"></i>
        <div data-i18n="Email">Email</div>
      </a>
    </li>

    <li class="menu-item" :class="expened1">
      <a href="javascript:void(0);" class="menu-link menu-toggle" @click="sbm1">
        <i class="menu-icon tf-icons bx bx-food-menu"></i>
        <div data-i18n="Invoice">Invoice</div>
      </a>
      <ul class="menu-sub">
        <li class="menu-item" :class="this.$route.path=='/sub1'?'active':''" @click="sm1">
          <router-link to="/sub1"  class="menu-link">
            <div data-i18n="List">List</div>
          </router-link>
        </li>
        <li class="menu-item" :class="this.$route.path=='/sub2'?'active':''" @click="sm2">
          <router-link to="/sub2" class="menu-link">
            <div data-i18n="Preview">Preview</div>
          </router-link>
        </li>
      </ul>
    </li>

    <li class="menu-item" :class="expened2">
      <a href="javascript:void(0);" class="menu-link menu-toggle" @click="sbm2">
        <i class="menu-icon tf-icons bx bx-check-shield"></i>
        <div data-i18n="Roles &amp; Permissions">Roles &amp; Permissions</div>
      </a>
      <ul class="menu-sub">
        <li class="menu-item" :class="this.$route.path=='/sub3'?'active':''" @click="sm3">
          <router-link to="/sub3" class="menu-link">
            <div data-i18n="Roles">Roles</div>
          </router-link>
        </li>
        <li class="menu-item" :class="this.$route.path=='/sub4'?'active':''" @click="sm4">
          <router-link to="sub4" class="menu-link">
            <div data-i18n="Permission">Permission</div>
          </router-link>
        </li>
      </ul>
    </li>




 
</ul>

</aside>
<!-- / Menu -->
    </div>
</template>

<script>
// let menuBtn = document.querySelector('.menu-btn');
// let nav = document.querySelector('nav');
// menuBtn.addEventListener('click', function() {
//   nav.classList.toggle('show-menu');
// });


// let menu = document.querySelector('aside')
// let bt = document.getElementsByClassName('menu-item')
// bt.addEventListener('click', function(){
//   bt.classList.toggle('open')
// });
//   bt.classList.('.open')
// console.log(bt)

// menu.item.length;


export default {
    name: 'Minipos7Sidebar',

    metaInfo: {
      script: [
        { src: window.location.origin+'/assets/vendor/js/menu.js', async: true, defer: true }
      ],
    },

    data() {
        return {
            expened1:'',
            expened2:''
        };
    },

    mounted() {
        // const recaptchaScript = document.createElement("script");
        // recaptchaScript.setAttribute(
        //   "src",
        //   window.location.origin+'/assets/vendor/js/menu.js'
        // );
        // console.log(recaptchaScript)
        // document.head.appendChild(recaptchaScript);
    },

    methods: {
      // sunm1(){
      //   this.$route.path=='/sub1'||this.$route.path=='/sub2'?'active':''
      //   this.expened?this.expened='':this.expened='open'

      // },
      sbm1(){
        if(!this.expened1){
          this.expened1 = 'open'
        } 
      },
      sbm2(){
        if(!this.expened2){
          this.expened2 = 'open'
        } 
      },
      sm1(){
        if(this.$route.path=='/sub1'){
          this.expened1 += ' active'
          this.expened2 = ''
        }
      },
      sm2(){
        if(this.$route.path=='/sub2'){
          this.expened1 += ' active'
          this.expened2 = ''
        }
        
      },
      sm3(){
        if(this.$route.path=='/sub3'){
          this.expened2 += ' active'
          this.expened1 = ''
        }
      },
      sm4(){
        if(this.$route.path=='/sub4'){
          this.expened2 += ' active'
          this.expened1 = ''
        }
        
      },
      close_ex(){
        this.expened1 = ''
          this.expened2 = ''
      },
      
        close_memnu(){
          
            document.body.classList.remove('layout-navbar-fixed', 'layout-menu-fixed','layout-menu-expanded');
        },
    },
    watch:{
        $route(){
          if(this.$route.path=='/sub1' || this.$route.path=='/sub2'){
          this.expened1 += ' open active'
        }
        if(this.$route.path=='/sub3' || this.$route.path=='/sub4'){
          this.expened2 += ' open active'
        }
        }
    }
};
</script>

<style lang="scss">
    .menu-sub {
      transition: height 3s ease-in-out;
    }
    .menu-item{
        &:active{
          .menu-item{
            display: block;
            // transition: height .3s ease-in-out
          }
        }
    }
</style>