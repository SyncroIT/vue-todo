<template>
    <form class="row no-gutters mb-3" @submit.prevent="generate">
        <div class="col-8 col-sm-10">
            <input type="number"
                   min="0"
                   max="1000"
                   class="form-control form-control-lg text-input"
                   placeholder="Insert how much items you want to generate"
                   v-model="howMuch" />
        </div>
        <div class="col-4 col-sm-2">
            <button type="submit" class="btn btn-lg btn-block btn-warning btn-submit">
                Generate
            </button>
        </div>
    </form>
</template>

<script>
    import generate from '../services/Generator';
    export default {
        name: "generate-form",
        data: () => ({
            howMuch: ''
        }),
        methods: {
            generate: function() {
                generate(this.howMuch);
            }
        }

    }
</script>

<style scoped>

</style>