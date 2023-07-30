import Card from "./components/Card"
import onePiece from './assets/one-piece.png'
import fairyTail from './assets/fairy-tail.png'
import hunterHunter from './assets/hunter-hunter.png'
import naruto from './assets/naruto.png'
import dragonBall from './assets/dragon-ball.png'
import shingeki from './assets/shingeki.png'
import bleach from './assets/bleach.png'
import cdz from './assets/cdz.png'

function App() {

  return (
    <main>
      <Card tittle="One Piece" img={onePiece} imgAlt="Capa do anime One Piece"/>
      <Card tittle="Naruto" img={naruto} imgAlt="Capa do anime Naruto"/>
      <Card tittle="Dragon Ball Z" img={dragonBall} imgAlt="Capa do anime Dragon Ball Z"/>
      <Card tittle="Hunter x Hunter" img={hunterHunter} imgAlt="Capa do anime Hunter x Hunter"/>
      <Card tittle="Fairy Tail" img={fairyTail} imgAlt="Capa do anime Fairy Tail"/>
      <Card tittle="Bleach" img={bleach} imgAlt="Capa do anime Bleach"/>
      <Card tittle="shingeki no kyojin" img={shingeki} imgAlt="Capa do anime shingeki no kyojin"/>
      <Card tittle="Cavaleiros dos Zodiacos" img={cdz} imgAlt="Capa do anime Cavaleiros dos Zodiacos"/>
    </main>
  )
}

export default App
