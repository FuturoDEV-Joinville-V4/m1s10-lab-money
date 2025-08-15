import { Badge, Divider } from "@mui/material";
import { Github, Instagram } from 'lucide-react'

import { Header } from "../../components/molecules/Header";
import styles from './styles.module.css'

export function Perfil() {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <div className={styles.content}>
                    {/* Imagem de avatar */}
                    <div>
                        <img src="https://github.com/nicholasmacedoo.png" height={239} width={239} />
                    </div>
                    {/* Informações do usuário */}
                    <div className={styles.infoUser}>
                        <Badge color="primary" badgeContent="Aluno" />
                       
                        <h2>Nicholas Macedo</h2>
                        <div className={styles.social}>
                            <div>
                                <Github size={24} color="#2196F3" />
                                <span>github.com/nicholasmacedoo</span>
                            </div>
                             <div>
                                <Instagram size={24} color="#2196F3" />
                                <span>@nicholassmacedo</span>
                            </div>
                        </div>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque neque voluptate aliquid fuga quis laboriosam, sed ipsam unde. Mollitia, quam.</p> */}
                    </div>
                </div>
                <Divider orientation="horizontal" />

                <span>Bio</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis esse deserunt voluptatem sint nisi et ea sit, earum quisquam aut nam impedit aperiam vitae nihil aspernatur deleniti natus quod dolores.
                Quod deserunt nesciunt ipsam cum nemo expedita nihil neque fuga laborum eaque debitis omnis consequatur, natus quas, voluptate fugit velit porro vero voluptatem maiores ipsa. Quam sed enim dignissimos nulla.
                Voluptates rem fuga nostrum amet nisi similique hic id. Cupiditate cumque nemo ipsa maxime, dolores voluptates consequatur pariatur dolorem explicabo sint, aliquam similique animi, officiis esse rerum ipsum autem. Quasi.
                Nostrum ut minima inventore voluptas dolorem, necessitatibus nulla at possimus beatae quo molestiae assumenda. Velit voluptatibus omnis atque cum assumenda, facilis necessitatibus dolor ratione excepturi nulla explicabo sequi neque pariatur.
                Maxime deleniti eaque nulla. Ad, ipsum? Voluptas earum sapiente quasi ab vitae doloremque facere porro cupiditate obcaecati dolore sunt recusandae, nemo, facilis vel ipsam culpa impedit, delectus tempora vero unde.</p>
            </main>
        </>
    )
}