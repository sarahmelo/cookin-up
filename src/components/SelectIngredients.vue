<script lang="ts">
import { getCategories } from '@/http/index';
import type { IResult } from '@/interfaces/ICategory';
import CardCategoryVue from './CardCategory.vue';
import Button from './Button.vue';

interface SelectIngredientsProps {
    categories: IResult[]
}

export default {
    name: 'SelectIngredients',
    data(): SelectIngredientsProps {
        return {
            categories: [],
        };
    },
    async created() {
        this.categories = await getCategories();
    },
    components: { CardCategoryVue, Button },
    emits: ['addIngredient', 'removeIngredient', 'search']
}
</script>

<template>
    <section class="select-ingredients">
        <h1 class="header title-ingredients">Ingredients</h1>
        <p class="paragraph-lg instructions">
            Selecione abaixo os ingredientes que você quer usar nesta receita:
        </p>

        <ul class="categories">
            <li v-for="category in categories" :key="category.name" >
                <CardCategoryVue 
                    :category="category"
                    @add-ingredient="$emit('addIngredient', $event)"
                    @remove-ingredient="$emit('removeIngredient', $event)"
                />
            </li>
        </ul>

        <p class="paragraph-lg tick">
            *Atenção: consideramos que você tem em casa sal, pimenta e água.
        </p>

        <Button 
            :label="'Buscar receitas'"
            @click="$emit('search')"
        ></Button>
    </section>
</template>

<style scoped>
.select-ingredients{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-ingredients {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instructions {
  margin-bottom: 2rem;
}

.categories {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.tick {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>
