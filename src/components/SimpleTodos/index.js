import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {todoList: initialTodosList, inputText: ''}

  deleteItem = id => {
    const {todoList} = this.state
    const updateList = todoList.filter(item => id !== item.id)
    this.setState({todoList: updateList})
  }

  changeInput = e => {
    this.setState({inputText: e.target.value})
  }

  addItem = () => {
    const {inputText} = this.state
    let i = inputText.length - 1
    let numberPart = ''

    while (i >= 0 && inputText[i] >= '0' && inputText[i] <= '9') {
      numberPart = inputText[i] + numberPart
      i -= 1
    }

    const title = inputText.slice(0, i + 1).trim()

    if (numberPart.length > 0) {
      const count = parseInt(numberPart)

      const ans = []
      for (let j = 0; j < count; j += 1) ans.push({id: uuid(), title})
      this.setState(prev => ({
        todoList: [...prev.todoList, ...ans],
        inputText: '',
      }))
    } else {
      this.setState(prev => ({
        todoList: [...prev.todoList, {id: uuid(), title: inputText}],
        inputText: '',
      }))
    }
  }

  editTitle = (id, title) => {
    const {todoList} = this.state
    const updatedList = todoList.filter(i => i.id !== id)
    this.setState({
      todoList: [...updatedList, {id, title}],
    })
  }

  render() {
    const {todoList, inputText} = this.state
    return (
      <div>
        <h1>Simple Todos</h1>
        <input value={inputText} onChange={this.changeInput} type="text" />
        <button onClick={this.addItem} type="button">
          Add
        </button>
        <ul>
          {todoList.map(item => (
            <TodoItem
              deleteFun={this.deleteItem}
              uniqueId={item.id}
              title={item.title}
              key={item.id}
              editFun={this.editTitle}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default SimpleTodos
