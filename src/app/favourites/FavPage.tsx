"use client";
import ItemCard from "@/components/ItemCard";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearItems } from "@/redux/slice/bagState";
import { AiOutlineDelete } from "react-icons/ai";

function Favourites() {
  const dispatch = useAppDispatch();
  const bag = useAppSelector((state) => state.state.bagState.items);
  return (
    <div className="min-h-screen padding py-8">
      {bag?.length < 1 && (
        <div className="h-screen flex items-center justify-center">
          <p className="text-center text-[1rem] font-semibold text-blue">
            Favourites is empty.
          </p>
        </div>
      )}
      {Array.isArray(bag) && bag.length > 0 && (
        <div className="min-h-screen gap-3 md:gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {bag.map((item, i) => (
            <ItemCard
              imageUrl={item.imageUrl}
              id={item.id}
              url={item.url}
              key={i}
              name={item.name}
              brandName={item.brandName}
              price={item.price}
            />
          ))}
        </div>
      )}
      {bag.length > 0 && (
                <div
                onClick={() => dispatch(clearItems())}
                className="mt-4 mx-auto p-4 md:p-5 rounded-full text-[0.8rem] text-white text-center bg-blue w-max cursor-pointer"
              >
                <AiOutlineDelete className="w-5 h-5 md:w-6 md:h-6" />
              </div>
      )}
    </div>
  );
}

export default Favourites;
