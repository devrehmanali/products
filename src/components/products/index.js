import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAProductRequest,
  getProductsRequest,
  updateAProductsRequest,
} from "../../redux/reducers/ducks/ProductDuck";
import AddEditProduct from "./AddEditProduct";
import { Formik } from "formik";
import { number, object, string } from "yup";

export const initialValues = {
  title: "",
  price: "",
  brand: "",
  category: "",
  id: "",
};

export const productSchema = object().shape({
  title: string().required("Name is required!"),
  price: number().required("Price is required!"),
  brand: string().required("Brand is required!"),
  category: string().required("Category is required"),
});

export default function ProductList() {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const { productsDataList, productsDataLoading } = useSelector(
    ({ products }) => ({
      productsDataList: products?.productsDataList?.products,
      productsDataLoading: products?.productsDataLoading,
    })
  );

  useEffect(() => {
    dispatch(getProductsRequest());
  }, [dispatch]);

  const handleSubmit = useCallback(
    (values, handles) => {
      if (selected) {
        dispatch(updateAProductsRequest({ ...values }));
      } else {
        dispatch(addAProductRequest({ ...values }));
      }
      setModalOpen(false);
      setSelected(null);
      handles.resetForm();
    },
    [selected, dispatch]
  );

  const handleModal = useCallback(
    (item) => {
      if (item) {
        setModalOpen(true);
        setSelected(item);
      } else {
        setModalOpen(!isModalOpen);
        setSelected(null);
      }
    },
    [isModalOpen]
  );

  console.log(
    productsDataList,
    productsDataLoading,
    "GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG"
  );

  return (
    <>
      <div>
        <div className="p-6 flex justify-between items-center">
          <h1 className=" text-4xl">Products</h1>
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
            onClick={() => handleModal()}
          >
            Add Product
          </button>
        </div>

        <ul className="divide-y divide-gray-100 p-5">
          <span className="text-xl font-medium text-black-700  ">
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="md:w-5 w-4 h-4 sm:h-5 sm:w-4 md:h-5 text-gray-500 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="border border-gray-300 bg-white px-2 py-2 pl-10 w-full sm:text-[0.7rem] text-[0.7rem] md:text-sm text-gray-900"
                placeholder="Filter Items"
                //   value={searchedValue}
                //   onFocus={() => setIsOpenSearch(true)}
                //   onBlur={async () =>
                //     await new Promise((f) =>
                //       setTimeout(() => setIsOpenSearch(false), 500)
                //     )
                //   }
                //   onChange={(e) => {
                //     handleSearch(e.target.value);
                //   }}
              />
            </div>
          </span>

          {productsDataList &&
            productsDataList?.length > 0 &&
            productsDataList.map((product) => (
              <li
                onClick={() => {
                  handleModal(product);
                }}
                key={product?.id}
                className="flex justify-between gap-x-6 py-5"
              >
                <div className="flex min-w-0 gap-x-4">
                  <img
                    className="h-12 w-12 flex-none rounded-sm bg-gray-50"
                    src={product?.thumbnail}
                    alt=""
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {product?.title}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {product?.category}
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-base leading-6 text-gray-900">
                    {product?.brand}
                  </p>
                  <p className="text-sm leading-6 text-gray-900">
                    {product?.price + "$"}
                  </p>
                </div>
              </li>
            ))}
        </ul>

        <Formik
          initialValues={initialValues}
          onSubmit={(values, handles) => {
            console.log(values, "Clicked");
            handleSubmit(values, handles);
          }}
          validationSchema={productSchema}
        >
          {(formikProps) => {
            // const {
            //   touched,
            //   values,
            //   errors,
            //   handleChange,
            //   handleSubmit,
            //   setFieldValue,
            // } = formikProps;

            return (
              <AddEditProduct
                {...formikProps}
                isModalOpen={isModalOpen}
                handleModal={handleModal}
                data={selected}
                buttonText={!selected ? "Submit" : "Save"}
                title={!selected ? "Add Product" : "Update Product"}
              />
            );
          }}
        </Formik>
      </div>
    </>
  );
}
