<template>
  <h1>Oops!</h1>
  <h3>This {{ resource }} no existy.</h3>
  <router-link :to="{ name: 'EventList' }">Back to the home page</router-link>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: 'page',
    },
  },
}
</script>
