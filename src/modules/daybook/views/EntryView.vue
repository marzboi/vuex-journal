<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold">{{ day }}</span>
        <span class="mx-1 fs-3">{{ month }}</span>
        <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
      </div>

      <div>
        <button class="btn btn-danger mx-2">
          Borrar
          <i class="fa fa-trash-alt"></i>
        </button>

        <button class="btn btn-primary">
          Subir Foto
          <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>

    <hr />

    <div class="d-flex flex-column px-3 h-75">
      <textarea v-model="entry.text" placeholder="Que sucedio hoy?"></textarea>
    </div>

    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/New_York_Comic_Con_2014_-_Dr._Robotnik_%2815314367147%29.jpg/800px-New_York_Comic_Con_2014_-_Dr._Robotnik_%2815314367147%29.jpg"
      alt=""
      class="img-thumbnail"
    />
  </template>

  <Fab icon="fa-save" @on:click="saveEntry" />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { defineAsyncComponent } from "vue";
import getDayMonthYear from "../helpers/getDayMonthYear";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
  computed: {
    ...mapGetters("journal", ["getEntryById"]),
    day() {
      const { day } = getDayMonthYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDayMonthYear(this.entry.date);
      return month;
    },
    yearDay() {
      const { yearDay } = getDayMonthYear(this.entry.date);
      return yearDay;
    },
  },

  data() {
    return {
      entry: null,
    };
  },

  methods: {
    ...mapActions("journal", ["updateEntry"]),
    loadEntry() {
      let entry;

      if (this.id === "new") {
        entry = {
          text: "",
          date: new Date().getTime(),
        };
      } else {
        entry = this.getEntryById(this.id);
        if (!entry) return this.$router.push({ name: "no-entry" });
      }

      this.entry = entry;
    },

    async saveEntry() {
      if (this.entry.id) {
        await this.updateEntry(this.entry);
      } else {
        console.log("post de nueva entrada");
      }
    },
  },

  created() {
    this.loadEntry();
  },

  watch: {
    id() {
      this.loadEntry();
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}
img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10 px rgba(#000000, 0.2);
}
</style>
