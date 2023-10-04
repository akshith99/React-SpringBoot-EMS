import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListEmployeeComponent from './components/ListEmployeeComponent';
import RootComponent from './components/RootComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootComponent />,
    children: [
      { index: true, element: <ListEmployeeComponent /> },
      { path: '/employees', element: <ListEmployeeComponent /> },
      { path: '/add-employee', element: <CreateEmployeeComponent /> },
      { path: '/update-employee/:id', element: <CreateEmployeeComponent /> },
      { path: '/view-employee/:id', element: <ViewEmployeeComponent /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
