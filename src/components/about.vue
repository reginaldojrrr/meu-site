<script setup>

</script>

<template>
    <div class="about">
        <div id="avatar2">
            <img id="layer2" src="../assets/images/avatar2-bg.png" alt="">
            <img data-aos="fade-up" data-aos-duration="3000" id="layer1" src="../assets/images/avatar2.png" alt="">
        </div>
        <div class="about__texts col-md-5">
            <div class="badge">🧐 Sobre mim</div>
            <h2>Olá, tudo bem?</h2>
            <p>👋 Sou formado em Comunicação Social/Publicidade e MBA em Inteligência Competitiva e Inovação em
                Marketing.
            </p>
            <p>
                🖥️ Atuo há mais de 6 anos como Product Designer e decidi me especializar em desenvolvimento front-end
                através da EBAC - Escola Britânica de Artes Criativas e Tecnologia.
            </p>
            <button type="button" class="custom-button">
                <a href="https://drive.google.com/file/d/1S9UmL5ic0Kc3DapbA3G54i4jP7fd4Ysl/view?usp=sharing"
                    target="_blank">
                    <span class="label">Baixar CV</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <g clip-path="url(#clip0_107_178)">
                            <path
                                d="M12.75 10.1694C12.75 9.97052 12.671 9.77976 12.5303 9.6391C12.3896 9.49845 12.1989 9.41943 12 9.41943C11.8011 9.41943 11.6103 9.49845 11.4696 9.6391C11.329 9.77976 11.25 9.97052 11.25 10.1694V15.8589L9.53097 14.1384C9.46124 14.0687 9.37846 14.0134 9.28735 13.9756C9.19624 13.9379 9.09859 13.9185 8.99997 13.9185C8.90136 13.9185 8.8037 13.9379 8.7126 13.9756C8.62149 14.0134 8.5387 14.0687 8.46897 14.1384C8.39924 14.2082 8.34392 14.2909 8.30619 14.3821C8.26845 14.4732 8.24902 14.5708 8.24902 14.6694C8.24902 14.768 8.26845 14.8657 8.30619 14.9568C8.34392 15.0479 8.39924 15.1307 8.46897 15.2004L11.469 18.2004C11.5386 18.2703 11.6214 18.3257 11.7125 18.3635C11.8036 18.4013 11.9013 18.4208 12 18.4208C12.0986 18.4208 12.1963 18.4013 12.2874 18.3635C12.3785 18.3257 12.4613 18.2703 12.531 18.2004L15.531 15.2004C15.6007 15.1307 15.656 15.0479 15.6938 14.9568C15.7315 14.8657 15.7509 14.768 15.7509 14.6694C15.7509 14.5708 15.7315 14.4732 15.6938 14.3821C15.656 14.2909 15.6007 14.2082 15.531 14.1384C15.4612 14.0687 15.3785 14.0134 15.2873 13.9756C15.1962 13.9379 15.0986 13.9185 15 13.9185C14.9014 13.9185 14.8037 13.9379 14.7126 13.9756C14.6215 14.0134 14.5387 14.0687 14.469 14.1384L12.75 15.8589V10.1694Z"
                                fill="#FCFBF7" />
                            <path
                                d="M21 21.4194V7.16943L14.25 0.419434H6C5.20435 0.419434 4.44129 0.735504 3.87868 1.29811C3.31607 1.86072 3 2.62378 3 3.41943V21.4194C3 22.2151 3.31607 22.9781 3.87868 23.5408C4.44129 24.1034 5.20435 24.4194 6 24.4194H18C18.7956 24.4194 19.5587 24.1034 20.1213 23.5408C20.6839 22.9781 21 22.2151 21 21.4194ZM14.25 4.91943C14.25 5.51617 14.4871 6.08847 14.909 6.51042C15.331 6.93238 15.9033 7.16943 16.5 7.16943H19.5V21.4194C19.5 21.8173 19.342 22.1988 19.0607 22.4801C18.7794 22.7614 18.3978 22.9194 18 22.9194H6C5.60218 22.9194 5.22064 22.7614 4.93934 22.4801C4.65804 22.1988 4.5 21.8173 4.5 21.4194V3.41943C4.5 3.02161 4.65804 2.64008 4.93934 2.35877C5.22064 2.07747 5.60218 1.91943 6 1.91943H14.25V4.91943Z"
                                fill="#FCFBF7" />
                        </g>
                        <defs>
                            <clipPath id="clip0_107_178">
                                <rect width="24" height="24" fill="white" transform="translate(0 0.419434)" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.about {
    margin-top: 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__texts {
        .badge {
            margin-bottom: 24px;
        }

        h2 {
            margin-bottom: 8px;
        }

        p {
            margin-bottom: 24px;
        }
    }

    #avatar2 {
        position: relative;
        left: 10%;
        height: 670px;

        #layer1,
        #layer2 {
            position: absolute;
        }

        #layer2 {
            left: 40px;
            top: 23px;
        }
    }
}

@media (max-width: 1024px) {
    .about {
        flex-direction: column;
        margin-top: 80px;

        #avatar2 {
            left: -26%;
        }

        &__texts {
            margin-top: 40px;

            .custom-button {
                width: 100%;
            }
        }
    }
}

@media (max-width: 768px) {
    .about {

        #avatar2 {
            left: -38%;
        }

    }
}

@media (max-width: 425px) {
    .about {

        #avatar2 {
            height: 380px;
            left: -40%;

            #layer2,
            #layer1 {
                height: 380px;
            }

            #layer1 {
                top: 23px;
            }
        }

        &__texts {
            margin-top: 80px;
            width: 80%;
        }
    }
}
</style>