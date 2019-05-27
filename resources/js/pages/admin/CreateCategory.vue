<template>
  <div class="row justify-content-center col-md-8">
          <div class="col-md-10">
          <div class="card card-default">
              <div class="card-header">Create An Category</div>
              <FormError v-bind:errors="validationErrors"></FormError>
              <form @submit.prevent="addCategory" class="card-body">
                  <div class="row">
                    <div class="col-md-8">
                      <div class="form-group">
                        <label>Name:</label>
                        <input class="form-control" v-model="category.name">
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
import FormError from '../../components/FormError.vue'
    export default {
      data(){
          return {
            category:{},
            validationErrors: null
          }
      },
      methods: {
          addCategory(){
              let uri = `/auth/category`
              this.axios.post(uri, this.category).then((response) => {
                  this.$router.push({name: `admin.category`})
              }).catch(error => {
                  if (error.response.status == 422){
                    this.validationErrors = error.response.data.errors;
                  }
              })
          }
      },
      components: {
         FormError
      }
  }
</script>