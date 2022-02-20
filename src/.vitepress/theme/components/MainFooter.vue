<template>
  <footer class="footer">
    <div class="container">
      <p class="text">
        MIT License • Copyright © {{ new Date().getFullYear() }} <a href="https://georgi.karagogov.com/" target="_blank">Georgi Karagogov</a>
      </p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.footer .text {
  text-align: center;
  font-weight: 500;
  font-size: .86rem;
}

.footer .text a {
  font-weight: bold;
}

</style>
