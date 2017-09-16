<template>
    <div>
        <div class="greeting">
            Hello {{ name }} {{ exclamationMarks }}
        </div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    props: ['name', 'initialEnthusiasm']
})
export default class HelloComponent extends Vue {
    name: string
    initialEnthusiasm: number

    enthusiasm: number = this.initialEnthusiasm

    get exclamationMarks(): string {
        return new Array(this.enthusiasm + 1).join('!')
    }

    increment() {
        this.enthusiasm++
    }

    decrement() {
        this.enthusiasm > 1 && this.enthusiasm--
    }
}
</script>

<style lang="less" scoped>
.greeting {
    font-size: 20px;
}
</style>
