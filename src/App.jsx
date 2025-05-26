import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Twitter from './components/Twitter';
import SearchPage from './pages/SearchPage';
import NotificationPage from './pages/NotificationPage';
import MessagesPage from './pages/MessagesPage';
import AIPage from './pages/AIPage';
import UserProfile from './pages/UserProfile';
import MoreOptions from './pages/MoreOptions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Twitter />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/notifications' element={<NotificationPage />}/>
        <Route path='/Messages' element={<MessagesPage />} />
        <Route path='/AI' element={<AIPage />} />
        <Route path='/user-profile' element={<UserProfile />} />
        <Route path='/more-options' element={<MoreOptions />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;