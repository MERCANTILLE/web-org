import React from "react";
import {
  Table,
  Button,
  Input,
  MenuStripe,
  LeftSubmenu,
  RightSubmenu,
  Popup,
  SelectorButton,
  Subsection,
  Dropdown,
} from "../components";

import { EventsData, EventsColumns } from "../data/EventsData";

const Home = () => {
  const [modalShown, setModalShown] = React.useState(false);

  function openModal() {
    setModalShown(true);
  }

  function closeModal() {
    setModalShown(false);
  }

  return (
    <div>
      <MenuStripe>
        <LeftSubmenu>
          <Button text="Add Rule" handleClick={openModal}></Button>
          <a onClick={() => {}}>Edit Rules</a>
        </LeftSubmenu>
        <RightSubmenu>
          <Input placeholder="Filter"></Input>
        </RightSubmenu>
      </MenuStripe>
      <Popup shown={modalShown} closeModal={closeModal}>
        <div>
          <Subsection heading={"Discord"}>
            <SelectorButton text="Discord command"></SelectorButton>
            <SelectorButton text="Discord reaction"></SelectorButton>
          </Subsection>
          <Subsection heading={"Influence.Vote"}>
            <SelectorButton text="Track new org"></SelectorButton>
          </Subsection>
          <Subsection heading={"Dework"}>
            <SelectorButton text="Track new org"></SelectorButton>
          </Subsection>
        </div>
        <div>
          <Subsection heading={"Discord Server"}>
            <Dropdown
              text="Choose a Discord Server"
              options={["Builderspace", "Klima DAO"]}
            ></Dropdown>
          </Subsection>
        </div>
      </Popup>
      <Table
        data={EventsData}
        columns={EventsColumns}
        hover={true}
        striped={false}
      />
    </div>
  );
};

export default Home;
