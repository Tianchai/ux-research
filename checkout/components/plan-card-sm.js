const planCardSm = `
  <div id="plan-card-sm" class="d-lg-none position-fixed w-100" :style="{ bottom: bottom }">
    <div id="plan-summary" class="position-relative bg-safety-orange w-100">
      <div class="container py-3">
        <div class="row align-items-center" @click="showDetail = !showDetail">
          <div class="col-auto">
            <div class="circle-icon d-inline-block border border-white rounded-circle text-center">
               <i class="fas fa-sm text-white" :class="{
                 'fa-chevron-up': !showDetail,
                 'fa-chevron-down': showDetail
               }"></i>
            </div>
          </div>
          <div class="col">
            <p class="h5 m-0 text-white">{{ planName }}</p>
            <span class="h7 text-white">ดูรายละเอียด</span>
          </div>
          <div class="col-auto">
            <span class="h5 text-white">{{ total }}</span>
          </div>
        </div>
      </div>
    </div>
    <div id="plan-detail" ref="planDetail" class="bg-white w-100">
      <div class="container py-3">
        <img class="plan-img d-block mx-auto " src="assets/img/plan-img.jpg" />
        <table class="table table-borderless">
          <tbody>
            <tr>
              <td class="text-nowrap font-weight-bold">รายละเอียดแผน</td>
              <td>{{ planDescription }}</td>
            </tr>
            <tr>
              <td class="text-nowrap font-weight-bold">รอบการจัดส่งสินค้า</td>
              <td>{{ frequency }}</td>
            </tr>
            <tr>
              <td class="text-nowrap font-weight-bold">ระยะเวลา</td>
              <td>{{ duration }}</td>
            </tr>
          </tbody>
        </table>
        <hr class="border-top-width-2px" />
        <table class="table m-0">
          <tbody>
            <tr>
              <td class="border-0 text-primary">รายการสินค้า</td>
              <td class="border-0 text-primary text-right">ราคา</td>
            </tr>
            <tr v-for="(product, index) in productList" :key="index">
              <td>{{ product.name }}</td>
              <td class="text-right">{{ product.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
  </div>
`;

Vue.component('plan-card-sm', {
  template: planCardSm,
  props: {
    planName: String,
    planDescription: String,
    frequency: String,
    duration: String,
    productList: Array,
    total: String,
  },
  data() {
    return {
      showDetail: false,
      windowWidth: window.innerWidth,
      detailHeight: null,
    }
  },
  computed: {
    bottom() {
      if (!this.detailHeight) return '-100vh';
      return this.showDetail ? '0px' : `-${this.detailHeight}px`
    }
  },
  watch: {
    windowWidth() {
      this.getDetailHeight();
    },
  },
  methods: {
    getDetailHeight() {
      this.detailHeight = this.$refs.planDetail.clientHeight;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.getDetailHeight);
    })
    setTimeout(() => {
      this.getDetailHeight();
    }, 500)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getDetailHeight);
  },
});
