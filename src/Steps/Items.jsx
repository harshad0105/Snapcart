import React from "react";
import Cards from "../components/Cards";

const Items = () => {
  const items = [
  {
    "name": "Paan Parag",
    "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/15232696/5038338445.jpg"
  },
  {
    "name": "Dairy, Bread & Eggs",
    "image": "https://cdn.grofers.com/app/assets/products/large_images/jpeg/73212035-c3c5-4a7c-9692-5166725a1d6c.jpg?ts=1710347998"
  },
  {
    "name": "Fruits & Vegetables",
    "image": "https://www.shutterstock.com/image-photo/fresh-organic-fruits-vegetables-wicker-600nw-2480783921.jpg"
  },
  {
    "name": "Cold Drinks & Juices",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNirpMkG92_LWgMbMv8l-K0J26Cxlp3Waz5f1yL2l_uluyujHIILcPNaemFSUWRDWxidw&usqp=CAU"
  },
  {
    "name": "Snacks & Munchies",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhON8-bvZBe-4g-dAWvYkZgX9MPd-DNvgMnRGKadAEPVbQRWQN_zRBVKl-0JRkGojWF8Q&usqp=CAU"
  },
  {
    "name": "Breakfast & Instant Food",
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLAtx-5KSL7TK6lBXGZ3-etBw6MOoEzWweEy74STXhDlMisuv4QzSP2rGhtnzCi2_NHZM&usqp=CAU"
},
  {
    "name": "Sweet Tooth",
    "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/9_1693202755712.png"
  },
  {
    "name": "Bakery & Biscuits",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJw77xM0Pb5h-Th_8HoiJDQvVSFEOl7pziQ&s"
  },
  {
    "name": "Tea, Coffee & Health Drink",
    "image": "https://img.cdnx.in/358917/tea-1714079003993.jpeg?width=260&height=260&format=webp"
  },
  {
    "name": "Atta, Rice & Dal",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCat5By6UFWepKtG2rUDt5IzwSAUbdMjh-dJbyGoMYfHZlK64uXzGPHBrkkPuSVau1vqY&usqp=CAU"
  },
  {
    "name": "Masala, Oil & More",
    "image": "https://img.cdnx.in/358917/Masala-1714078780301.jpeg?width=260&height=260&format=webp"
  },
  {
    "name": "Sauces & Spreads",
    "image": "https://i.mscwlns.co/media/misc/pdp/sauce-squeezy-spread-combo/Sauce-and-Spread_lb9xkx.jpg?tr=w-500,c-at_max"
  },
  {
    "name": "Chicken, Meat & Fish",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDk4uPJkcNojxAYDhlf8Vn21YiQPYzO2QZQ&s"
  },
  {
    "name": "Baby Care",
    "image": "https://wellify.in/cdn/shop/files/Care-Package-Top-Tiles-01.jpg?v=1688983896"
  },
  {
    "name": "Pharma & Wellness",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQECK1h8cSRiEnws0SRfxJOz8Jl08OKzq5sTNhgGkPN_cBd_RxGxlVdUbjk5mycwYUrdNc&usqp=CAU"
  },
  {
    "name": "Cleaning Essentials",
    "image": "https://www.jiomart.com/images/product/original/491899957/my-home-3-in-1-cleaning-combo-pack-500-ml-x-3-product-images-o491899957-p590142239-0-202408010009.jpg?im=Resize=(1000,1000)"
  },
  {
    "name": "Room Freshner",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRobuj8dsuHXUQoopydkdtWDbxOkvvorKNXSYbDQBhAQqAhv-flbxGnpNvbqimMXr6e57g&usqp=CAU"
  },
  {
    "name": "Personal Care",
    "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/163_1698986628342.png"
  },
]

  return (
    <>
      <div>
        <div className="flex p-5 flex-wrap items-center justify-around">
          {items.map((item, index) => (
            <Cards key={index} name={item.name} image={item.image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Items;
