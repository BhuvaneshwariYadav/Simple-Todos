import {Component} from 'react'

class TodoItem extends Component {
  state = {inputText: '', buttonText: 'Edit', isEdit: false}

  componentDidMount() {
    const {title} = this.props
    this.setState({inputText: title})
  }

  changeInput = e => {
    this.setState({inputText: e.target.value})
  }

  editItem = () => {
    const {uniqueId, editFun} = this.props
    const {inputText, isEdit} = this.state
    if (isEdit) {
      this.setState({isEdit: false, buttonText: 'Edit'})
      editFun(uniqueId, inputText)
    } else {
      this.setState({isEdit: true, buttonText: 'Save'})
    }
  }

  render() {
    const {inputText, buttonText, isEdit} = this.state
    const {uniqueId, deleteFun} = this.props

    const deleteItem = () => {
      deleteFun(uniqueId)
    }
    return (
      <li>
        {isEdit ? (
          <input value={inputText} onChange={this.changeInput} type="text" />
        ) : (
          <p>{inputText}</p>
        )}

        <button type="button" onClick={deleteItem}>
          Delete
        </button>

        <button type="button" onClick={this.editItem}>
          {buttonText}
        </button>
      </li>
    )
  }
}
export default TodoItem
