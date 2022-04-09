import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo-circle.svg";
import { Formik } from "formik";
import * as Yup from "yup";

const NewsletterContainer = styled.section`
  background-color: #d8d0c1;
  text-align: center;
  padding: 4rem 0;

  .greeting {
    margin: 1rem;
  }
  .newsletter-title {
    font-family: ${(props) => props.theme.fontFamily.headline};
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
  }

  .newsletter-promo {
    color: ${(props) => props.theme.color.primaryLight};
  }

  input {
    padding: 1rem;
    margin-right: 0.5rem;
    width: 300px;
  }

  input.error {
    border-color: red;
  }

  .input-feedback {
    color: red;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  cursor: pointer;
  font-family: ${(props) => props.theme.fontFamily.default};
  font-weight: 400;
  text-align: center;
  color: ${(props) => props.theme.color.light};
  background: ${(props) => props.theme.color.primary};
  border: 1px solid ${(props) => props.theme.color.primary};
`;

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <div className="newsletter">
        <img src={logo} alt="logo" />
        <strong className="greeting" style={{ display: "block" }}>
          ALOE, LET'S BE SOIL MATES!
        </strong>
        <p className="newsletter-title">Stay in the grove</p>
        <p className="newsletter-promo">
          Subscribe to our monthly newsletter &amp; get 20% off your first
          purchase
        </p>
      </div>
      <div>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required("Required"),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                {errors.email && touched.email && (
                  <div className="input-feedback">Email is {errors.email}</div>
                )}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div>
                    <input
                      id="email"
                      placeholder="Drop your email here"
                      type="text"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.email && touched.email
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting}>
                    Subscribe
                  </Button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </NewsletterContainer>
  );
};

export default Newsletter;
