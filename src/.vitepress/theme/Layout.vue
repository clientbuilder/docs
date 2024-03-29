<script setup lang="ts">
import { ref, computed, watch, defineAsyncComponent } from 'vue'
import { useRoute, useData } from 'vitepress'
import { isSideBarEmpty, getSideBarConfig } from 'vitepress/dist/client/theme-default/support/sideBar'
// components
import Home from 'vitepress/dist/client/theme-default/components/Home.vue'
import NavBar from './components/NavBar.vue'
import SideBar from 'vitepress/dist/client/theme-default/components/SideBar.vue'
import Page from 'vitepress/dist/client/theme-default/components/Page.vue'
import AlgoliaSearchBox from 'vitepress/dist/client/theme-default/components/AlgoliaSearchBox.vue';
import MainFooter from "./components/MainFooter.vue";

// generic state
const route = useRoute()
const { site, page, theme, frontmatter } = useData()
// custom layout
const isCustomLayout = computed(() => !!frontmatter.value.customLayout)
// home
const enableHome = computed(() => !!frontmatter.value.home)
// automatic multilang check for AlgoliaSearchBox
const isMultiLang = computed(() => Object.keys(site.value.langs).length > 1)
// navbar
const showNavbar = computed(() => {
  const themeConfig = theme.value
  if (frontmatter.value.navbar === false || themeConfig.navbar === false) {
    return false
  }
  return (
      site.value.title || themeConfig.logo || themeConfig.repo || themeConfig.nav
  )
})
// sidebar
const openSideBar = ref(false)
const showSidebar = computed(() => {
  if (frontmatter.value.home || frontmatter.value.sidebar === false) {
    return false
  }
  return !isSideBarEmpty(
      getSideBarConfig(theme.value.sidebar, route.data.relativePath)
  )
})
const toggleSidebar = (to?: boolean) => {
  openSideBar.value = typeof to === 'boolean' ? to : !openSideBar.value
}
const hideSidebar = toggleSidebar.bind(null, false)
// close the sidebar when navigating to a different location
watch(route, hideSidebar)
// TODO: route only changes when the pathname changes
// listening to hashchange does nothing because it's prevented in router
// page classes
const pageClasses = computed(() => {
  return [
    {
      'no-navbar': !showNavbar.value,
      'sidebar-open': openSideBar.value,
      'no-sidebar': !showSidebar.value
    }
  ]
})
</script>

<template>
  <div class="theme" :class="pageClasses">
    <NavBar v-if="showNavbar" @toggle="toggleSidebar">
      <template #search>
        <slot name="navbar-search">
          <AlgoliaSearchBox
              v-if="theme.algolia"
              :options="theme.algolia"
              :multilang="isMultiLang"
          />
        </slot>
      </template>
    </NavBar>

    <SideBar :open="openSideBar">
      <template #sidebar-top>
        <slot name="sidebar-top" />
      </template>
      <template #sidebar-bottom>
        <slot name="sidebar-bottom" />
      </template>
    </SideBar>
    <!-- TODO: make this button accessible -->
    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <Page>
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
        <MainFooter/>
      </template>
    </Page>

  </div>

  <Debug />
</template>

<style>
</style>
