import React, { useEffect, useState } from "react";
import "./Account.scss";
import { Helmet } from "react-helmet";
import { getUserAccount } from "../../../../requests/Requests";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRotate,
  faCheck,
  faCircleExclamation,
  faArrowRightLong,
  faIdCardClip,
} from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import Moment from "moment";
import { NavLink } from "react-router-dom";

export default function Account() {
  const [userLogged, setUserLogged] = useState(false);
  const [info, setInfo] = useState({});
  const [isCopied, setIsCopied] = useState(false);
  const [regen, setRegen] = useState(false);
  const created =
    info.created === undefined
      ? ""
      : Moment(info.created).format("MMM D, YYYY");

  useEffect(() => {
    const updateUserAccount = async () => {
      try {
        const result = await getUserAccount();
        setInfo(result);
        setUserLogged(true);
      } catch (error) {
        setInfo({});
        setUserLogged(false);
        console.log(error);
      }
    };
    updateUserAccount();
  }, []);

  const copyClick = async () => {
    await navigator.clipboard.writeText(info.key);
    setIsCopied(true);
    setRegen(false);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const regenClick = () => {
    setRegen(true);
    setIsCopied(false);
    setTimeout(() => {
      setRegen(false);
    }, 2000);
  };

  return (
    <div className="account">
      <Helmet>
        <title>FinFetch | Account</title>
      </Helmet>
      <div className="bg-animation">
        <div className="bg-layer-3"></div>
        <div className="bg-layer-4"></div>
      </div>
      <div className="account-container">
        <div className="account-header">
          <div className="account-header-text">
            <FontAwesomeIcon icon={faIdCardClip} />
            Account Info
          </div>
        </div>
        <div className="account-info">
          {userLogged ? (
            <>
              <div className="account-info-header">
                <div className="account-info-icon">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="account-info-data">
                  <div className="account-email">{info?.email}</div>
                  <div className="account-created">
                    Account Created:&nbsp;{created}
                  </div>
                </div>
              </div>
              <label className="key-label" htmlFor="key">
                API Key
              </label>
              <div className="account-key">
                <input
                  className="account-key-input"
                  id="key"
                  type="text"
                  value={info?.key}
                  placeholder="API Key"
                />
                <button className="account-copy" onClick={copyClick}>
                  <div className="account-copy-icon">
                    <FontAwesomeIcon icon={faCopy} />
                  </div>
                </button>
              </div>
              <div className="account-button-container">
                <div className="account-buttons">
                  <NavLink to="/api/docs">
                    <button className="account-api-docs-button">
                      API Docs
                    </button>
                  </NavLink>
                  <button
                    className="account-api-regen-button"
                    onClick={regenClick}
                  >
                    Regenerate Key
                    <FontAwesomeIcon className="rotate-icon" icon={faRotate} />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="account-login">
                <div className="account-login-text">
                  Sign in to view account information
                </div>
                <div className="account-login-button">
                  <NavLink to="/api/signin">
                    <button className="account-api-docs-button">
                      Sign In
                      <FontAwesomeIcon icon={faArrowRightLong} />
                    </button>
                  </NavLink>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div
        className={
          isCopied
            ? "account-copy-success success-on"
            : "account-copy-success success-off"
        }
      >
        <FontAwesomeIcon icon={faCheck} />
        <div className="success-text">API Key Copied!</div>
      </div>
      <div
        className={
          regen
            ? "account-regenerate success-on"
            : "account-regenerate success-off"
        }
      >
        <FontAwesomeIcon icon={faCircleExclamation} />
        <div className="success-text">Not yet available</div>
      </div>
    </div>
  );
}
