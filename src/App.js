import Position from './components/position';

function App() {
  return (
    <div style={appStyle} className="App">
      <h1 style={titleStyle}>International Space Station Tracker</h1>
      <Position/>
      
    </div>
  );
}

const appStyle = {
  background:'black',
  height: '100vh'
};

const titleStyle = {
  display:'flex',
  justifyContent: 'center',
  paddingTop: '3%',
  color: 'white'
  
}
export default App;
