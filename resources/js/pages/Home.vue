<template>
    <div class="container">
        <h1>Home</h1>
        <div  v-for="article in articles" 
              v-bind:key="article.id" 
              class="card card-default"
        >
            <div class="card-header">{{ article.title }}</div>

            <div class="card-body">
                <div v-html="article.content"></div>
            </div>
            <router-link :to="{name: 'article.show', params: { id: article.id }}" class="btn btn-primary">View Article</router-link>
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