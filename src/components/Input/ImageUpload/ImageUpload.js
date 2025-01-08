import React, { useState } from "react";
import Input from "../Input";
import { cn } from "utils/cn";

const ImageUpload = ({
  name,
  maxImages = 5,
  multiple = false,
  initialImages = [],
  className = "",
  error, // Add error prop
}) => {
  const [images, setImages] = useState(initialImages);

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newImages = Array.from(files).slice(0, maxImages - images.length);
      const imagePreviews = newImages.map((file) => URL.createObjectURL(file));

      if (multiple) {
        setImages((prev) => [...prev, ...imagePreviews]);
      } else {
        setImages(imagePreviews.slice(0, 1));
      }
    }
  };

  // Handle removing an image
  const handleRemoveImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  // Function to get both initial and current images
  const getImages = () => {
    // Return both initial and current images (if any)
    return [...initialImages, ...images];
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* Display uploaded images */}
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image}
              alt={`Uploaded Image ${index + 1}`}
              className="w-24 h-24 object-cover rounded-lg shadow-md"
            />
            <button
              type="button"
              onClick={() => handleRemoveImage(index)}
              className="absolute top-0 right-0 p-1 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors shadow-md transform translate-x-1/2 -translate-y-1/2"
              aria-label="Remove image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}

        {/* Upload Button (if max images not reached) */}
        {images.length < maxImages && (
          <div className="relative">
            <div className="w-24 h-24 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
              <span className="text-gray-500 text-sm">
                {multiple ? "Upload" : "Upload Photo"}
              </span>
            </div>
            <Input
              name={name}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              multiple={multiple} // Allow multiple files if enabled
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              error={error} // Pass error prop to Input
            />
          </div>
        )}
      </div>

      {/* Max Images Warning */}
      {images.length >= maxImages && (
        <p className="text-sm text-gray-500">
          Maximum of {maxImages} images reached.
        </p>
      )}
    </div>
  );
};

export default ImageUpload;