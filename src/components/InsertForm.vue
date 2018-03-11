<template>
    <form class="row no-gutters mb-3" @submit.prevent="insert();">
        <div class="col-8 col-sm-10">
            <input type="text" title="Insert new element" v-model="text" class="form-control form-control-lg text-input" placeholder="Insert new element" />
        </div>
        <div class="col-4 col-sm-2">
            <button type="submit" class="btn btn-lg btn-block btn-primary btn-submit">
                Create
            </button>
        </div>
    </form>
</template>

<script>
    import { Actions } from "../services/Store";
    export default {
        name: "insert-form",
        data: () => ({
            text: ''
        }),
        methods: {
            insert: function() {
                Actions.insertElement(this.text);
                this.text = '';
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>