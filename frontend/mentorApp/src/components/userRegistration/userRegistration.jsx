import React from "react";
import "./userRegistration.css";

function userRegistration() {
  return (
    <>
      <div height="10px" className="sc-fPXMVe fYXBma"></div>
      <div className="h-100">
        <div width="1440" className="sc-iLWXdy bTdCxR">
          <div width="1440" class="sc-DWsrX bslUKk">
            <form class="py-lg-5 mx-auto" style={{maxWidth: "382px"}}>
              <h2 class="sc-fqkvVR jcuFgw mb-32">
                How would you like to be intro'd?
              </h2>
              <div class="d-flex mb-3">
                <div class="sc-jkTpcO bClMlI">
                  <img
                    alt="avatar of user"
                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
                  />
                </div>
                <p class="sc-kAyceB cCBfKf line-height-20">
                  Everyone has a story, what's yours?
                </p>
              </div>
              <div class="mb-4">
                <div class="mb-0 form-group">
                  <div class="position-relative d-flex align-items-center">
                    <textarea
                      name="bio"
                      class="form-control py-3"
                      placeholder="Tell us more about yourself, your goals and what you love!"
                      title="Tell us more about yourself, your goals and what you love!"
                      style={{height: "178px !important"}}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="mb-32">
                <p class="mb-3">Sample bio</p>
                <div class="p-3 muted-grey-bg" style={{borderRadius: "10px"}}>
                  <p class="sc-kAyceB cCBfKf grey-2-text">
                    I am a product designer at Apple who writes about design. I
                    love my doggie (oreo) and enjoy collecting new NFTs during
                    my free time!
                  </p>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center">
                  <a
                    href="/"
                    class="d-flex align-items-center font-weight-700 grey-1-text text-decoration-none mr-28"
                  >
                    <svg
                      fill="none"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5 19L8.5 12L15.5 5"
                        stroke="var(--black)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span class="ml-2">Back</span>
                  </a>
                </div>
                <button
                  type="submit"
                  class="sc-jlZhew cKRinY text-truncate px-5 btn--default btn btn-default"
                  disabled=""
                >
                  Continue
                </button>
              </div>
            </form>
          </div>

          <div width="1440" className="sc-DWsrX bslUKk">
            <form className="py-lg-5 mx-auto" style={{ maxWidth: "382px" }}>
              <h2 className="sc-fqkvVR jcuFgw mb-32">
                Great! What’s your superpower?
              </h2>
              <div className="form-group">
                <label className="form-label" for="expertise">
                  What’s your expertise?
                </label>
                <div className="position-relative d-flex align-items-center">
                  <div className="sc-ikkxIA borKZa form-control px-0 --border-none css-b62m3t-container">
                    <span
                      id="react-select-4-live-region"
                      className="css-7pg0cj-a11yText"
                    ></span>
                    <span
                      aria-live="polite"
                      aria-atomic="false"
                      aria-relevant="additions text"
                      className="css-7pg0cj-a11yText"
                    ></span>
                    <div className="css-co5psr-control">
                      <div className="css-a3yyxf">
                        <div
                          className="css-1jqq78o-placeholder"
                          id="react-select-4-placeholder"
                        >
                          Select expertise
                        </div>
                        <div className="css-19bb58m" data-value="">
                          <input
                            className=""
                            autocapitalize="none"
                            autocomplete="off"
                            autocorrect="off"
                            id="react-select-4-input"
                            spellcheck="false"
                            tabindex="0"
                            type="text"
                            aria-autocomplete="list"
                            aria-expanded="false"
                            aria-haspopup="true"
                            role="combobox"
                            aria-describedby="react-select-4-placeholder"
                            value=""
                            style={{
                              color: "inherit",
                              background: "0px center",
                              opacity: "1",
                              width: "100%",
                              gridArea: "1 / 2 / auto / auto",
                              font: "inherit",
                              minWidth: "2px",
                              border: "0px",
                              margin: "0px",
                              outline: "0px",
                              padding: "0px",
                            }}
                          />
                        </div>
                      </div>
                      <div className="css-1oek7sh">
                        <div
                          className="css-1xc3v61-indicatorContainer"
                          aria-hidden="true"
                        >
                          <svg
                            height="20"
                            width="20"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            focusable="false"
                            className="css-8mmkcg"
                          >
                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <input name="expertise" type="hidden" value="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" for="employer">
                  Company/School
                </label>
                <input
                  name="employer"
                  placeholder="Eg. Apple, UCLA, etc."
                  type="text"
                  id="employer"
                  className="form-control"
                  value=""
                />
              </div>
              <div className="form-group">
                <label className="form-label" for="title">
                  Your title
                </label>
                <input
                  name="title"
                  placeholder="Eg. Product Designer, Student etc. "
                  type="text"
                  id="title"
                  className="form-control"
                  value=""
                />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <a
                    href="/"
                    className="d-flex align-items-center font-weight-700 grey-1-text text-decoration-none mr-28"
                  >
                    <svg
                      fill="none"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5 19L8.5 12L15.5 5"
                        stroke="var(--black)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="ml-2">Back</span>
                  </a>
                </div>
                <button
                  type="submit"
                  className="sc-jlZhew cKRinY text-truncate px-5 btn--default btn btn-default"
                  disabled=""
                >
                  Continue
                </button>
              </div>
            </form>
          </div>

          <div width="1440" className="sc-DWsrX bslUKk">
            <form className="py-lg-5 mx-auto" style={{ maxWidth: "382px" }}>
              <h2 className="sc-fqkvVR jcuFgw mb-32">
                Tell us your origin story
              </h2>
              <div className="mb-4 form-group">
                <label className="mb-3 form-label" for="profile">
                  Upload profile photo
                </label>
                <div className="d-flex align-items-center">
                  <div>
                    <div className="sc-enkILE hKKIbj cursor-pointer grey-3-bg mb-2">
                      <div className="sc-enkILE hKKIbj icon">
                        <svg
                          fill="none"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 14V17.3333C19 17.7754 18.8361 18.1993 18.5444 18.5118C18.2527 18.8244 17.857 19 17.4444 19H6.55556C6.143 19 5.74733 18.8244 5.45561 18.5118C5.16389 18.1993 5 17.7754 5 17.3333V14"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M16 9L12 5L8 9"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M12 5V14"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="ml-3">
                    <a
                      href="/"
                      className="teal-text text-decoration-none font-weight-600"
                    >
                      Select a file
                    </a>
                    <p className="sc-jXbUNg kFsvSZ grey-2-text mt-1">
                      Make sure the file is below 2mb
                    </p>
                  </div>
                </div>
                <input
                  name="profile"
                  accept="image/*"
                  type="file"
                  id="profile"
                  className="d-none form-control-file"
                />
              </div>
              <div className="form-group">
                <label className="form-label" for="employer">
                  Your full name
                </label>
                <input
                  name="name"
                  placeholder="First and last name"
                  type="text"
                  id="employer"
                  className="form-control"
                  value=""
                />
              </div>
              <div className="form-group">
                <label className="form-label" for="gender">
                  What gender do you identify as?
                </label>
                <div className="position-relative d-flex align-items-center">
                  <div className="sc-ikkxIA borKZa form-control px-0 --border-none css-b62m3t-container">
                    <span
                      id="react-select-2-live-region"
                      className="css-7pg0cj-a11yText"
                    ></span>
                    <span
                      aria-live="polite"
                      aria-atomic="false"
                      aria-relevant="additions text"
                      className="css-7pg0cj-a11yText"
                    ></span>
                    <div className="css-co5psr-control">
                      <div className="css-a3yyxf">
                        <div
                          className="css-1jqq78o-placeholder"
                          id="react-select-2-placeholder"
                        >
                          Select one
                        </div>
                        <div className="css-19bb58m" data-value="">
                          <input
                            className=""
                            autoCapitalize="none"
                            autoComplete="off"
                            autoCorrect="off"
                            id="react-select-2-input"
                            spellCheck="false"
                            tabIndex="0"
                            type="text"
                            aria-autoComplete="list"
                            aria-expanded="false"
                            aria-haspopup="true"
                            role="combobox"
                            aria-describedby="react-select-2-placeholder"
                            value=""
                            style={{
                              color: "inherit",
                              background: "0px center",
                              opacity: "1",
                              width: "100%",
                              gridArea: "1 / 2 / auto / auto",
                              font: "inherit",
                              minWidth: "2px",
                              border: "0px",
                              margin: "0px",
                              outline: "0px",
                              padding: "0px",
                            }}
                          />
                        </div>
                      </div>
                      <div className="css-1oek7sh">
                        <div
                          className="css-1xc3v61-indicatorContainer"
                          aria-hidden="true"
                        >
                          <svg
                            height="20"
                            width="20"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            focusable="false"
                            className="css-8mmkcg"
                          >
                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <input name="gender" type="hidden" value="" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" for="country_iso">
                  Which country do you live in?
                </label>
                <div className="position-relative d-flex align-items-center">
                  <div className="sc-ikkxIA borKZa form-control px-0 --border-none css-b62m3t-container">
                    <span
                      id="react-select-3-live-region"
                      className="css-7pg0cj-a11yText"
                    ></span>
                    <span
                      aria-live="polite"
                      aria-atomic="false"
                      aria-relevant="additions text"
                      className="css-7pg0cj-a11yText"
                    ></span>
                    <div className="css-co5psr-control">
                      <div className="css-a3yyxf">
                        <div
                          className="css-1jqq78o-placeholder"
                          id="react-select-3-placeholder"
                        >
                          Eg. USA, India, etc
                        </div>
                        <div className="css-19bb58m" data-value="">
                          <input
                            className=""
                            autoCapitalize="none"
                            autoComplete="off"
                            autoCorrect="off"
                            id="react-select-3-input"
                            spellCheck="false"
                            tabIndex="0"
                            type="text"
                            aria-autoComplete="list"
                            aria-expanded="false"
                            aria-haspopup="true"
                            role="combobox"
                            aria-describedby="react-select-3-placeholder"
                            value=""
                            style={{
                              color: "inherit",
                              background: "0px center",
                              opacity: "1",
                              width: "100%",
                              gridArea: "1 / 2 / auto / auto",
                              font: "inherit",
                              minWidth: "2px",
                              border: "0px",
                              margin: "0px",
                              outline: "0px",
                              padding: "0px",
                            }}
                          />
                        </div>
                      </div>
                      <div className="css-1oek7sh">
                        <div
                          className="css-1xc3v61-indicatorContainer"
                          aria-hidden="true"
                        >
                          <svg
                            height="20"
                            width="20"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            focusable="false"
                            className="css-8mmkcg"
                          >
                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <input name="country_iso" type="hidden" value="" />
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-32">
                <div className="d-flex align-items-center">
                  <a
                    href="/"
                    className="d-flex align-items-center font-weight-700 grey-1-text text-decoration-none mr-28"
                  >
                    <svg
                      fill="none"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5 19L8.5 12L15.5 5"
                        stroke="var(--black)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="ml-2">Back</span>
                  </a>
                </div>
                <button
                  type="submit"
                  className="sc-jlZhew cKRinY text-truncate px-5 btn--default btn btn-default"
                  disabled=""
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
          <div className="sc-dOoqMo cfoIIg">
            <div className="side__content">
              <div>
                <div>
                  <div className="sc-djTQaJ jqbBId"></div>
                  <div className="sc-gVJvzJ jBucMf">
                    <div className="sc-iaJaUu caRObm">
                      <div className="sc-bStcSt YbuBF">
                        <div className="sc-eONNys eWJztA"></div>
                      </div>
                      <div className="sc-dISpDn cptxEY">
                        <div className="sc-gFnajm ebvKbH">
                          <h2 className="sc-fqkvVR jcuFgw flex-wrap mb-12"></h2>
                          <div
                            className="react-loading-skeleton skeleton__header css-k31kfd-skeletonStyles-Skeleton"
                            style={{ width: "220px", height: "32px" }}
                          >
                            ‌
                          </div>
                          <p className="sc-gsFSXq fJiOdH name__role">
                            <div
                              className="react-loading-skeleton skeleton__header css-k31kfd-skeletonStyles-Skeleton"
                              style={{ width: "177px", height: "22px" }}
                            >
                              ‌
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="sc-fUnMCh epgYHv">
                      <nav
                        className="sc-feoqov kzOmOc nav nav-tabs"
                        role="tablist"
                      >
                        <a
                          href="#"
                          role="tab"
                          data-rb-event-key="overview"
                          aria-selected="true"
                          className="nav-item nav-link active"
                        >
                          <span>Overview</span>
                        </a>
                        <a
                          href="#"
                          role="tab"
                          data-rb-event-key="my-mentors"
                          aria-selected="false"
                          className="nav-item nav-link"
                        >
                          <span>My mentors</span>
                        </a>
                      </nav>
                      <div className="tab-content">
                        <div
                          role="tabpanel"
                          aria-hidden="false"
                          className="fade tab-pane active show"
                        ></div>
                        <div
                          role="tabpanel"
                          aria-hidden="true"
                          className="fade tab-pane"
                        ></div>
                      </div>
                    </div>
                    <div className="sc-btwKTd cohHKY">
                      <div style={{ marginBottom: "8rem" }}>
                        <div className="sc-eldPxv koBGND mb-32" width="1440">
                          <div
                            className="react-loading-skeleton skeleton__header css-k31kfd-skeletonStyles-Skeleton"
                            style={{ width: "100%", height: "16px" }}
                          >
                            ‌
                          </div>
                          <div
                            className="react-loading-skeleton skeleton__header css-k31kfd-skeletonStyles-Skeleton"
                            style={{ width: "100%", height: "16px" }}
                          >
                            ‌
                          </div>
                          <div
                            className="react-loading-skeleton skeleton__header css-k31kfd-skeletonStyles-Skeleton"
                            style={{ width: "100%", height: "16px" }}
                          >
                            ‌
                          </div>
                        </div>
                        <div className="mb-4">
                          <div
                            className="react-loading-skeleton skeleton__header mb-12 css-k31kfd-skeletonStyles-Skeleton"
                            style={{ width: "85px", height: "16px" }}
                          >
                            ‌
                          </div>
                          <div className="d-flex" style={{ gap: "10px" }}>
                            <div
                              className="react-loading-skeleton skeleton__desc css-k31kfd-skeletonStyles-Skeleton"
                              style={{
                                borderRadius: "100px",
                                width: "87px",
                                height: "36px",
                              }}
                            >
                              ‌
                            </div>
                            <div
                              className="react-loading-skeleton skeleton__desc css-k31kfd-skeletonStyles-Skeleton"
                              style={{
                                borderRadius: "100px",
                                width: "87px",
                                height: "36px",
                              }}
                            >
                              ‌
                            </div>
                          </div>
                        </div>
                        <div className="sc-djVXDX bBuYCD">
                          <div>
                            <div
                              className="react-loading-skeleton skeleton__header mb-12 css-k31kfd-skeletonStyles-Skeleton"
                              style={{ width: "85px", height: "16px" }}
                            >
                              ‌
                            </div>
                            <div className="d-flex" style={{ gap: "10px" }}>
                              <div
                                className="react-loading-skeleton skeleton__desc css-k31kfd-skeletonStyles-Skeleton"
                                style={{ width: "85px", height: "36px" }}
                              >
                                ‌
                              </div>
                              <div
                                className="react-loading-skeleton skeleton__desc css-k31kfd-skeletonStyles-Skeleton"
                                style={{ width: "85px", height: "36px" }}
                              >
                                ‌
                              </div>
                              <div
                                className="react-loading-skeleton skeleton__desc css-k31kfd-skeletonStyles-Skeleton"
                                style={{ width: "85px", height: "36px" }}
                              >
                                ‌
                              </div>
                            </div>
                          </div>
                          <div>
                            <div
                              className="react-loading-skeleton skeleton__header mb-12 css-k31kfd-skeletonStyles-Skeleton"
                              style={{ width: "85px", height: "16px" }}
                            >
                              ‌
                            </div>
                            <div className="d-flex" style={{ gap: "10px" }}>
                              <div
                                className="react-loading-skeleton skeleton__desc css-k31kfd-skeletonStyles-Skeleton"
                                style={{ width: "85px", height: "36px" }}
                              >
                                ‌
                              </div>
                              <div
                                className="react-loading-skeleton skeleton__desc css-k31kfd-skeletonStyles-Skeleton"
                                style={{ width: "85px", height: "36px" }}
                              >
                                ‌
                              </div>
                              <div
                                className="react-loading-skeleton skeleton__desc css-k31kfd-skeletonStyles-Skeleton"
                                style={{ width: "85px", height: "36px" }}
                              >
                                ‌
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sc-dBFDNq kRzhQK">
                          <div>
                            <p className="sc-gsFSXq fJiOdH mb-3 font-weight-700">
                              <div
                                className="react-loading-skeleton skeleton__header css-k31kfd-skeletonStyles-Skeleton"
                                style={{ width: "198px", height: "31px" }}
                              >
                                ‌
                              </div>
                            </p>
                            <div className="sc-gvPdwL fgPTPp">
                              <div className="sc-pKqro zuvcS">
                                <div className="item__photo"></div>
                                <div className="item__content">
                                  <p className="sc-gsFSXq fJiOdH mb-1 font-weight-500">
                                    <div
                                      className="react-loading-skeleton skeleton__header mb-1 css-k31kfd-skeletonStyles-Skeleton"
                                      style={{ width: "143px", height: "24px" }}
                                    >
                                      ‌
                                    </div>
                                  </p>
                                  <p className="sc-jXbUNg kFsvSZ">
                                    <div
                                      className="react-loading-skeleton skeleton__header css-k31kfd-skeletonStyles-Skeleton"
                                      style={{ width: "43px", height: "16px" }}
                                    >
                                      ‌
                                    </div>
                                  </p>
                                </div>
                                <div className="item__badge">present</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default userRegistration;
