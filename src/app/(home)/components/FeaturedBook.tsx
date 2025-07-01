import BookCard from "@/components/book-card";
import Link from "next/link";

interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  condition: string;
  image: string;
  description: string;
  seller: string;
  sellerRating: number;
  isbn: string;
  publishedYear: number;
  genre: string;
}

const FeaturedBooks = () => {
  const featuredBooks: Book[] = [
    {
      id: "1",
      title: "The Midnight Library",
      author: "Matt Haig",
      price: 12.99,
      condition: "Excellent",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop&crop=edges",
      description:
        "A beautiful exploration of life's infinite possibilities. Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
      seller: "BookLover23",
      sellerRating: 4.8,
      isbn: "978-0525559474",
      publishedYear: 2020,
      genre: "Contemporary Fiction",
    },
    {
      id: "2",
      title: "Atomic Habits",
      author: "James Clear",
      price: 15.5,
      condition: "Good",
      image:
        "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop&crop=edges",
      description:
        "An easy & proven way to build good habits & break bad ones. Atomic Habits will reshape the way you think about progress and success, and give you the tools and strategies you need to transform your habits.",
      seller: "ProductivityGuru",
      sellerRating: 4.9,
      isbn: "978-0735211292",
      publishedYear: 2018,
      genre: "Self-Help",
    },
    {
      id: "3",
      title: "Dune",
      author: "Frank Herbert",
      price: 18.75,
      condition: "Fair",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&crop=edges",
      description:
        "A stunning blend of adventure and mysticism, environmentalism and politics. Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, who would become the mysterious man known as Muad'Dib.",
      seller: "SciFiCollector",
      sellerRating: 4.7,
      isbn: "978-0441172719",
      publishedYear: 1965,
      genre: "Science Fiction",
    },
    {
      id: "5",
      title: "Educated",
      author: "Tara Westover",
      price: 16.0,
      condition: "Good",
      image:
        "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=300&h=400&fit=crop&crop=edges",
      description:
        "A powerful memoir about the transformative power of education. Born to survivalists in the mountains of Idaho, Tara Westover was seventeen the first time she set foot in a classroom.",
      seller: "MemoirReader",
      sellerRating: 4.8,
      isbn: "978-0399590504",
      publishedYear: 2018,
      genre: "Memoir",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Books
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover handpicked books from our community of readers. Each
            purchase helps reduce waste and gives books a new home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/books"
            className="text-green-600 hover:text-green-700 font-semibold text-lg transition-colors"
          >
            View All Books →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
