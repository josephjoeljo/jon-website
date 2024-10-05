<template>
    <div id="container">
        <img class="square" src="../assets/digitals/IMG_0917.PNG" :style="{ 'grid-area': 'a' }" />

        <img class="square" src="../assets/digitals/IMG_0913.PNG" :style="{ 'grid-area': 'b' }" />

        <img class="top-rectangle" src="../assets/digitals/IMG_0918.PNG" :style="{ 'grid-area': 'c' }" />

        <img src="../assets/digitals/IMG_0912.PNG" :style="{ 'grid-area': 'e' }" />

        <img class="small-image" src="../assets/digitals/IMG_0915.PNG" :style="{ 'grid-area': 'f' }" />

        <img class="large-image" src="../assets/digitals/IMG_0921.PNG" :style="{ 'grid-area': 'g' }"> 

        <img src="../assets/digitals/IMG_0920.PNG" :style="{ 'grid-area': 'd', 'margin': 'auto 0rem' }" />

        <div class="column" :style="{ 'grid-area': 'h' }">
            <img src="../assets/digitals/IMG_0916.PNG" :style="{ 'width': '70%', 'margin': '0.5rem auto' }" />
            <img src="../assets/digitals/IMG_0919.PNG" :style="{ 'width': '70%', 'margin': '0.5rem auto' }" />
        </div>
        
        <img src="../assets/digitals/IMG_0914.PNG" :style="{ 'grid-area': 'i', 'margin': 'auto 0rem' }"/>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
#container {
    height: unset;
    margin: 4rem;
    display: grid;
    grid-template:
    "a e f"
    "b g g"
    "c g g"
    "d h i";

    img {
        width: 100%;
    }

    .square {
        width: 100%;
        height: 100%;
    }

    .column {
        display: flex;
        flex-direction: column;
    }
}
</style>