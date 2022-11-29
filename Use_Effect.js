import { useEffect, UseState} from "React";

function App() {
  const [number, setNumber] = useState(0);
  
  UseEffect (() => {
    console.log("effect")
    setInterval(() => {
      setNumber(number + 1)
    }, 1000);
  }, [number]);
  
  return <div>{number}</div>;
}

explore default app
  
