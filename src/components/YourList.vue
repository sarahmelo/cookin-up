<script lang="ts">
import Tag from './Tag.vue';

export default {
    props: {
        ingredients: {
            type: Array<string>,
            required: true,
        },
    },
    components: { Tag }
}
</script>
<template>
    <section>
        <span class="subtitle-lg text-list">
            Sua Lista
        </span>
        <ul 
            v-if="ingredients.length" 
            class="ingredients-list"
        >
            <li 
                v-for="ingredient in ingredients"
                :key="ingredient"
            >
                <Tag
                    :text="ingredient"
                    :is-active="true"
                />
            </li>
        </ul>

        <p  
            v-else
            class="paragraph empty-list"
        >
            <img 
                src="../assets/icons/empty-list.svg" 
                alt="folha de papeis com lupa"
            >
            Sua lista está vazia, selecione ingredientes para iniciar
        </p>
    </section>
</template>
<style scoped>
.text-list {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredients-list {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.empty-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}
</style>