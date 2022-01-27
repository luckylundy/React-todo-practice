export default function EditForm({
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit,
}) {
  return (
    <form onSubmit={onEditFormSubmit}>
      <h2>Edit Todo</h2>
      <label htmlFor="editTodo">Edit todo:</label>
      <input
        name="editTodo"
        type="text"
        placeholder="todoを編集"
        value={currentTodo.text}
        onChange={onEditInputChange}
      />
      <button type="submit">更新</button>
      <button onClick={() => setIsEditing(false)}>キャンセル</button>
    </form>
  );
}
