<template>
    <div>
        <!-- <ComponentB :p-child1="child1" :p-child1="child2" :p-child1="child3">

        </ComponentB> -->
    </div>
</template>
<script>
    import ComponentB from './vue/ComponentB';
    export default {
        data(){
            return {};
        },
        components:{
            ComponentB
        },
        methods:{
            onTest1(){
                console.log('test1');
            },
            onTest2(){
                console.log('test1');
            }
        }
    };
</script>