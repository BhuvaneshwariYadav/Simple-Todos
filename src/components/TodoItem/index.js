// Write your code here
const TodoItem = props => {
  const {uniqueId, title, deleteFun} = props
  const deleteItem = () => {
    deleteFun(uniqueId)
  }
  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={deleteItem}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
