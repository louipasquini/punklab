import './App.css'
import Paper from './assets/paper.png'
import PunkLabLogo from './assets/PunkLab.png'

function App() {

  return (
    <div className="app">
      <img src={Paper} alt="?" className="paper-left" />
      <h3 className="wip">⚒️<br></br>em construção...</h3>
      <img className="logo" src={PunkLabLogo} alt="PunkLab Logo" />
      <h3 className="wip sub">por @347loui</h3>
      <img src={Paper} alt="?" className="paper-right" />
    </div>
  )
}

export default App
