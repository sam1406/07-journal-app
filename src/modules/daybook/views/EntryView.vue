<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div class="">
      <span class="text-success fs-3 fw-bold">{{ day }}</span>
      <span class="mx-1 fs-3">{{ title }}</span>
      <span class="mx-1 fs-4 fw-light">{{ date }}</span>
    </div>
    <div>
      <button class="btn btn-danger">
        Borrar
        <i class="fas fa-trash-alt fa-lg"></i>
      </button>
      <button class="btn btn-info">
        Editar
        <i class="fas fa-edit fa-lg"></i>
      </button>
      <button class="btn btn-secundary">
        Subir Foto
        <i class="fas fa-file-upload fa-lg fa-fw"></i>
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="Que sucede hoy?"></textarea>
  </div>
  <Fab icon="fa-save" />

  <img src="https://www.robertlandscapes.com/wp-content/uploads/2014/11/landscape-322100_1280.jpg" alt="entry-picture"
        class="img-thumbnail" />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
  data() {
    return {
      title: "Bse",
      day: "15",
      date: "30/10/2020",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. In, voluptas cumque aut dolor eius beatae laudantium. Maiores repudiandae quas ullam sapiente eum aliquam laborum iure rerum. Nisi dolorum dolores nam.",
      isEditing: false,
    };
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 1.3rem;
  height: 100%;
  border: none;

  &:focus {
    outline: none;
  }

}
  img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
  }
</style>
