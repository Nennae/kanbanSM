import { Sidebar } from "../../components/SideBar";
import { NewBoardModal } from "../../components/modal/NewBoardModal";

export const Home = (): JSX.Element => {
  return (
    <>
      <article>
        <h2>My boards</h2>
      </article>
      <aside>
        <Sidebar />
      </aside>
      <NewBoardModal />
    </>
  );
};
