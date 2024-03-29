import { StarIcon } from "@heroicons/react/24/solid";
import { SiUpwork } from "react-icons/si";

const Testimonial = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <div className="bg-[#192339] rounded-xl h-[12rem] lg:max-w-[28rem] lg:h-[14rem] max-w-sm p-6 mx-4 overflow-hidden">
      {/* Name, username and logo */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-gray-400 lg:text-lg">{name}</h3>

          {/* Stars */}
          <div className="flex">
            {[1, 2, 3, 4, 5].map((index) => (
              <StarIcon key={index} className="w-5 h-5 text-yellow-500" />
            ))}
          </div>
        </div>

        <SiUpwork className="w-7 lg:w-8 h-7 lg:h-8 text-green-600" />
      </div>

      <p className="max-w-xs font-medium text-gray-100 text-sm lg:text-base md:max-w-md">
        {description}
      </p>
    </div>
  );
};

export default Testimonial;
