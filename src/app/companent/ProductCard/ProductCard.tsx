type ProductProps = {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
  };
  
  const ProductCard = ({ id, name, description, price, image_url }: ProductProps) => {
    return (
      <div className="border rounded-lg shadow-lg p-4">
        <img
          src={image_url}
          alt={name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-lg font-bold mt-2">${price}</p>
      </div>
    );
  };
  
  export default ProductCard;
  