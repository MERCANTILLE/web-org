import React from "react";
import {
  Table,
  Button,
  Input,
  MenuStripe,
  LeftSubmenu,
  RightSubmenu,
} from "../components";

import { TableData, Columns } from "../data/TableData";

const Rules = () => {
  return (
    <div>
      <MenuStripe>
        <LeftSubmenu>
          <Button text="Add Rule"></Button>
          <a onClick={() => {}}>Edit Rules</a>
        </LeftSubmenu>
        <RightSubmenu>
          <Input placeholder="Filter"></Input>
        </RightSubmenu>
      </MenuStripe>
      <Table data={TableData} columns={Columns} hover={true} striped={false} />
    </div>
  );
};

export default Rules;
