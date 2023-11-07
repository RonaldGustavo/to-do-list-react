import { BOOK } from "../constant";

export const generateId = () => {
  const date = new Date().getTime();
  const randomNumber = Math.floor(Math.random() * 999 + 1);
  const id = `${BOOK}-${randomNumber}-${date}`;
  return id;
};
