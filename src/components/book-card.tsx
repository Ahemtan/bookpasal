import { Heart, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  price: number;
  condition: string;
  image: string;
  seller: string;
}

const BookCard = ({
  id,
  title,
  author,
  price,
  condition,
  image,
  seller,
}: BookCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer group">
      <div className="aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 truncate text-sm">
              {title}
            </h3>
            <p className="text-sm text-gray-600 truncate">by {author}</p>
          </div>
          <div className="flex items-center space-x-1 ml-2">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-green-600">${price}</span>
          <Badge
            variant="secondary"
            className={`
              ${
                condition === "Excellent"
                  ? "bg-green-100 text-green-800"
                  : condition === "Good"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-yellow-100 text-yellow-800"
              }
            `}
          >
            {condition}
          </Badge>
        </div>

        <div className="text-xs text-gray-500 mb-3">Sold by {seller}</div>

        <Button className="w-full bg-green-600 hover:bg-green-700 transition-colors">
          <Link href={`/books/${id}`}>Buy Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
