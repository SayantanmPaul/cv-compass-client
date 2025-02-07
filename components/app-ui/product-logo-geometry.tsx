import Image from "next/image";
const ProductLogoGeometry = () => {
  return (
    <div className="relative w-full h-full lg:overflow-visible overflow-hidden lg:translate-x-32 translate-x-96">
      {/* <Spline
        scene="https://prod.spline.design/u4GLmaicwDG-j1qK/scene.splinecode"
        style={{
          width: "100%",
          height: "100%",
        }}
      /> */}
      <Image
        src={"/bg-assets/demo-result.svg"}
        alt="demo-result-image"
        width={940}
        height={940}
        className=" opacity-35 md:opacity-50 lg:opacity-100"
      />
    </div>
  );
};
export default ProductLogoGeometry;
