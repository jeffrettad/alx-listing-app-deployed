import { PillProps } from "@/interfaces";
import React from "react";

const FILTER_OPTIONS = [
  "All",
  "Top Villa",
  "Free Reschedule",
  "Book Now, Pay later",
  "Self Checkin",
  "Instant Book",
];

const SORT_OPTIONS = [
  { label: "Highest Price", value: "price-desc" },
  { label: "Lowest Price", value: "price-asc" },
  { label: "Highest Rating", value: "rating-desc" },
  { label: "Most Popular", value: "rating-desc" },
];

const Pill: React.FC<PillProps> = ({ label, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
        isActive
          ? "bg-teal-500 text-white shadow-md"
          : "bg-white text-gray-700 border border-gray-300 hover:border-teal-300 hover:text-teal-600"
      }`}
    >
      {label}
    </button>
  );
};

// Filter Section Component
const FilterSection: React.FC<{
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  selectedSort: string;
  setSelectedSort: (sort: string) => void;
}> = ({ activeFilter, setActiveFilter, selectedSort, setSelectedSort }) => {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const visibleFilters = FILTER_OPTIONS.slice(0, 3);
  const hiddenFilters = FILTER_OPTIONS.slice(3);

  return (
    <>
      {/* Desktop Filter Section - Below Hero */}
      <section className="hidden lg:block bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Filter Pills - Left */}
            <div className="flex items-center gap-3">
              {FILTER_OPTIONS.map((filter) => (
                <Pill
                  key={filter}
                  label={filter}
                  isActive={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                />
              ))}
            </div>

            {/* Sort Options and Filter Icon - Right */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded hover:border-teal-300 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="#131212"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                <span className="text-sm text-gray-500">Filter</span>
              </button>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="border border-gray-300 rounded text-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tablet Filter Section - Below Hero */}
      <section className="hidden sm:block lg:hidden bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Visible Filter Pills - Left */}
            <div className="flex items-center gap-3">
              {visibleFilters.map((filter) => (
                <Pill
                  key={filter}
                  label={filter}
                  isActive={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                />
              ))}

              {/* More Filters Dropdown */}
              {hiddenFilters.length > 0 && (
                <div className="relative">
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-full text-sm font-medium hover:border-teal-300 hover:text-teal-600 transition-all duration-200"
                  >
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        showDropdown ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {showDropdown && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setShowDropdown(false)}
                      ></div>
                      <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-40">
                        {hiddenFilters.map((filter) => (
                          <button
                            key={filter}
                            onClick={() => {
                              setActiveFilter(filter);
                              setShowDropdown(false);
                            }}
                            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                              activeFilter === filter
                                ? "bg-teal-50 text-teal-600"
                                : "text-gray-700"
                            }`}
                          >
                            {filter}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Sort Options and Filter Icon - Right */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded hover:border-teal-300 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </button>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Mobile Filter Section - Above Hero (Separate Component)
const MobileFilterSection: React.FC<{
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  selectedSort: string;
  setSelectedSort: (sort: string) => void;
}> = ({ activeFilter, setActiveFilter, selectedSort, setSelectedSort }) => {
  return (
    <section className="sm:hidden bg-white border-b border-gray-200">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Filter Icon - Fixed Left */}
          <div className="flex-shrink-0">
            <button className="flex items-center gap-1 px-2 py-1 border border-gray-300 rounded text-xs hover:border-teal-300 transition-colors">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </button>
          </div>

          {/* Scrollable Filter Pills - Center */}
          <div className="flex items-center gap-2 overflow-x-auto flex-1 pb-1 scrollbar-hide">
            {FILTER_OPTIONS.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                isActive={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              />
            ))}
          </div>

          {/* Sort Options - Fixed Right */}
          <div className="flex-shrink-0">
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};
export { Pill, FilterSection, MobileFilterSection };
