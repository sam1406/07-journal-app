<template>
    <div class="entry-container mb-3 pointer p-2" @click="$router.push({ name: 'daybook-entry', params:{id:10} })">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">{{ title }}</span>
            <span class="mx-1 lw-light">2021, jueves</span>
        </div>

        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, voluptas cumque aut dolor eius beatae laudantium. Maiores repudiandae quas ullam sapiente eum aliquam laborum iure rerum. Nisi dolorum dolores nam.
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            title: '',
            isEditing: false
        };
    },
};


</script>

<style lang="scss" scoped>

.entry-container {
    border-bottom: 1px solid #e6e6e6;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: #f5f5f5;
        transition: 0.2s all ease-in-out;

    }
    .entry-description {
        font-size: 12px;
    }
}
</style>