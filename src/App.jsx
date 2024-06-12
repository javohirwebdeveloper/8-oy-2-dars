import React, {useState} from "react";
import "./index.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  first: Yup.string().required("First name is required"),
  middle: Yup.string().required("Middle name is required"),
  last: Yup.string().required("Last name is required"),
  month: Yup.string().required("Month name is required"),
  day: Yup.string().required("day name is required"),
  year: Yup.string().required("year name is required"),
  gender: Yup.string().required("gender name is required"),
  street: Yup.string().required("Last name is required"),
  last: Yup.string().required("Last name is required"),
  last: Yup.string().required("Last name is required"),
  gender: Yup.string().required("Jinsni tanlang"),
});

const  App = () => {
  const [selectedLi, setSelectedLi] = useState(null);
  const [selectedInput, setSelectedInput] = useState(null);
  const initialValues = { name: "", email: "" };

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="pt-[70px] pb-[135px] ">
      <div className="form-all bg-[#F5FDFF] max-w-[752px] rounded">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            isSubmitting,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
          }) => (
            <Form>
              <div
                onClick={() => {
                  setSelectedLi(null);
                  setSelectedInput(null);
                }}
                className="p-[40px_52px] border-b-2 border-[#367C96]"
              >
                <div>
                  <div>
                    <h1 className="form-header text-[32px] font-[600]">
                      Registration Form
                    </h1>
                    <div className=" text-[16px] font-[500]  ">
                      Fill out the form carefully for registration
                    </div>
                  </div>
                </div>
              </div>
              <div className=" p-[0_38px] ">
                <div
                  onClick={() => {
                    setSelectedLi("1");
                  }}
                  className={` ${
                    selectedLi === "1"
                      ? "duration-200 bg-[#DBF3FA]"
                      : "duration-200"
                  } rounded-sm p-[12px_10px] m-[28px_4px_12px] `}
                >
                  <label
                    for="first_name"
                    className="text-[16px] m-[0_0_14px_2px] "
                  >
                    Student Name
                  </label>
                  <div
                    id="cid_4"
                    className="form-input-wide"
                    data-layout="full"
                  >
                    <div className=" mt-[14px] flex justify-between">
                      <span>
                        <input
                          id="first_name"
                          name="first"
                          value={values.first}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                          onClick={() => setSelectedInput("1")}
                          className={`${
                            selectedInput === "1"
                              ? "button-hover border-[#015875] border-2 duration-200"
                              : ""
                          } p-[0_10px] hover:shadow-[0_0_0_2px_hsl(from_#005875_h_s_l/50%)] hover:border-[#015875] hover:border-2  w-[210.66px] h-[40px] border  rounded outline-none border-[#367C96]`}
                          size={10}
                        />
                        <ErrorMessage
                          name="first"
                          component="div"
                          className="text-red-500 text-xs"
                        />
                        <label for="first_name" className="text-[11px]">
                          First Name
                        </label>
                      </span>
                      <span className="ml-[8px]">
                        <input
                          id="middle_name"
                          type="text"
                          name="middle"
                          value={values.middle}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          onClick={() => setSelectedInput("2")}
                          className={`${
                            selectedInput === "2"
                              ? "button-hover border-[#015875] border-2 duration-200"
                              : ""
                          } p-[0_10px] hover:shadow-[0_0_0_2px_hsl(from_#005875_h_s_l/50%)] hover:border-[#015875] hover:border-2  w-[210.66px] h-[40px] border  rounded outline-none border-[#367C96]`}
                          size={10}
                        />
                        <ErrorMessage
                          name="middle"
                          component="div"
                          className="text-red-500 text-xs"
                        />

                        <label for="middle_name" className="text-[11px]">
                          Middle Name
                        </label>
                      </span>
                      <span>
                        <input
                          id="last_name"
                          type="text"
                          name="last"
                          value={values.last}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          onClick={() => setSelectedInput("3")}
                          className={`${
                            selectedInput === "3"
                              ? "button-hover border-[#015875] border-2 duration-200"
                              : ""
                          } p-[0_10px]   w-[210.66px] h-[40px] border  rounded outline-none border-[#367C96] hover:shadow-[0_0_0_2px_hsl(from_#005875_h_s_l/50%)] hover:border-2 hover:border-[#015875] `}
                          size={10}
                        />
                        <ErrorMessage
                          name="last"
                          component="div"
                          className="text-red-500 text-xs"
                        />
                        <label for="last_name" className="text-[11px]">
                          Last Name
                        </label>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div
                    onClick={() => setSelectedLi("2")}
                    className={` ${
                      selectedLi === "2"
                        ? "duration-200 bg-[#DBF3FA]"
                        : "duration-200"
                    } rounded-sm p-[12px_10px] m-[12px_4px] `}
                  >
                    <label className=" m-[0_0_14px_2px] ">Birth Date</label>
                    <div className=" mt-[14px]">
                      <div className="flex">
                        <span
                          className="form-sub-label-container"
                          style={{ verticalAlign: "top" }}
                        >
                          <select
                            id="month"
                            onClick={() => setSelectedInput("4")}
                            className={`${
                              selectedInput === "4"
                                ? "button-hover border-[#015875] border-2 duration-200"
                                : ""
                            } w-[98px] text-[16px]  h-[40px] outline-none p-[0_10px_0_10px]  hover:shadow-[0_0_0_2px_hsl(from_#005875_h_s_l/50%)] hover:border-2 hover:border-[#015875]  border rounded border-[#367C96]`}
                          >
                            <option value="">Please select a month</option>
                            <option value={1}>January</option>
                            <option value={2}>February</option>
                            <option value={3}>March</option>
                            <option value={4}>April</option>
                            <option value={5}>May</option>
                            <option value={6}>June</option>
                            <option value={7}>July</option>
                            <option value={8}>August</option>
                            <option value={9}>September</option>
                            <option value={10}>October</option>
                            <option value={11}>November</option>
                            <option value={12}>December</option>
                          </select>
                          <label className="text-[12px] m-[8px_0_0_2] ">
                            Month
                          </label>
                        </span>
                        <span style={{ verticalAlign: "top" }}>
                          <select
                            id="day"
                            onClick={() => setSelectedInput("5")}
                            className={`${
                              selectedInput === "5"
                                ? "button-hover border-[#015875] border-2 duration-200"
                                : ""
                            } w-[98px] text-[16px]  h-[40px] outline-none p-[0_10px_0_10px]  hover:shadow-[0_0_0_2px_hsl(from_#005875_h_s_l/50%)] hover:border-2 hover:border-[#015875]  border rounded border-[#367C96]`}
                          >
                            <option value="">Please select a day</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                            <option value={13}>13</option>
                            <option value={14}>14</option>
                            <option value={15}>15</option>
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                            <option value={20}>20</option>
                            <option value={21}>21</option>
                            <option value={22}>22</option>
                            <option value={23}>23</option>
                            <option value={24}>24</option>
                            <option value={25}>25</option>
                            <option value={26}>26</option>
                            <option value={27}>27</option>
                            <option value={28}>28</option>
                            <option value={29}>29</option>
                            <option value={30}>30</option>
                            <option value={31}>31</option>
                          </select>
                          <label
                            for="day"
                            className="text-[12px] m-[8px_0_0_2] "
                          >
                            Day
                          </label>
                        </span>
                        <span className="ml-2">
                          <select
                            id="year"
                            onClick={() => setSelectedInput("6")}
                            className={`${
                              selectedInput === "6"
                                ? "button-hover border-[#015875] border-2 duration-200"
                                : ""
                            } w-[98px] text-[16px]  h-[40px] outline-none p-[0_10px_0_10px]  hover:shadow-[0_0_0_2px_hsl(from_#005875_h_s_l/50%)] hover:border-2 hover:border-[#015875]  border rounded border-[#367C96]`}
                          >
                            <option value="">Please select a year</option>
                            <option value={2024}>2024</option>
                            <option value={2023}>2023</option>
                            <option value={2022}>2022</option>
                            <option value={2021}>2021</option>
                            <option value={2020}>2020</option>
                            <option value={2019}>2019</option>
                            <option value={2018}>2018</option>
                            <option value={2017}>2017</option>
                            <option value={2016}>2016</option>
                            <option value={2015}>2015</option>
                            <option value={2014}>2014</option>
                            <option value={2013}>2013</option>
                            <option value={2012}>2012</option>
                            <option value={2011}>2011</option>
                            <option value={2010}>2010</option>
                            <option value={2009}>2009</option>
                            <option value={2008}>2008</option>
                            <option value={2007}>2007</option>
                            <option value={2006}>2006</option>
                            <option value={2005}>2005</option>
                            <option value={2004}>2004</option>
                            <option value={2003}>2003</option>
                            <option value={2002}>2002</option>
                            <option value={2001}>2001</option>
                            <option value={2000}>2000</option>
                            <option value={1999}>1999</option>
                            <option value={1998}>1998</option>
                            <option value={1997}>1997</option>
                            <option value={1996}>1996</option>
                            <option value={1995}>1995</option>
                            <option value={1994}>1994</option>
                            <option value={1993}>1993</option>
                            <option value={1992}>1992</option>
                            <option value={1991}>1991</option>
                            <option value={1990}>1990</option>
                            <option value={1989}>1989</option>
                            <option value={1988}>1988</option>
                            <option value={1987}>1987</option>
                            <option value={1986}>1986</option>
                            <option value={1985}>1985</option>
                            <option value={1984}>1984</option>
                            <option value={1983}>1983</option>
                            <option value={1982}>1982</option>
                            <option value={1981}>1981</option>
                            <option value={1980}>1980</option>
                            <option value={1979}>1979</option>
                            <option value={1978}>1978</option>
                            <option value={1977}>1977</option>
                            <option value={1976}>1976</option>
                            <option value={1975}>1975</option>
                            <option value={1974}>1974</option>
                            <option value={1973}>1973</option>
                            <option value={1972}>1972</option>
                            <option value={1971}>1971</option>
                            <option value={1970}>1970</option>
                            <option value={1969}>1969</option>
                            <option value={1968}>1968</option>
                            <option value={1967}>1967</option>
                            <option value={1966}>1966</option>
                            <option value={1965}>1965</option>
                            <option value={1964}>1964</option>
                            <option value={1963}>1963</option>
                            <option value={1962}>1962</option>
                            <option value={1961}>1961</option>
                            <option value={1960}>1960</option>
                            <option value={1959}>1959</option>
                            <option value={1958}>1958</option>
                            <option value={1957}>1957</option>
                            <option value={1956}>1956</option>
                            <option value={1955}>1955</option>
                            <option value={1954}>1954</option>
                            <option value={1953}>1953</option>
                            <option value={1952}>1952</option>
                            <option value={1951}>1951</option>
                            <option value={1950}>1950</option>
                            <option value={1949}>1949</option>
                            <option value={1948}>1948</option>
                            <option value={1947}>1947</option>
                            <option value={1946}>1946</option>
                            <option value={1945}>1945</option>
                            <option value={1944}>1944</option>
                            <option value={1943}>1943</option>
                            <option value={1942}>1942</option>
                            <option value={1941}>1941</option>
                            <option value={1940}>1940</option>
                            <option value={1939}>1939</option>
                            <option value={1938}>1938</option>
                            <option value={1937}>1937</option>
                            <option value={1936}>1936</option>
                            <option value={1935}>1935</option>
                            <option value={1934}>1934</option>
                            <option value={1933}>1933</option>
                            <option value={1932}>1932</option>
                            <option value={1931}>1931</option>
                            <option value={1930}>1930</option>
                            <option value={1929}>1929</option>
                            <option value={1928}>1928</option>
                            <option value={1927}>1927</option>
                            <option value={1926}>1926</option>
                            <option value={1925}>1925</option>
                            <option value={1924}>1924</option>
                            <option value={1923}>1923</option>
                            <option value={1922}>1922</option>
                            <option value={1921}>1921</option>
                            <option value={1920}>1920</option>
                          </select>
                          <label
                            for="year"
                            className="text-[12px] m-[8px_0_0_2] "
                          >
                            Year
                          </label>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => setSelectedLi("3")}
                    className={` ${
                      selectedLi === "3"
                        ? "duration-200 bg-[#DBF3FA]"
                        : "duration-200"
                    } rounded-sm p-[12px_10px] m-[12px_4px] `}
                  >
                    <label className=" m-[0_0_14px_2px] ">Gender</label>
                    <div className=" mt-[14px] ">
                      <select
                        id="month"
                        onClick={() => setSelectedInput("7")}
                        className={`${
                          selectedInput === "7"
                            ? "button-hover border-[#015875] border-2 duration-200"
                            : ""
                        } w-[310px] text-[16px]  h-[40px] outline-none p-[0_10px_0_10px]  hover:shadow-[0_0_0_2px_hsl(from_#005875_h_s_l/50%)] hover:border-2 hover:border-[#015875]  border rounded border-[#367C96]`}
                      >
                        <option value="">Please Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="N/A">N/A</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setSelectedLi("4");
                  }}
                  className={` ${
                    selectedLi === "4"
                      ? "duration-200 bg-[#DBF3FA]"
                      : "duration-200"
                  } rounded-sm p-[12px_10px] m-[12px]_4px `}
                >
                  <label for="street" className=" m-[0_0_14px_2px] ">
                    Address
                  </label>
                  <div className=" mt-[14px] ">
                    <div>
                      <div>
                        <span>
                          <span style={{ verticalAlign: "top" }}>
                            <input
                              type="text"
                              id="street"
                              onClick={() => setSelectedInput("8")}
                              className={`${
                                selectedInput === "8"
                                  ? "button-hover border-[#015875] border-2 duration-200"
                                  : ""
                              } p-[0_10px] w-[100%] h-[40px] rounded outline-none  hover:shadow-[0_0_0_2px_hsl(from_#005875_h_s_l/50%)] hover:border-[#015875] hover:border-2 border  border-[#367C96]`}
                              maxLength={100}
                            />
                            <label
                              className=" text-[12px] m-[11px_0_0_2px] "
                              for="street"
                            >
                              Street Address
                            </label>
                          </span>
                        </span>
                      </div>
                      <div className="mt-[20px]">
                        <span>
                          <span style={{ verticalAlign: "top" }}>
                            <input
                              type="text"
                              id="line"
                              onClick={() => setSelectedInput("9")}
                              className={`${
                                selectedInput === "9"
                                  ? "button-hover border-[#015875] border-2 duration-200"
                                  : ""
                              } p-[0_10px] hover:shadow-[0_0_0_2px_hsl(from_#005875_h_s_l/50%)] hover:border-2 hover:border-[#015875]  w-[100%] h-[40px] border rounded outline-none border-[#367C96]`}
                              maxLength={100}
                            />
                            <label
                              for="line"
                              className=" text-[12px] m-[11px_0_0_2px]"
                            >
                              Street Address Line 2
                            </label>
                          </span>
                        </span>
                      </div>
                      <div className="mt-[20px] flex justify-between ">
                        <span className="w-[48%]">
                          <span>
                            <input
                              type="text"
                              id="city"
                              onClick={() => setSelectedInput("10")}
                              className={`${
                                selectedInput === "10"
                                  ? "button-hover border-[#015875] border-2 duration-200"
                                  : ""
                              } p-[0_10px] hover:shadow-[0_0_0_2px_hsl(from_#005875_h_s_l/50%)] hover:border-2 hover:border-[#015875]  w-[100%] h-[40px] border rounded outline-none border-[#367C96]`}
                              maxLength={60}
                            />
                            <label
                              for="city"
                              className=" text-[12px] m-[11px_0_0_2px]"
                            >
                              City
                            </label>
                          </span>
                        </span>
                        <span className="w-[48%]">
                          <span className="">
                            <input
                              type="text"
                              id="state"
                              onClick={() => setSelectedInput("11")}
                              className={`${
                                selectedInput === "11"
                                  ? "button-hover border-[#015875] border-2 duration-200"
                                  : ""
                              } p-[0_10px] hover:shadow-[0_0_0_2px_hsl(from_#005875_h_s_l/50%)] hover:border-2 hover:border-[#015875]  w-[100%] h-[40px] border rounded outline-none border-[#367C96]`}
                              maxLength={60}
                            />
                            <label
                              for="state"
                              className=" text-[12px] m-[11px_0_0_2px]"
                            >
                              State / Province
                            </label>
                          </span>
                        </span>
                      </div>
                      <div className="mt-[20px]">
                        <span>
                          <span>
                            <input
                              type="text"
                              id="zip"
                              onClick={() => setSelectedInput("12")}
                              className={`${
                                selectedInput === "12"
                                  ? "button-hover border-[#015875] border-2 duration-200"
                                  : ""
                              } p-[0_10px] hover:shadow-[0_0_0_2px_hsl(from_#005875_h_s_l/50%)] hover:border-2 hover:border-[#015875]  w-[100%] h-[40px] border rounded outline-none border-[#367C96]`}
                              maxLength={20}
                            />
                            <label
                              for="zip"
                              className=" text-[12px] m-[11px_0_0_2px]"
                            >
                              Postal / Zip Code
                            </label>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-between items-start mt-[20px]">
                  <div
                    onClick={() => setSelectedLi("5")}
                    className={` ${
                      selectedLi === "5"
                        ? "duration-200 bg-[#DBF3FA]"
                        : "duration-200"
                    } rounded-sm p-[12px_10px] m-[12px_4px] `}
                  >
                    <label className="text-[16px]">Student E-mail</label>
                    <div>
                      <span style={{ verticalAlign: "top" }}>
                        <input
                          type="email"
                          id="input_27_full"
                          placeholder="ex: myname@example.com"
                          name="q27_mobileNumber[full]"
                          onClick={() => setSelectedInput("14")}
                          className={`${
                            selectedInput === "14"
                              ? "button-hover border-[#015875] border-2 duration-200"
                              : ""
                          } p-[0_10px] mt-[14px] hover:shadow-[0_0_0_2px_hsl(from_#005875_h_s_l/50%)] hover:border-2 hover:border-[#015875]  w-[310px] h-[40px] border rounded outline-none border-[#367C96]`}
                        />
                        <label
                          for="email"
                          className="text-[12px] p-[11px_0_0_0] "
                        >
                          example@example.com
                        </label>
                      </span>
                    </div>
                  </div>
                  <div
                    onClick={() => setSelectedLi("6")}
                    className={` ${
                      selectedLi === "6"
                        ? "duration-200 bg-[#DBF3FA]"
                        : "duration-200"
                    } rounded-sm p-[12px_10px] m-[12px_4px] `}
                  >
                    <label>Mobile Number</label>
                    <div>
                      <span style={{ verticalAlign: "top" }}>
                        <input
                          type="tel"
                          id="input_27_full"
                          placeholder="(000) 000-0000"
                          name="q27_mobileNumber[full]"
                          onClick={() => setSelectedInput("15")}
                          className={`${
                            selectedInput === "13"
                              ? "button-hover border-[#015875] border-2 duration-200"
                              : ""
                          } p-[0_10px] mt-[14px] hover:shadow-[0_0_0_2px_hsl(from_#005875_h_s_l/50%)] hover:border-2 hover:border-[#015875]  w-[310px] h-[40px] border rounded outline-none border-[#367C96]`}
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-between items-start mt-[20px]">
                  <div
                    onClick={() => setSelectedLi("7")}
                    className={` ${
                      selectedLi === "7"
                        ? "duration-200 bg-[#DBF3FA]"
                        : "duration-200"
                    } rounded-sm p-[12px_10px] m-[12px_4px] `}
                  >
                    <label>Phone Number</label>
                    <div>
                      <span style={{ verticalAlign: "top" }}>
                        <input
                          type="tel"
                          id="input_25_full"
                          onClick={() => setSelectedInput("16")}
                          className={`${
                            selectedInput === "16"
                              ? "button-hover border-[#015875] border-2 duration-200"
                              : ""
                          } p-[0_10px] mt-[14px] hover:shadow-[0_0_0_2px_hsl(from_#005875_h_s_l/50%)] hover:border-2 hover:border-[#015875]  w-[310px] h-[40px] border rounded outline-none border-[#367C96]`}
                          placeholder="(000) 000-0000"
                        />
                      </span>
                    </div>
                  </div>
                  <div
                    onClick={() => setSelectedLi("8")}
                    className={` ${
                      selectedLi === "8"
                        ? "duration-200 bg-[#DBF3FA]"
                        : "duration-200"
                    } rounded-sm p-[12px_10px] m-[12px_4px] `}
                  >
                    <label>Work Number</label>
                    <div>
                      <span
                        className="form-sub-label-container"
                        style={{ verticalAlign: "top" }}
                      >
                        <input
                          type="tel"
                          id="input_26_full"
                          onClick={() => setSelectedInput("17")}
                          className={`${
                            selectedInput === "17"
                              ? "button-hover border-[#015875] border-2 duration-200"
                              : ""
                          } p-[0_10px] mt-[14px] hover:shadow-[0_0_0_2px_hsl(from_#005875_h_s_l/50%)] hover:border-2 hover:border-[#015875]  w-[310px] h-[40px] border rounded outline-none border-[#367C96]`}
                          placeholder="(000) 000-0000"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-between items-start mt-[20px]">
                  <div
                    onClick={() => setSelectedLi("9")}
                    className={` ${
                      selectedLi === "9"
                        ? "duration-200 bg-[#DBF3FA]"
                        : "duration-200"
                    } rounded-sm p-[12px_10px] m-[12px_4px] `}
                  >
                    <label>Company</label>
                    <div>
                      <input
                        type="text"
                        id="input_14"
                        onClick={() => setSelectedInput("18")}
                        className={`${
                          selectedInput === "18"
                            ? "button-hover border-[#015875] border-2 duration-200"
                            : ""
                        } p-[0_10px] mt-[14px] hover:shadow-[0_0_0_2px_hsl(from_#005875_h_s_l/50%)] hover:border-2 hover:border-[#015875]  w-[310px] h-[40px] border rounded outline-none border-[#367C96]`}
                        size={310}
                      />
                    </div>
                  </div>
                  <div
                    onClick={() => setSelectedLi("10")}
                    className={` ${
                      selectedLi === "10"
                        ? "duration-200 bg-[#DBF3FA]"
                        : "duration-200"
                    } rounded-sm p-[12px_10px] m-[12px_4px] `}
                  >
                    <label>Courses</label>
                    <div
                      id="cid_46"
                      className="form-input-wide"
                      data-layout="half"
                    >
                      <select
                        onClick={() => setSelectedInput("19")}
                        className={`${
                          selectedInput === "19"
                            ? "button-hover border-[#015875] border-2 duration-200"
                            : ""
                        } p-[0_10px] mt-[14px] hover:shadow-[0_0_0_2px_hsl(from_#005875_h_s_l/50%)] hover:border-2 hover:border-[#015875]  w-[310px] h-[40px] border rounded outline-none border-[#367C96]`}
                      >
                        <option value="">Please Select</option>
                        <option value="Windows 8">Windows 8</option>
                        <option value="Introduction to Linux">
                          Introduction to Linux
                        </option>
                        <option value="English 101">English 101</option>
                        <option value="English 102">English 102</option>
                        <option value="Creative Writing 1">
                          Creative Writing 1
                        </option>
                        <option value="Creative writing 2">
                          Creative writing 2
                        </option>
                        <option value="History 101">History 101</option>
                        <option value="History 102">History 102</option>
                        <option value="Math 101">Math 101</option>
                        <option value="Math 102">Math 102</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => setSelectedLi("11")}
                  className={` ${
                    selectedLi === "11"
                      ? "duration-200 bg-[#DBF3FA]"
                      : "duration-200"
                  } rounded-sm p-[12px_10px] m-[12px_4px] mt-[20px] `}
                >
                  <label>Additional Comments</label>
                  <div>
                    <textarea
                      id="input_45"
                      onClick={() => setSelectedInput("20")}
                      className={`${
                        selectedInput === "20"
                          ? "button-hover border-[#015875] border-2 duration-200"
                          : ""
                      } p-[0_10px] mt-[14px] hover:shadow-[0_0_0_2px_hsl(from_#005875_h_s_l/50%)] hover:border-2 hover:border-[#015875] border rounded outline-none border-[#367C96]`}
                      style={{ width: 648, height: 163 }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="h-[108.8px] flex justify-center p-[30px_52px] w-full border-t-2 border-[#367C96]"
                onClick={() => {
                  setSelectedLi(null);
                  setSelectedInput(null);
                }}
              >
                <div>
                  <div
                    data-align="auto"
                    className="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField"
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#005875] hover:scale-110 duration-200 text-white rounded w-[180px] h-[40px]"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className=" flex fixed bottom-0 items-center p-[0_14px] justify-between bg-[#0a1551] w-full h-[56px] z-50  ">
        <div>
          <a href="https://www.jotform.com/">
            <img
              className="w-[132px]"
              src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNjcgNjYiIGNsYXNzPSJqbC1tYWluIHt7bG9nb0NvbG9yfX0iPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjU2Ljc4IDUwLjY3YTguNDYgOC40NiAwIDAxLTYuMDUtMi40NGMtMS42LTEuNi0yLjY4LTQuMDMtMi42OC03LjMxIDAtMy4zMiAxLjA4LTUuNzQgMi42OC03LjM0YTguNDcgOC40NyAwIDAxNi4wNS0yLjRjMi4yOCAwIDQuNDUuOCA2LjA1IDIuNCAxLjYgMS42IDIuNjcgNC4wMiAyLjY3IDcuMzQgMCAzLjMyLTEuMDcgNS43NC0yLjY3IDcuMzRhOC40NyA4LjQ3IDAgMDEtNi4wNSAyLjR6bTAtMzAuMWMtMTEuNTggMC0yMC4zNSA4LjUyLTIwLjM1IDIwLjM1IDAgMTEuNzUgOC43NyAyMC4zNSAyMC4zNSAyMC4zNSAxMS41OCAwIDIwLjM1LTguNiAyMC4zNS0yMC4zNSAwLTExLjgzLTguNzctMjAuMzUtMjAuMzUtMjAuMzV6TTE2MC41IDUwLjk1YTguNDYgOC40NiAwIDAxLTYuMDUtMi40NGMtMS42LTEuNi0yLjY3LTQuMDItMi42Ny03LjMgMC0zLjMyIDEuMDgtNS43NSAyLjY3LTcuMzRhOC40NyA4LjQ3IDAgMDE2LjA2LTIuNDFjMi4yOCAwIDQuNDUuODEgNi4wNSAyLjQgMS42IDEuNiAyLjY3IDQuMDMgMi42NyA3LjM0IDAgMy4zMi0xLjA4IDUuNzUtMi42NyA3LjM0YTguNDcgOC40NyAwIDAxLTYuMDYgMi40MXptMC0zMC4xYy0xMS41NyAwLTIwLjM0IDguNTMtMjAuMzQgMjAuMzUgMCAxMS43NiA4Ljc3IDIwLjM1IDIwLjM0IDIwLjM1IDExLjU4IDAgMjAuMzUtOC42IDIwLjM1LTIwLjM1IDAtMTEuODItOC43Ny0yMC4zNC0yMC4zNC0yMC4zNHpNMzA4Ljc3IDYxLjE0aDExLjU1VjM4LjJjMC0xLjkuNi0zLjU1IDEuNjQtNC43MWE1LjkgNS45IDAgMDE0LjU2LTEuOWMyLjA4IDAgMy41LjcgNC40MSAxLjc2LjkzIDEuMDggMS40IDIuNjUgMS40IDQuNTV2MjMuMjRoMTEuNDhWMzguMmMwLTEuODUuNi0zLjUgMS42NC00LjY5YTUuNzggNS43OCAwIDAxNC40OC0xLjkyYzIuMTMgMCAzLjU0LjcgNC40NCAxLjc2LjkyIDEuMDggMS4zOCAyLjY1IDEuMzggNC41NXYyMy4yNEgzNjd2LTI1LjNjMC01LjE3LTEuNy04Ljk0LTQuMzktMTEuNC0yLjY3LTIuNDUtNi4yMy0zLjU0LTkuOC0zLjU0LTIuNTUgMC00Ljg4LjQ0LTYuOTcgMS40OS0xLjc5LjktMy4zNiAyLjIyLTQuNzQgNC4wNi0yLjIzLTMuNjMtNi4zLTUuNTUtMTEuMS01LjU1LTMuNTIgMC03LjU3IDEuNC0xMC4xMyA0LjF2LTMuMTZoLTExLjF2MzkuM3pNMzA0LjQyIDIxLjg3djExLjc3bC0uOS0uMThjLTEuMDctLjIxLTItLjI5LTIuODYtLjI5LTIuNDUgMC00LjYzLjYtNi4xOSAyLjA2LTEuNTUgMS40NS0yLjYyIDMuODYtMi42MiA3Ljc0djE4LjE3aC0xMS41MnYtMzkuM2gxMS4yMnYzLjhjMi43Ny0zLjM0IDcuMDgtNCA5Ljc5LTQgLjg2IDAgMS42NS4wOSAyLjQuMTZsLjY4LjA3ek05Ni43MiA0Mi4yaDExLjI2bC4xMy4xM2MuMDguMDguMTQuMi4xNS4zM2E3Ljk4IDcuOTggMCAwMDIuNjQgNS41NyA4IDggMCAwMDUuMjYgMS44IDcuMyA3LjMgMCAwMDUuNjUtMi4zOSA4LjkxIDguOTEgMCAwMDIuMDMtNS45OFY4Ljc0aDEyLjE4VjQyYzAgMTAuNjUtOC4xNSAxOS41NS0xOS43OCAxOS41NS01LjggMC0xMC42OC0xLjkzLTE0LjEtNS4yOC0zLjM0LTMuMjctNS4zMy03Ljk0LTUuNDItMTMuNjJ2LS40NXpNMjM0LjggMTQuMDdsLjY0LjE5VjUuMzRsLS4zLS4xM2E4LjYzIDguNjMgMCAwMC0yLjAxLS41M2MtLjg1LS4xNC0xLjg1LS4yMy0yLjg3LS4yMy0zLjk3IDAtOC40MyAxLjMyLTEwLjc0IDMuNjktMi4zMSAyLjM2LTMuNTkgNS43My0zLjU5IDkuNzd2MS44OGgtNS44djEwLjI0aDUuOHYzMS4xMWgxMS42NVYzMC4wM2g3Ljg2VjE5Ljc5aC03Ljg2di0xLjc0YzAtMS44MS42My0yLjg2IDEuNDQtMy40NmE0LjkyIDQuOTIgMCAwMTIuOTQtLjg1YzEuNSAwIDIuMzguMiAyLjg0LjMzek0yMDUuOTYgNTEuOTVsLjYtLjE5djguOTVsLS4yOC4xNGMtLjQyLjItMS4xLjM5LTEuODkuNTMtLjguMTMtMS43My4yMi0yLjcuMjItMy43MiAwLTcuOS0xLjMyLTEwLjA3LTMuNy0yLjE3LTIuMzctMy4zNy01Ljc1LTMuMzctOS44VjMwLjAzaC01LjQ1VjE5Ljg0aDUuNDVWOC44aDEwLjkzdjExLjA1aDcuMzh2MTAuMmgtNy4zOHYxNy45MWMwIDEuODIuNiAyLjg3IDEuMzYgMy40OC43OC42MyAxLjgxLjg1IDIuNzYuODUgMS40MSAwIDIuMjMtLjIgMi42Ni0uMzN6IiBjbGFzcz0iamwtbWFpbi1jb2xvciBqbC1tYWluLXRleHQiIGZpbGw9IiNGRkYiLz48cGF0aCBkPSJNMTYuNDMgNjIuNzNjMS4yNCAxLjIuMzYgMy4yNy0xLjQgMy4yN0gzLjk1QTMuOSAzLjkgMCAwMTAgNjIuMTZWNTEuNDRjMC0xLjcyIDIuMTMtMi41NyAzLjM4LTEuMzZsMTMuMDUgMTIuNjV6IiBjbGFzcz0iamwtbWFpbi1jb2xvciIgZmlsbD0iI0ZGRiIvPjxwYXRoIGQ9Ik0zMy43MiA2My41NmE4LjMgOC4zIDAgMDEwLTExLjc4bDExLjgyLTExLjc0YTguNDIgOC40MiAwIDAxMTEuODYgMCA4LjMgOC4zIDAgMDEwIDExLjc4TDQ1LjU4IDYzLjU2YTguNDIgOC40MiAwIDAxLTExLjg2IDB6IiBjbGFzcz0iamwtcGVuLWJvdHRvbSIgZmlsbD0iI0ZGQjYyOSIvPjxwYXRoIGQ9Ik0yLjUgMzQuMDVhOC4zIDguMyAwIDAxMC0xMS43OEwyMi4zOSAyLjVhOC40MiA4LjQyIDAgMDExMS44NiAwIDguMyA4LjMgMCAwMTAgMTEuNzhsLTE5LjkgMTkuNzdhOC40MiA4LjQyIDAgMDEtMTEuODUgMHoiIGNsYXNzPSJqbC1wZW4tdG9wIiBmaWxsPSIjMDlGIi8+PHBhdGggZD0iTTE4Ljc2IDQ4LjE1YTguMyA4LjMgMCAwMTAtMTEuNzhsMjYuODctMjYuN2E4LjQyIDguNDIgMCAwMTExLjg2IDAgOC4zIDguMyAwIDAxMCAxMS43OGwtMjYuODcgMjYuN2E4LjQyIDguNDIgMCAwMS0xMS44NiAweiIgY2xhc3M9ImpsLXBlbi1taWRkbGUiIGZpbGw9IiNGRjYxMDAiLz48L3N2Zz4="
              alt=""
            />
          </a>
        </div>
        <div className="flex justify-between items-center">
          <span className="formFooter text-white m-[0_11.256px_0_0]">
            Now create your own Jotform - It’s free!
          </span>
          <button className="bg-[#78BB07] text-white flex justify-center w-[216px] h-[35.9px] text-[14px] items-center ">
            <a href="https://www.jotform.com/?utm_source=formfooter&utm_medium=banner&utm_term=241622268982463&utm_content=jotform_button&utm_campaign=powered_by_jotform_le">
              Create your own Jotform
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
