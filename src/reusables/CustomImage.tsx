interface CustomImageTypes {
  src: string;
  alt: string;
}

const CustomImage = ({ src, alt }: CustomImageTypes) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};

export default CustomImage;
