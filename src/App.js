import "./App.css";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <form>
        <h1>Create An Account</h1>

        <label>
          Email:
          <input name="email" type="email" required />
        </label>

        <label>
          Password:
          <input name="password" type="password" required />
        </label>

        <button>Sign Up!</button>
      </form>
    </div>
  );
}

export default App;
