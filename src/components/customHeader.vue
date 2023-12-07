<script lang="ts" setup>

import { ref } from 'vue';

const activeLink = ref(null);

const handleClick = (event) => {
    const clickedLink = event.target.closest('.nav-link');

    if (clickedLink) {
        const initialActiveLink = document.querySelector('.nav-link.active');
        if (initialActiveLink) {
            initialActiveLink.classList.remove('active');
        }

        clickedLink.classList.toggle('active');
        activeLink.value = clickedLink;
    }
}



</script>

<template>
    <header>
        <nav class="navbar fixed-top navbar-expand-lg" @click="handleClick">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">Sobre mim</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#portfolio">Portfólio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#skills">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#testimonies">Depoimentos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@import 'src/scss/app.scss';

header {
    margin-top: 80px;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
}

.navbar {
    background-color: rgba(5, 1, 7, 0.60);
    
    padding: 24px;
    display: flex;

    .collapse {
        justify-content: center;

        .navbar-nav {
            gap: 24px;
            margin-top: 24px;
        }

        .nav-link {
            color: $light0;
            font-size: 18px;
            font-weight: 400;
            padding: 0;
        }

        .nav-link:hover {
            color: $light1;
        }

        .nav-link.active {
            color: $primary;
            font-weight: 700;
        }
    }
}

.navbar-toggler {
        background-color: rgba(252, 251, 247, 0.50)
    }

    .navbar-nav:first-child {
        margin-top: 24px;
    }
    .nav-item {
        margin: 8px 0;
    }
</style>


