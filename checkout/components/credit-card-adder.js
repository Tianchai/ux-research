const creditCardAdder = `
  <div id="credit-card-adder" data-toggle="modal" data-target="#credit-card-adder-modal"
       class="row no-gutters justify-content-center align-items-center border rounded py-2 px-3 mb-3 max-w-400px cursor-pointer">
    <div class="col-auto">
      <i class="fas fa-plus pr-2"></i>
      <span>Add credit card</span>
    </div>
    <div id="credit-card-adder-modal" class="modal fade">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add credit card</h5>
            <button type="button" class="close" data-dismiss="modal">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div v-for="input in creditCardInputs" class="col-12 mb-2">
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
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Add</button>
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
        { key: 'cardNo', label: 'Card number', type: 'text', required: true },
        { key: 'name', label: 'Name on card', type: 'text', required: true },
        { key: 'expire', label: 'Expiry date', type: 'text', required: false },
        { key: 'secureCode', label: 'Security code', type: 'text', required: true },
        { key: 'country', label: 'Country', type: 'select', required: true },
      ],
    }
  },
});
