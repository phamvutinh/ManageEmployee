import React from "react";
import { SearchInput } from "components";
import AvatarComponent from "components/Avatar";
import WrapperTab from "./WrapperTab";

function Manage() {
  return (
    <div className="manage-page">
      <div className="search">
        <SearchInput placeholder="Search by name or email" />
        <AvatarComponent size={42} />
      </div>
      <div className="manage-page__tabs">
        <WrapperTab />
      </div>
    </div>
  );
}

export default Manage;
