const planCard = `
  <div id="plan-card" class="card shadow position-sticky w-400px" style="top: calc(1.5rem + 60px);">
    <div class="card-header text-center text-white bg-safety-orange">
      Plan Info
    </div>
    <div class="card-body">
      <img class="plan-img d-block mx-auto" src="assets/img/plan-img.jpg" />
      <p class="h5 my-3 text-center">{{ planName }}</p>
      <hr class="border-top-width-2px" />
      <table class="table table-borderless">
        <tbody>
          <tr>
            <td class="text-nowrap font-weight-bold">Plan Description</td>
            <td>{{ planDescription }}</td>
          </tr>
          <tr>
            <td class="text-nowrap font-weight-bold">Frequency</td>
            <td>{{ frequency }}</td>
          </tr>
          <tr>
            <td class="text-nowrap font-weight-bold">Duration</td>
            <td>{{ duration }}</td>
          </tr>
        </tbody>
      </table>
      <hr class="border-top-width-2px" />
      <table class="table">
        <tbody>
          <tr>
            <td class="border-0 text-primary">Product List</td>
            <td class="border-0 text-primary text-right">Price</td>
          </tr>
          <tr v-for="(product, index) in productList" :key="index">
            <td>{{ product.name }}</td>
            <td class="text-right">{{ product.price }}</td>
          </tr>
        </tbody>
      </table>
      <hr class="border-top-width-2px" />
      <table class="table table-borderless mb-0">
        <tbody>
          <tr>
            <td class="h5">Total</td>
            <td class="h5 text-safety-orange text-right">{{ total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
`;

Vue.component('plan-card', {
  template: planCard,
  props: {
    planName: String,
    planDescription: String,
    frequency: String,
    duration: String,
    productList: Array,
    total: String,
  },
});
