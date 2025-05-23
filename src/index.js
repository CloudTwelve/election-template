import React from 'react';
import { 
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import CodeOfConduct from './components/pages/CodeOfConduct';
import Updates from './components/pages/Updates';
import App from './App';
import Candidates from './components/pages/Candidates'; // Ensure this is imported for the main route
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* You can add more routes here if needed */}
      {/* Example: <Route path="updates" element={<Updates />} /> */}
      <Route index element={<Candidates/>}></Route>
      <Route path="/policies" element={<CodeOfConduct/>}></Route>
      <Route path="/updates" element={<Updates/>}></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
