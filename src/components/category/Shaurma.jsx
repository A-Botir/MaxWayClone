import { useContext } from "react";
import { UseAllContext } from "../../App";

const Shaurma = () => {
  const {
    foods,
    addToCart,
    increaseToCart,
    decreaseCount,
    count,
    showButton,
    t,
  } = useContext(UseAllContext);

  return (
    <div className="pt-[80px] sm:pt-[54px] md:pt-[54px]" id="shaurma">
      <h2 className="mb-5 text-[28px] font-bold sm:mb-4 sm:text-[24px] md:mb-4 md:text-[24px]">
        {t("Navbar_4")}
      </h2>
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {foods
          .filter((food) => food.category === "shaurma")
          .map((food) => (
            <div
              className="sm:rouned-xl col-span-1 rounded-[16px] bg-white shadow-[0_0_12px_#0000000D] md:rounded-[14px]"
              key={food.id}
            >
             <div className="max-h-[197px] overflow-y-hidden sm:h-[124px] md:h-[124px]">
                <img
                  src={food.img}
                  alt="fast-food img"
                  className="box-border h-full w-full rounded-t-[16px] object-fill"
                />
              </div>
              <div className="px-4 py-3 sm:px-2 sm:pb-2 sm:pt-4 md:px-2 md:pb-2 md:pt-4">
                <h4 className="text-[18px] font-semibold sm:mb-1 sm:text-[16px] sm:font-normal md:mb-1 md:text-[16px] md:font-normal">
                  {food.title}
                </h4>
                  <p className="h-[50px] mb-3 mt-2 w-full overflow-hidden text-[#48535b] sm:mb-1 sm:h-9 sm:text-[12px] md:mb-1 md:h-10 md:text-[12px]">
                  {food.description}
                </p>
                <div className="flex items-center justify-between sm:flex-col sm:items-start md:flex-col md:items-start">
                  <p className="sm:mb-1 md:mb-1">
                    <span className="text-[18px] font-bold sm:text-[16px] md:text-[16px]">
                      {food.price}
                    </span>
                    &nbsp;{"uz_currency"}
                  </p>
                  {showButton ? (
                    <button
                      className="transform rounded-[16px] bg-[#51267d] px-6 py-[10px] text-center align-middle font-medium leading-5 text-white duration-200 hover:bg-[#5e318b] active:scale-[0.95] sm:w-full sm:rounded-xl sm:py-[6px] md:w-full md:rounded-[14px] md:py-[6px]"
                      onClick={() => addToCart(food)}
                    >
                      {t("add_count")}
                    </button>
                  ) : (
                    <div className="flex items-center rounded-[20px] border border-[#51267d] py-[6px]">
                      <button
                        className="px-4 text-[20px] font-medium sm:px-2 sm:text-[16px] md:px-3 md:text-[16px]"
                        onClick={() => updateCount(index, item.counts - 1)}
                      >
                        -
                      </button>
                      <p className=" s w-7 text-center text-[16px] font-semibold leading-[20px] sm:w-4">
                        {item.counts}
                      </p>
                      <button
                        className="px-4 text-[20px] font-medium sm:px-2 sm:text-[16px] md:px-3 md:text-[16px]"
                        onClick={() => updateCount(index, item.counts + 1)}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shaurma;
