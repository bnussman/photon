import createClient from "openapi-fetch";
import type { paths as Photon } from "./photon";

export const photon = createClient<Photon>({
  baseUrl: "https://photon.nussman.us",
  // baseUrl: "http://photon.komoot.io",
});
export type { Photon };
