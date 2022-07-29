import React from "react";
import "./NewActionPopup.css";
import Popup from "../Popup/Popup";

import discordIcon from "../../img/discordIcon.png";
import ivIcon from "../../img/ivIcon.png";
import deworkIcon from "../../img/deworkIcon.png";
import snapshotIcon from "../../img/snapshotIcon.png";
import {
  Subsection,
  Section,
  Dropdown,
  Checkbox,
  Radio,
  SelectorButton,
  Input,
} from "..";

const NewActionPopup = ({ actionsData }) => {
  const [modalShown, setModalShown] = React.useState(false);
  const [selected, setSelected] = React.useState("initialPage");

  function selectNew(id) {
    setSelected(id);
  }

  function closeModal() {
    setModalShown(false);
  }
  return actionsData.map((source) => (
    <Subsection heading={source.source}>
      {source.actions.map((action) => (
        <SelectorButton
          icon={source.icon}
          handleClick={() => selectNew(action.source)}
          text={action.name}
          iid={action.name}
          selectedPage={selected}
        ></SelectorButton>
      ))}
    </Subsection>
  ));
  // <div id="discordCommand" title="Discord — new command">
  //   <Subsection heading="Command">
  //     <Input placeholder="/command"></Input>
  //   </Subsection>
  //   <Subsection heading={"Discord Server"}>
  //     <Dropdown
  //       text="Choose a Discord Server"
  //       options={["Builderspace", "Klima DAO"]}
  //     ></Dropdown>
  //   </Subsection>
  //   <Subsection heading="Can be used by roles">
  //     <Checkbox
  //       options={["Administrator", "Member", "Initiate", "Misha"]}
  //     ></Checkbox>
  //   </Subsection>

  //   <div style={{ display: "flex", flexDirection: "row", gap: "32px" }}>
  //     <Subsection heading="Unque name">
  //       <Radio name="Name" options={["Enable", "Disable"]}></Radio>
  //     </Subsection>

  //     <Subsection heading="Bio">
  //       <Radio name="Bio" options={["Enable", "Disable"]}></Radio>
  //     </Subsection>
  //     <Subsection heading="Subjects">
  //       <Radio name="Subjects" options={["Single", "Multiple"]}></Radio>
  //     </Subsection>
  //     <Subsection heading="Price">
  //       <Radio name="Price" options={["Fixed", "Dynamic"]}></Radio>
  //     </Subsection>
  //   </div>
  // </div>
};

export default NewActionPopup;
