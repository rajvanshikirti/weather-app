
import { Toaster } from "react-hot-toast";
import AuthRoutes from "./routes/authRoutes"
function App() {
  return (
    <>
      <AuthRoutes/>
           <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
