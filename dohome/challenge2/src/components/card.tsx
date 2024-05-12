import { Product } from "@/types/Product";

export default function Card(item: Product) {
  let unit;
  switch (item.category) {
    case "smartphones":
    case "laptops":
      unit = "เครื่อง";
      break;
    case "fragrances":
      unit = "ขวด";
      break;
    case "fragrances":
    case "skincare":
      unit = "ขวด";
      break;
    default:
      unit = "ชิ้น";
  }

  return (
    <div className="relative bg-white overflow-hidden cursor-pointer border-2 border-gray-300 h-max">
      {/* Image */}
      <div className="h-72">
        <img src={item.images[0]} alt={item.title} className="h-full w-full object-fill object-center" />
      </div>

      {/* Product name */}
      <div className="flex h-14 mx-5 mt-3">
        <h3 className="text-lg font-medium text-black self-end">{item.title}</h3>
      </div>

      {/* Price */}
      <div className="h-10 ml-5">
        <p className="text-lg font-semibold text-red-600">
          ฿{(item.price * ((100 - item.discountPercentage) / 100)).toFixed(2)}{" "}
          <span className="text-sm font-medium text-gray-400 line-through">฿{item.price.toFixed(2)}</span>{" "}
          <span className="text-sm font-medium text-gray-400">/{unit}</span>
        </p>
      </div>

      {/* Like */}
      <div className="relative buttom-0 left-0 w-5 ml-5 my-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="fill-gray-600 inline-block" viewBox="0 0 64 64">
          <path
            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
            data-original="#000000"></path>
        </svg>
      </div>
    </div>
  );
}

// flex items-center justify-center cursor-pointer pr-5 mt-5
