<template>
    <div id="container">
        <div id="info">
            <img src="../assets/profile.png" class="profile">
            <div class="socials">
                <img src="../assets/instagram.svg" @click="navigateToInstagram">
            </div>
        </div>

        <div id="about-me">
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti imperdiet aliquam facilisis suspendisse mauris proin eleifend eleifend. Sociosqu feugiat pharetra velit lorem sollicitudin dolor congue. Lacinia parturient iaculis platea consectetur hac ligula senectus fames iaculis. Tempor et quis fusce diam nunc venenatis quisque molestie. Adipiscing tristique efficitur eros maecenas semper. Habitasse inceptos dolor; commodo nisl platea faucibus litora. Vel aliquet nam, tellus per augue vitae varius venenatis.</p>
            <p>Ac non magnis volutpat tellus; turpis molestie praesent convallis. Ac mattis sodales neque varius faucibus. Malesuada sit sit cras vel tristique lobortis. Est class arcu taciti sociosqu quis mattis porttitor. Tellus magna quisque amet aliquet arcu sociosqu suscipit platea morbi. Auctor nunc inceptos sapien bibendum mollis eros elit. Hac netus ac class vel nascetur. Sodales dapibus congue lacinia fermentum non a efficitur efficitur. Eget quam luctus nam, convallis id senectus.</p>
        </div>
    </div>
</template>

<script setup lang="ts">

function navigateToInstagram() {
    window.open('https://www.instagram.com/jonloryjoseph/');
}
</script>

<style scoped>
#container {
    display: flex;
    margin: 4rem;

    #info {
        .profile {
            width: 20rem;
            height: 28rem;
        }

        .socials {
            display: flex;
            cursor: pointer;
            margin: 1rem 0rem;
            justify-content: space-around;
        }
    }

    #about-me {
        margin: 0rem 4rem;
        p {
            margin: unset;
            font-size: 1.5rem;
            margin-bottom: 2rem;
        }
    }
}

@media (max-width: 1050px) {
#container {
    display: flex;
    overflow: visible;
    flex-direction: column;

    #info {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    #about-me {
        p {
            font-size: 1.2rem;
            text-align: center;
        }
    }
}
}
</style>