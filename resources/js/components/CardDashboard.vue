<template>
    <div class="row">
  <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div class="card-info">
            <p class="card-text">ລາຍຮັບ</p>
          </div>
          <div class="card-icon">
            <span class="badge bg-label-primary rounded p-2">
              <i class="bx bx-trending-up bx-sm"></i>
            </span>
          </div>
        </div>
        <div class="d-flex align-items-end ">
              <h6 class="card-title mb-0 me-2">{{ formatPrice(sum_income) }} ກີບ</h6>
              <small class="text-success">(+29%)</small>
            </div>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div class="card-info">
            <p class="card-text">ລາຍຈ່າຍ</p>
          </div>
          <div class="card-icon">
            <span class="badge bg-label-info rounded p-2">
              <i class='bx bx-trending-down bx-sm'></i>
            </span>
          </div>
        </div>
        <div class="d-flex align-items-end ">
              <h6 class="card-title mb-0 me-2">{{ formatPrice(sum_expense) }} ກີບ</h6>
              <small class="text-success">(+18%)</small>
            </div>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div class="card-info">
            <p class="card-text">ກຳໄລ</p>
          </div>
          <div class="card-icon">
            <span class="badge bg-label-danger rounded p-2">
                <i class='bx bxs-bar-chart-alt-2 bx-sm'></i>
            </span>
          </div>
        </div>
        <div class="d-flex align-items-end ">
              <h6 class="card-title mb-0 me-2">{{ formatPrice(sum_profit) }} ກີບ</h6>
              <small class="text-danger">(-14%)</small>
            </div>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div class="card-info">
            <p class="card-text">ຍອດສະຕ໋ອກ</p>
          </div>
          <div class="card-icon">
            <span class="badge bg-label-success rounded p-2">
              <i class='bx bxs-hdd bx-sm'></i>
            </span>
          </div>
        </div>
        <div class="d-flex align-items-end ">
              <h6 class="card-title mb-0 me-2">{{formatPrice(sum_store)}}</h6>
              <small class="text-success">(+42%)</small>
            </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { useStore } from '../store/auth'
import axios from 'axios';

export default {
    name: 'Minipos10CardDashboard',

    data() {
        return {
            data_income:[],
            data_expense:[],
            data_store:[],
        };
    },

    mounted() {
        
    },
    computed:{
        sum_income(){
        return this.data_income.reduce((num, item) => parseInt(num) + parseInt(item.price), 0);
        },
        sum_expense(){
            return this.data_expense.reduce((num, item) => parseInt(num) + parseInt(item.price), 0);
        },
        sum_profit(){
            return parseInt(this.sum_income)-parseInt(this.sum_expense);
        },
        sum_store(){
            return this.data_store.reduce((num, item) => parseInt(num) + parseInt(item.amount), 0);
        },
    },
    methods: {
        formatPrice(value) {
            if(value==null || value==''){ return 0;} else {
                let val = (value / 1).toFixed(0).replace(",", ".");
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        },
       async GetData(){
           
               await axios.get("report/carddashboard",{ headers:{ Authorization: 'Bearer '+ useStore().get_token} })
                .then((response) => {
                    this.data_income = response.data.income;
                    this.data_expense = response.data.expense;
                    this.data_store = response.data.store;
                })
                .catch((error) => {
                   console.log(error)
                });
  
        }
    },
    created(){
        this.GetData();
    }
};
</script>

<style lang="scss" scoped>

</style>