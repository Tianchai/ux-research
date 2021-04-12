const headBar = `
  <div id="head-bar" class="w-100 bg-white border-bottom shadow position-sticky">
    <div class="container py-2 h-100">
      <div class="row justify-content-between align-items-center h-100">
        <div class="col-auto">
          <img class="logo-img" src="assets/img/justino-logo.jpg" />
        </div>
        <div class="col-auto">
          TH | EN
        </div>
      </div>
    </div>
  </div> 
`;

Vue.component('head-bar', {
  template: headBar,
});
