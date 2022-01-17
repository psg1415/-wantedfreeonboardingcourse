import "./App.css";

function App() {
  return (
    <>
      {/*gnb영역S*/}
      <div className="NavBar">
        <div className="MainBar_MainBar">
          <nav className="MainBar_MainBar_nav">
            <div className="MainBar_MainBar_nav_top">
              <div className="MainBar_MainBar_nav_top_logo">
                <button type="button" className="MainBar_hamberger">
                  <img src="https://static.wanted.co.kr/images/icon-menu.png" />
                </button>
                <a href="/" className="MainBar_MainBar_logo">
                  <i className="icon-logo_new"></i>
                </a>
              </div>
              {/*<button id="gnbSignupBtn" className="xsSignUpButton" type="button">
      회원가입하기
</button>*/}
            </div>
            <ul className="Menu_className">
              <li className="xsHomeButton xsOnly selectedNav">
                <a href="/">홈</a>
              </li>
              <li>
                <a href="/">채용</a>
              </li>
              <li>
                <a href="/">이벤트</a>
              </li>
              <li className="smMoreVisible">
                <a href="/">직군별 연봉</a>
              </li>
              <li className="smMoreVisible">
                <a href="/">이력서</a>
              </li>
              <li className="smMoreVisible">
                <a href="/">커뮤니티</a>
              </li>
              <li className="smMoreVisible">
                <a href="/">프리랜서</a>
              </li>
              <li className="smMoreVisible">
                <a href="/">AI 합격예측</a>
              </li>
            </ul>
            <aside className="Aside_className">
              <ul>
                <li className="searchIcon">
                  <button className="searchButton" type="button">
                    <svg
                      xmlns="https://www.w3.org/2000/svg"
                      xmlnsXlink="https://www.w3.org/1999/xlink"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <defs>
                        <path
                          id="qt2dnsql4a"
                          d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
                        ></path>
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <use
                          fill="#333"
                          fillRule="nonzero"
                          stroke="#333"
                          strokeWidth=".3"
                          xlinkHref="#qt2dnsql4a"
                        ></use>
                      </g>
                    </svg>
                  </button>
                </li>
                <li>
                  <button className="signUpButton" type="button">
                    회원가입/로그인
                  </button>
                </li>
                <li className="mdMoreVisible, leftDivision">
                  <a className="dashboardButton" href="/">
                    기업 서비스
                  </a>
                </li>
              </ul>
            </aside>
          </nav>
        </div>
      </div>
      <div className="Padding"></div>
      {/*gnb영역E*/}
      {/*캐러셀S*/}
      <main className="Main">
        <div id="container">
          <div className="slide_wrap">
            <div className="slide_box">
              <div className="slide_list clearfix">
                <div className="slide_content slide01">
                  <p>
                    <img src="https://static.wanted.co.kr/images/banners/1454/e504b006.jpg" />
                  </p>
                </div>
                <div className="slide_content slide02">
                  <p>
                    <img src="https://static.wanted.co.kr/images/banners/1438/015566ac.jpg" />
                  </p>
                </div>
                <div className="slide_content slide03">
                  <p>
                    <img src="https://static.wanted.co.kr/images/banners/1436/e2dd9445.jpg" />
                  </p>
                </div>
                <div className="slide_content slide04">
                  <p>
                    <img src="https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg" />
                  </p>
                </div>
                <div className="slide_content slide05">
                  <p>
                    <img src="https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg" />
                  </p>
                </div>
                <div className="slide_content slide06">
                  <p>
                    <img src="https://static.wanted.co.kr/images/banners/1452/be4ec643.jpg" />
                  </p>
                </div>
                <div className="slide_content slide07">
                  <p>
                    <img src="https://static.wanted.co.kr/images/banners/1453/7a978579.jpg" />
                  </p>
                </div>
                <div className="slide_content slide08">
                  <p>
                    <img src="https://static.wanted.co.kr/images/banners/1434/fdbbcb06.jpg" />
                  </p>
                </div>
                <div className="slide_content slide09">
                  <p>
                    <img src="https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg" />
                  </p>
                </div>
                <div className="slide_content slide10">
                  <p>
                    <img src="https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg" />
                  </p>
                </div>
                <div className="slide_content slide11">
                  <p>
                    <img src="https://static.wanted.co.kr/images/banners/1451/725c6862.jpg" />
                  </p>
                </div>
              </div>
            </div>
            <ul className="slide-pagination"></ul>
          </div>
        </div>
        <button type="button" className="next" aria-label="nextArrowButton">
          <span className="SvgIcon">
            <svg className="SvgIcon_SvgIcon" viewBox="0 0 18 18">
              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
            </svg>
          </span>
        </button>

        <button type="button" className="prev" aria-label="prevArrowButton">
          <span className="SvgIcon">
            <svg className="SvgIcon_SvgIcon" viewBox="0 0 18 18">
              <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
            </svg>
          </span>
        </button>
      </main>
      {/*캐러셀E*/}
    </>
  );
}

export default App;
