"use client";
import Image from "next/image";
import { Input } from "@/components/atoms/input";
import { useState } from "react";

const mockPosts = [
  {
    id: 1,
    title:
      "Navigating Big Emotions: A Therapist’s Toolkit for Emotional Resilience",
    category: "Mindfulness",
    date: "3/27/25",
    image: "/jpg/flower-1.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur...",
  },
  {
    id: 2,
    title: "Letting Go of the Past: How to Heal from Emotional Wounds",
    category: "Healing",
    date: "3/27/25",
    image: "/jpg/forest-mushroom.jpg",
    excerpt:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
  },
  {
    id: 3,
    title: "The Power of Self-Compassion in Relationships",
    category: "Relationships",
    date: "3/27/25",
    image: "/jpg/flower-1.jpg",
    excerpt:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
  },
  {
    id: 4,
    title: "Finding Calm: Mindfulness Practices for Everyday Life",
    category: "Mindfulness",
    date: "3/27/25",
    image: "/jpg/forest-mushroom.jpg",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
  },
];

const categories = ["Healing", "Mindfulness", "Relationships"];

export default function BlogSection() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = mockPosts.filter(
    (post) =>
      (!selectedCategory || post.category === selectedCategory) &&
      (post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section className="w-full bg-[#7b7451] min-h-screen px-4 py-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-3xl font-serif italic text-[#e5e0d3]">
            Categories
          </h2>
          <div className="flex gap-6 items-center flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`text-[#e5e0d3] text-lg font-medium hover:underline transition-all ${
                  selectedCategory === cat ? "underline" : ""
                }`}
                onClick={() =>
                  setSelectedCategory(cat === selectedCategory ? null : cat)
                }
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="w-full md:w-64">
            <Input
              type="text"
              value={search}
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <hr className="border-[#e5e0d3] opacity-40" />
      </div>
      {/* Posts grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPosts.map((post, idx) => (
          <div
            key={post.id}
            className={`bg-[#857c5a] rounded shadow overflow-hidden flex flex-col ${
              idx % 3 === 0 ? "md:row-span-2" : ""
            }`}
          >
            <div className="relative w-full h-64 md:h-80">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover object-center"
                priority={idx === 0}
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="text-xs text-[#e5e0d3] mb-2 flex gap-2">
                <span>{post.category}</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#e5e0d3] mb-2">
                {post.title}
              </h3>
              <p className="text-[#e5e0d3] mb-4 flex-1">{post.excerpt}</p>
              <a href="#" className="text-[#e5e0d3] underline text-sm mt-auto">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
