<template>
    <div class="row">
        <div class="col">
            <div class="input-group input-group-lg mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
                <input type="text" class="form-control" placeholder="Search for an element..." v-model="searchValue">
            </div>
        </div>
    </div>
</template>

<script>
    import { Actions } from '../services/Store';
    export default {
        name: "search-form",
        data: () => ({
            searchValue: ''
        }),
        watch: {
            searchValue: Actions.setFilter
        }
    }
</script>

<style scoped>

</style>