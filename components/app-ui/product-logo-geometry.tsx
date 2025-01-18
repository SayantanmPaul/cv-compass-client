import Spline from "@splinetool/react-spline/next";

const ProductLogoGeometry = () => {
  return (
    <div className="relative w-[150%] h-full lg:w-[120%] lg:-translate-x-52 md:translate-x-20 -translate-x-52 overflow-hidden">
      <Spline
        scene="https://prod.spline.design/u4GLmaicwDG-j1qK/scene.splinecode"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};
export default ProductLogoGeometry;
