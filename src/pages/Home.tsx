import { Link } from "react-router-dom"
import PageNav from "../components/PageNav"
import AppNav from "../components/AppNav"

function Home() {
  return (
    <div>
      <PageNav></PageNav>
      <AppNav></AppNav>
      <h1>World Wise</h1>
      <Link to="/app">Go to app</Link>
    </div>
  )
}

export default Home