import { useState } from "react"
import styles from "./dashboard.module.css"

const pages = [
    styles.home,
    styles.community,
    styles.leaderboard,
    styles.settings
]

export default function DashboardNav({ callBack }) {
    const [page, setPage] = useState(0);

    return (
        <div className={styles.navbar}>
            {
                pages.map((p, i) => (
                    <div onClick={() => {
                        callBack(i);
                        setPage(i);
                    }} className={`${p} ${i == page && styles.active}`} />
                ))
            }
        </div>
    )

}