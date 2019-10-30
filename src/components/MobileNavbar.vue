<template>
    <div class='mobile-navbar'>
        <Dropdown class='dropdown' />
    </div>
</template>

<script>
    import Dropdown from './Dropdown'

    export default {
        methods: {
            expandMenu(){
                console.log('here')
            },
        },
        components: {
            Dropdown
        }
    }
</script>

<style lang="scss">
    .mobile-navbar {
        display: flex;
        justify-content: flex-end;
    }
</style>