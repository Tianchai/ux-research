const planDetailSm = `
  <div id="plan-detail-sm" :class="{ show: showDetail }"
       class="position-absolute bg-white border-top w-100">
    <div class="container pt-3">
      test
    </div>
  </div>
`;

Vue.component('plan-detail-sm', {
  template: planDetailSm,
  props: {
    showDetail: Boolean,
  },
});