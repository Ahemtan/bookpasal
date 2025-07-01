import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import FeaturedBooks from "./components/FeaturedBook";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20 lg:py-32">
        <div className="conatiner mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Give Books a <span className="text-green-600">Second Life</span>
            </h1>
            <p className="text-xl hidden md:block text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover your next favorite read while helping the environment.
              Buy, sell, and recycle books with our sustainable marketplace.
            </p>
            <p className="text-base md:hidden text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Buy, sell, and recycle books with our sustainable marketplace.
            </p>

            <div className="max-w-md mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search by title or author"
                  className="pl-12 h-14 text-sm md:text-lg rounded-full border-2 border-green-200 focus:border-green-500 bg-white shadow-sm"
                />
                <Button
                  size="lg"
                  className="absolute right-2 top-2 rounded-full bg-green-600 hover:bg-green-700 h-10 px-6"
                >
                  Search
                </Button>
              </div>
            </div>

            {/* <div className="flex justify-center items-center gap-2">
              <Button className="bg-green-600 hover:bg-green-700 text-lg px-6 py-3 rounded-full">
                Start Selling
              </Button>

              <Button
                variant="outline"
                className="text-lg px-6 py-3 rounded-full border-2 border-green-200 hover:border-green-300"
              >
                Browse Books
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      <FeaturedBooks />
    </>
  );
}
