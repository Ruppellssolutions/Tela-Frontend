"use client";

import Input from "@/components/general/Input";
import { submitContactUs } from "@/server-actions/submitContactUs";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@/components/general/Button";

const ContactForm = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().trim().required("Name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        phone: Yup.string()
            .trim()
            .matches(/^\d+$/, "Please enter only digits")
            .required("Phone is required"),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
        },
        validationSchema,
        onSubmit: (values) => {
            submitContactUs(values);
        },
    });

    return (
        <form
            onSubmit={formik.handleSubmit}
            className="right form w-full  md:w-[45%] p-[38px_16px] md:p-[48px_24px] rounded-[10px]"
            style={{
                boxShadow: "0px 4px 104px 0px rgba(0, 0, 0, 0.07)",
            }}
        >
            <h5 className="text-[#070707] text-[22px] sm:text-[26px] md:text-[32px] text-center font-['SF_UI_Display_Medium'] mb-[42px]">
                Say Hello
            </h5>
            <div className="inputs">
                <div className="input-container mb-[16px]">
                    <Input
                        name="name"
                        label="Name"
                        placeholder="Enter name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        error={
                            formik.touched.name &&
                            formik.errors.name &&
                            formik.errors.name
                        }
                    />
                </div>
                <div className="input-container mb-[16px]">
                    <Input
                        name="email"
                        label="Email"
                        placeholder="Enter email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={
                            formik.touched.email &&
                            formik.errors.email &&
                            formik.errors.email
                        }
                    />
                </div>
                <div className="input-container">
                    <Input
                        name="phone"
                        label="Phone Number"
                        type="number"
                        placeholder="Enter phone number"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        error={
                            formik.touched.phone &&
                            formik.errors.phone &&
                            formik.errors.phone
                        }
                    />
                </div>
            </div>
            <div className="button-wrapper mt-[48px]">
                <Button type="submit" title="Submit" />
            </div>
        </form>
    );
};

export default ContactForm;
