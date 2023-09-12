export const NewBoardModal = () => {
  return (
    <form action="submit">
      <h2>Create board</h2>
      <label htmlFor="newBoardName">Board name</label>
      <input
        type="text"
        id="newBoardName"
        placeholder="Enter board name"
        required
      />
      <button>Create</button>
    </form>
  );
};
