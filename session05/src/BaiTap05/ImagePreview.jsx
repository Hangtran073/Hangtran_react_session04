import React, { useEffect, useState } from "react";

export default function ImagePreview() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!image) {
      setPreview(null);
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result); // tạo URL ảnh base64
    };
    reader.readAsDataURL(image); // đọc ảnh
  }, [image]);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    } else {
      setImage(null);
    }
}
    return (
      <div
        style={{ maxWidth: "500px", margin: "20px auto", fontFamily: "Arial" }}
      >
        <input type="file" accept="image/*" onChange={handleChange} />
        <p>
          <strong>Preview:</strong>
        </p>
        {preview && (
          <img
            src={preview}
            alt="preview"
            style={{
              width: "100%",
              maxHeight: "300px",
              objectFit: "cover",
              border: "1px solid #ccc",
            }}
          />
        )}
      </div>
    );
  };
