<template>
<button class="py-button">
  <span v-if="$slots.default"><slot></slot></span>
</button>
</template>
<script type='text/ecmascript-6'>
export default {
  name: 'PYButton'
}
</script>
<style scoped lang='scss'>
</style>
