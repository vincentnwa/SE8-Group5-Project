// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// Comment out the App.css to let Bootstrap stylesheets
// take over.
//import './App.css'
//import { BusMain } from './components/BusMain';
import { RouterProvider } from 'react-router-dom';
import { myRouter } from './routers/RouterMap';

function App() {

  return (
    <>
      {/* <BusMain /> */}
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App;
