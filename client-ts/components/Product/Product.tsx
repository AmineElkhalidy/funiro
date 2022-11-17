interface ProductProps {}

const Product: React.FC<ProductProps> = () => {
  return (
    <div className="relative bg-[#F4F5F7]">
      <p className="bg-green-accent absolute top-4 right-4 w-14 h-14 flex items-center justify-center rounded-full text-white">
        New
      </p>

      <img
        src="/assets/imgs/product.png"
        alt="product"
        className="w-full h-80 mb-4 object-cover"
      />
      <div className="p-4">
        <h1 className="text-xl font-semibold mb-3 text-darkGray">
          Product Name
        </h1>
        <h3 className="text-base font-medium mb-3 text-gray">
          Minimalist flower pot
        </h3>
        <h2 className="text-xl  font-semibold text-darkGray">$500</h2>
      </div>
    </div>
  );
};

export default Product;
