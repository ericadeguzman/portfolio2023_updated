import peopleData from "./people.json";

export type Person = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  date_of_birth: string;
};

export const people: Person[] = peopleData as Person[];
