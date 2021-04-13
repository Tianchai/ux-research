const variantSelector = `
  <div>
    <table class="table">
      <tbody>
        <tr>
          <td class="border-0 text-primary">สินค้า</td>
          <td class="border-0 text-primary text-right w-1px text-nowrap">จำนวน</td>
        </tr>
        <template v-for="(product, index) in productList">
          <tr>
            <td>
              <div class="row no-gutters">
                <div class="col-auto">
                  <img class="pr-3" src="assets/img/product-img.jpg" style="max-height: 60px; max-width: 60px" />
                </div>
                <div class="col">
                  <p class="mb-1">{{ product.name }}</p>
                  <div v-if="variant[index]" class="row no-gutters">
                    <div class="col-auto">
                      <div class="trash-container mr-2" @click="deleteVariant(index)">
                        <i class="far fa-trash-alt align-middle text-danger"></i>
                        <i class="fas fa-trash-alt align-middle text-danger"></i>
                      </div>
                    </div>
                    <div class="col">
                      <span>{{ variant[index] }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td class="text-right w-1px text-nowrap">
              <p class="mb-1">{{ variant[index] ? 1 : 0 }} จาก 1</p>
              <p v-if="variant[index]" class="mb-0 text-center">1</p>
            </td>
          </tr>
          <tr v-if="!variant[index]">
            <td class="border-0" colspan="2">
              <div class="row no-gutters align-items-center rounded bg-light py-2 px-3">
                <div class="col-auto mr-auto">
                  สามารถเลือกได้อีก 1 รายการ
                </div>
                <div class="col-auto">
                  <button type="button" class="btn bg-atomic-tangerine text-white"
                          data-toggle="modal" data-target="#variant-selector-modal"
                          @click="openModal(index)">
                    เพิ่ม <i class="d-none d-sm-inline-block fas fa-plus pl-2"></i>
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
            <h5 class="modal-title" id="exampleModalLabel">เลือกตัวเลือกสินค้า</h5>
            <button type="button" class="close" data-dismiss="modal">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="modal-body" >
            <table v-if="[0, 1].includes(addVariant)" class="table table-borderless m-0">
              <tr>
                <td class="align-middle">สูตร</td>
                <td>
                  <select class="form-control" v-model="selectedOption">
                    <option v-for="option in productList[addVariant].options" :value="option">{{ option }}</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="align-middle">จำนวน</td>
                <td>
                  <input type="number" v-model="quantity" class="form-control" @input="onChange($event)">
                </td>
              </tr>
            </table>
            <button type="button" class="d-block btn bg-atomic-tangerine text-white mt-3 mx-auto"
                    data-dismiss="modal" @click="closeModal" :disabled="[null, ''].includes(quantity)">
              ถัดไป
            </button>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="d-block d-sm-none w-100 btn bg-atomic-tangerine text-white mt-2 mx-auto"
            @click="$emit('next')" :disabled="!variant[0] || !variant[1]">
      ถัดไป
    </button>
    <button type="button" class="d-none d-sm-block btn bg-atomic-tangerine text-white mt-2 mx-auto"
            @click="$emit('next')" :disabled="!variant[0] || !variant[1]">
      ถัดไป
    </button>
  </div>
`;

Vue.component('variant-selector', {
  template: variantSelector,
  data() {
    return {
      variant: {
        0: null,
        1: null,
      },
      addVariant: null,
      selectedOption: null,
      quantity: null,
      productList: [
        {
          name: 'อาหารแมวแบบเม็ด (4 กก.)',
          options: ['สูตร 1', 'สูตร 2', 'สูตร 3'],
        },
        {
          name: 'โปรตีนเสริมสำหรับแมว',
          options: ['สูตร A', 'สูตร B', 'สูตร C'],
        },
      ],
    }
  },
  methods: {
    deleteVariant(index) {
      this.variant[index] = false;
    },
    openModal(index) {
      this.addVariant = index;
      this.selectedOption = this.productList[index].options[0];
      console.log('selectedOption', this.selectedOption);
    },
    closeModal() {
      this.variant[this.addVariant] = this.selectedOption;
      setTimeout(() => {
        this.quantity = null;
      }, 0);
    },
    onChange(event) {
      event.preventDefault();
      console.log('event', event);
      if (![0, 1].includes(parseInt(event.data))) return;
    },
  },
});