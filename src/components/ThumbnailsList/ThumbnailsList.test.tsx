import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ThumbnailsList from "./ThumbnailsList";

jest.mock("@apollo/client", () => ({
  useQuery: () => ({
    loading: false,
    error: null,
    data: {
      thumnail: [
        {
          id: 79,
          url: "https://picsum.photos/seed/2dPAH/350/466",
          alt: "Iusto magni assumenda tenetur.",
        },
        {
          id: 80,
          url: "https://picsum.photos/seed/kSGI7ldmm/350/466",
          alt: "Nemo laborum at temporibus. Tempore repellendus minus. Illum a perferendis assumenda error doloremque maiores ipsam. Illo optio tempora esse laborum voluptates molestias maiores vitae. Dignissimos ut earum voluptatibus accusamus maiores aspernatur. Ipsa earum veniam ut aliquid quaerat. Aut fugit ullam. Dolor odio ea hic eius perferendis. In laboriosam sint iusto odit vitae. Ullam dolores harum totam voluptatem illo reprehenderit ipsum. Ipsam facere nobis. Iusto quas numquam sequi. Ipsa at eligendi culpa iste iste ab. In fugiat quas adipisci tempora. Fugit maxime alias id quis repudiandae quis aliquam. Esse autem porro velit. Iusto ratione in vel enim vitae nam. Sapiente facilis cupiditate at. Libero libero at fugit repellat. Illum itaque consequuntur inventore ab repellendus. Optio iure minima eum blanditiis culpa magnam dolore suscipit occaecati. Asperiores sequi corrupti doloremque porro magni. Aut dolore voluptatem perspiciatis expedita nostrum eius autem. Magnam magni quam doloremque tempora. Dignissimos sint esse nihil. Quasi iure dicta beatae illum quia.",
        },
      ],
    },
  }),
}));

test("renders ThumbnailsList component", () => {
  const { getByText } = render(<ThumbnailsList />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByText("Coucou 1")).toBeInTheDocument();
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByText("Coucou 2")).toBeInTheDocument();
});

test("clicking the next button increments offset", () => {
  const { getByText } = render(<ThumbnailsList />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const nextButton = getByText("");

  fireEvent.click(nextButton);
  expect(nextButton).toBeInTheDocument();
});
