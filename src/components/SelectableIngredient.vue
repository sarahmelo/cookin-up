<script lang="ts">
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingredient: {
            type: String,
            required: true
        }
    },
    methods: {
        handleIsSelectedState() {
            this.isSelected = !this.isSelected
            
            if (this.isSelected) {
                console.log('----> adiciona')
                this.$emit('addIngredient', this.ingredient)

                return
            }
            console.log('----> remove')
            this.$emit('removeIngredient', this.ingredient)
        },
    },
    data: () => {
        return {
            isSelected: false,
        }
    },
    emits: ['addIngredient', 'removeIngredient']
}

</script>
<template>
    <Tag 
        :text="ingredient" 
        :is-active="isSelected"
        :on-click="handleIsSelectedState"    
    />
</template>

