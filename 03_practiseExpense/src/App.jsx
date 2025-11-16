

import ReactQuery from './components/TanStack/ReactQuery';
import Effect from './State/Effect'
import HomePage from './store/Pages/HomePage'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient()
function App() {
  

  return (
    <div className=''>
      <QueryClientProvider client={queryClient}>
      {/* <HomePage/> */}
      <Effect/>
     <ReactQuery/>

     
    </QueryClientProvider>

    </div>
      
  
  )
}

export default App
