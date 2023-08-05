import MapComponent from "../components/Map"
import Sidebar from "../components/Sidebar"
import styles from './AppLayout.module.css'

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar></Sidebar>
      <MapComponent></MapComponent>
    </div>
  )
}

export default AppLayout