<template>
    <div class="child-1">
        <p>
            in child1
        </p>
         <p>
            props:{{pChild1}}
        </p>
         <p>
            $attrs:{{$attrs}}
        </p>
        <hr>
            <ComponentC v-bind="$attrs" v-on="$listeners">

            </ComponentC>
        <hr>
    </div>
</template>
<script>
    import ComponentC from './ComponentC.vue';
    export default{
        props:['pChild1'],
        data(){
            return {};
        },
        inheritAttrs:false,
        components:{
            ComponentC
        },
        mounted() {
            this.$emit('test1');
        },
    };
</script>