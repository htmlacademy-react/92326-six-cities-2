import HomeScreen from './pages/main/main.tsx';
import { Settings } from '../index.tsx';

interface AppProps {
  settings: Settings;
}


function App(props: AppProps) {
  return (
    <HomeScreen placesToStayCount={props.settings.placesToStayCount}/>
  );
}

export default App;
