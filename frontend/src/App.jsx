import React ,{useEffect,useState} from "react";
import Home from "../Components/Home/Home";
import LoadingScreen from "../Components/Home/LoadingScreen";
import "./index.css";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      try {
        // Simulate a delay
        await new Promise(resolve => setTimeout(resolve, 2000)); // 2 seconds delay
        // Here you can replace the above line with actual data fetching logic
        // e.g., const response = await axios.get('your-api-url');
        // setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? <LoadingScreen /> : <Home />}
    </div>
  );
}


export default App;
