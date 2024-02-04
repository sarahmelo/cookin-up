<script lang="ts">
    export default { 
        props: {
            label: {
                type: String,
                required: true,
            },
            image: { 
                type: String,
                required: true,
            },
        }
    }
</script>
<template>
    <div class="revenue-card">
        <img class="revenue-card__picture" :src="image" alt="">
        <div class="revenue-card__description">
            <span>
                {{ label  }}
            </span>
        </div>
    </div>
</template>
<style scoped>
    .revenue-card {
        width: 100%;
        border-radius: 16px;
        box-shadow: 4px 4px 12px 0px #44444414;
    }

    .revenue-card__picture {
        height: 150px;
        width: 100%;
        object-fit: cover;
    }

    .revenue-card__description {
        font-size: 18px;
        padding: 32px;
    }
</style>