<template>
    <Page>
        <ActionBar title="Welcome to Maths!"/>
        <GridLayout columns="*" rows="*">
            <Label class="message" :text="msg" col="0" row="0"/>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        msg: 'Hello World!'
      }
    }
  }
</script>
<style>
    @import url('https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap');
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20rem;
        font-family: 'Rubik', sans-serif;
        color: #fff;
    }
</style>
