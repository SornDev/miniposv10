<template>
    <div>
        <div class="card">
  <h5 class="card-header">ການເຄື່ອນໄຫວທຸລະກຳ</h5>
  <div class=" d-flex justify-content-end"> 
    <div class="btn-group me-2" role="group" aria-label="Basic example"> 
      <!-- {{ month_type }} -->
                <button type="button" class="btn btn-secondary" @click="month_type='m'" ><i class='bx bx-chevron-right' v-if="month_type=='m'"></i> ເດືອນ</button>
                <button type="button" class="btn btn-secondary" @click="month_type='y'" ><i class='bx bx-chevron-right' v-if="month_type=='y'"></i> ປີ</button>
              </div>
    <input type="date" class="form-control me-2" style="width: 150px;" v-model="dmy" >
    <button type="button" class="btn btn-success me-4" @click="GetDataTransection()">ສະແດງການເຄື່ອນໄຫວ</button>
  </div>
  <div class="card-body">
    <div class="table-responsive text-nowrap">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th class="text-center">ວັນທີ່</th>
            <th class="text-center">ເລກທີ່ທຸລະກຳ</th>
            <th class="text-center">ປະເພດທຸລະກຳ</th>
            <th class="text-center">ລາຍລະອຽດ</th>
            <th class="text-center">ມູນຄ່າ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="list in Transection.data" :key="list.id">
            <td>{{ date(list.created_at) }}</td>
            <td>{{ list.tran_id }}</td>
            <td>{{ list.tran_type }}</td>
            <td>{{ list.tran_detail }}</td>
            <td class="text-end" >{{ formatPrice(list.price) }}</td>
          </tr>
        </tbody>
      </table>
      <pagination :pagination="Transection" :offset="4" @paginate="GetDataTransection($event)" />
    </div>
  </div>
</div>
    </div>
</template>

<script>
import moment from "moment";
import { useStore } from '../store/auth'
import axios from 'axios';
export default {
    name: 'Minipos10Transection',
    setup(){
        const store = useStore()
        return {store}
    },
    data() {
        return {
            Transection:[],
            month_type:'m',
            dmy:'',
        };
    },
    components:{
      moment
    },
    mounted() {
        
    },

    methods: {
        date(value){
        return moment(value).format("DD/MM/YYYY");
      },    
      formatPrice(value) {
        let val = (value / 1).toFixed(0).replace(",", ".");
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      },
       async GetDataTransection(page){
      
               await axios.post(`transection?page=${page}`,{
                  month_type: this.month_type,
                  dmy: this.dmy
                },{headers:{Authorization: 'Bearer '+ useStore().get_token}}).then((response)=>{
                this.Transection = response.data
                // console.log(response.data)

              }).catch((error)=>{
                    if(error){
                        if(error.response.status == 401){
                            useStore().remove_token()
                            this.$router.push('/login')
                        }
                    }
              })
        
        }
    },
    created(){
      this.GetDataTransection()
    }
};
</script>

<style lang="scss" scoped>

</style>