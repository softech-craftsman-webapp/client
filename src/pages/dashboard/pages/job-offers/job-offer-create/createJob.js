import fetcher from "../../../../../helpers/fetcher";
import toast from "react-hot-toast";

const importCategories = (setState) => {
  fetcher("get", "/categories/all", null)
    .then((res) => {
      // success
      if (res.data.success) {
        const categories = res.data.payload;

        if (categories.length > 0) {
          const formatted_cat = [];

          categories.forEach((cat) => {
            formatted_cat.push({
              value: cat.id,
              label: cat.name,
            });
          });

          return setState(formatted_cat);
        }
      }
      // not succeed
      else {
        toast.error(res.data.message || "There is an error on this request");
      }
    })
    // client error
    .catch((error) => {
      error.response
        ? toast.error(error.response.data.message)
        : toast.error(error.message);
    });

  return [];
};

const createJob = (data, setState) => {
  fetcher("post", "/jobs/new", data)
    .then((res) => {
      // success
      if (res.data.success) {
        toast.success("You have created a job successfully.");
        setState((prev) => {
          return {
            ...prev,
            success: true,
          };
        });
      }
      // not succeed
      else {
        toast.error(res.data.message || "There is an error on this request");
      }
    })
    // client error
    .catch((error) => {
      error.response
        ? toast.error(error.response.data.message)
        : toast.error(error.message);
    });
};

export { importCategories, createJob };
