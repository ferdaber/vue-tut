import Vue from 'vue'

import HelloComponent from './components/hello.vue'

const vm = new Vue({
    el: '#app',
    template: `
    <div>
        <div>Hello {{ name }}!</div>
        Name: <input v-model="name" type="text"/>
        <div>
            Check out this component!
            <hello-component
                :name="name"
                :initialEnthusiasm="5"
            />
        </div>
    </div>
    `,
    data: {
        name: 'World'
    },
    components: {
        HelloComponent
    }
})
