import { generateId } from "../utils/GenerateID";

export const bookData = [
  {
    id: generateId(),
    title: "Babel",
    body: "Babel merupakan tools.",
    archived: false,
    createdAt: "2022-01-11T04:27:34.572Z",
  },
  {
    id: generateId(),
    title: "Dicoding",
    body: "Saatnya bijak memilih.",
    archived: true,
    createdAt: "2022-08-24T04:27:34.572Z",
  },
  {
    id: generateId(),
    title: "Frontend",
    body: "Babel merupakan tools open.",
    archived: false,
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: generateId(),
    title: "IDcamp",
    body: "Babel merupakan .",
    archived: false,
    createdAt: "2022-06-20T04:27:34.572Z",
  },
];

export const modals = [
  {
    id: bookData[0]?.id,
    title: "View",
    body: "test",
    isSave: false,
  },
  {
    id: bookData[1]?.id,
    title: "Update",
    body: "test Edit",
    isSave: true,
  },
  {
    id: bookData[2]?.id,
    title: "Delete",
    body: "test Edit",
    isSave: true,
  },
];
