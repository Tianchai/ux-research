const creditCard = `
  <div class="credit-card row no-gutters align-items-center border rounded py-2 px-3 mb-3 mx-auto max-w-400px">
    <div class="col-auto cursor-pointer" @click="cardClicked">
      <input type="radio" class="ml-0" name="credit-card" :value="cardValue">
    </div>
    <div class="col-auto d-none d-sm-block cursor-pointer" @click="cardClicked">
      <img class="card-img px-2" :src="brandImg">
    </div>
    <div class="col text-right cursor-pointer" @click="cardClicked">
      <div class="d-inline-block">
        <div>
          <template v-for="i in 3">
            <span class="h7 pr-2">* * * *</span>
          </template>
          <span class="h7">{{ lastFourDigits }}</span>
        </div>
        <div class="row justify-content-between align-items-center no-gutters">
          <div class="col-auto">
            <img class="card-img-sm d-sm-none" :src="brandImg">
          </div>
          <div class="col-auto">
            <span class="h7">หมดอายุ {{ expire }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-auto">
      <div :id="trashId" class="trash-container ml-3">
        <i class="far fa-trash-alt align-top text-danger"></i>
        <i class="fas fa-trash-alt align-top text-danger"></i>
      </div>
    </div>
  </div>
`;

Vue.component('credit-card', {
  template: creditCard,
  props: ['index', 'brand', 'lastFourDigits', 'expire'],
  computed: {
    brandImg() {
      const basePath = 'assets/img/';
      switch (this.brand) {
        case 'visa':
          return basePath + 'visa.png';
        case 'mastercard':
          return basePath + 'mastercard.png';
        case 'jcb':
          return basePath + 'jcb.png';
      }
    },
    cardValue() {
      return 'card-' + this.index;
    },
    trashId() {
      return 'trash-' + this.index;
    },
  },
  methods: {
    cardClicked() {
      $(`input[value=${this.cardValue}`).click();
    },
  },
  mounted() {
    $(() => { $('[data-toggle="popover"]').popover() });
  },
});
