// pages/property/[id].tsx
import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProperty = async () => {
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (err) {
        console.error("Error fetching property details:", err);
        setError("Failed to load property.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!property) return <p>Property not found</p>;

  return <PropertyDetail property={property} />;
}
