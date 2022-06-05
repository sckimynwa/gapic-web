import { UserServiceClient } from 'questionspoke';
import { Suspense, useEffect } from 'react';

function App() {
  const tempFunc = async () => {
    const userClient = new UserServiceClient({
      auth: {
        getRequestHeaders: async () => ({
          authorization: 'Bearer token',
        }),
      } as any,
      fallback: 'rest',
      protocol: 'http',
      apiEndpoint: 'localhost:3000',
      port: undefined,
    });
    const res = await userClient.getUser({ name: 'me' });
    console.log(res);
  };

  useEffect(() => {
    tempFunc();
  }, []);

  return (
    <Suspense fallback={<></>}>
      <div>Hello World</div>
    </Suspense>
  );
}

export default App;
