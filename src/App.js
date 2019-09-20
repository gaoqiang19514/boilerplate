import React from 'react';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

function loadingToast() {
  Toast.loading('Loading...', 1, () => {
    console.log('Load complete !!!');
  });
}

function App() {
  return (
    <div className="App">
      <Button onClick={loadingToast}>loading</Button>
    </div>
  );
}

export default App;
