import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ANIMALS = [
  "Lion",
  "Tiger",
  "Elephant",
  "Giraffe",
  "Zebra",
  "Dog",
  "Cat",
  "Horse",
  "Cow",
  "Buffalo",
  "Goat",
  "Sheep",
  "Monkey",
  "Bear",
  "Deer",
  "Wolf",
  "Fox",
  "Rabbit",
  "Kangaroo",
  "Panda",
  "Leopard",
  "Cheetah",
  "Camel",
  "Donkey",
  "Pig",
];

const STORAGE_KEY = "chat_usename";

const generateUsername = () => {
  const randomNumber = Math.floor(Math.random() * ANIMALS.length);
  return `anonymous-${ANIMALS[randomNumber]}-${nanoid(5)}`;
};

export const useUsername = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const main = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setUsername(stored);
        return;
      }
      const generatedName = generateUsername();
      localStorage.setItem(STORAGE_KEY, generatedName);
      setUsername(generatedName);
    };
    main();
  }, []);

  return { username };
};
