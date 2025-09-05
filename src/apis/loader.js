import { listProyek } from "../data"



export const getDetailProyek = ({ params }) => {
  const dataProyek = listProyek.find((e) => e.id == (params.id));
  return dataProyek;
};