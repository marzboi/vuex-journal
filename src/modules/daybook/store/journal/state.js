export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam inventore neque quod excepturi tempora ipsa perspiciatis amet possimus, sed nesciunt? Quaerat obcaecati eaque unde! Fuga ipsum in provident illo!",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit voluptate sed molestiae aliquid nostrum error, rem beatae, adipisci eos dolore temporibus est minima similique blanditiis, corrupti alias ratione ipsum nemo?",
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit voluptate sed molestiae aliquid nostrum error, rem beatae, adipisci eos dolore temporibus est minima similique blanditiis, corrupti alias ratione ipsum nemo?",
      picture: null,
    },
  ],
});
