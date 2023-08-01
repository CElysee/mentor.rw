import React , { useState }from "react";
import { useNavigate } from "react-router-dom";
import "./signUp.css"

function signUp() {
    const [isMemberActive, setMemberActive] = useState(false);
    const [isMentorActive, setMentorActive] = useState(false);
    const navigation = useNavigate();
    const handleMember = () => {
      alert("clicked")
        // Toggle the class name when the div is clicked
        setMemberActive(!isMemberActive);
        setMentorActive(false);
        const navigateToMember = () => {
            navigate('/set-up-member');
        };
      };
    const handleMentor = () => {
        // Toggle the class name when the div is clicked
        setMentorActive(!isMentorActive);
        setMemberActive(false);
      };
      const divMember = isMemberActive ? 'checkbox' : '';
      const divMentor = isMentorActive ? 'checkbox' : '';
  return (
    <>
      <div className="">
        <div width="1440" className="sc-fscmHZ jxWFyJ">
          <div
            className="sc-iowXnY jgrfps mx-auto d-flex"
            width="1440"
            style={{ maxWidth: "628px" }}
          >
            <div className="sc-dBFDNq hCtyGq w-100 mx-2">
              <h2
                className="sc-fqkvVR sc-ggqIjW jcuFgw gKfFgF font-weight-600 mb-3 mx-0"
                style={{ maxWidth: "527px" }}
              >
                Hello! What brings you to ADPList?
              </h2>
              <p className="sc-kAyceB cCBfKf mb-32" style={{maxWidth: "412px"}}>
                Connect with our community of mentors and users from 141+
                countries around the world.
              </p>
              <div
                className="sc-eldPxv ejBrmT justify-content-center"
                width="1440"
              >
                <div className="sc-djVXDX nTGop" onClick={handleMember}>
                  <div className={divMember + " " + "mt-n3 ml-auto"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      height="16"
                      width="16"
                      fill="#fff"
                      className="m-auto"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none"></path>
                      <path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z"></path>
                    </svg>
                  </div>
                  <img
                    src="https://app.adplist.org/illustrations/auth/community-user.svg"
                    width="70"
                    className=""
                  />
                  <p className="tab__header mb-3">Community member</p>
                  <div width="1440" className="sc-eldPxv bJvagg">
                    <p className="tab__caption">
                      ✓︎ &nbsp;Book sessions with ease
                    </p>
                    <p className="tab__caption">
                      ✓︎ &nbsp;Engage in interactive sessions
                    </p>
                    <p className="tab__caption">
                      ✓︎ &nbsp;Discover new career opportunities
                    </p>
                  </div>
                </div>
                <div className="sc-djVXDX nTGop" onClick={handleMentor}>
                <div className={divMentor + " " + "mt-n3 ml-auto"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      height="16"
                      width="16"
                      fill="#fff"
                      className="m-auto"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none"></path>
                      <path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z"></path>
                    </svg>
                  </div>
                  <img
                    src="https://app.adplist.org/illustrations/auth/be-a-mentor.svg"
                    width="70"
                    className=""
                  />
                  <p className="tab__header mb-3">I want to be a mentor</p>
                  <div width="1440" className="sc-eldPxv bJvagg">
                    <p className="tab__caption">
                      ✓︎ &nbsp;Get booked easily by members
                    </p>
                    <p className="tab__caption">✓︎ &nbsp;Receive reviews</p>
                    <p className="tab__caption">
                      ✓︎ &nbsp;Unlock rewards and achievements
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="sc-eldPxv kkakQw sc-gvPdwL flEGts justify-content-center"
                width="1440"
              >
                <div className="mb-3">
                  <h3 className="sc-dcJsrY eXeELN font-weight-700 mb-12">
                    Community Guidelines
                  </h3>
                  <p
                    className="sc-kAyceB cCBfKf grey-2-text"
                    style={{maxWidth: "443px"}}
                  >
                    To continue please read the community guidelines. This
                    allows us to maintain a trustworthy experience for all.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sc-lmUcrn jnwTjd">
            <div className="side__content">
              <div>
                <h2 className="sc-fqkvVR jcuFgw font-weight-600 mb-3 side__content__header">
                  Accelerate your career growth.
                </h2>
                <div className="side__content__desc">
                  <p className="sc-kAyceB cCBfKf white-text font-weight-400 mb-3">
                    Join members from over 141+ countries to learn from curated
                    mentors in tech.
                  </p>
                  <button
                    type="button"
                    className="sc-jlZhew cKRinY text-truncate sc-kpKSZj drNhfw btn btn-default"
                  >
                    <svg
                      fill="none"
                      width="24"
                      height="24"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="16"
                        cy="16"
                        r="14.5"
                        fill="#F1F2F4"
                        stroke="#E3E6EA"
                        strokeWidth="3"
                      ></circle>
                      <path
                        d="M21.4043 15.8747C21.7376 16.0671 21.7376 16.5483 21.4043 16.7407L14.1351 20.9376C13.8017 21.1301 13.3851 20.8895 13.3851 20.5046L13.3851 12.1108C13.3851 11.7259 13.8017 11.4853 14.1351 11.6778L21.4043 15.8747Z"
                        fill="#384853"
                      ></path>
                    </svg>
                    <span className="ml-2">Learn how ADPList works</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default signUp;
