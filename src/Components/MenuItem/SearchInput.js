import React from "react";
import { MenuSearchInput } from "./styles";

export default function SearchInput() {
  return (
    <MenuSearchInput title="Submit" >
      <svg width="29" height="24" fill="none">
        <path
          d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm9.998 2-4.35-4.35"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        className="searchArea"
        type="text"
        placeholder="Search Rockstar Games"
        title="Site" 
      />
    </MenuSearchInput>
  );
}
