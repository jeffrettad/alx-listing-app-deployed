import React from "react";
import Image from "next/image";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import Card from "@/components/common/Card";
import { FilterSection, MobileFilterSection } from "@/components/common/Pill";

const Home: React.FC = () => {
  // Filter and sort state
  const [activeFilter, setActiveFilter] = React.useState("All");
  const [selectedSort, setSelectedSort] = React.useState("price-desc");

  // Filter properties based on active filter
  const filteredProperties = React.useMemo(() => {
    if (activeFilter === "All") {
      return PROPERTYLISTINGSAMPLE;
    }
    return PROPERTYLISTINGSAMPLE.filter((property) =>
      property.category.includes(activeFilter)
    );
  }, [activeFilter]);

  // Sort properties based on selected sort option
  const sortedProperties = React.useMemo(() => {
    const properties = [...filteredProperties];

    switch (selectedSort) {
      case "price-asc":
        return properties.sort((a, b) => {
          const priceA = a.discount
            ? a.price - (a.price * parseInt(a.discount)) / 100
            : a.price;
          const priceB = b.discount
            ? b.price - (b.price * parseInt(b.discount)) / 100
            : b.price;
          return priceA - priceB;
        });
      case "price-desc":
        return properties.sort((a, b) => {
          const priceA = a.discount
            ? a.price - (a.price * parseInt(a.discount)) / 100
            : a.price;
          const priceB = b.discount
            ? b.price - (b.price * parseInt(b.discount)) / 100
            : b.price;
          return priceB - priceA;
        });
      case "rating-desc":
        return properties.sort((a, b) => b.rating - a.rating);
      case "rating-asc":
        return properties.sort((a, b) => a.rating - b.rating);
      default:
        return properties;
    }
  }, [filteredProperties, selectedSort]);

  return (
    <div className="min-h-screen">
      {/* Mobile Filter Section - Above Hero */}
      <MobileFilterSection
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
      />

      {/* Hero Section */}
      <section className="relative w-full h-[296px] sm:h-[421px] lg:h-[481px] flex items-center justify-center overflow-hidden bg-gray-50">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 mx-[21px] sm:mx-[40px] lg:mx-[60px] rounded-[11px] sm:rounded-[27px] overflow-hidden">
          {/* mobile background */}
          <div className="block sm:hidden">
            <Image
              src="/assets/images/hero_section_image/Image 1 mobile.png"
              alt="Beautiful lakeside cabin with mountains"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
          {/* Tablet and desktop view background */}
          <div className="hidden sm:block">
            <Image
              src="/assets/images/hero_section_image/Image 1.png"
              alt="Beautiful lakeside cabin with mountains"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Find your favorite
            <br />
            place here!
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium opacity-90 max-w-2xl mx-auto leading-relaxed">
            The best prices for over 2 million properties worldwide
          </p>
        </div>
      </section>

      <FilterSection
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
      />

      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Property Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {sortedProperties.map((property, index) => (
              <Card key={index} property={property} />
            ))}
          </div>

          {/* No results message */}
          {sortedProperties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No properties found for the selected filter.
              </p>
              <button
                onClick={() => setActiveFilter("All")}
                className="mt-4 text-teal-600 hover:text-teal-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
              Show more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
