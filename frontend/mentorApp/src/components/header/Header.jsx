import React from "react";
import "./header.css";
import mentorLogoPng from "../../assets/images/mentorlogo.png";
import mentorLogoSvg from "../../assets/images/mentorlogo.svg";
import { Link } from "react-router-dom";

function Header() {
  const nav_links = [
    
    {
      path: "/about",
      display: "About Us",
    },
    {
      path: "/findMentor",
      display: "Find Mentor",
    },
    {
      path: "/becomeMentor",
      display: "Become Mentor",
    },
    {
      path: "/contact",
      display: "Contact Us",
    }
  ];
  return (
    <>
      <div className="sc-isRoRg fuhKSU">
        <div className="sc-satoz gqKKum container-fluid">
          <div className="nav-left-container">
            <div className="sc-fsvrbR eoXzvi">
              <Link
                to={"/"}
                aria-label="Mentor logo"
                className="sc-kFWlue kfPNKu"
              >
                <img src={mentorLogoSvg} alt="Mentor logo" width={"100"} />
              </Link>
            </div>
          </div>
          <div className="nav-right-container">
            <div className="sc-eNSrOW iSkied">
              <div className="sc-dhFUGM hzgUZB">
                {nav_links.map((item, index) => (
                  <Link className="nav__item" to={item.path}>
                    <span>{item.display}</span>
                  </Link>
                ))}

                <div className="nav__item px-1">
                  <button
                    type="button"
                    className="sc-jlZhew cKRinY text-truncate px-4 mr-0 btn--default-outline btn btn-default"
                  >
                    Log in
                  </button>
                </div>
                <div className="nav__item pr-0 pl-1">
                  <button
                    type="button"
                    className="sc-jlZhew cKRinY text-truncate px-4 btn--default btn btn-default"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sc-hBtRBD cakEth sidenav">
        <div className="d-flex justify-content-end mb-1 px-4 pt-12 pb-0">
          <a
            href="/"
            aria-label="close icon"
            className="black-text text-decoration-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="32"
              width="32"
              fill="var(--black)"
              aria-hidden="true"
            >
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
            </svg>
          </a>
        </div>
        <div className="mt-12">
          <a
            aria-label="Find a mentor"
            href="https://Mentor.org/explore?tab=mentors"
            className="sc-kCMKrZ dlzjez"
          >
            <span className="action__content">
              <svg
                fill="none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                variant="outline"
              >
                <path
                  d="M11.7666 20.7552C16.7308 20.7552 20.7552 16.7309 20.7552 11.7666C20.7552 6.80236 16.7308 2.77805 11.7666 2.77805C6.80235 2.77805 2.77804 6.80236 2.77804 11.7666C2.77804 16.7309 6.80235 20.7552 11.7666 20.7552Z"
                  stroke="var(--grey-2)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M18.0183 18.4851L21.5423 22"
                  stroke="var(--grey-2)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Find a mentor</span>
            </span>
            <svg
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 5L15.5 12L8.5 19"
                stroke="var(--grey-3)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
          <hr className="sc-dJiZtA ffmvFq" />
          <a
            aria-label="Become a mentor"
            href="https://Mentor.org/become-a-mentor"
            className="sc-kCMKrZ dlzjez"
          >
            <span className="action__content">
              <svg
                fill="none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                variant="outline"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.3344 2.75018H7.66543C4.64443 2.75018 2.75043 4.88918 2.75043 7.91618V16.0842C2.75043 19.1112 4.63543 21.2502 7.66543 21.2502H16.3334C19.3644 21.2502 21.2504 19.1112 21.2504 16.0842V7.91618C21.2504 4.88918 19.3644 2.75018 16.3344 2.75018Z"
                  stroke="var(--grey-2)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M8.43994 12.0002L10.8139 14.3732L15.5599 9.62726"
                  stroke="var(--grey-2)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Become a mentor</span>
            </span>
            <svg
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 5L15.5 12L8.5 19"
                stroke="var(--grey-3)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
          <hr className="sc-dJiZtA ffmvFq" />
          <a
            aria-label="Hire Talents"
            href="https://Mentor.org/talents"
            className="sc-kCMKrZ dlzjez"
          >
            <span className="action__content">
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                variant="outline"
              >
                <path
                  d="M9.80492 17.2954C13.9418 17.2954 17.2954 13.9418 17.2954 9.80492C17.2954 5.66805 13.9418 2.31445 9.80492 2.31445C5.66805 2.31445 2.31445 5.66805 2.31445 9.80492C2.31445 13.9418 5.66805 17.2954 9.80492 17.2954Z"
                  stroke="var(--grey-2)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M15.0156 15.4043L17.9523 18.3334"
                  stroke="var(--grey-2)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M9.75398 11.0334C11.2933 11.0334 12.5412 9.78549 12.5412 8.24617C12.5412 6.70685 11.2933 5.45898 9.75398 5.45898C8.21466 5.45898 6.9668 6.70685 6.9668 8.24617C6.9668 9.78549 8.21466 11.0334 9.75398 11.0334Z"
                  stroke="var(--grey-2)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M5 15C4.99925 14.8041 5.37667 14.5203 5.46175 14.3437C5.72872 13.8098 6.48158 13.5268 7.10629 13.3987C7.55684 13.3026 8.0136 13.2383 8.47319 13.2065C9.32406 13.1317 10.1799 13.1317 11.0308 13.2065C11.4903 13.2387 11.9471 13.3029 12.3977 13.3987C13.0224 13.5268 13.7752 13.7831 14.0422 14.3437C14.2133 14.7035 14.457 15.0189 14.4996 15.5"
                  stroke="var(--grey-2)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Hire Talents</span>
            </span>
            <svg
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 5L15.5 12L8.5 19"
                stroke="var(--grey-3)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
          <hr className="sc-dJiZtA ffmvFq" />
          <a
            aria-label="Courses"
            href="https://courses.Mentor.org/"
            className="sc-kCMKrZ dlzjez"
          >
            <span className="action__content">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                variant="outline"
              >
                <path
                  d="M20 19V16H7C5.34315 16 4 17.3431 4 19M8.8 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8V5.2C20 4.07989 20 3.51984 19.782 3.09202C19.5903 2.71569 19.2843 2.40973 18.908 2.21799C18.4802 2 17.9201 2 16.8 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22Z"
                  stroke="var(--grey-2)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Courses</span>
              <span
                className="sc-fHjqPf kZyMWc undefined white-text text-capitalize font-weight-700 ml-2"
                size="22"
                style={{ background: "var(--adp-grad-2)" }}
              >
                New
              </span>
            </span>
            <svg
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 5L15.5 12L8.5 19"
                stroke="var(--grey-3)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
          <div className="sc-eldPxv ddyEfb py-32 px-4" width="1440">
            <button
              aria-label="Log in"
              type="button"
              className="sc-jlZhew cKRinY text-truncate undefined btn--default-outline btn btn-default"
            >
              Log in
            </button>
            <button
              aria-label="Sign up"
              type="button"
              className="sc-jlZhew cKRinY text-truncate undefined btn--default btn btn-default"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
