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
  Checkbox,
  Radio,
} from "../components";

import discordIcon from "../img/discordIcon.png";
import ivIcon from "../img/ivIcon.png";
import deworkIcon from "../img/deworkIcon.png";
import snapshotIcon from "../img/snapshotIcon.png";

import { EventsData, EventsColumns } from "../data/EventsData";

const Feed = () => {
  const [modalShown, setModalShown] = React.useState(false);
  const [selected, setSelected] = React.useState("initialPage");

  function selectNew(id) {
    setSelected(id);
  }

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
      <Popup shown={modalShown} closeModal={closeModal} selectedPage={selected}>
        <div id="initialPage" title="New data source">
          <Subsection heading={"Discord"}>
            <SelectorButton
              icon={discordIcon}
              handleClick={() => selectNew("discordCommand")}
              text="Discord command"
              iid="discordCommand"
              selectedPage={selected}
            ></SelectorButton>
            <SelectorButton
              icon={discordIcon}
              text="Discord reaction"
              iid="discordReaction"
              selectedPage={selected}
              handleClick={() => selectNew("discordReaction")}
            ></SelectorButton>
          </Subsection>
          <Subsection heading={"Influence.Vote"}>
            <SelectorButton
              icon={ivIcon}
              text="Track new org"
              iid="influenceNewOrg"
              selectedPage={selected}
              handleClick={() => selectNew("influenceNewOrg")}
            ></SelectorButton>
          </Subsection>
          <Subsection heading={"Snapshot"}>
            <SelectorButton
              icon={snapshotIcon}
              text="Track new org"
              iid="snapshotNewOrg"
              selectedPage={selected}
              handleClick={() => selectNew("snapshotNewOrg")}
            ></SelectorButton>
          </Subsection>
          <Subsection heading={"Dework"}>
            <SelectorButton
              icon={deworkIcon}
              text="Track new org"
              iid="deworkNewOrg"
              selectedPage={selected}
              handleClick={() => selectNew("deworkNewOrg")}
            ></SelectorButton>
          </Subsection>
        </div>
        <div id="discordCommand" title="Discord — new command">
          <Subsection heading="Command">
            <Input placeholder="/command"></Input>
          </Subsection>
          <Subsection heading={"Discord Server"}>
            <Dropdown
              text="Choose a Discord Server"
              options={["Builderspace", "Klima DAO"]}
            ></Dropdown>
          </Subsection>
          <Subsection heading="Can be used by roles">
            <Checkbox
              options={["Administrator", "Member", "Initiate", "Misha"]}
            ></Checkbox>
          </Subsection>

          <div style={{ display: "flex", flexDirection: "row", gap: "32px" }}>
            <Subsection heading="Unque name">
              <Radio name="Name" options={["Enable", "Disable"]}></Radio>
            </Subsection>

            <Subsection heading="Bio">
              <Radio name="Bio" options={["Enable", "Disable"]}></Radio>
            </Subsection>
            <Subsection heading="Subjects">
              <Radio name="Subjects" options={["Single", "Multiple"]}></Radio>
            </Subsection>
            <Subsection heading="Price">
              <Radio name="Price" options={["Fixed", "Dynamic"]}></Radio>
            </Subsection>
          </div>
        </div>
        {/* <div id="discordReaction" title="Discord — new command">
          <Subsection heading="Command">
            <Input placeholder="/command"></Input>
          </Subsection>
          <Subsection heading={"Discord Server"}>
            <Dropdown
              text="Choose a Discord Server"
              options={["Builderspace", "Klima DAO"]}
            ></Dropdown>
          </Subsection>
          <Subsection heading="Can be used by roles">
            <Checkbox
              options={["Administrator", "Member", "Initiate", "Misha"]}
            ></Checkbox>
          </Subsection>

          <div style={{ display: "flex", flexDirection: "row", gap: "32px" }}>
            <Subsection heading="Unque name">
              <Radio name="Name" options={["Enable", "Disable"]}></Radio>
            </Subsection>

            <Subsection heading="Bio">
              <Radio name="Bio" options={["Enable", "Disable"]}></Radio>
            </Subsection>
            <Subsection heading="Subjects">
              <Radio name="Subjects" options={["Single", "Multiple"]}></Radio>
            </Subsection>
            <Subsection heading="Price">
              <Radio name="Price" options={["Fixed", "Dynamic"]}></Radio>
            </Subsection>
          </div>
        </div> */}
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

export default Feed;
