import logo from './logo.svg';
import './App.css';
import faceJPG from './assets/face.JPG'

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img class="teddy-bear" src={faceJPG} width={300} height={500}/>
            </header>
        </div>
    );
}

export default App;
