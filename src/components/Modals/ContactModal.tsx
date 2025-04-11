import closeIcon from "../../assets/images/svg/close.svg";
import { PropsInterfaces } from "../../utils/InterfacesAndTypes";
import { useContext, useRef } from "react";
import { modalContext } from "../../App";
import LabelInput from "../CompositeComponents/LabelInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string(),
  })
  .required();

const ContactModal = ({ isOpen }: PropsInterfaces.Modal) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: { firstName: "", lastName: "", email: "", message: "" },
  });

  const formRef = useRef<HTMLFormElement>(null);

  if (!isOpen) {
    return null;
  }

  const onSubmit = async () => {
    try {
      const response = await emailjs.sendForm(
        "service_8ntquk1",
        "template_sjxkuzt",
        formRef.current!,
        "rSPatCvSj_nIgRfHM"
      );

      if (response.status === 200) {
        alert("Thank you for your message!");
        modalCtx(false);
      }
    } catch (error) {
      console.log("Error sending email: ", error);
    }
  };

  const modalCtx = useContext(modalContext);

  return (
    <div
      className="fixed inset-0 bg-[#07070780] bg-opacity-50 flex items-center justify-center z-10 contact-modal"
      onClick={(e: any) => {
        if (e.target.className.includes("contact-modal")) modalCtx(false);
      }}
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="bg-black-bg border-1 border-gold-21 p-[54px] rounded-4xl relative"
      >
        <div className="flex md:min-w-[620px] flex-col gap-2.5">
          <h2 className="text-white font-poppins-semibold text-[28px] text-center mb-8">
            Contact Us
          </h2>
          <div className="flex flex-row gap-6">
            <LabelInput
              {...register("firstName")}
              name="firstName"
              text="First Name"
              type="text"
              complexStyle="flex flex-col gap-3 flex-1/2"
              labelStyle="text-white font-poppins-medium"
              inputStyle={`border-1 p-4 text-white ${
                isSubmitted && errors.firstName
                  ? "border-red-error"
                  : "border-[#ffffff20]"
              } rounded-[10px] placeholder:text-[#ffffff50] placeholder:font-poppins-light caret-gold-21 focus:outline-none focus:border-gold-21`}
              placeholderText="Enter your name"
              errorMessage={
                isSubmitted && errors.firstName
                  ? "First name is required"
                  : undefined
              }
            />
            <LabelInput
              {...register("lastName")}
              name="lastName"
              text="Last Name"
              type="text"
              complexStyle="flex flex-col gap-3 flex-1/2"
              labelStyle="text-white font-poppins-medium"
              inputStyle={`border-1 p-4 text-white ${
                isSubmitted && errors.lastName
                  ? "border-red-error"
                  : "border-[#ffffff20]"
              } rounded-[10px] placeholder:text-[#ffffff50] placeholder:font-poppins-light caret-gold-21 focus:outline-none focus:border-gold-21`}
              placeholderText="Enter your last name"
              errorMessage={
                isSubmitted && errors.lastName
                  ? "Last name is required"
                  : undefined
              }
            />
          </div>
          <LabelInput
            {...register("email")}
            name="email"
            text="Email"
            type="text"
            complexStyle="flex flex-col gap-3"
            labelStyle="text-white font-poppins-medium"
            inputStyle={`border-1 p-4 text-white ${
              isSubmitted && errors.email
                ? "border-red-error"
                : "border-[#ffffff20]"
            } rounded-[10px] placeholder:text-[#ffffff50] placeholder:font-poppins-light caret-gold-21 focus:outline-none focus:border-gold-21`}
            placeholderText="Enter your email"
            errorMessage={
              isSubmitted && errors.email
                ? errors.email?.type === "required"
                  ? "Email is required"
                  : "Email format should be like user@example.com"
                : undefined
            }
          />
          <label className="text-white font-poppins-medium">Your message</label>
          <textarea
            {...register("message")}
            name="message"
            id="modal-text-area"
            placeholder="Enter your message here"
            className={`max-h-[164px] min-h-15 border-1 ${
              isSubmitted && errors.message
                ? "border-red-error"
                : "border-[#ffffff20]"
            } p-4 text-white rounded-[10px] placeholder:text-[#ffffff50] placeholder:font-poppins-light caret-gold-21 focus:outline-none focus:border-gold-21`}
          ></textarea>
          <button
            type="submit"
            className="uppercase bg-gradient-to-r from-gold-21 to-gold-22 text-black-bg font-poppins-semibold text-[14px] md:text-[14px] px-[32px] md:px-[32px] py-[12px] md:py-[12px] rounded-full ml-auto mr-auto mt-5.5 block cursor-pointer hover:bg-gradient-to-r hover:from-gold-22 hover:to-gold-21"
          >
            SEND MESSAGE
          </button>
        </div>
        <button
          className="absolute top-6 right-6 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            modalCtx(false);
          }}
        >
          <img src={closeIcon} alt="" />
        </button>
      </form>
    </div>
  );
};

export default ContactModal;
