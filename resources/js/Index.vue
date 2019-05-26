<template>
    <div id="main">
        <header id="header">
            <h1>
                <router-link :to="{name: 'home'}">
                    Blog
                </router-link>
            </h1>
        </header>
        <div id="content" class="row">
            <navigationMenu></navigationMenu>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  import navigationMenu from './components/Menu.vue'
  export default {
    data() {
      return {
        //
      }
    },
    components: {
      navigationMenu
    }
  }
</script>