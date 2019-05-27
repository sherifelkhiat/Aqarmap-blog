<template>
    <span class="help-block">
        <div v-if="errors">
                        <ul class="alert alert-danger">
                            <li v-for="error in errors" v-bind:key="error.id" >@{{ error }}</li>
                        </ul>
                    </div>
        <slot></slot>
    </span>
</template>

<script>
    export default {
        props: ['errors'],
    }
</script>