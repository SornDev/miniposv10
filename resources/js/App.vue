<template>
    <div>
         <!-- Layout wrapper -->
<div class="layout-wrapper layout-content-navbar  ">
  <div class="layout-container">


    <!-- Menu Sidebar -->
    <sidebar v-if="store.get_token"/>
    

    <!-- Layout container -->
    <div class="layout-page">
      
      



<!-- Navbar -->




<nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar" v-if="store.get_token">
  
      
      <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0   d-xl-none ">
        <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)" @click="expanded_menu()">
          <i class="bx bx-menu bx-sm"></i>
        </a>
      </div>
      

      <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">

        


        
        <!-- Search -->
        <div class="navbar-nav align-items-center">
          <div class="nav-item d-flex align-items-center">
            <i class="bx bx-search fs-4 lh-0"></i>
            <input type="text" class="form-control border-0 shadow-none" placeholder="Search..." aria-label="Search...">
          </div>
        </div>
        <!-- /Search -->
        

        <ul class="navbar-nav flex-row align-items-center ms-auto">
          

          
  


          <!-- User -->
          <li class="nav-item navbar-dropdown dropdown-user dropdown">
            <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
              <div class="avatar avatar-online">
                <img :src="img" alt="" class="w-px-40 h-auto rounded-circle">
              </div>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a class="dropdown-item" href="#">
                  <div class="d-flex">
                    <div class="flex-shrink-0 me-3">
                      <div class="avatar avatar-online">
                        <img :src="img" alt="" class="w-px-40 h-auto rounded-circle">
                      </div>
                    </div>
                    <div class="flex-grow-1">
                      <span class="fw-semibold d-block">John Doe</span>
                      <small class="text-muted">Admin</small>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div class="dropdown-divider"></div>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <i class="bx bx-user me-2"></i>
                  <span class="align-middle">My Profile</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <i class="bx bx-cog me-2"></i>
                  <span class="align-middle">Settings</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <span class="d-flex align-items-center align-middle">
                    <i class="flex-shrink-0 bx bx-credit-card me-2"></i>
                    <span class="flex-grow-1 align-middle">Billing</span>
                    <span class="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                  </span>
                </a>
              </li>
              <li>
                <div class="dropdown-divider"></div>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:void(0)" @click="logout()">
                  <i class="bx bx-power-off me-2"></i>
                  <span class="align-middle">Log Out</span>
                </a>
              </li>
            </ul>
          </li>
          <!--/ User -->
          

        </ul>
      </div>

      
      
  </nav>
  

  
<!-- / Navbar -->

      

      <!-- Content wrapper -->
      <div class="content-wrapper">

        <!-- Content -->
        
          <div class="container-xxl flex-grow-1 container-p-y">
            
            <router-view/>

            
          </div>
          <!-- / Content -->

          
          

<!-- Footer -->
<footer class="content-footer footer bg-footer-theme" v-if="store.get_token">
  <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
    <div class="mb-2 mb-md-0">
     SornDev 
    </div>
    <div>
      
      Flooter App
      
    </div>
  </div>
</footer>
<!-- / Footer -->

          
          <div class="content-backdrop fade"></div>
        </div>
        <!-- Content wrapper -->
      </div>
      <!-- / Layout page -->
    </div>

    
    
    <!-- Overlay -->
    <div class="layout-overlay layout-menu-toggle" @click="close_memnu()"></div>
    
    
  </div>
    </div>
</template>

<script>
import { useStore } from './store/auth'
import axios from 'axios'
export default {
    name: 'Minipos10App',

     setup(){
        const store = useStore()
        return {store}
    },

    data() {
        return {
            is_expanded:'',
            img:window.location.origin+'/assets/img/avatars/1.png'
        };
    },

    mounted() {
        
    },

    methods: {
        expanded_menu(){
            document.body.classList.add('layout-navbar-fixed', 'layout-menu-fixed','layout-menu-expanded');
        },
        close_memnu(){
            document.body.classList.remove('layout-navbar-fixed', 'layout-menu-fixed','layout-menu-expanded');
        },
        async logout(){
        const store = useStore()
        const token = store.get_token
        const response = await axios.post('logout',{},{ headers:{ Authorization: 'Bearer '+ token}})

            // console.log(response.status);
            if(response.status == 200){
                store.remove_token();
                this.$router.push('/login')
            }
        }
    },
};
</script>

<style lang="scss" scoped>
        
</style>