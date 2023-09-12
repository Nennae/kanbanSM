import { useState } from "react";

export const Sidebar = () => {
  const [openNewBoardModal, setOpenNewBoardModal] = useState(false);

  const handleClick = (e: React.MouseEventHandler<HTMLButtonElement>) => {
    setOpenNewBoardModal(true);
  };

  return (
    <>
      <button onClick={() => handleClick}>New board</button>
    </>
  );
};
