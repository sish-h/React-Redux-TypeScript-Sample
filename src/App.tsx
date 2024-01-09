import { Routes, Route } from 'react-router-dom';
import List from './view/List';
import Edit from './view/Edit';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </>
  )
}