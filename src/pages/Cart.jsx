import { useContext, useEffect, useState } from "react";
import { UseAllContext } from "../App";

const Cart = () => {
  const {
    mapCart,
    count,
    updateCount,
    setCount,
    totalPrice,
    handleOpen,
    setmapCart,
  } = useContext(UseAllContext);
  const [isPaymentDisabled, setIsPaymentDisabled] = useState(true);

  useEffect(() => {
    setIsPaymentDisabled(totalPrice <= 40000);
  }, [totalPrice]);

  const handlePayment = () => {
    const activeLogin = localStorage.getItem("activeLogin");
    if (activeLogin && activeLogin.trim() === "authorized") {
      alert("Buyurtma qabul qilinadi! Yetkazib berishni kuting");
      localStorage.setItem("cartStorage", JSON.stringify([]));
      setmapCart([]);
    } else {
      handleOpen();
    }
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <section className="container mt-8">
      <h2 className="text-[32px] font-bold leading-10">Savatcha</h2>
      <div className="mb-20 mt-8 grid grid-cols-3 gap-10">
        <div className="col-span-2 rounded-[16px] bg-white pt-5 shadow-[0_0_12px_#0000000D]">
          <div className="flex items-center gap-3 border-b border-[#0000000f] px-6 py-5">
            <div className="box-border h-[78px] min-w-[77.9px] max-w-[78px]">
              <img
                src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fe876e478-efea-4992-a7ab-0b5cdb650582&w=1920&q=75"
                alt="order food img"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="grid w-full grid-cols-5 items-center gap-x-3">
              <div className="col-span-3">
                <h4 className="mb-1 text-[18px] font-medium">Kraft packet</h4>
                <p className="text-[#808080]"></p>
              </div>
              <div className="col-span-2 mr-4 flex items-center justify-between">
                <div className="flex items-center rounded-[20px] border border-[#51267d] py-[6px]">
                  <button
                    className="px-4 text-[20px] font-medium"
                    onClick={decrement}
                  >
                    -
                  </button>
                  <p className=" w-7 text-center text-[16px] font-semibold leading-[20px]">
                    {count}
                  </p>
                  <button
                    className="px-4 text-[20px] font-medium"
                    onClick={increment}
                  >
                    +
                  </button>
                </div>
                <p className="text-[16px] font-semibold">2 000 so'm</p>
              </div>
            </div>
          </div>
          {mapCart.map((item, index) => (
            <div
              className="flex items-center gap-3 border-b border-[#0000000f] px-6 py-5"
              key={item.id}
            >
              <div className="box-border h-[78px] min-w-[77.9px] max-w-[78px]">
                <img
                  src={item.image}
                  alt="order food img"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
              <div className="grid w-full grid-cols-5 items-center gap-x-3">
                <div className="col-span-3">
                  <h4 className="mb-1 text-[18px] font-medium">{item.title}</h4>
                  <p className="text-[#808080]">{item.description}</p>
                </div>
                <div className="col-span-2 mr-4 flex items-center justify-between">
                  <div className="flex items-center rounded-[20px] border border-[#51267d] py-[6px]">
                    <button
                      className="px-4 text-[20px] font-medium"
                      onClick={() => updateCount(index, item.counts - 1)}
                    >
                      -
                    </button>
                    <p className=" w-7 text-center text-[16px] font-semibold leading-[20px]">
                      {item.counts}
                    </p>
                    <button
                      className="px-4 text-[20px] font-medium"
                      onClick={() => updateCount(index, item.counts + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-[16px] font-semibold">
                    {item.prices} so'm
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-1">
          <div className="sticky top-0 rounded-[16px] bg-white px-[18px] py-6 shadow-[0_0_12px_#0000000D]">
            <h4 className="text-[20px] font-bold leading-6">Umumiy</h4>
            <div className="my-4 flex items-center justify-between">
              <p className="text-[16px] leading-5">Mahsulotlar</p>
              <p className="text-[16px] font-medium leading-5">
                {totalPrice + count * 2000} so'm
              </p>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-[16px] leading-5">Yetkazib berish</p>
              <p className="text-[16px] font-medium">0 so'm</p>
            </div>
            <div className="border-t border-[#eaeaea]">
              <div className="my-4 flex items-center justify-between">
                <p className="text-[16px] leading-5">To'lash uchun</p>
                <p className="text-[16px] font-medium leading-5">
                  {totalPrice + count * 2000} so'm
                </p>
              </div>
              <button
                className="w-full transform rounded-[20px] bg-[#51267d] py-[10px] text-center align-middle font-medium leading-6 text-white duration-200 hover:bg-[#5e318b] active:scale-[0.95] disabled:bg-[#dde2e4] disabled:text-[#808080]"
                disabled={isPaymentDisabled}
                onClick={handlePayment}
              >
                To'lov sahifasiga o'tish
              </button>
              <p className="mt-1 text-center text-[12px] text-red-500">
                {isPaymentDisabled === true
                  ? "Eng kam buyurtma narxi 40 000 so'm bo'lishi kerak"
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
