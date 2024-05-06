import { useContext } from "react";
import { UseAllContext } from "../../App";

const HotDog = () => {
  const { foods, addToCart, increaseToCart, decreaseCount, count, showButton } =
    useContext(UseAllContext);

  return (
    <div className="pt-[80px]" id="hotdog">
      <h2 className="mb-5 text-[28px] font-bold">🌭Hot-Dog</h2>
      <div className="grid grid-cols-4 gap-4">
        {foods.hotdog
          ? foods.hotdog.map((food) => (
              <div
                className="col-span-1 rounded-[16px] bg-white shadow-[0_0_12px_#0000000D]"
                key={food.id}
              >
                <div className="max-h-[197px] overflow-y-hidden">
                  <img
                    src={food.img}
                    alt="fast-food img"
                    className="box-border w-full rounded-t-[16px] object-fill"
                  />
                </div>
                <div className="px-4 py-3">
                  <h4 className="text-[18px] font-semibold">{food.title}</h4>
                  <p className="mb-3 mt-2 text-[#48535b]">{food.description}</p>
                  <div className="flex items-center justify-between">
                    <p>
                      <span className="text-[18px] font-bold">
                        {food.price}
                      </span>
                      so'mdan
                    </p>
                    {showButton ? (
                      <button
                        className="transform rounded-[16px] bg-[#51267d] px-6 py-[10px] text-center align-middle font-medium leading-5 text-white duration-200 hover:bg-[#5e318b] active:scale-[0.95]"
                        onClick={() => addToCart(food)}
                      >
                        Qo'shish
                      </button>
                    ) : (
                      <></>
                      // <div className="flex items-center rounded-[20px] border border-[#51267d] py-[6px]">
                      //   <button
                      //     className="px-4 text-[20px] font-medium"
                      //     onClick={decreaseCount}
                      //   >
                      //     -
                      //   </button>
                      //   <p className="w-7 text-center text-[16px] font-semibold leading-[20px]">
                      //     {count}
                      //   </p>
                      //   <button
                      //     className="px-4 text-[20px] font-medium"
                      //     onClick={increaseToCart}
                      //   >
                      //     +
                      //   </button>
                      // </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default HotDog;
