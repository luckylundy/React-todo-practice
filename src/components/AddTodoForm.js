export default function AddTodoForm({
  todo,
  onAddFormSubmit,
  onAddInputChange,
}) {
  return (
    <form onSubmit={onAddFormSubmit}>
      <h2>Add Todo</h2>
      <label htmlFor="todo">Add todo:</label>
      <input
        name="todo"
        type="text"
        placeholder="新しいtodoを作成"
        value={todo}
        onChange={onAddInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
