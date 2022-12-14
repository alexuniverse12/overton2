import "./App.css";
import TonConnector from "./components/Ton-Connector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import MainPage from "./screens/MainPage/MainPage";
import useAppModel, { AppModelProvider } from './hooks/useMainReducer';
import SingleQuestion from "./screens/SingleQuestion/SingleQuestion";

const queryClient = new QueryClient();

function App() {
 
  return (
    <QueryClientProvider client={queryClient}>
      <AppModelProvider>
        <TonConnector>
          <Router>
              <Routes>
                  <Route path='/' element={<MainPage/>} />
                  <Route path='/singleQuestion' element={<SingleQuestion/>} />
              </Routes>
          </Router> 
        </TonConnector>
      </AppModelProvider>
    </QueryClientProvider>
  )
  
}
// function App() {

//   return (
//     <QueryClientProvider client={queryClient}>
//       <div className="App">
//         <h1>Ton Sample TWA</h1>
//         <TonConnector />
//       </div>
//     </QueryClientProvider>
//   );
// }

export default App;
