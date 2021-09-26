import Components from './components';
import './App.css';

function App() {
  return (
    <div>
      <div className="outerContainer">
        <Components
          cardType="F R E E"
          user={'Single User'}
          storage="5GB Storage"
          private={false}
          phone={false}
          domain={false}
          report={false}
          cost={'0'}
        />
        <Components
          cardType="P L U S"
          user={'3 Users'}
          storage="15GB Storage"
          private={true}
          phone={true}
          domain={false}
          report={false}
          cost={'5'}
        />
        <Components
          cardType="P R O"
          user={'15 Users'}
          storage="100GB Storage"
          private={true}
          phone={true}
          domain={true}
          report={true}
          cost={'15'}
        />
      </div>
    </div>
  );
}

export default App;
