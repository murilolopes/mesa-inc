export default {
  methods: {
    invalidInput(form, field) {
      return this.$v[form][field].$error ? "is-invalid" : "";
    },
  },
};
