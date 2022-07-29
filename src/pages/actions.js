import React from "react";
import {
  Table,
  Button,
  Input,
  MenuStripe,
  LeftSubmenu,
  RightSubmenu,
} from "../components";
import { ActionsData, ActionsColumns } from "../data/ActionsData";

const Actions = () => {
  const actionList = ActionsData.map((data) => [].concat([], data.actions));
  var finalActions = [];
  const concatActions = actionList.forEach((element) => {
    element.forEach((act) => {
      finalActions.push(act);
    });
  });
  console.log(finalActions);
  // console.log(actionList);
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
        data={finalActions}
        columns={ActionsColumns}
        hover={true}
        striped={false}
      />
    </div>
  );
};

export default Actions;
