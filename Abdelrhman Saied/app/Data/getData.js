"use server";

export default async function getReviews() {
  try {
    const response = await fetch(
      "https://679fdbb124322f8329c4c8f3.mockapi.io/api/tourist/reviews"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return null;
  }
}
