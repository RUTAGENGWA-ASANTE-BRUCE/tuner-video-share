interface Option {
  title: string;
  list?: string[]; // Optional list of values
}

export const options: Option[] = [
  {
    title: "Category",
    list: [
      "miscellaneous",
      "teaser",
      "trailer",
      "reaction",
      "comedy",
      "interview",
    ],
  },
  { title: "Visibility", list: ["public", "private"] },
  { title: "Other" },
  { title: "Others" },
];
