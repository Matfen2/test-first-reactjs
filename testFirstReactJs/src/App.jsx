import Card from "./components/Card"
import Describe from "./components/Describe"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <Card />
      <Describe pseudo="John Doe"/>
      <Footer />
    </>
  )
}

export default App