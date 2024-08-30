import { QueryClient,QueryClientProvider } from 'react-query';
import PostsComponent from './Components/PostsComponent';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  )
}

export default App
