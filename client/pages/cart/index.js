import React from 'react';
import { useState } from 'react';

// Image
import Image from 'next/image';

// Images
import { images } from '../../data/data';

const index = () => {
  const [count, setCount] = useState(2);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };
  const handleChange = (event) => {
    const result = event.target.value.replace(/[^0-9]/gi, '');
    setCount(result);
  };

  return (
    <div className='font-["Montserrat"] mt-[106.5px]'>
      {/* Cart Top Buttons */}
      <div className="flex justify-between w-9/12 my-0 mx-auto max-sm:w-11/12">
        <a
          className="flex items-center font-bold text-[#E89F71] max-[448px]:mr-[12px]"
          href="/products"
        >
          <Image
            className="inline rounded-[30px] p-[7.5px] bg-[#E89F71] w-[30px]"
            style={{
              transform: 'matrix(-1, 0, 0, 1, 0, 0);',
            }}
            src={images[3]}
            alt="return to products button"
          />{' '}
          <span className="ml-[17px] relative top-[2px] max-sm:text-[14px] max-sm:ml-[8px]">
            Back to Products
          </span>
        </a>
        <button
          type="submit"
          className="font-bold bg-[#3A3A3A] py-[19px] px-[60px] text-white max-md:text-[12px] max-[503px]:px-[38px] max-[341px]:px-0"
        >
          PROCEED TO CHECKOUT
        </button>
      </div>

      {/* Cart Items */}
      <div className="w-8/12 my-0 mx-auto max-lg:w-4/5 max-md:w-11/12">
        <h2 className="border-b border-[#C8C8C8] font-bold text-[24px] pb-[29px] mt-[71px]">
          Cart
        </h2>
        <table className="w-full border-spacing-x-[15px] border-collapse">
          <thead className="max-[354px]:text-[12.5px]">
            <tr className="text-left">
              <th
                className="font-medium pt-[35px] pb-[29px] pl-[109px] max-xl:pl-[50px] max-md:pl-[20px] max-[303px]:pl-[10px]"
                colspan="1"
              >
                Item
              </th>
              <th
                className="font-medium pt-[35px] pb-[29px] pl-[150px] max-2xl:pl-[120px] max-xl:pl-[65px] max-[459px]:pl-[9px]"
                colspan="1"
              >
                Price
              </th>
              <th
                className="font-medium pt-[35px] pb-[29px] pl-[273px] max-[1906px]:pl-[160px] max-[1588px]:pl-[75px] max-sm:pl-[45px] max-[503px]:pl-[27px] max-[380px]:pl-[13px]"
                colspan="1"
              >
                Quantity
              </th>
              <th
                className="font-medium pt-[35px] pb-[29px] pr-[109px] max-xl:pr-[50px] max-md:pr-[20px] pl-[198px] max-[1906px]:pl-[100px] max-[1588px]:pl-[75px] max-sm:pl-[45px] max-[503px]:pl-[18px] max-[409px]:pl-[6px] text-right max-[290px]:pl-[0px]"
                colspan="1"
              >
                Total
              </th>
            </tr>
          </thead>
          <tbody className="text-[20px] max-sm:text-[15px] max-[423px]:text-[12px] max-[310px]:text-[10px]">
            <tr className="odd:bg-[#F1F1F3]">
              <td className="flex items-center py-[15px] pl-[109px] max-xl:pl-[50px] max-md:pl-[20px] max-[303px]:pl-[10px]">
                <Image
                  className=""
                  style={{}}
                  src={images[4]}
                  alt="return to products button"
                />{' '}
                <div className="ml-[23px] text-[#1A003C] flex flex-col	items-baseline max-sm:ml-[10px] max-[310px]:mr-[5px] max-[290px]:mr-0">
                  <p className="text-[16px] font-medium break-all max-[476px]:text-[14px] max-[380px]:text-[12px] max-[310px]:text-[10px] max-[310px]:mr-[9px] max-[290px]:text-[9px]">
                    Black PVC Card
                  </p>
                  <button
                    className="text-[12px] max-[353px]:text-[9px] max-[310px]:text-[8px]"
                    type="submit"
                  >
                    Remove
                  </button>
                </div>
              </td>
              <td className="pl-[150px] max-2xl:pl-[120px] max-xl:pl-[65px] max-[459px]:pl-[9px]">
                £39.99
              </td>
              <td className="pl-[273px] max-[1906px]:pl-[160px] max-[1588px]:pl-[75px] max-sm:pl-[45px] max-[503px]:pl-[27px] max-[380px]:pl-[13px] max-[290px]:pl-[8px]">
                <form className="flex items-center">
                  <div
                    onClick={decreaseCount}
                    className="flex items-center m-0 h-[18px] text-center align-middle pl-[6px] pr-[5px] text-white bg-[#6637A6] select-none	cursor-pointer mr-[-4px]"
                  >
                    -
                  </div>
                  <input
                    onChange={handleChange}
                    className="text-center border-none bg-transparent w-[40px] max-[409px]:w-[26px] h-[40px] appearance-none max-[290px]:w-[21px]"
                    type="text"
                    id="number"
                    value={count}
                  />
                  <div
                    onClick={increaseCount}
                    className="flex items-center m-0 h-[18px] text-center align-middle	pt-[7px] pb-[4.5px] pl-[6px] pr-[5px] text-white bg-[#6637A6] select-none	cursor-pointer ml-[-4px]"
                  >
                    +
                  </div>
                </form>
              </td>
              <td className="pr-[109px] max-xl:pr-[50px] max-md:pr-[20px] max-[280px]:pr-[11px] pl-[198px] max-[1906px]:pl-[100px] max-[1588px]:pl-[75px] max-sm:pl-[45px] max-[503px]:pl-[18px] max-[409px]:pl-[6px] max-[290px]:pl-[0px]">
                £79.98
              </td>
            </tr>
            <tr className="odd:bg-[#F1F1F3]">
              <td className="flex items-center py-[15px] pl-[109px] max-xl:pl-[50px] max-md:pl-[20px] max-[303px]:pl-[10px]">
                <Image
                  className=""
                  style={{}}
                  src={images[5]}
                  alt="return to products button"
                />{' '}
                <div className="ml-[23px] text-[#1A003C] flex flex-col	items-baseline max-sm:ml-[10px] max-[310px]:mr-[5px] max-[290px]:mr-0">
                  <p className="text-[16px] font-medium break-all max-[476px]:text-[14px] max-[380px]:text-[12px] max-[310px]:text-[10px] max-[310px]:mr-[9px] max-[290px]:text-[9px]">
                    Gold PVC Card
                  </p>
                  <button
                    className="text-[12px] max-[353px]:text-[9px] max-[310px]:text-[8px]"
                    type="submit"
                  >
                    Remove
                  </button>
                </div>
              </td>
              <td className="pl-[150px] max-2xl:pl-[120px] max-xl:pl-[65px] max-[459px]:pl-[9px]">
                £39.99
              </td>
              <td className="pl-[273px] max-[1906px]:pl-[160px] max-[1588px]:pl-[75px] max-sm:pl-[45px] max-[503px]:pl-[27px] max-[380px]:pl-[13px] max-[290px]:pl-[8px]">
                <form className="flex items-center">
                  <div
                    onClick={decreaseCount}
                    className="flex items-center m-0 h-[18px] text-center align-middle pl-[6px] pr-[5px] text-white bg-[#6637A6] select-none	cursor-pointer mr-[-4px]"
                  >
                    -
                  </div>
                  <input
                    onChange={handleChange}
                    className="text-center border-none bg-transparent w-[40px] max-[409px]:w-[26px] h-[40px] appearance-none max-[290px]:w-[21px]"
                    type="text"
                    id="number"
                    value={count}
                  />
                  <div
                    onClick={increaseCount}
                    className="flex items-center m-0 h-[18px] text-center align-middle pt-[7px] pb-[4.5px] pl-[6px] pr-[5px] text-white bg-[#6637A6] select-none	cursor-pointer ml-[-4px]"
                  >
                    +
                  </div>
                </form>
              </td>
              <td className="pr-[109px] max-xl:pr-[50px] max-md:pr-[20px] max-[280px]:pr-[11px] pl-[198px] max-[1906px]:pl-[100px] max-[1588px]:pl-[75px] max-sm:pl-[45px] max-[503px]:pl-[18px] max-[409px]:pl-[6px] max-[290px]:pl-[0px]">
                £79.98
              </td>
            </tr>
            <tr className="odd:bg-[#F1F1F3]">
              <td className="flex items-center py-[15px] pl-[109px] max-xl:pl-[50px] max-md:pl-[20px] max-[303px]:pl-[10px]">
                <Image
                  className=""
                  style={{}}
                  src={images[4]}
                  alt="return to products button"
                />{' '}
                <div className="ml-[23px] text-[#1A003C] flex flex-col	items-baseline max-sm:ml-[10px] max-[310px]:mr-[5px] max-[290px]:mr-0">
                  <p className="text-[16px] font-medium break-all max-[476px]:text-[14px] max-[380px]:text-[12px] max-[310px]:text-[10px] max-[310px]:mr-[9px] max-[290px]:text-[9px]">
                    Black PVC Card
                  </p>
                  <button
                    className="text-[12px] max-[353px]:text-[9px] max-[310px]:text-[8px]"
                    type="submit"
                  >
                    Remove
                  </button>
                </div>
              </td>
              <td className="pl-[150px] max-2xl:pl-[120px] max-xl:pl-[65px] max-[459px]:pl-[9px]">
                £39.99
              </td>
              <td className="pl-[273px] max-[1906px]:pl-[160px] max-[1588px]:pl-[75px] max-sm:pl-[45px] max-[503px]:pl-[27px] max-[380px]:pl-[13px] max-[290px]:pl-[8px]">
                <form className="flex items-center">
                  <div
                    onClick={decreaseCount}
                    className="flex items-center m-0 h-[18px] text-center align-middle pl-[6px] pr-[5px] text-white bg-[#6637A6] select-none	cursor-pointer mr-[-4px]"
                  >
                    -
                  </div>
                  <input
                    onChange={handleChange}
                    className="text-center border-none bg-transparent w-[40px] max-[409px]:w-[26px] h-[40px] appearance-none max-[290px]:w-[21px]"
                    type="text"
                    id="number"
                    value={count}
                  />
                  <div
                    onClick={increaseCount}
                    className="flex items-center m-0 h-[18px] text-center align-middle pt-[7px] pb-[4.5px] pl-[6px] pr-[5px] text-white bg-[#6637A6] select-none	cursor-pointer ml-[-4px]"
                  >
                    +
                  </div>
                </form>
              </td>
              <td className="pr-[109px] max-xl:pr-[50px] max-md:pr-[20px] max-[280px]:pr-[11px] pl-[198px] max-[1906px]:pl-[100px] max-[1588px]:pl-[75px] max-sm:pl-[45px] max-[503px]:pl-[18px] max-[409px]:pl-[6px] max-[290px]:pl-[0px]">
                £79.98
              </td>
            </tr>
          </tbody>
        </table>

        <p className="text-[#6637A6] text-[32px] text-right font-bold mt-[84px]">
          Grand Total £159.96
        </p>
      </div>
    </div>
  );
};

export default index;
