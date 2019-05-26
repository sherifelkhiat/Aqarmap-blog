<template>
  <div class="row justify-content-center">
          <div class="col-md-8">
          <div class="card card-default">
              <div class="card-header">Create Comment</div>
        
              <form @submit.prevent="addComment" class="card-body">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Comment:</label>
                        <input class="form-control" v-model="comment.comment">
                      </div>
                    </div>
                  </div><br />
                  <div class="form-group">
                    <button class="btn btn-primary">Create</button>
                  </div>
              </form>
          </div>
          </div>
  </div>
</template>

<script>
    export default {
      data(){
          return {
            comment:{},
            article_id: this.$route.params.article_id
          }
      },
      methods: {
          addComment(){
              let uri = `/comment`;
              this.comment.article_id = this.article_id;
              this.axios.post(uri, this.comment).then((response) => {
                  this.$router.push({path: `/article/${this.article_id}`});
              });
          }
      }
  }
</script>