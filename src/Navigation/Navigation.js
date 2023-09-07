import { Routes, Route } from 'react-router-dom';

import HomeScreen from '../Screens/HomeScreen';
import NotFoundScreen from '../Screens/NotFoundScreen';
import ContactScreen from '../Screens/ContactScreen';

const Navigation = () => (
  <Routes>
    <Route path='/' element={<HomeScreen />} />
    <Route path='/ContactScreen' element={<ContactScreen />} />
    <Route path='*' element={<NotFoundScreen />} status={404} />
  </Routes>
);

export default Navigation;