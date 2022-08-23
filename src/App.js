import "./scss/app.scss"
import paper from "./img/paper.svg"
import rock from "./img/rock.svg"
import scissors from "./img/scissors.svg"
import { useState } from "react"
function App() {
  const [computerimg, Setcomputerimg] = useState(0)
  const [playerimg, Setplayerimg] = useState(0)
  const [scores, Setscores] = useState({ computer: 0, player: 0 })
  const randomgen = () => {
    const number = Math.floor(Math.random() * 3)
    switch (number) {
      case 0:
        return "paper"
      case 1:
        return "rock"
      case 2:
        return "scissors"
      default:
        break
    }
  }
  const calculatescore = (action) => {
    if (action === "rock") {
      Setplayerimg(1)
      const computerselect = randomgen()
      switch (computerselect) {
        case "rock":
          Setcomputerimg(1)
          break
        case "paper":
          Setcomputerimg(0)
          Setscores((prevstate) => ({ ...prevstate, computer: prevstate.computer++ }))
          console.log(scores)
          break
        case "scissors":
          Setcomputerimg(20)
          Setscores((prevstate) => ({ ...prevstate, player: prevstate.player++ }))
          break
        default:
          break
      }
    }
    if (action === "paper") {
      Setplayerimg(0)
      const computerselect = randomgen()
      switch (computerselect) {
        case "rock":
          Setcomputerimg(1)
          Setscores((prevstate) => ({ ...prevstate, player: prevstate.player++ }))
          break
        case "paper":
          Setcomputerimg(0)
          break
        case "scissors":
          Setcomputerimg(2)
          Setscores((prevstate) => ({ ...prevstate, computer: prevstate.computer++ }))
          break
        default:
          break
      }
    }
    if (action === "scissors") {
      Setplayerimg(2)
      const computerselect = randomgen()
      switch (computerselect) {
        case "rock":
          Setcomputerimg(1)
          Setscores((prevstate) => ({ ...prevstate, player: prevstate.player++ }))
          break
        case "paper":
          Setcomputerimg(0)
          Setscores((prevstate) => ({ ...prevstate, player: prevstate.player++ }))
          break
        case "scissors":
          Setcomputerimg(3)
          break
        default:
          break
      }
    }
  }

  return (
    <div className="container">
      <div className="header">
        <div className="header_item">
          <h2>Player</h2>
          <h3>{scores.player}</h3>
        </div>
        <div className="header_item">
          <h2>Computer</h2>
          <h3>{scores.computer}</h3>
        </div>
      </div>
      <main className="main_section">
        <h1>Choose an option</h1>
        <div className="images">
          <img src={playerimg === 1 ? rock : playerimg === 2 ? scissors : paper} alt="" />
          <img src={computerimg === 1 ? rock : computerimg === 2 ? scissors : paper} alt="" />
        </div>
        <div className="options">
          <button onClick={() => calculatescore("rock")}>rock</button>
          <button onClick={() => calculatescore("paper")}>paper</button>
          <button onClick={() => calculatescore("scissors")}>scissors</button>
        </div>
      </main>
    </div>
  )
}

export default App
