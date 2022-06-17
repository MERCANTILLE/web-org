import React from "react";
import {
  Table,
  Button,
  Input,
  MenuStripe,
  LeftSubmenu,
  RightSubmenu,
} from "../components";

import { RulesData, RulesColumns } from "../data/RulesData";

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
      <Table
        data={RulesData}
        columns={RulesColumns}
        hover={true}
        striped={false}
      />
    </div>
  );
};

export default Rules;
