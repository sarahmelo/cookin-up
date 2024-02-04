<script lang="ts">
import { getRevenues } from '@/http';
import RevenueCardVue from './RevenueCard.vue';
import Button from './Button.vue';
import { filterResultPeerIngredients } from '@/utils/filter-array'

export default { 
        data() {
            return {
                revenues: [] as any,
            }
        },
        props: {
            ingredients: {
                type: Array<string>,
                required: true,
            },
        },
        components: {
            RevenueCardVue,
            Button
        },
        async created() {
            const revenuesResult = await getRevenues();
            this.revenues = revenuesResult.filter((revenue) => {
                return filterResultPeerIngredients(revenue.ingredients, this.ingredients)
            })
        },
        methods: {
            getPicturePath(image: string) {
                return `src/assets/pictures/${image}`
            },
        },
        emits: ['backToHome']
    }
</script>
<template>
    
    <div class="revenues__container">
        <div class="revenues__header">
            <h4 class="revenues__header__title header-lg">Receitas</h4>
            <p class="paragraph revenues__header__result">Resultado Encontrados: {{ revenues.length }}</p>
            <p class="paragraph">Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!</p>
        </div>
        <ul class="revenues__list">
            <li 
                class="revenues__list__item"
                v-for="revenue in revenues"
            >
                <RevenueCardVue 
                    :key="revenue.name"
                    :image="getPicturePath(revenue.image)"
                    :label="revenue.name"
                />
            </li>
        </ul>
        <Button
           :label="'Editar Lista'" 
           @click="$emit('backToHome')"
        ></Button>
    </div>
</template>
<style scoped>
.revenues__container {
width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
}

.revenues__header {
    text-align: center;
}

.revenues__header__title {
    color: var(--medium-green);
    margin-bottom: 24px;
}

.revenues__header__result {
    color: var(--dark-green);
    margin-bottom: 8px;
}
.revenues__list {
    display: grid;
    gap: 24px;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
    width: 100%;
}
</style>