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
import HeaderBN from './components/HeaderBN/HeaderBN'
import FooterBN from './components/FooterBN/FooterBN'

function App() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.authReducer.authData) // cái này là lấy từ reducer khi đăng nhập thành công này
  // console.log(user)

  return (
    <div className="App">
      {user?.user?.role === 'BN' && <HeaderBN />}
      <Routes>
        <Route
          path="/"
          element={
            user?.user ? (<Navigate to="home" />) : (<Navigate to="../auth" />)
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
      {user?.user?.role === 'BN' && <FooterBN />}
    </div>
  )
}

export default App
