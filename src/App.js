import './App.css'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Auth from './pages/auth/Auth'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Chat from './pages/chat/Chat'
import SearchResults from './pages/results/SearchResults'
import PostView from './pages/views/PostView'
import { getNotify } from './action/UserAction'
import { useCallback, useEffect } from 'react'
import PostsResult from './pages/results/PostsResult'
import VerifyAccount from './pages/auth/VerifyAccount'
import ActiveAccount from './pages/auth/ActiveAccount'
function App() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.authReducer.authData) // cái này là lấy từ reducer khi đăng nhập thành công này
  // console.log(user)

  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: ' -8rem' }}></div>
      {/* ô bọc cái layout ở đây như 2 cái thẻ div bên trên này bọc cái route nhé 2 thẻ div này là tôi làm lớp phủ thôi
      còn ô muốn layout thỳ ô viết một component layout ở đây xong check role củcauser nếu role nào thỳ hiện cái layout đó */}
      <Routes>
        <Route
          path="/"
          element={
            user?.user ? (<Navigate to="home" />): (<Navigate to="../auth" />) 
          }
        />
        <Route
          path="/home"
          element={
              user?.user ? (
                <Home />
            ) : (
              <Navigate to="../auth" />
            )
          }
        />
        <Route
          path="/view/post/:id"
          element={
            user ? (
              user?.user?.active ? (
                <PostView />
              ) : (
                <Navigate to="../verify" />
              )
            ) : (
              <Navigate to="../auth" />
            )
          }
        />
        <Route
          path="/posts/result"
          element={
            user ? (
              user?.user?.active ? (
                <PostsResult />
              ) : (
                <Navigate to="../verify" />
              )
            ) : (
              <Navigate to="../auth" />
            )
          }
        />
        <Route
          path="/search/result"
          element={
            user ? (
              user?.user?.active ? (
                <SearchResults />
              ) : (
                <Navigate to="../verify" />
              )
            ) : (
              <Navigate to="../auth" />
            )
          }
        />
        <Route
          path="/auth" 
          element={
            user ? (
              user?.user?.active ? (
                <Navigate to="/home" />
              ) : (
                <Navigate to="../verify" />
              )
            ) : (
              <Auth />
            )
          }
        />
        <Route
          path="/profile/:id"
          element={
            user ? (
              user?.user?.active ? (
                <Profile />
              ) : (
                <Navigate to="../verify" />
              )
            ) : (
              <Navigate to="../auth" />
            )
          }
        />
        <Route
          path="/chat"
          element={
            user ? (
              user?.user?.active ? (
                <Chat />
              ) : (
                <Navigate to="../verify" />
              )
            ) : (
              <Navigate to="../auth" />
            )
          }
        />
      </Routes>
    </div>
  )
}

export default App
