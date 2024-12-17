import { StartupCard, StartupCardType } from "@/components/StartupCard";
import { SearchForm } from "../../components/SearchForm";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;

  const posts = [{
    _id: 1,
    _createdAt: new Date(),
    views: 55,
    author: {
      _id: 1,
      name: "John Doe",
      avatar: "https://random.imagecdn.app/48/48",
    },
    description: "This is a startup description",
    category: "Robots",
    title: "We Robots",
    image: "https://random.imagecdn.app/600/400",
  }]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pick Your Startup, <br /> Connect With Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts.length > 0 ? posts.map((post: StartupCardType, index) => (
            <StartupCard key={post?._id} post={post} />
          )) : (
            <p>No results found</p>
          )}
        </ul>
      </section>
    </>
  );
}
