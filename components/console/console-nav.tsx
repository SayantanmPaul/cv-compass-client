import { ProductLogoWithName } from "../app-ui/productLogoWithName";

const ConsoleNavbar = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <span className="min-w-5 h-5">
        <ProductLogoWithName />
      </span>
    </div>
  );
};

export default ConsoleNavbar;
