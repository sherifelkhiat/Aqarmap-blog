<template>
    <nav id="nav">
        <div class="col-xs-3">
            <!--UNLOGGED-->
            <div v-if="!$auth.check()">
                <div v-for="(route, key) in routes.unlogged" v-bind:key="route.path">
                    <router-link  :to="{ name : route.path }" :key="key" class="list-group-item list-group-item-action">
                        {{route.name}}
                    </router-link>
                </div>
            </div>
            <!--LOGGED ADMIN-->
            <div v-if="$auth.check()">
                <div v-for="(route, key) in routes.admin" v-bind:key="route.path">
                    <router-link  :to="{ name : route.path }" :key="key" class="list-group-item list-group-item-action">
                        {{route.name}}
                    </router-link>
                </div>
            </div>
            
            <!--LOGOUT-->
            <div v-if="$auth.check()">
                <a href="#" @click.prevent="$auth.logout()" class="list-group-item list-group-item-action">Logout</a>
            </div>
        </div>
    </nav>
</template>

<script>
  export default {
    data() {
      return {
        routes: {
          // UNLOGGED
          unlogged: [
            {
              name: 'Home',
              path: 'home'
            },
            {
              name: 'Login',
              path: 'login'
            }
          ],
          // LOGGED ADMIN
          admin: [
            {
              name: 'Dashboard',
              path: 'admin.dashboard'
            },
            {
              name: 'Category',
              path: 'admin.category'
            },
            {
              name: 'Article',
              path: 'admin.article'
            }
          ]
        }
      }
    },
    mounted() {
      //
    }
  }
</script>