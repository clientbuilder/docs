<script setup lang="ts">
import { withBase, useData } from 'vitepress'
const { site, theme, localePath } = useData()
</script>

<template>
  <a
      class="nav-bar-title"
      :href="localePath"
      :aria-label="`${site.title}, back to home`"
  >
    <img
        v-if="theme.logo"
        class="logo"
        :src="withBase(theme.logo)"
        alt="Client Builder"
    />
    Client Builder
  </a>
</template>

<style scoped>
.nav-bar-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--c-text);
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-bar-title:hover {
  text-decoration: none;
}
.logo {
  margin-right: 0.75rem;
  height: 48px;
  vertical-align: bottom;
}
</style>
