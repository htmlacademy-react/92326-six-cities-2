import Main from './pages/main/main.tsx';
import { Settings } from '../index.tsx';

interface AppProps {
  settings: Settings;
}


function App(props: AppProps) {
  return (
    <Main placesToStayCount={props.settings.placesToStayCount}/>
  );
}

export default App;
