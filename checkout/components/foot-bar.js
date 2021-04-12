const footBar = `
  <div id="foot-bar" class="w-100 py-3">
    <div class="container text-center">
      <div class="d-inline-block">
        <div class="row justify-content-center">
          <div class="col-12">
            <span class="h5 align-middle pr-2">Powered by</span>
            <img class="foot-img" src="assets/img/enscribe-logo.png" />
          </div>
          <div class="col-12 mt-2 mb-3">
            <p class="h5 my-2">Collectibles Exchange Co., Ltd.</p>
            <p class="h7 m-0">
              15 Punnawithi 50 Bangchak
              <br class="d-sm-none" />
              Phrakanong Bangkok Thailand 10260
            </p>
            <span class="h7 px-2">Email: <a href="mailto:services@enscribe.co">services@enscribe.co</a></span>
            <span class="h7 px-2">Tel: <a href="tel:+66865722966">0865722966</a></span>
          </div>
          <div class="col-12 col-sm-auto">
            <a class="h6" href="https://app-qa.enscribe.co/en/privacy-policy">Privacy Policy</a>
          </div>
          <div class="col-12 my-2 my-sm-0 col-sm-auto">
            <a class="h6" href="https://app-qa.enscribe.co/en/data-protection-policy">Data Protection Policy</a>
          </div>
          <div class="col-12 col-sm-auto">
            <a class="h6" href="https://app-qa.enscribe.co/en/terms-and-conditions">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </div>
  </div> 
`;

Vue.component('foot-bar', {
  template: footBar,
});
