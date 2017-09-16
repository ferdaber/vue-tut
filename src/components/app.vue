<template>
    <div>
        <div>Hello {{ name }}</div>
        <div>Name: <input type="text" v-model="name"></div>
        <div>
            Check out this component!
            <hello-component :name="name" :initialEnthusiasm="5" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import HelloComponent from './hello.vue'

@Component({
    components: {
        HelloComponent
    }
})
export default class App extends Vue {
    name = 'World'
}
</script>

<style lang="less">

</style>
