import { combineReducers } from 'redux'
import todo from '../components/pages/Todo/reducer'
import login from '../components/organisms/LoginForm/reducer'

export default combineReducers({ todo, login })
