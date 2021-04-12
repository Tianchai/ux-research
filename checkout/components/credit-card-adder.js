const creditCardAdder = `
  <div id="credit-card-adder" data-toggle="modal" data-target="#credit-card-adder-modal"
       class="row no-gutters justify-content-center align-items-center border rounded py-2 px-3 mb-3 mx-auto max-w-400px cursor-pointer">
    <div class="col-auto">
      <i class="fas fa-plus pr-2"></i>
      <span>Add credit card</span>
    </div>
    <div id="credit-card-adder-modal" class="modal fade">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add credit/debit card</h5>
            <button type="button" class="close" data-dismiss="modal">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div v-for="input in creditCardInputs" class="mb-2" :class="{ 'col-12': !input.isHalf, 'col-6': input.isHalf }">
                <label class="h7">
                  {{ input.label }}
                  <span v-if="input.required" class="text-danger">*</span>
                </label>
                <template v-if="input.type === 'text'">
                  <input type="text" class="form-control">
                </template>
                <template v-if="input.type === 'select'">
                  <select class="form-control">
                    <option>Thailand</option>
                  </select>
                </template>
              </div>
              <div class="col-12 my-2">
                <button type="button" class="w-100 btn bg-atomic-tangerine text-white mt-2 mx-auto" data-dismiss="modal">
                  Continue
                </button>
              </div>
              <div class="col-12 text-center mt-3">
                <span>Secured by</span>
                <img src="assets/img/omise.svg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

Vue.component('credit-card-adder', {
  template: creditCardAdder,
  data() {
    return {
      creditCardInputs: [
        { key: 'cardNo', label: 'Card number', type: 'text', required: true, isHalf: false },
        { key: 'name', label: 'Name on card', type: 'text', required: true, isHalf: false },
        { key: 'expire', label: 'Expiry date', type: 'text', required: true, isHalf: true },
        { key: 'cvv', label: 'CVV', type: 'text', required: true, isHalf: true },
      ],
    }
  },
});
