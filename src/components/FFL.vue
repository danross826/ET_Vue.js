<template>
    <div v-on:click="$modal.show('login')">login</div>
    <div v-on:click="$modal.show('register', {boo: 'yaa'})">register</div>

    <modal name="login">
        <div slot="content">
            // login html
        </div>
    </modal>
</template>

<script>
    export default {
        modals: {
            login: {
                onShow: function () {
                    console.log('show');
                },
                onHide: function () {
                    console.log('hide');
                }
            },
            register: {
                onShow: function () {
                    console.log(this.$modal.data('register'));
                }
            }
        }
    }
</script>