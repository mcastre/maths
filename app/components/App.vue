<template>
    <Page>
        <ActionBar title="Welcome to Maths!"/>
        <Gradient direction="to right" colors='#FF0077, red, #FF00FF'>
            <GridLayout columns="*" rows="*">
                <GameCardStack :cards="[{ keyword: 'hey' }]" />
                <Label class="message" :text="msg" col="0" row="0"/>
            </GridLayout>
        </Gradient>
    </Page>
</template>

<script lang="ts">
    import GameCardStack from '@/components/GameCardStack/index.vue';
    export default {
        components: {
            GameCardStack
        },
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
