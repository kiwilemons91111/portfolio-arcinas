<template>
  <div class="scale-110-container origin-top">
    <RouterView />
  </div>
</template>

<style id="app-zoom">
.scale-110-container {
  transform: scale(1.1);
  transform-origin: top center;
  width: 90.9%; 
  margin: 0 auto;
}
</style>