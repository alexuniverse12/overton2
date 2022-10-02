import "./App.css";
import TonConnector from "./components/Ton-Connector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import MainPage from "./screens/MainPage/MainPage";
import useAppModel from './hooks/useMainReducer';

const queryClient = new QueryClient();

function App() {
 
  return (
    <QueryClientProvider client={queryClient}>
      <TonConnector>
        <Router>
            <Routes>
                <Route path='/' element={<MainPage/>} />
            </Routes>
        </Router> 
      </TonConnector>
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
