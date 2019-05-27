<template>
    <div class="container">
        <h1>Show Article</h1>
        <h3 v-if="article.category !== null">Category: {{ article.category.name }}</h3>
        <div class="card card-default">
            <div class="card-header">{{ article.title }}</div>

            <div class="card-body">
                <div v-html="article.content"></div>
            </div>
        </div>

        <h1>Comments</h1>
          <div 
            v-for="comment in article.comments" 
            v-bind:key="comment.id" 
            class="card card-default col-md-6"
            >
              <div class="card-body">
                  {{ comment.comment }}
              </div>
          </div>  
      <router-link :to="{name: 'comment.create', params: { article_id: article.id }}" class="btn btn-primary">Add Comment</router-link>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        has_error: false,
        article: null
      }
    },

    mounted() {
      this.showArticle()
    },

    methods: {
      showArticle() {
        this.$http({
          url: `article/${this.$route.params.id}`,
          method: 'GET'
        })
            .then((res) => {
              this.article = res.data.success
            }, () => {
              this.has_error = true
            })
      }
    }
  }
</script>