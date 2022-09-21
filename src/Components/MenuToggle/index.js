import React from "react";
import { Button, IconParts } from "./style";

export const MenuToggleIcon = ({ toggle }) => (
  <Button onClick={toggle}>
    <IconParts
      variants={{
        closed: { opacity: 1 },
        open: { y: 8 },
      }}
    />
    <IconParts
      variants={{
        closed: { opacity: 1 },
        open: { opacity: 1 },
      }}
    />
    <IconParts
      variants={{
        closed: { opacity: 1 },
        open: { y: -8 },
      }}
    />
  </Button>
);
