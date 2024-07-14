import { Button } from "@material-tailwind/react";
import img1 from "../../../assets/0fdca04a-3d51-49de-98f4-6728a4dc1a28.webp";
import img2 from "../../../assets/1ac20787-9384-45a8-a9dc-9c6943362b2e.webp";
import img3 from "../../../assets/2.webp";
import img4 from "../../../assets/c7124b58-e6d3-435a-9ebe-b1136bd28f60.webp";

const FeaturedCandidates = () => {
  const featuredData = [
    {
      img: img1,
      name: "Bilal PiVaultThin",
      location: "Pakisthan",
      rate: "$20/hr",
      profession: "Web Applications Developer",
    },
    {
      img: img2,
      name: "Nitesh Kumer",
      location: "India",
      rate: "$25/hr",
      profession: "Sr. ASP.NET Developer",
    },
    {
      img: img3,
      name: "Saidur Pavel",
      location: "Bangladesh",
      rate: "$27/hr",
      profession: "Sr. MERN Stack Developer",
    },
    {
      img: img4,
      name: "Saimum Sayed",
      location: "England",
      rate: "$22/hr",
      profession: "Social Media Management",
    },
  ];
  return (
    <div className="mx-6">
      <div className="text-center rounded-md mb-7">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold bg-orange-50 py-2 ">
          Featured Candidates
        </h1>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-0 gap-2 ">
        {featuredData.map((data, idx) => (
          <div
            key={idx}
            className={` ${
              data.name === "Bilal PiVaultThin"
                ? "md:border-r-0 md:border-b-0 lg:border-b-2 border-[#E2E2E2] border-2 group hover:bg-white"
                : ""
            } ${
              data.name === "Nitesh Kumer"
                ? "lg:border-r-0 md:border-b-0 lg:border-b-2 border-[#E2E2E2] border-2 group hover:bg-white"
                : ""
            } ${
              data.name === "Saidur Pavel"
                ? "border-r-0 border-[#E2E2E2] border-2 group hover:bg-white"
                : ""
            } ${
              data.name === "Saimum Sayed" ? "group hover:bg-white" : ""
            } border-2 border-[#E2E2E2] bg-orange-50 p-5`}
          >
            <Button className="bg-secondaryColor disabled: py-0">
              Featured
            </Button>
            <div className="flex justify-center">
              <img className="rounded-full w-3/5" src={data.img} alt="" />
            </div>
            <div className="flex flex-col gap-1 pt-3">
              <h1 className="text-center text-xl font-bold">{data.name}</h1>
              <h1 className="text-center text-lg font-medium">
                {data.location}
              </h1>
              <h1 className="text-center text-lg font-medium">{data.rate}</h1>
              <h1 className="text-center text-xl font-bold">
                {data.profession}
              </h1>
            </div>
            <div className="flex justify-center pt-3">
              <Button className="group-hover:bg-secondaryColor group-hover:text-white group-hover:rounded-md bg-transparent text-black border-2 border-[#E2E2E2] rounded-none shadow-none capitalize text-base">
                View More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCandidates;
