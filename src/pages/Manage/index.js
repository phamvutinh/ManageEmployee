import React from "react";
import { SearchInput } from "components";
import Tab from "components/Tabs";
import AvatarComponent from "components/Avatar";

export default function Manage() {
  const fakeList = [{ title: "Department" }, { title: "Employee" }];
  return (
    <div className="manage-page">
      <div className="search">
        <SearchInput placeholder="Search by name or email" />
        <AvatarComponent
          images="https://lh3.googleusercontent.com/a-/AOh14GjO8D5ReG2Ovh2YOvcdK4cBinIyACWDFHzaPspR=s96-c"
          size={42}
        />
      </div>
      <div className="manage-page__tabs">
        <Tab listTab={fakeList} />
      </div>
    </div>
  );
}
