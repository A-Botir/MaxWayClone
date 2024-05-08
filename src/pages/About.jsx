import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <section className="py-8 sm:py-6 md:py-7">
        <h2 className="mb:leading-8 mb-6 text-[32px] font-semibold leading-10 sm:mb-4 sm:text-[24px] sm:leading-8 md:mb-4 md:text-[24px]">
          Kompaniya haqida
        </h2>
        <div className="mb-8 max-h-[300px] w-full overflow-hidden rounded-xl sm:mb-6 sm:max-h-[165px] md:mb-6 md:max-h-[165px]">
          <img
            src="https://maxway.uz/_next/image?url=%2Fimages%2Fabout.png&w=1920&q=75"
            alt="max way img"
            className="box-border w-full rounded-xl object-cover"
          />
        </div>
        <p className="max-w-[68%] text-[16px] leading-6 text-[#252c32]">
          Kompaniya 2005 yilning fevral oyida Toshkent shahrida tashkil etilgan.
          Hozirda kompaniyaning Toshkent shahrida 18 ta filiali mavjud.
          <br />
          Taomnoma asosan klаb sendvichlari, hot-doglar, burgerlar, lavashlar va
          donarlardan iborat. Bizning ustuvor yo'nalishlarimiz -
          ingredientlarning yangiligi va sifati, qo'shimchalarning
          xilma-xilligi, arzon narxlar va mehmonlarning takliflariga e'tibor.
          <br />
          Har kuni turli xil odamlar MaxWay-dan buyurtma berishadi. Biz esa
          tashrif buyuruvchilar sonini ham, filiallar sonini ham oshirishga
          harakat qilmoqdamiz. Har bir tayyorlangan taom bilan biz o'ziga xos
          retseptlarning tafsilotlarini aniqlaymiz va sizning sevimli brendingiz
          bo'lishda davom etish uchun narx va sifatning mukammal muvozanatini
          qidiramiz.
          <br />
          Agar siz kutilmaganda biz tomondan yomon xizmat yoki past sifatli
          pishirilgan taomga duch kelsangiz, bizga{" "}
          <Link
            to="https://t.me/maxwaymasterfood_bot"
            target="_blank"
            className="text-[16px] leading-6 text-blue-500 hover:underline"
          >
            @maxwaymasterfood_bot
          </Link>{" "}
          manziliga murojaat qiling. Biz ijobiy va salbiy fikr-mulohazalarni
          mamnuniyat bilan qabul qilamiz. Mehmonning shikoyati - bu sovg'a, bu
          tufayli bizda o'sish uchun maqsad bo’ladi.
        </p>
      </section>
    </div>
  );
};

export default About;
