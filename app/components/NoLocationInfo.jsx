"use client";
// Import necessary modules
import { Button, Skeleton } from "keep-react";
import { useRouter } from "next/navigation"; // Import useRouter hook
import Card from "./Card";

const NoLocationInfo = () => {
  const router = useRouter(); // Access the useRouter hook

  const handleNorFoundCity = () => {
    router.back(); // Go back to previous page
  };

  return (
    <Card>
      <Skeleton className="max-w-xl space-y-2.5">
        <Skeleton.Line className="h-10 w-2/5" />
        <Skeleton.Line className="h-4 w-full" />
        <Skeleton.Line className="h-4 w-full" />
        <Skeleton.Line className="h-4 w-3/5" />
        <Skeleton.Line className="h-4 w-4/5" />
        <h6>No data found with the given {} city name</h6>
        <Button color="warning" size="xs" onClick={handleNorFoundCity}>
          Try again
        </Button>
      </Skeleton>
    </Card>
  );
};

export default NoLocationInfo;
