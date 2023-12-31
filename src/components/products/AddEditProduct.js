import { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function AddEditProduct({
  isModalOpen = false,
  handleModal,
  handleSubmit,
  title = "Add product",
  data = {},
  actionState = false,
  buttonText = "Submit",
  formdata = {},
  touched,
  values,
  errors,
  handleChange,
  setFieldValue,
}) {
  useEffect(() => {
    if (data) {
      setFieldValue("title", data?.title);
      setFieldValue("price", data?.price);
      setFieldValue("brand", data?.brand);
      setFieldValue("category", data?.category);
      setFieldValue("id", data?.id);
    }
  }, [data, setFieldValue]);

  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <form
          onSubmit={handleSubmit}
          className="fixed inset-0 z-10 w-screen overflow-y-auto"
        >
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => handleModal()}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="w-full mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      {title}
                    </Dialog.Title>
                    <div className="w-full ">
                      <div className="mt-10 flex-col space-y-4 w-full">
                        <div className="w-full">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Title
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="title"
                              id="title"
                              value={values?.title}
                              onChange={handleChange}
                              autoComplete="product-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <small className="text-red-400">
                              {touched?.title && errors?.title}
                            </small>
                          </div>
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor="key"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Price
                          </label>
                          <div className="mt-2">
                            <input
                              type="number"
                              name="price"
                              id="price"
                              value={values?.price}
                              onChange={handleChange}
                              autoComplete="price"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <small className="text-red-400">
                              {touched?.price && errors?.price}
                            </small>
                          </div>
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor="brand"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Brand
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="brand"
                              id="brand"
                              value={values?.brand}
                              onChange={handleChange}
                              autoComplete="label"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <small className="text-red-400">
                              {touched?.brand && errors?.brand}
                            </small>
                          </div>
                        </div>{" "}
                        <div className="w-full">
                          <label
                            htmlFor="category"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Category
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="category"
                              id="category"
                              value={values?.category}
                              onChange={handleChange}
                              autoComplete="category"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <small className="text-red-400">
                              {touched?.category && errors?.category}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                    // onClick={() => handleSubmit()}
                  >
                    {buttonText}
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => handleModal()}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </form>
      </Dialog>
    </Transition.Root>
  );
}
