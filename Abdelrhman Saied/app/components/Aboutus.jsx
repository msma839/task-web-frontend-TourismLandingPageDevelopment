import Image from "next/image";
import Link from "next/link";

const Aboutus = () => {
  return (
    <div id="about" className="bg-[#eeeeee93] my-6">
      <div className="flex md:flex-row flex-col justify-evenly items-center gap-3">
        <Image alt={"about"} src={"/AboutImg.png"} width={350} height={300} />
        <div className="w-2/4 ">
          <p className="text-orange font-bold"> ABOUT US</p>
          <h1 className="text-3xl font-bold my-4">
            The Best And Most trusted{" "}
            <span className="text-orange">service</span>
          </h1>
          <p className="my-4">
            We are the largest holiday service provider in the world with
            partners and places spread all over the world by prioriti-zing
            service and customer satisfaction.
          </p>
          <Link href={"/Servecies"} className="btn w-fit my-6 block">
            Learn More
          </Link>
          <div className="md:flex justify-between hidden items-center mt-3 text-center">
            <h1>
              <p className="text-orange-fade text-3xl font-bold">200+</p>
              <p className="text-black">Customer & partners</p>
            </h1>
            <h1>
              <p className="text-orange-fade text-3xl font-bold">500+</p>
              <p className="text-black">Place in the world</p>
            </h1>
            <h1>
              <p className="text-orange-fade text-3xl font-bold">1k</p>
              <p className="text-black">Success Journey</p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
