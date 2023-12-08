<template>
    <div class="fab-container">
        <a href="#">
            <button class="fab">
                <i class="bi bi-chevron-up"></i>
            </button>
        </a>
    </div>
</template>

<style lang="scss" scoped>
@import '../scss/app.scss';

.fab-container {
    position: fixed;
    bottom: 24px;
    right: 24px;

    .fab {
        float: left;
        border-radius: 500px;
        height: 56px;
        width: 56px;
        background-color: $primary;
        color: white;
        border: none;
        font-size: 24px;
    }

    .fab:hover {
        background-color: #D01059;
        transition: all 200ms;
    }
}
</style>