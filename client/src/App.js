import Messenger from "./components/Messenger";

function App() {
  let clientId = '';
  return (
    <GoogleOAuthProvider clientId={clientId} >
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
