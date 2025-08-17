import { photon } from ".";

const { data, error } = await photon.GET("/api", {
  params: {
    query: {
      q: "Booneshine",
    },
  },
});

console.log(data, error);
