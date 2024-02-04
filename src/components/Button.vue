<script lang="ts">
export default {
    props: {
        label: String,
    }
}
</script>
<template>
    <button
        type="button"
    >
        <span class="text-button paragraph-lg">
            {{  label  }}
        </span>
    </button>
</template>

<style scoped>
    button {
        background-color: var(--coral);
        color: var(--white);
        padding: 12px 75px;
        font-weight: 700;
        border-radius: 40px;
        cursor: pointer;
        box-shadow: 4px 4px 15px 0px #FF734C40;
    }
</style>