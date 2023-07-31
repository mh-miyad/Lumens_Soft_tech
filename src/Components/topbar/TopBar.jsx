const TopBar = () => {
  return (
    <div>
      <section id='topbar'>
        <div className='top-header-main'>
          <div className='max-w-6xl mx-auto '>
            <div className='row'>
              <div className='col-md-12 col-lg-12 col-sm-12'>
                <div className='top-bar-main'>
                  <ul className='tp-bar-con'>
                    <li className='tp-bar-con-list quick-cont'>
                      <a href='https://join.skype.com/invite/sQYngKj9QOUz'>
                        <i className='fa-brands fa-skype'></i>
                      </a>
                    </li>
                    <li className='tp-bar-con-list quick-cont'>
                      <a href='https://wa.me/8801829317005'>
                        <i className='fa-brands fa-whatsapp'></i>
                      </a>
                    </li>
                    <li className='tp-bar-con-list quick-cont-number'>
                      <a
                        href='+8801676-347987
'>
                        <i className='fa-solid fa-phone-flip'></i>
                        +8801676-347987
                      </a>
                    </li>
                    <li className='tp-bar-con-list'>
                      <a
                        href='contactus@lumensofttech.com
'>
                        <i className='fa-solid fa-envelope'></i>
                        contactus@lumensofttech.com
                      </a>
                    </li>
                  </ul>

                  <ul className='tp-bar-social'>
                    <li className='tp-bar-con-social'>
                      <a href='#'>
                        <i className='fa-brands fa-facebook-f'></i>
                      </a>
                    </li>
                    <li className='tp-bar-con-social'>
                      <a href='#'>
                        <i className='fa-brands fa-twitter'></i>
                      </a>
                    </li>
                    <li className='tp-bar-con-social'>
                      <a href='#'>
                        <i className='fa-brands fa-instagram'></i>
                      </a>
                    </li>
                    <li className='tp-bar-con-social'>
                      <a href='#'>
                        <i className='fa-brands fa-pinterest-p'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopBar;
