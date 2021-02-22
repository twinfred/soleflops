import './App.scss';
import Header from './components/Header/Header';

export const primaryName = 'Sole Flops';

export default function App() {
  return (
    <div className="App">
      <Header primaryName={ primaryName }/>
    </div>
  );
}