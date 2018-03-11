<template>
    <div id="app">
        <div class="container">
            <div class="row align-items-center fullheight">
                <div class="col">
                    <description></description>
                    <hr/>
                    <search-form></search-form>
                    <insert-form></insert-form>
                    <div class="text-center mb-3">
                        or
                    </div>
                    <generate-form></generate-form>
                    <elements-list class="mt-5"></elements-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SearchForm from './components/SearchForm';
    import InsertForm from './components/InsertForm';
    import Description from './components/Description';
    import ElementsList from './components/ElementsList';
    import GenerateForm from './components/GenerateForm'
    export default {
        name: 'app',
        components: {
            SearchForm,
            Description,
            InsertForm,
            ElementsList,
            GenerateForm
        }
    }
</script>

<style lang="scss">
    .fullheight {
        min-height: 100vh;
    }

    .text-input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .btn-submit {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
</style>
