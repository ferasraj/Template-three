import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = () => {
  return (
    <ToastContainer
      position="top-left"
      autoClose={3000}
      rtl={false}
      theme="colored"
      toastStyle={{
        fontFamily: "Tajawal, sans-serif",
        fontSize: "16px",
        textAlign: "left",
        direction: "ltr",
        fontWeight: "bold",
        backgroundColor: "#2196f3",
        opacity: 0.8,
        color: "#1a1a1a",
        padding: "12px 20px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    />
  );
};

export default CustomToast;
