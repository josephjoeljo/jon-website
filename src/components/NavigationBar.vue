<template>
    <div id="bar">
        <RouterLink id="title" to="/"> Jon Lory </RouterLink>

        <div id="routes">
            <RouterLink id="route" to="/digitals"> Digitals </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import '../style.css';
</script>

<style scoped>
#bar {
    display: flex;
    height: 60px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background-color: var(--primary-color);

    #title {
        height: 3rem;
        color: white;
        cursor: pointer;
        font-size: 2rem;
        font-weight: bold;
        margin: 0rem 2rem;
        text-decoration: none;
    }

    #routes {
        #route {
            color: white;
            cursor: pointer;
            margin: 0rem 2rem;
            text-decoration: none;
            text-transform: uppercase;
        }
    }
}
</style>