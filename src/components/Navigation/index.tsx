import React, { useState } from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {
    const [toggleSelected, setToggleSelected] = useState(0)
  return (
    <nav>
        <ul className={`navigation-list ${styles.navigation}`}>
            <li onClick={() => setToggleSelected(1)} className={toggleSelected === 1 ? styles.active : ""}>Novidades</li>
            <li onClick={() => setToggleSelected(2)} className={toggleSelected === 2 ? styles.active : ""}>Vestidos</li>
            <li onClick={() => setToggleSelected(3)} className={toggleSelected === 3 ? styles.active : ""}>Roupas</li>
            <li onClick={() => setToggleSelected(4)} className={toggleSelected === 4 ? styles.active : ""}>Sapatos</li>
            <li onClick={() => setToggleSelected(5)} className={toggleSelected === 5 ? styles.active : ""}>Lingerie</li>
            <li onClick={() => setToggleSelected(6)} className={toggleSelected === 6 ? styles.active : ""}>Acessórios</li>
            <li onClick={() => setToggleSelected(7)} className={toggleSelected === 7 ? styles.active : ""}>OUTLET</li>
        </ul>
    </nav>
  )
}

export default Navigation