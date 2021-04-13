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
              15 ปุณนวิถี 50 บางจาก
              <br class="d-sm-none" />
              พระโขนง กรุงเทพมหานคร ประเทศไทย 10260
            </p>
            <span class="h7 px-2">Email <a href="mailto:services@enscribe.co">services@enscribe.co</a></span>
            <span class="h7 px-2">โทร <a href="tel:+66865722966">0865722966</a></span>
          </div>
          <div class="col-12 col-sm-auto">
            <a class="h6" href="https://app-qa.enscribe.co/th/privacy-policy">นโยบายความเป็นส่วนตัว</a>
          </div>
          <div class="col-12 my-2 my-sm-0 col-sm-auto">
            <a class="h6" href="https://app-qa.enscribe.co/th/data-protection-policy">นโยบายการคุ้มครองข้อมูล</a>
          </div>
          <div class="col-12 col-sm-auto">
            <a class="h6" href="https://app-qa.enscribe.co/th/terms-and-conditions">ข้อตกลงและเงื่อนไข</a>
          </div>
        </div>
      </div>
    </div>
  </div> 
`;

Vue.component('foot-bar', {
  template: footBar,
});
