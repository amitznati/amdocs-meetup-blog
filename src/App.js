import Blog from './blog/Blog';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <Blog />
    </div>
  );
}

export default App;
