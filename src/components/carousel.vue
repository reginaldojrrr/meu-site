<script>

</script>

<template>
    <Splide :options="{ rewind: true, autoplay: true }" aria-label="Depoimentos">
        <SplideSlide class="cards">
            <div class="card">
                <p class="quote">
                    “Posso afirmar que, no que diz respeito a Produto e Design, ele é um profissional de altíssimo nível.
                    Além
                    disso, o Reginaldo apresenta um grande diferencial no âmbito tecnológico. Além das habilidades em
                    design,
                    possui também competências em programação front-end.”
                </p>
                <div class="person">
                    <img class="avatar" src="../assets/images/dans.png" alt="Daniel Rodrigues">
                    <div class="person-info">
                        <h4>Daniel Rodrigues</h4>
                        <p>Head of Design na MotorEnvy</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <p class="quote">
                    “Foi uma das pessoas chave para a criação do nosso Design System open-source, o Smash DS, e na criação
                    de
                    diversos processos e rituais de coesão entre os times de design e desenvolvimento. Sob a perspectiva de
                    soft
                    skills, é uma pessoa que traz muita luz ao time.”
                </p>
                <div class="person">
                    <img class="avatar" src="../assets/images/aranha.png" alt="Vitor Aranha">
                    <div class="person-info">
                        <h4>Vitor Aranha</h4>
                        <p>Design Lead na Vivo</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <p class="quote">
                    “Trabalhar com o Reginaldo é gratificante, sempre organizado e comprometido, faz entregas que facilitam
                    demais a vida dos desenvolvedores. Tem conhecimento amplo na área de UX, além de aprofundar muito e
                    entender
                    sobre as regras de negócio.”
                </p>
                <div class="person">
                    <img class="avatar" src="../assets/images/heverton.png" alt="Heverton Castro">
                    <div class="person-info">
                        <h4>Heverton Castro</h4>
                        <p>Tech Lead na Birmingham Bank</p>
                    </div>
                </div>
            </div>
        </SplideSlide>
        <SplideSlide class="cards">
            <div class="card">
                <p class="quote">
                    “O Reginaldo é um dos profissionais mais incríveis que eu tive o prazer de trabalhar! Um Sênior PD em
                    toda a
                    sua glória, que tem o técnico super afiado, abraça os desafios, traz boas referências para o time, e
                    ainda
                    conhece muito de Design System. Será um ativo essencial para qualquer empresa.”
                </p>
                <div class="person">
                    <img class="avatar" src="../assets/images/marche.png" alt="Marcela Marche">
                    <div class="person-info">
                        <h4>Marcela Marche</h4>
                        <p>Senior Product Manager na QuintoAndar</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <p class="quote">
                    “Cara, Regis é muito firmeza. Além de resolver as coisas com a qualidade de ponta, é um grande ouvinte e
                    conselheiro. Sempre que preciso de ajuda, posso contar com a sua análise afiada. Sem dúvidas, alguém que
                    eu
                    indicaria em todo canto por onde eu for..”
                </p>
                <div class="person">
                    <img class="avatar" src="../assets/images/luke.png" alt="Lucas Dias">
                    <div class="person-info">
                        <h4>Lucas Dias</h4>
                        <p>Product Designer na Yampi</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <p class="quote">
                    “Cara, Regis é muito firmeza. Além de resolver as coisas com a qualidade de ponta, é um grande ouvinte e
                    conselheiro. Sempre que preciso de ajuda, posso contar com a sua análise afiada. Sem dúvidas, alguém que
                    eu
                    indicaria em todo canto por onde eu for..”
                </p>
                <div class="person">
                    <img class="avatar" src="../assets/images/luke.png" alt="Lucas Dias">
                    <div class="person-info">
                        <h4>Lucas Dias</h4>
                        <p>Product Designer na Yampi</p>
                    </div>
                </div>
            </div>
        </SplideSlide>
    </Splide>
</template>

<style lang="scss" scoped>
@import '../scss/app.scss';

.cards {
    display: flex;
    gap: 16px;
    overflow: hidden;
    padding-right: 48px;
    padding-left: 48px;

    .card {
        border-radius: 16px;
        background: rgba(221, 37, 107, 0.10);
        padding: 24px;
        border: 1px solid rgba(221, 37, 107, 0.5);
        justify-content: space-between;

        .quote {
            font-style: italic;
            font-weight: 500;
            line-height: 150%;
            color: $light0;
            margin-bottom: 32px;
        }

        .person {
            display: flex;
            align-items: center;
            gap: 16px;

            .avatar {
                width: 64px;
                height: 64px;
                border-radius: 64px;
            }

            .person-info {

                h4 {
                    color: $primary;
                    font-weight: 700;
                    margin-bottom: 4px;
                }

                p {
                    color: $light0;
                    margin: 0;
                }
            }
        }
    }
}

@media (max-width: 1024px) {
    .cards {
        flex-direction: column;
    }
}
</style>