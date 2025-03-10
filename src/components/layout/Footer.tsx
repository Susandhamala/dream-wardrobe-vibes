
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-secondary/50">
      <div className="container-padding mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col">
            <Link to="/" className="mb-4 inline-flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-brand-red">DR</span>
                <span className="text-brand-green">EAM</span>
              </span>
            </Link>
            <p className="mb-6 text-sm text-muted-foreground">
              Elevate your style with premium quality clothing designed for those who appreciate elegance and sophistication.
            </p>
            <div className="mt-auto flex space-x-4">
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-white transition-transform hover:scale-110">
                <Facebook size={16} />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-white transition-transform hover:scale-110">
                <Instagram size={16} />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-white transition-transform hover:scale-110">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="mb-4 text-sm font-medium uppercase">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Featured
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="mb-4 text-sm font-medium uppercase">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Press
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Store Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="mb-4 text-sm font-medium uppercase">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-0.5 text-brand-red" />
                <span className="text-sm text-muted-foreground">
                  123 Fashion Street, Design District, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-brand-red" />
                <a href="tel:+1234567890" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-brand-red" />
                <a href="mailto:info@dreamclothing.com" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  info@dreamclothing.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <div className="flex flex-col items-center justify-between space-y-4 text-center sm:flex-row sm:text-left md:space-y-0">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} DREAM Premium Clothing. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link to="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
              <Link to="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
                Terms of Service
              </Link>
              <Link to="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
