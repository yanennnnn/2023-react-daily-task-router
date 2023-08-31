import './App.css';
import { HashRouter, NavLink, Route, Routes, useNavigate, useParams, Outlet  } from 'react-router-dom';

const Todo = () => {
  const navigate = useNavigate();
  return <>
    <p>這是 Todo 頁面</p>
    <button onClick={()=> navigate('/login')}>登出</button>
  </>;
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

const Post = () => {
  return <>
    這是 Post 父層
    <Outlet />
  </>
}

const PostChild = () => {
  const param = useParams()
  return <div>
    這是子層 {param.postId}
  </div>
}

function App() {
 
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post頁面</p>
          </NavLink>
          <NavLink to="/post/post123">
            <p>Post Id 頁面</p>
          </NavLink>
        </div>
        <Routes>
          <Route path="/register" element={ <Register/> }/>
          <Route path='/login' element={ <Login/> }/>
          <Route path='/todo' element={ <Todo/> }/>
          <Route path="/post" element={ <Post/>  }>
            <Route path=":postId" element={ <PostChild/>  }/>
          </Route>
        </Routes>
        {/* Routes, Route 練習區 */}
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
