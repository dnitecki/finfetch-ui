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
} from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import Moment from "moment";
import { NavLink } from "react-router-dom";

export default function Account() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState("");
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
      } catch (error) {
        setInfo({});
        console.log(error);
      }
    };
    updateUserAccount();
  }, []);

  const copyClick = () => {
    setText(info?.key);
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const regenClick = () => {
    setRegen(true);
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
        <div className="account-header-text">Account Information</div>
        <div className="account-info">
          <div className="account-email">
            <FontAwesomeIcon icon={faUser} />
            {info?.email}
          </div>
          <div className="account-created">Account Created:&nbsp;{created}</div>
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
                <button className="account-api-docs-button">API Docs</button>
              </NavLink>
              <button className="account-api-regen-button" onClick={regenClick}>
                Regenerate Key
                <FontAwesomeIcon className="rotate-icon" icon={faRotate} />
              </button>
            </div>
            <div className="account-logout">
              <button className="account-logout-button">Log Out</button>
            </div>
          </div>
        </div>
      </div>
      <div className="account-alerts">
        <div
          className={
            isCopied
              ? "account-copy-success success-on"
              : "account-copy-success success-off"
          }
        >
          <FontAwesomeIcon icon={faCheck} />
          <div className="account-success-text">API Key Copied!</div>
        </div>
        <div
          className={
            regen
              ? "account-regenerate success-on"
              : "account-regenerate success-off"
          }
        >
          <FontAwesomeIcon icon={faCircleExclamation} />
          <div className="account-success-text">Not yet available</div>
        </div>
      </div>
    </div>
  );
}
