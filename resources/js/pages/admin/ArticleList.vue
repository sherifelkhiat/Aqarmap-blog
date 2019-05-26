<template>
    <div class="container">
        <div class="card card-default">
            <div class="card-header">Articles</div>

            <div class="card-body">
                <div>
                    <h3>List of articles</h3>
                    <div class="alert alert-danger" v-if="has_error">
                        <p>Error, can not list articles</p>
                    </div>

                    <table class="table">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Category</th>
                            <th scope="col">Date d'inscription</th>
                        </tr>
                        <tr 
                            v-for="article in articles" 
                            v-bind:key="article.id" 
                            style="margin-bottom: 5px;"
                            >
                            <th scope="row">{{ article.id }}</th>
                            <td>{{ article.title }}</td>
                            <td>{{ article.category.name }}</td>
                            <td>{{ article.created_at}}</td>

                        </tr>
                    </table>
                    <router-link :to="{name: 'admin.article.create'}" class="btn btn-primary">Create Article</router-link>

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
        articles: null
      }
    },

    mounted() {
      this.getArticles()
    },

    methods: {
      getArticles() {
        this.$http({
          url: `auth/article`,
          method: 'GET'
        })
            .then((res) => {
              this.articles = res.data.success
            }, () => {
              this.has_error = true
            })
      }
    }
  }
</script>