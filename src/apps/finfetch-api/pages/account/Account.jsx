import React, { useEffect, useState } from "react";
import "./Account.scss";
import { Helmet } from "react-helmet";
import { getUserAccount } from "../../../../requests/Requests";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRotate } from "@fortawesome/free-solid-svg-icons";

export default function Account() {
  const [info, setInfo] = useState({});

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
  return (
    <div className="account">
      <Helmet>
        <title>FinFetch | Account</title>
      </Helmet>
      <div className="account-container">
        <div className="account-header-text">Account</div>
        <div className="account-info">
          <div>
            <FontAwesomeIcon icon={faUser} />
            &nbsp;{info?.email}
          </div>
          <div>Account Created:&nbsp;{info?.created}</div>
          <div className="account-button-container">
            <div className="account-buttons">
              <button className="account-api-docs-button">API Docs</button>
              <button className="account-api-regen-button">
                Regenerate Key
                <FontAwesomeIcon icon={faRotate} />
              </button>
            </div>
            <div className="account-logout">
              <button className="account-logout-button">Log Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
