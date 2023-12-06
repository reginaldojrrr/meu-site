<script setup>

</script>

<template>
    <div class="cards-header">
        <div class="title">
            <div class="badge">💬 Depoimentos</div>
            <h2>Dizem as boas línguas...</h2>
        </div>
        <div class="controls">
            <button disabled type="button" id="prev-button" class="custom-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M28.3853 4.75542C28.5017 4.87153 28.594 5.00947 28.6571 5.16133C28.7201 5.3132 28.7525 5.476 28.7525 5.64042C28.7525 5.80484 28.7201 5.96764 28.6571 6.1195C28.594 6.27137 28.5017 6.4093 28.3853 6.52542L14.2678 20.6404L28.3853 34.7554C28.62 34.9901 28.7519 35.3085 28.7519 35.6404C28.7519 35.9724 28.62 36.2907 28.3853 36.5254C28.1506 36.7601 27.8322 36.892 27.5003 36.892C27.1683 36.892 26.85 36.7601 26.6153 36.5254L11.6153 21.5254C11.4989 21.4093 11.4065 21.2714 11.3435 21.1195C11.2805 20.9676 11.248 20.8048 11.248 20.6404C11.248 20.476 11.2805 20.3132 11.3435 20.1613C11.4065 20.0095 11.4989 19.8715 11.6153 19.7554L26.6153 4.75542C26.7314 4.63901 26.8693 4.54665 27.0212 4.48364C27.1731 4.42062 27.3359 4.38818 27.5003 4.38818C27.6647 4.38818 27.8275 4.42062 27.9794 4.48364C28.1312 4.54665 28.2692 4.63901 28.3853 4.75542Z"
                        fill="#FCFBF7" />
                </svg>
            </button>
            <button type="button" id="next-button" class="custom-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.6153 4.75542C11.7314 4.63901 11.8693 4.54665 12.0212 4.48364C12.1731 4.42062 12.3359 4.38818 12.5003 4.38818C12.6647 4.38818 12.8275 4.42062 12.9794 4.48364C13.1312 4.54665 13.2692 4.63901 13.3853 4.75542L28.3853 19.7554C28.5017 19.8715 28.594 20.0095 28.6571 20.1613C28.7201 20.3132 28.7525 20.476 28.7525 20.6404C28.7525 20.8048 28.7201 20.9676 28.6571 21.1195C28.594 21.2714 28.5017 21.4093 28.3853 21.5254L13.3853 36.5254C13.1506 36.7601 12.8322 36.892 12.5003 36.892C12.1683 36.892 11.85 36.7601 11.6153 36.5254C11.3806 36.2907 11.2487 35.9724 11.2487 35.6404C11.2487 35.3085 11.3806 34.9901 11.6153 34.7554L25.7328 20.6404L11.6153 6.52542C11.4989 6.4093 11.4065 6.27137 11.3435 6.1195C11.2805 5.96764 11.248 5.80484 11.248 5.64042C11.248 5.476 11.2805 5.3132 11.3435 5.16133C11.4065 5.00947 11.4989 4.87153 11.6153 4.75542Z"
                        fill="#FCFBF7" />
                </svg>
            </button>
        </div>
    </div>
    <div class="cards">
        <div class="card col-4">
            <p class="quote">
                “Posso afirmar que, no que diz respeito a Produto e Design, ele é um profissional de altíssimo nível. Além
                disso, o Reginaldo apresenta um grande diferencial no âmbito tecnológico. Além das habilidades em design,
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
        <div class="card col-4">
            <p class="quote">
                “Foi uma das pessoas chave para a criação do nosso Design System open-source, o Smash DS, e na criação de
                diversos processos e rituais de coesão entre os times de design e desenvolvimento. Sob a perspectiva de soft
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
        <div class="card col-4">
            <p class="quote">
                “Trabalhar com o Reginaldo é gratificante, sempre organizado e comprometido, faz entregas que facilitam
                demais a vida dos desenvolvedores. Tem conhecimento amplo na área de UX, além de aprofundar muito e entender
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
        <div class="card col-4">
            <p class="quote">
                “O Reginaldo é um dos profissionais mais incríveis que eu tive o prazer de trabalhar! Um Sênior PD em toda a
                sua glória, que tem o técnico super afiado, abraça os desafios, traz boas referências para o time, e ainda
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
        <div class="card col-4">
            <p class="quote">
                “Cara, Regis é muito firmeza. Além de resolver as coisas com a qualidade de ponta, é um grande ouvinte e
                conselheiro. Sempre que preciso de ajuda, posso contar com a sua análise afiada. Sem dúvidas, alguém que eu
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
    </div>
</template>

<style lang="scss" scoped>
@import '../scss/app.scss';

.cards-header {
    display: flex;
    align-items:last baseline;
    justify-content: space-between;
    .title {
        margin-top: 160px;

        .badge {
            margin-bottom: 24px;
        }

        h2 {
            margin-bottom: 80px;
        }
    }

    .controls {
        display: flex;
        gap: 24px;

        #prev-button {
            left: 10px;
        }

        #next-button {
            right: 10px;
        }
    }
}

.cards {
    display: flex;
    gap: 16px;
    overflow: hidden;
    padding-right: 32px;

    .card {
        border-radius: 16px;
        background: rgba(221, 37, 107, 0.10);
        padding: 24px;

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
</style>