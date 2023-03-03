import React from 'react'
import style from './footer.module.css'

export default function Footer() {
    return (
        <div  >
            <footer className={style.footer_distributed}>
                <div className={style.footer_left}>
                    <p className={style.footer_links}>
                        Arena platform
                    </p>
                    <p>Arena © 2023</p>
                </div>
            </footer>
        </div>
    )
}
