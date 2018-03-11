<template>
    <div class="row mt-3" id="elementsList">
        <div class="col-12" v-if="store.filteredElements.length > 0">
            <div class="row mb-3">
                <div class="col">
                    <button class="btn btn-lg btn-danger float-left" @click="deleteAll()">Delete all</button>
                </div>
                <div class="col text-right max-line-height">
                    <span>Found {{ store.filteredElements.length }} elements</span>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Text</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="element in displaying" v-bind:key="element.id">
                        <td>{{ element.id }}</td>
                        <td>{{ element.text }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-12 text-center" v-else>
            <h3>No elements to display!</h3>
            <h5>Add an element or generate many by using the form!</h5>
        </div>
    </div>
</template>

<script>
    import { Store, Actions } from '../services/Store';
    export default {
        name: "elements-list",
        created: function() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed: function() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        data: () => ({
            store: Store
        }),
        methods: {
            showMore: function() {
                Actions.displayMore();
            },
            handleScroll: function() {
                if(document.documentElement.scrollTop + document.documentElement.clientHeight >= document.body.clientHeight)
                    this.showMore();
            },
            deleteAll: function() {
                Actions.deleteAll();
            }
        },
        computed: {
            displaying: function() {
                return this.store.filteredElements.slice(0, this.store.howMuchDisplay);
            }
        }
    }
</script>

<style lang="scss" scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .max-line-height {
        line-height: 48px;
    }
</style>