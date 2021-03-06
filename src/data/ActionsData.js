export const ActionsData = [
  {
    source: "Twitter",
    type: "Web2",
    icon: "https://www.iconpacks.net/icons/1/free-icon-twitter-117.png",
    actions: [
      {
        id: 1,
        source: "Twitter",
        name: "New Like",
        behaviours: ["Activity", "Engagement", "Brand Promotion"],
        price: 4,
        members: 149,
        falloff: "Linear",
        earned: 596,
      },
      {
        id: 2,
        source: "Twitter",
        name: "New Mention",
        behaviours: ["Activity", "Engagement", "Brand Promotion"],
        price: 4,
        members: 63,
        falloff: "Linear",
        earned: 252,
      },
      {
        id: 3,
        source: "Twitter",
        name: "New Retweet",
        behaviours: ["Social Sharing", "Brand Promotion"],
        price: 4,
        members: 25,
        falloff: "Linear",
        earned: 100,
      },
    ],
  },
  {
    source: "Discord",
    type: "Web2",
    icon: "https://discord.com/assets/f9bb9c4af2b9c32a2c5ee0014661546d.png",
    actions: [
      {
        source: "Discord",
        id: 4,
        name: "New Command",
        behaviours: ["Activity", "Engagement"],
        price: 4,
        notshow: true,
        falloff: "Linear",
      },
      {
        source: "Discord",
        id: 5,
        name: "New Reaction",
        behaviours: ["Activity", "Engagement"],
        price: 4,
        notshow: true,
        falloff: "Linear",
      },
      {
        id: 6,
        source: "Discord",
        name: "Message sent",
        behaviours: ["Activity", "Engagement"],
        price: 4,
        members: 378,
        earned: 1512,
        falloff: "Linear",
      },
    ],
  },
  {
    source: "Dework",
    type: "Web3",
    icon: "https://whale-app-kgl6h.ondigitalocean.app/static/media/deworkIcon.57c43891fcd76b55cea4.png",
    actions: [
      {
        id: 7,
        source: "Dework",
        name: "Task clained",
        behaviours: ["Work Task"],
        price: 1,
        members: 32,
        earned: 32,
        falloff: "Linear",
      },
      {
        id: 8,
        source: "Dework",
        name: "Task posted",
        behaviours: ["Work Planning"],
        price: 1,
        members: 4,
        earned: 4,
        falloff: "Linear",
      },
    ],
  },
  {
    source: "Snapshot",
    type: "Web3",
    icon: "https://whale-app-kgl6h.ondigitalocean.app/static/media/deworkIcon.57c43891fcd76b55cea4.png",
    actions: [
      {
        id: 9,
        source: "Snapshot",
        name: "Proposal created",
        behaviours: ["Proposal created"],
        price: 100,
        members: 6,
        earned: 600,
        falloff: "Linear",
      },
      {
        id: 10,
        source: "Snapshot",
        name: "Vote cast",
        behaviours: ["Voting"],
        price: 4,
        members: 274,
        earned: 1096,
        falloff: "Linear",
      },
      {
        id: 11,
        source: "Snapshot",
        name: "Proposal expired",
        behaviours: ["Work planning"],
        price: 4,
        members: 1,
        earned: 4,
        falloff: "Linear",
      },
      {
        id: 12,
        source: "Snapshot",
        name: "Decision made",
        behaviours: ["Work planning"],
        price: 4,
        members: 1,
        earned: 4,
        falloff: "Linear",
      },
    ],
  },
];

const Token = "FWT";
const Unit = "W";

export const ActionsColumns = [
  // { field: "selected", header: "Selected" },
  { field: "source", header: "Source", left: true },
  { field: "name", header: "Action", command: "command", left: true },
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
