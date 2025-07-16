import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Twitter from './components/Twitter';
import SearchPage from './pages/SearchPage';
import NotificationPage from './pages/NotificationPage';
import MessagesPage from './pages/MessagesPage';
import AIPage from './pages/AIPage';
import UserProfile from './pages/UserProfile';
import Lists from './pages/Lists';
import BookMarks from './pages/Bookmarks';
import Communities from './pages/Communities';
import Monetization from './pages/Monetization';
import Verified from './pages/Verified';
import Adds from './pages/Adds';
import Jobs from './pages/Jobs';
import CreateYourSpace from './pages/CreateYourSpace';
import SettingsAndPrivacy from './pages/SettingsAndPrivacy';
import PremiumSubscriptionPage from './pages/PremiumSubscriptionPage';

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
        <Route path='/lists' element={<Lists />} />
        <Route path='/bookmarks' element={<BookMarks />} />
        <Route path='/communities' element={<Communities />} />
        <Route path='/monetization' element={<Monetization />} />
        <Route path='/verified_orgs' element={<Verified />} />
        <Route path='/ads' element={<Adds />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/create_your_space' element={<CreateYourSpace />} />
        <Route path='/settings_and_privacy' element={<SettingsAndPrivacy />} />
        <Route path='/premium_subscription' element={<PremiumSubscriptionPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;