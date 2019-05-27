<template>
  <div class="row justify-content-center">
          <div class="col-md-10">
          <div class="card card-default">
              <div class="card-header">Create An Article</div>
              <FormError v-bind:errors="validationErrors"></FormError>
              <form @submit.prevent="addArticle" class="card-body">
                  <div class="row">
                    <div class="col-md-8">
                      <div class="form-group">
                        <label>title:</label>
                        <input class="form-control" v-model="article.title">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-8">
                      <div class="form-group">
                        <label>content:</label>
                        <vue-editor v-model="article.content"></vue-editor>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-8">
                      <div class="form-group">
                        <label>Category:</label>
                        <select class="form-control" v-on:change="changeItem($event)" v-model="article.category_id">
                            <option>select Category</option>
                            <option 
                              v-for="category in categories" 
                              v-bind:key="category.id" 
                              v-bind:value="category.id"
                              >{{ category.name }}</option>
                        </select>
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
import { VueEditor } from 'vue2-editor'
import FormError from '../../components/FormError.vue'
    export default {
      data(){
          return {
            article:{},
            categories: null,
            validationErrors: null
          }
      },
      mounted() {
          this.getCategories()
      },
      methods: {
          addArticle(){
              let uri = `/auth/article`
              this.axios.post(uri, this.article).then((response) => {
                  this.$router.push({name: `admin.article`})
              }).catch(error => {
                  if (error.response.status == 422){
                    this.validationErrors = error.response.data.errors;
                    }
              })
          },
          changeItem: function changeItem(event) {
              this.show =  event.target.value
          },
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
      },
      components: {
         VueEditor,
         FormError
      }
  }
</script>