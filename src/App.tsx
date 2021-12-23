import Card from './components/Card';
import Weather from './components/Weather';



function App() {
  return (
    <div className="App">
    <h1>Today</h1>
      <header className="App-header">
          Information about Today 
      </header>
      <Card>
        <Weather city='n/a' description='n/a' temperature={0} />
      </Card>
     
    </div>
  );
}

export default App;
