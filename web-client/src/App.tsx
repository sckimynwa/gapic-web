import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<></>}>
      <div>Hello World</div>
    </Suspense>
  );
}

export default App;
