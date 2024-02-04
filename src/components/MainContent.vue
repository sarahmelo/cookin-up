<script lang="ts">
import Footer from './Footer.vue';
import Revenues from './Revenues.vue';
import SelectIngredients from './SelectIngredients.vue';
import Tag from './Tag.vue';
import YourList from './YourList.vue';

type Pages = 'SelectIngredients' | 'Revenues';

export default {
    data: () => {
        return {
            ingredients: [] as string[],
            content: 'SelectIngredients' as Pages,
        }
    },
    methods: {
        handleAddIngredient(ingredient: string) {
            this.ingredients.push(ingredient)
        },
        handleRemoveIngredient(ingredient: string) {
            this.ingredients = this.ingredients.filter((item) => item !== ingredient)
        },
        navigate(page: Pages) {
            this.content = page
        }
    },
    components: {
        SelectIngredients,
        Tag,
        YourList,
        Footer,
        Revenues
    }
}
</script>

<template>
    <main class="main-content">
        <YourList :ingredients="ingredients"/>
        <KeepAlive include="SelectIngredients">
            <SelectIngredients v-if="content === 'SelectIngredients'"
                @add-ingredient="handleAddIngredient($event)"
                @remove-ingredient="handleRemoveIngredient($event)"
                @search="navigate('Revenues')"
            ></SelectIngredients>
            <Revenues 
                v-else-if="content === 'Revenues'"
                :ingredients="ingredients"
                @back-to-home="navigate('SelectIngredients')"
            />
        </KeepAlive>
    </main>
    <Footer></Footer>
</template>

<style scoped>
.main-content {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  width: 100%;
}

@media only screen and (max-width: 1300px) {
  .main-content {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .main-content {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
