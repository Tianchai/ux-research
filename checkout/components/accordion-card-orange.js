const accordionCard = `
  <div class="card accordion-card">
    <div class="card-header bg-safety-orange" :class="{ 'cursor-pointer': isPointer, 'cursor-default': !isPointer }" @click="open">
      <div class="circle-step  text-white d-inline-block border border-white border-secondary rounded-circle text-center bg-safety-orange mr-2">
        <template v-if="isChecked"><i class="fas fa-check"></i></template>
        <template v-else>{{ step }}</template>
      </div>
      <span class="collapsed text-white">{{ title }}</span>
    </div>
    <div :id="id" class="collapse" data-parent="#accordion">
      <div class="card-body">
        <slot></slot>
      </div>
    </div>
  </div>
`;

Vue.component('accordion-card', {
  template: accordionCard,
  props: {
    step: String,
    id: String,
    title: String,
    currentStep: Number,
  },
  computed: {
    isPointer() {
      return this.step <= this.currentStep + 1;
    },
    isChecked() {
      return this.step <= this.currentStep;
    },
  },
  methods: {
    open() {
      if (this.step <= this.currentStep + 1) $('#' + this.id).collapse('show');
    },
  },
  mounted() {
    $('#' + this.id).collapse();
  },
});
