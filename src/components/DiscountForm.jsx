import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Button } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
// npm install emailjs-com
import { toast } from "react-toastify";
import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .superRefine((val, ctx) => {
      if (val && val.split(/\s+/).filter(Boolean).length < 3) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter your full name",
        });
      }
    }),

  email: z
    .string()
    .trim()
    .superRefine((val, ctx) => {
      if (!val) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Email is required",
        });
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val)
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Invalid email format",
        });
      }
    }),

  phone: z
    .string()
    .trim()
    .optional()
    .superRefine((val, ctx) => {
      if (val && !/^(\+?\d{7,15})$/.test(val.replace(/[\s-]/g, ""))) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Invalid phone number",
        });
      }
    }),

  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .superRefine((val, ctx) => {
      if (val && val.split(/\s+/).filter(Boolean).length < 10) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Message must be at least 10 words",
        });
      }
    }),
});

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const DiscountForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  //! دالة التحقق و استقصاء الاخطاء
  const validate = (data) => {
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach(
        (err) => (fieldErrors[err.path[0]] = err.message)
      );
      return { valid: false, errors: fieldErrors };
    }
    return { valid: true, data: result.data };
  };

  //onChange لإزالة الخطأ عند الكتابة في الحقل
  const handleFieldChange = (field) => (e) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: val }));
    if (val.trim()) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const handleBlur = (field) => () => {
    setErrors((prev) => ({ ...prev, [field]: null }));
  };

  //! دالة الإرسال
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = validate(formData);
    if (!result.valid) return setErrors(result.errors);

    try {
      setIsLoading(true);
      await emailjs.send(serviceID, templateID, formData, publicKey);
      toast.success("Your Request Sent Successfully");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
      inputRef.current?.blur();
    } catch {
      toast.error("Some Thing Went Wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div
      className={twMerge(
        "discount-form flex justify-center my-5 md:basis-1/2 basis-full"
      )}
    >
      <div className="content flex flex-col justify-center text-center px-5 items-center">
        <div>
          <h2
            className={twMerge(
              "text-[40px] tracking-[-2px] font-bold mb-3 text-center"
            )}
          >
            Request A Discount
          </h2>
        </div>
        {/* نموذج التواصل */}
        <Box
          className="w-full "
          onSubmit={handleSubmit}
          component="form"
          noValidate
          sx={{
            "& > :not(style)": {
              m: 1.5,
              width: "50vh",
              caretColor: "#2196f3",
            },
          }}
        >
          {/* الاسم */}
          <div className="pb-1">
            <TextField
              label="Your Name"
              variant="filled"
              id="name"
              value={formData.name}
              onChange={handleFieldChange("name")}
              onBlur={handleBlur("name")}
              fullWidth
            />
            <div className="h-2.5">
              {errors.name && (
                <p className=" text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
          </div>
          {/* البريد */}
          <div className="pb-1">
            <TextField
              label="Your Email"
              variant="filled"
              id="email"
              value={formData.email}
              onChange={handleFieldChange("email")}
              onBlur={handleBlur("email")}
              fullWidth
            />
            <div className="h-2.5">
              {errors.email && (
                <p className="text-red-500 text-sm ">{errors.email}</p>
              )}
            </div>
          </div>
          {/* الهاتف */}
          <div className="pb-1">
            <TextField
              className="pb-10"
              label="Your Phone"
              variant="filled"
              id="phone"
              value={formData.phone}
              onChange={handleFieldChange("phone")}
              onBlur={handleBlur("phone")}
              fullWidth
            />
            <div className="h-2.5">
              {errors.phone && (
                <p className="text-red-500  text-sm">{errors.phone}</p>
              )}
            </div>
          </div>
          {/* الرسالة */}
          <div className="pb-1">
            <TextareaAutosize
              minRows={6}
              style={{
                width: "100%",
                resize: "none",
                background: "#f0f0f0",
                borderBottom: "1px solid #767676",
              }}
              className={twMerge(
                "focus:outline-none caret-primary px-1 pt-1 rounded-t-[5px] text-black text-lg "
              )}
              id="message"
              value={formData.message}
              onChange={handleFieldChange("message")}
              onBlur={handleBlur("message")}
              placeholder="Tell Us About Your Needs"
            />
            <div className="h-2.5">
              {errors.message && (
                <p className="text-red-500 text-sm  ">{errors.message}</p>
              )}
            </div>
          </div>
          <div>
            <Button
              type="submit"
              disabled={isLoading}
              className={twMerge(
                "w-[150px] rounded-[5px] ",
                "text-center items-center justify-center",
                "text-white text-[20px]  bg-primary font-bold py-2 px-5 cursor-pointer",
                "transition-transform duration-300 hover:scale-105 hover:bg-secondary",
                "focus:outline-none focus:scale-105 focus:bg-secondary"
              )}
            >
              {isLoading ? "Sending..." : "Send"}
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default DiscountForm;
