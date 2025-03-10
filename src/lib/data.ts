
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  images?: string[];
  sizes?: string[];
  colors?: string[];
  featured?: boolean;
  new?: boolean;
  rating?: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Minimal Wool Coat",
    description: "Luxurious wool coat with a minimalist design. Features clean lines and premium Italian wool for maximum warmth and style.",
    price: 299.99,
    category: "outerwear",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Camel", "Grey"],
    featured: true,
    rating: 4.8
  },
  {
    id: "2",
    name: "Essential Cashmere Sweater",
    description: "Ultra-soft cashmere sweater that provides exceptional warmth without the bulk. A wardrobe essential for the colder months.",
    price: 189.99,
    category: "knitwear",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Navy", "Burgundy"],
    featured: true,
    rating: 4.7
  },
  {
    id: "3",
    name: "Tailored Slim-Fit Shirt",
    description: "Premium cotton shirt with a tailored slim fit. Perfect for both casual and formal occasions with its versatile design.",
    price: 119.99,
    category: "shirts",
    image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1563630423918-b58f07336ac9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Light Blue", "Black"],
    new: true,
    rating: 4.5
  },
  {
    id: "4",
    name: "Signature Leather Jacket",
    description: "Italian full-grain leather jacket with a timeless design. Features expert craftsmanship and a silky smooth satin lining.",
    price: 499.99,
    category: "outerwear",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1494955870715-e1e147fea0bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown"],
    featured: true,
    rating: 4.9
  },
  {
    id: "5",
    name: "Classic Straight-Leg Trousers",
    description: "Sophisticated trousers crafted from premium wool blend. Features a straight-leg cut and refined details.",
    price: 149.99,
    category: "trousers",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1519345274080-154b5ade9f26?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Black", "Navy", "Grey"],
    new: true,
    rating: 4.6
  },
  {
    id: "6",
    name: "Premium Merino Wool Turtleneck",
    description: "Luxurious merino wool turtleneck that offers exceptional warmth and comfort. Features a streamlined silhouette.",
    price: 159.99,
    category: "knitwear",
    image: "https://images.unsplash.com/photo-1614252369475-531eba7cb6c8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1614252369475-531eba7cb6c8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Cream", "Burgundy"],
    featured: true,
    rating: 4.7
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "outerwear", name: "Outerwear" },
  { id: "knitwear", name: "Knitwear" },
  { id: "shirts", name: "Shirts" },
  { id: "trousers", name: "Trousers" }
];
