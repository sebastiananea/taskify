import { Todo } from '../model'
import TodoItem from './TodoItem'

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className='todos'>
      {todos.map((todo) => (
        <TodoItem todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
      ))}
    </div>
  )
}

export default TodoList
