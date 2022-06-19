import React from "react";
import {
  Table,
  Button,
  Input,
  MenuStripe,
  LeftSubmenu,
  RightSubmenu,
  Popup,
} from "../components";

import { EventsData, EventsColumns } from "../data/EventsData";

const Home = () => {
  const [modalShown, setModalShown] = React.useState(false);

  function openModal() {
    setModalShown(true);
  }

  function closeModal() {
    setModalShown(false)
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
      <Popup shown={modalShown} closeModal={closeModal}></Popup>
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
