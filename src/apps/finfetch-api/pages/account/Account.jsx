import React, { useEffect, useState } from "react";
import "./Account.scss";
import { Helmet } from "react-helmet";
import { getUserAccount } from "../../../../requests/Requests";

export default function Account() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const updateUserAccount = async () => {
      try {
        const result = await getUserAccount();
        setInfo(result);
      } catch (error) {
        if (!error) {
          setInfo({});
          console.log(error);
        }
      }
    };
    updateUserAccount();
  }, []);
  return (
    <div className="account">
      <Helmet>
        <title>FinFetch | Account</title>
      </Helmet>
      <div className="account-header"></div>
      <div className="account-container">
        <div className="account-info">
          <div>ID:&nbsp;{info.id}</div>
          <div>Email:&nbsp;{info.email}</div>
          <div>Account Created:&nbsp;{info.created}</div>
        </div>
      </div>
    </div>
  );
}
