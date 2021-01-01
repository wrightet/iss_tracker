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
  
};

const titleStyle = {
  display:'flex',
  justifyContent: 'center',
  paddingTop: '3%',
  
}
export default App;
