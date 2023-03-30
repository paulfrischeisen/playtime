import { assert } from "chai";
import { db } from "../src/models/db.js";

suite("User API tests", () => {
  setup(async () => {
    db.init();
  });
});

export const maggie = {
  firstName: "Maggie",
  lastName: "Simpson",
  email: "maggie@simpson.com",
  password: "secret",
};

export const testUsers = [
  {
    firstName: "Homer",
    lastName: "Simpson",
    email: "homer@simpson.com",
    password: "secret",
  },
  {
    firstName: "Marge",
    lastName: "Simpson",
    email: "marge@simpson.com",
    password: "secret",
  },
  {
    firstName: "Bart",
    lastName: "Simpson",
    email: "bart@simpson.com",
    password: "secret",
  },
];

export const mozart = {
  title: "Mozart Favourites",
};

export const testPlaylists = [
  {
    title: "Beethoven Sonatas",
  },
  {
    title: "Beethoven Concertos",
  },
  {
    title: "Beethoven Symphonies",
  },
];
