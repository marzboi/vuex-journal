<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15 </span>
      <span class="mx-1 fs-5">julio</span>
      <span class="mx-2 fw-light">2023, viernes</span>
    </div>

    <div class="entry-description">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam ad
      illo, expedita perspiciatis aliquid dicta laudantium beatae, dolorem nisi
      quas soluta iste repellendus et velit deleniti id eligendi dolor
      voluptatum!
    </div>
  </div>
</template>

<script>
export default {
  name: "EntryComponent",
};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten(grey, 45%);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>
