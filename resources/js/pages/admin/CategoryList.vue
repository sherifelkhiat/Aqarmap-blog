<template>

    <div class="container">
        <div class="card card-default">
            <div class="card-header">List of categories</div>

            <div class="card-body">
                                
                <div>
                    <h3>Categories</h3>
                    <div class="alert alert-danger" v-if="has_error">
                        <p>Error, can not list articles.</p>
                    </div>

                    <table class="table">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">name</th>
                            <th scope="col">Date d'inscription</th>
                        </tr>
                        <tr 
                            v-for="category in categories" 
                            v-bind:key="category.id" 
                            style="margin-bottom: 5px;"
                            >
                            <th scope="row">{{ category.id }}</th>
                            <td>{{ category.name }}</td>
                            <td>{{ category.created_at}}</td>

                        </tr>
                    </table>
                    <router-link :to="{name: 'admin.category.create'}" class="btn btn-primary">Create Category</router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        has_error: false,
        categories: null
      }
    },

    mounted() {
      this.getCategories()
    },

    methods: {
      getCategories() {
        this.$http({
          url: `auth/category`,
          method: 'GET'
        })
            .then((res) => {
              this.categories = res.data.success
            }, () => {
              this.has_error = true
            })
      }
    }
  }
</script>