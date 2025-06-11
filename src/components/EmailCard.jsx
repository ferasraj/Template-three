import { Field, Input, Button } from "@headlessui/react";
import { toast } from "react-toastify";
import CustomToast from "./CustomToast ";
import { useState, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

// مخطط التحقق باستخدام Zod
const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

const EmailCard = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // ✅ حالة التحميل
  const inputRef = useRef(null); // ✅ ريف لحقل الإيميل

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = emailSchema.safeParse({ email });
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setError("");
    setLoading(true); // ✅ ابدأ التحميل

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.ok) {
        toast.success("Subscribtion Successfully");
        setEmail(""); // ✅ تفريغ الحقل
        inputRef.current?.blur(); // ✅ إزالة التركيز من الحقل
      } else {
        toast.error("Some Thing Went Wrong , Try Again Later");
      }
    } catch (err) {
      console.error(err);
      toast.error("Faild to Subscribe , Check Your Internet Connection");
    } finally {
      setLoading(false); // ✅ أوقف التحميل
    }
  };

  return (
    <form onSubmit={handleSubmit} className="subscribe-event w-full mt-7">
      <Field
        className={twMerge(
          "w-full max-w-[600px] my-8 mx-auto py-8 px-10 bg-[#f6f5f5]",
          "rounded-[50px] flex gap-5"
        )}
      >
        <Input
          ref={inputRef} // ✅ إضافة الريف هنا
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(""); // مسح الخطأ أثناء الكتابة
          }}
          onBlur={() => {
            setError(""); // عند الخروج خارج الحقل نخفي الرسالة
          }}
          placeholder="Enter Your Email"
          className={twMerge(
            "block p-5 rounded-[50px] bg-white caret-primary flex-[1] border-none text-gray-600",
            "placeholder:opacity-100 placeholder:transition-opacity placeholder:duration-300",
            "focus:outline-none focus:placeholder:opacity-0",
            error && "ring-2 ring-red-100"
          )}
        />
        <Button
          type="submit"
          disabled={loading} // ✅ تعطيل الزر أثناء التحميل
          className={twMerge(
            "rounded-[50px] text-white bg-primary font-bold p-5 cursor-pointer",
            "transition-transform duration-300 hover:scale-105 hover:bg-secondary",
            "focus:outline-none focus:scale-105 focus:bg-secondary",
            loading && "opacity-70 cursor-not-allowed"
          )}
        >
          {loading ? (
            <span
              className={twMerge(
                "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin inline-block"
              )}
            />
          ) : (
            "Subscribe"
          )}
        </Button>
      </Field>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <CustomToast />
    </form>
  );
};

export default EmailCard;
