const variantSelector = `
  <div>
    <table class="table">
      <tbody>
        <tr>
          <td class="border-0 text-primary">Products</td>
          <td class="border-0 text-primary text-right w-1px text-nowrap">Quantity</td>
        </tr>
        <template v-for="index in [1, 2]">
          <tr>
            <td>
              <div class="row no-gutters">
                <div class="col-auto">
                  <img class="pr-3" src="assets/img/product-img.jpg" style="max-height: 60px; max-width: 60px" />
                </div>
                <div class="col">
                  <p class="mb-1">Cat Food (4 kg)</p>
                  <div v-if="variant[index]" class="row no-gutters">
                    <div class="col-auto">
                      <div class="trash-container mr-2" @click="deleteVariant(index)">
                        <i class="far fa-trash-alt align-middle text-danger"></i>
                        <i class="fas fa-trash-alt align-middle text-danger"></i>
                      </div>
                    </div>
                    <div class="col">
                      <span>{{ index === 1 ? 'Persia' : 'Bengal' }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td class="text-right w-1px text-nowrap">
              <p class="mb-1">{{ variant[index] ? 1 : 0 }} out of 1</p>
              <p v-if="variant[index]" class="mb-0 text-center">1</p>
            </td>
          </tr>
          <tr v-if="!variant[index]">
            <td class="border-0" colspan="2">
              <div class="row no-gutters align-items-center rounded bg-light py-2 px-3">
                <div class="col-auto mr-auto">
                  You can select 1 more
                </div>
                <div class="col-auto">
                  <button type="button" class="btn bg-atomic-tangerine text-white"
                          data-toggle="modal" data-target="#variant-selector-modal"
                          @click="addVariant = index">
                    Add <i class="fas fa-plus pl-2"></i>
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <div id="variant-selector-modal" class="modal fade">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Select variant</h5>
            <button type="button" class="close" data-dismiss="modal">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="modal-body">
            <table class="table table-borderless m-0">
              <tr>
                <td class="align-middle">Species</td>
                <td>
                  <select class="form-control">
                    <option>Scottish float</option>
                    <option>Persia</option>
                    <option>Bengal</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="align-middle">Quantity</td>
                <td>
                  <input type="number" v-model="quantity" class="form-control">
                </td>
              </tr>
            </table>
            <button type="button" class="d-block btn bg-atomic-tangerine text-white mt-3 mx-auto"
                    data-dismiss="modal" @click="closeModal" :disabled="[null, ''].includes(quantity)">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="d-block d-sm-none w-100 btn bg-atomic-tangerine text-white mt-2 mx-auto"
            @click="$emit('next')" :disabled="!variant[1] || !variant[2]">
      Continue
    </button>
    <button type="button" class="d-none d-sm-block btn bg-atomic-tangerine text-white mt-2 mx-auto"
            @click="$emit('next')" :disabled="!variant[1] || !variant[2]">
      Continue
    </button>
  </div>
`;

Vue.component('variant-selector', {
  template: variantSelector,
  data() {
    return {
      variant: {
        1: false,
        2: false,
      },
      addVariant: null,
      quantity: null,
    }
  },
  methods: {
    deleteVariant(index) {
      this.variant[index] = false;
    },
    closeModal() {
      this.variant[this.addVariant] = true;
      setTimeout(() => {
        this.quantity = null;
      }, 0);
    },
  },
});