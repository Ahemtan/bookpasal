import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Share } from "lucide-react";
import Link from "next/link";

const book = {
  id: "5",
  title: "Educated",
  author: "Tara Westover",
  price: 16.0,
  condition: "Good",
  image:
    "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=300&h=400&fit=crop&crop=edges",
  description:
    "A powerful memoir about the transformative power of education. Born to survivalists in the mountains of Idaho, Tara Westover was seventeen the first time she set foot in a classroom.",
  isbn: "978-0399590504",
  publishedYear: 2018,
  genre: "Memoir",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href={"/books"}>
          <Button
            variant="ghost"
            className="mb-6 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Books
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 max-w-md mx-auto lg:mx-0">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {book.title}
              </h1>
              <p className="text-2xl text-gray-600 mb-6">by {book.author}</p>

              <div className="flex items-center space-x-6 mb-6">
                <span className="text-4xl font-bold text-green-600">
                  ${book.price}
                </span>
                <Badge
                  variant="secondary"
                  className={`text-sm px-3 py-1 ${
                    book.condition === "Excellent"
                      ? "bg-green-100 text-green-800"
                      : book.condition === "Good"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {book.condition} Condition
                </Badge>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {book.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <span className="font-semibold text-gray-900 block mb-1">
                  ISBN:
                </span>
                <p className="text-gray-600">{book.isbn}</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900 block mb-1">
                  Published:
                </span>
                <p className="text-gray-600">{book.publishedYear}</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900 block mb-1">
                  Genre:
                </span>
                <p className="text-gray-600">{book.genre}</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900 block mb-1">
                  Book Condition:
                </span>
                <p className="text-gray-600">{book.condition}</p>
              </div>
            </div>

            <hr />

            <div className="space-y-4 pt-6">
              <div className="flex space-x-4">
                <Button className="flex-1 bg-green-600 hover:bg-green-700 text-lg py-3">
                  Buy Now
                </Button>
                <Button variant="outline" className="flex-1 text-lg py-3">
                  Request Pickup
                </Button>
              </div>

              <div className="flex space-x-4">
                <Button variant="outline" className="flex-1">
                  <Heart className="h-4 w-4 mr-2" />
                  Add to Favorites
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
