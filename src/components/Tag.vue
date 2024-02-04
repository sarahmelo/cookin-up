<script lang="ts">
    export default {
        props: {
            text: { 
                type: String,
                required: true,
            },
            isActive: Boolean,
            onClick: { 
                type: Function, 
                required: true,
                default: () => { }
            },
        }
    }
</script>
<template>
    <button @click="() => onClick()">
        <span 
        :aria-pressed="isActive"
        :class="[
            'tag',
            { 'active': isActive }
        ]"
        >
            {{ text }}
        </span>
    </button>
</template>
<style scoped>
.tag {
    display: inline-block;
    border-radius: 0.5rem;
    min-width: 4.25rem;
    padding: 0.5rem;
    text-align: center;
    transition: 0.2s;
    background-color: var(--soft-gray);
    color: var(--gray);
    font-weight: 500;
}

.tag.active {
    color: var(--creme, #FFFAF3);
    background: var(--coral, #F0633C);
    font-weight: 700;
}
</style>