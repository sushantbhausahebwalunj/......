import './App.css'
import AppRoutes from "./AppRoutes"
import { MyProvider } from './component/context/ContextData'



function App() {
  
  return (
    // <div>
    //     <AppRoutes/>
    // </div>
 <MyProvider>
 <AppRoutes/> 
</MyProvider>


  )
}

export default App


 // Wrap your components with the provider
//  <MyProvider>
 //<AppRoutes/> 
// </MyProvider>