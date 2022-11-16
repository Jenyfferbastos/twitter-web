import "./style.css";
import LogoTwitter from "../../assets/img/LogoTwitter.svg";
import LogoGoogle from "../../assets/img/google-icon.svg";
import LogoApple from "../../assets/img/logo-apple.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export function SignUpContainer() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="signup-container">
      <div className="signup-container-acess">
        <img className="img-logo-twitter" src={LogoTwitter}></img>
        <h1 className="title-signup">Happening now</h1>
        <h2 className="title-secondary-signup">Join Twitter today</h2>
        <button className="buttom-signup">
          <img src={LogoGoogle} />
          Sign up with Google
        </button>
        <button className="buttom-signup">
          <img src={LogoApple} />
          Sign up with Apple
        </button>
        <button className="buttom-signup" onClick={toggleModal}>
          Sign up with phone or email
        </button>

        <div className="text-signup">
          <p>
            By singing up you agree to the
            <Link className="links-signup" to="/Error">
              {" "}
              Terms of Service{" "}
            </Link>
            and
            <Link className="links-signup" to="/Error">
              {" "}
              Privacy <br />
              Policy
            </Link>
            , including
            <Link className="links-signup" to="/Error">
              {" "}
              Cookie Use
            </Link>
            .
          </p>
          <p className="have-login">
            Already have an account?
            <Link className="links-signup" to="/login">
              {" "}
              Log in
            </Link>
          </p>
        </div>
      </div>
      <footer className="footer-signup">
        <Link to="">About</Link>
        <Link to="">Help Center</Link>
        <Link to="">Terms of Service</Link>
        <Link to="">Privacy Policy</Link>
        <Link to="">Cookie Policy</Link>
        <Link to="">Ads info</Link>
        <Link to="">Blog</Link>
        <Link to="">Status</Link>
        <Link to="">Carrres</Link>
        <Link to="">rand Resources</Link>
        <Link to="">Advertsing</Link>
        <Link to="">Marketing</Link>
        <Link to="">Twitter for Business</Link>
        <Link to="">Developers</Link>
        <Link to="">Directory</Link>
        <Link to="">Settings</Link>
        <Link to="">© 2021 Twitter, Inc.</Link>
      </footer>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlap"></div>
          <div className="modal-container">
            <img src={LogoTwitter} className="img-signup-modal" />
            <form className="form-signup-modal">
              <label className="label-signup-modal">Create an account</label>
              <input
                className="input-signup-modal"
                type="text"
                placeholder="Name"
              />
              <input
                className="input-signup-modal"
                type="text"
                placeholder="Phone number"
              />
              <Link className="link-email-modal" to="">
                Use email
              </Link>
              <h2 className="title-modal">Date of birth</h2>
              <p className="text-modal">
                Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh
                sit. Quis bibendum ante phasellus metus, magna lacinia sed
                augue. Odio enim nascetur leo mauris vel eget. Pretium id
                ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa
                in molestie a sit. Elit congue.
              </p>
              <div className="selects-modal">
                <select className="select-modal select-month-modal" name="">
                  <option>Month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <select className="select-modal select-day-modal" name="">
                  <option>Day</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="1">13</option>
                  <option value="2">14</option>
                  <option value="3">15</option>
                  <option value="4">16</option>
                  <option value="5">17</option>
                  <option value="6">18</option>
                  <option value="7">19</option>
                  <option value="8">20</option>
                  <option value="9">21</option>
                  <option value="10">22</option>
                  <option value="11">23</option>
                  <option value="12">24</option>
                  <option value="4">25</option>
                  <option value="5">26</option>
                  <option value="6">27</option>
                  <option value="7">28</option>
                  <option value="8">29</option>
                  <option value="9">30</option>
                  <option value="10">31</option>
                </select>
                <select
                  className="select-modal select-year-modal"
                  name=""
                  id=""
                >
                  <option>Year</option>
                </select>
              </div>
              <button className="button-submit-form-modal">Next</button>
            </form>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}