const Token = "FVT";
const Unit = "W";

export const RulesData = [
  {
    selected: false,
    source: "Twitter",
    action: "Like sent",
    price: "0.1",
    falloff: "Linear",
    members: "4344",
    earned: "143 876",
  },
  {
    selected: false,
    source: "Twitter",
    action: "Post Retweeted",
    price: "0.5",
    falloff: "Quadratic",
    members: "1238",
    earned: "74 252",
  },
  {
    selected: false,
    source: "Finance Vote",
    action: "Vote Cast",
    price: "1",
    falloff: "Linear",
    members: "582",
    earned: "484 252",
  },
  {
    selected: false,
    source: "Discord command",
    command: "/bounty",
    price: "@",
    falloff: "Fixed",
    members: "175",
    earned: "355 963",
  },
  {
    selected: false,
    source: "Discord command",
    command: "/promoter",
    price: "1",
    falloff: "Linear",
    members: "773",
    earned: "238 370",
  },
  {
    selected: false,
    source: "Discord reaction",
    action: "❤️",
    price: "1",
    falloff: "Linear",
    members: "2858",
    earned: "292 572",
  },
  {
    selected: false,
    source: "Github",
    action: "Commit pushed",
    price: "2",
    falloff: "Linear",
    members: "64",
    earned: "496 957",
  },
];

export const RulesColumns = [
  // { field: "selected", header: "Selected" },
  { field: "source", header: "Source", left: true },
  { field: "action", header: "Action", command: "command", left: true },
  { price: "price", header: "Price", unit: Unit },
  { field: "falloff", header: "Faloff" },
  {
    value: "members",
    header: "Members in current period",
    unit: "members",
  },
  {
    value: "earned",
    header: "Earned in current period",
    unit: Token,
  },
];
