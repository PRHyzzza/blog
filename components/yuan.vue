<script setup>
defineProps({
    className: String
})
</script>

<template>
    <div class="yuan" :class="className">
        <slot></slot>
    </div>
</template>

<style scoped>
.yuan {
    display: inline-block;
}
</style>