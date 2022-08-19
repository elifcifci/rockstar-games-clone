import React from "react";
import { MenuForm } from "./styles";

export default function SearchInput() {
  return (
    <MenuForm>
      <svg width="29" height="24" fill="none">
        <path
          d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm9.998 2-4.35-4.35"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <input
        className="searchArea"
        type="text"
        placeholder="Search Rockstar Games"
      />
    </MenuForm>
  );
}
