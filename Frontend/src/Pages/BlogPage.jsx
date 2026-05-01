import React from "react";
import HeroSection from "../Components/HeroSection.jsx";
import BlogCard from "../Components/BlogCard.jsx";

const BlogData = [
  {
    title: "10 Hidden Gems for Your Next Vacation",
    author: "Jane Doe",
    excerpt:
      "Discover breathtaking and less crowded destinations to add to your travel bucket list this year.",
  },
  {
    title: "Top 5 Family-Friendly Vacation Homes",
    author: "John Smith",
    excerpt:
      "Planning a family trip? Check out our top picks for vacation rentals that cater to kids and adults alike.",
  },
  {
    title: "How to Pack Light for a Weekend Getaway",
    author: "Emily Chen",
    excerpt:
      "Master the art of packing light with these essential tips for your next short vacation.",
  },
  {
    title: "The Ultimate Guide to Pet-Friendly Rentals",
    author: "Michael Brown",
    excerpt:
      "Don't leave your furry friend behind. Here is everything you need to know about traveling with pets.",
  },
  {
    title: "A Foodie's Guide to Culinary Travel",
    author: "Sarah Johnson",
    excerpt:
      "Explore the best destinations for food lovers and discover rentals with gourmet kitchens.",
  },
  {
    title: "Staycation Ideas: Exploring Your Own Backyard",
    author: "David Lee",
    excerpt:
      "You don't need to go far to have a great vacation. Uncover the benefits of booking a local staycation.",
  },
];

function BlogPage() {
  return (
    <>
      <div>
        <HeroSection
          title="Blog"
          description="Explore our latest articles, tips, and guides to help you make the most of your upcoming vacation rental experience."></HeroSection>
      </div>
      {/* Blog card content come here... */}
      <div className="container my-5">
        <div className="row g-4 justify-content-center">
          {BlogData.map((blog, index) => (
            <div className="col-12 col-md-6 col-lg-4 d-flex" key={index}>
              <BlogCard
                title={blog.title}
                author={blog.author}
                excerpt={blog.excerpt}></BlogCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogPage;
