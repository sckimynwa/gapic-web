import { UserServiceClient } from 'questionspoke';
import { Suspense, useEffect } from 'react';

function App() {
  useEffect(() => {
    const userClient = new UserServiceClient({
      fallback: 'rest',
      protocol: 'http',
    });
    userClient.getUser({ name: 'me' }).then((data) => console.log(data));
  }, []);
  return (
    <Suspense fallback={<></>}>
      <div>Hello World</div>
    </Suspense>
  );
}

export default App;
