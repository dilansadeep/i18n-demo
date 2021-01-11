import React, { Suspense } from 'react';
import './App.css';
import Login from "./Login/Login";

const Loading = () => <div class="spinner" />

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Login />
    </Suspense>
  );
}

export default App;
