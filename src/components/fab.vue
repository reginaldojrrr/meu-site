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
        border-radius: 500px;
        height: 56px;
        width: 56px;
        background-color: rgba(221, 37, 107, .80);
        color: white;
        border: none;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .fab:hover {
        background-color: #D01059;
        transition: all 200ms;
    }
}
</style>