import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "../scss/premium.scss";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createPaymentUrl } from "../store/features/PaymentSlice";
import vnpay from "../assets/img/vnpay.png";
import momo from "../assets/img/MoMo_Logo 1.png";
import { Link } from "react-router-dom";

function Premium() {
  const dispatch = useDispatch();
  const [paymentUrlData, setPaymentUrlData] = useState({
    orderType: "upgrade",
    customerName: "Joba upgrade",
    cost: 290000,
    orderDescription: "pro",
  });
  const paymentUrl = useSelector((state) => state.payment.paymentUrl);

  useEffect(() => {
    let isRendered = true;
    if (isRendered && paymentUrl) {
      window.open(paymentUrl, "_blank");
    }
    return () => {
      isRendered = false;
    };
  }, [paymentUrl]);

  const handlePayment = () => {
    dispatch(createPaymentUrl(paymentUrlData));
  };
  return (
    <div>
      <NavBar />
      <h1>Register an account</h1>
      <div className="main__columns">
        <div className="basic__step">
          <span>Basic</span>
          <h2>Freemium</h2>
          <small>Free for all users</small>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="red"
              >
                <path
                  d="M5.76 13.5L9 10.26L12.24 13.5L13.5 12.24L10.26 9L13.5 5.76L12.24 4.5L9 7.74L5.76 4.5L4.5 5.76L7.74 9L4.5 12.24L5.76 13.5ZM9 18C7.755 18 6.585 17.7638 5.49 17.2912C4.395 16.8187 3.4425 16.1775 2.6325 15.3675C1.8225 14.5575 1.18125 13.605 0.70875 12.51C0.23625 11.415 0 10.245 0 9C0 7.755 0.23625 6.585 0.70875 5.49C1.18125 4.395 1.8225 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.18125 5.49 0.70875C6.585 0.23625 7.755 0 9 0C10.245 0 11.415 0.23625 12.51 0.70875C13.605 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8187 4.395 17.2912 5.49C17.7638 6.585 18 7.755 18 9C18 10.245 17.7638 11.415 17.2912 12.51C16.8187 13.605 16.1775 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8187 12.51 17.2912C11.415 17.7638 10.245 18 9 18Z"
                  fill="#E63946"
                />
              </svg>
              Experience about yourself
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="red"
              >
                <path
                  d="M5.76 13.5L9 10.26L12.24 13.5L13.5 12.24L10.26 9L13.5 5.76L12.24 4.5L9 7.74L5.76 4.5L4.5 5.76L7.74 9L4.5 12.24L5.76 13.5ZM9 18C7.755 18 6.585 17.7638 5.49 17.2912C4.395 16.8187 3.4425 16.1775 2.6325 15.3675C1.8225 14.5575 1.18125 13.605 0.70875 12.51C0.23625 11.415 0 10.245 0 9C0 7.755 0.23625 6.585 0.70875 5.49C1.18125 4.395 1.8225 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.18125 5.49 0.70875C6.585 0.23625 7.755 0 9 0C10.245 0 11.415 0.23625 12.51 0.70875C13.605 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8187 4.395 17.2912 5.49C17.7638 6.585 18 7.755 18 9C18 10.245 17.7638 11.415 17.2912 12.51C16.8187 13.605 16.1775 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8187 12.51 17.2912C11.415 17.7638 10.245 18 9 18Z"
                  fill="#E63946"
                />
              </svg>
              Full lessons (1 Mooc )
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="red"
              >
                <path
                  d="M5.76 13.5L9 10.26L12.24 13.5L13.5 12.24L10.26 9L13.5 5.76L12.24 4.5L9 7.74L5.76 4.5L4.5 5.76L7.74 9L4.5 12.24L5.76 13.5ZM9 18C7.755 18 6.585 17.7638 5.49 17.2912C4.395 16.8187 3.4425 16.1775 2.6325 15.3675C1.8225 14.5575 1.18125 13.605 0.70875 12.51C0.23625 11.415 0 10.245 0 9C0 7.755 0.23625 6.585 0.70875 5.49C1.18125 4.395 1.8225 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.18125 5.49 0.70875C6.585 0.23625 7.755 0 9 0C10.245 0 11.415 0.23625 12.51 0.70875C13.605 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8187 4.395 17.2912 5.49C17.7638 6.585 18 7.755 18 9C18 10.245 17.7638 11.415 17.2912 12.51C16.8187 13.605 16.1775 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8187 12.51 17.2912C11.415 17.7638 10.245 18 9 18Z"
                  fill="#E63946"
                />
              </svg>
              Full reading (1 Mooc )
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="red"
              >
                <path
                  d="M5.76 13.5L9 10.26L12.24 13.5L13.5 12.24L10.26 9L13.5 5.76L12.24 4.5L9 7.74L5.76 4.5L4.5 5.76L7.74 9L4.5 12.24L5.76 13.5ZM9 18C7.755 18 6.585 17.7638 5.49 17.2912C4.395 16.8187 3.4425 16.1775 2.6325 15.3675C1.8225 14.5575 1.18125 13.605 0.70875 12.51C0.23625 11.415 0 10.245 0 9C0 7.755 0.23625 6.585 0.70875 5.49C1.18125 4.395 1.8225 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.18125 5.49 0.70875C6.585 0.23625 7.755 0 9 0C10.245 0 11.415 0.23625 12.51 0.70875C13.605 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8187 4.395 17.2912 5.49C17.7638 6.585 18 7.755 18 9C18 10.245 17.7638 11.415 17.2912 12.51C16.8187 13.605 16.1775 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8187 12.51 17.2912C11.415 17.7638 10.245 18 9 18Z"
                  fill="#E63946"
                />
              </svg>
              Exercises (1 Mooc )
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="red"
              >
                <path
                  d="M5.76 13.5L9 10.26L12.24 13.5L13.5 12.24L10.26 9L13.5 5.76L12.24 4.5L9 7.74L5.76 4.5L4.5 5.76L7.74 9L4.5 12.24L5.76 13.5ZM9 18C7.755 18 6.585 17.7638 5.49 17.2912C4.395 16.8187 3.4425 16.1775 2.6325 15.3675C1.8225 14.5575 1.18125 13.605 0.70875 12.51C0.23625 11.415 0 10.245 0 9C0 7.755 0.23625 6.585 0.70875 5.49C1.18125 4.395 1.8225 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.18125 5.49 0.70875C6.585 0.23625 7.755 0 9 0C10.245 0 11.415 0.23625 12.51 0.70875C13.605 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8187 4.395 17.2912 5.49C17.7638 6.585 18 7.755 18 9C18 10.245 17.7638 11.415 17.2912 12.51C16.8187 13.605 16.1775 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8187 12.51 17.2912C11.415 17.7638 10.245 18 9 18Z"
                  fill="#E63946"
                />
              </svg>
              Q&A (1 Mooc )
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="red"
              >
                <path
                  d="M5.76 13.5L9 10.26L12.24 13.5L13.5 12.24L10.26 9L13.5 5.76L12.24 4.5L9 7.74L5.76 4.5L4.5 5.76L7.74 9L4.5 12.24L5.76 13.5ZM9 18C7.755 18 6.585 17.7638 5.49 17.2912C4.395 16.8187 3.4425 16.1775 2.6325 15.3675C1.8225 14.5575 1.18125 13.605 0.70875 12.51C0.23625 11.415 0 10.245 0 9C0 7.755 0.23625 6.585 0.70875 5.49C1.18125 4.395 1.8225 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.18125 5.49 0.70875C6.585 0.23625 7.755 0 9 0C10.245 0 11.415 0.23625 12.51 0.70875C13.605 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8187 4.395 17.2912 5.49C17.7638 6.585 18 7.755 18 9C18 10.245 17.7638 11.415 17.2912 12.51C16.8187 13.605 16.1775 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8187 12.51 17.2912C11.415 17.7638 10.245 18 9 18Z"
                  fill="#E63946"
                />
              </svg>
              Full 3 basics moocs
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="red"
              >
                <path
                  d="M5.76 13.5L9 10.26L12.24 13.5L13.5 12.24L10.26 9L13.5 5.76L12.24 4.5L9 7.74L5.76 4.5L4.5 5.76L7.74 9L4.5 12.24L5.76 13.5ZM9 18C7.755 18 6.585 17.7638 5.49 17.2912C4.395 16.8187 3.4425 16.1775 2.6325 15.3675C1.8225 14.5575 1.18125 13.605 0.70875 12.51C0.23625 11.415 0 10.245 0 9C0 7.755 0.23625 6.585 0.70875 5.49C1.18125 4.395 1.8225 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.18125 5.49 0.70875C6.585 0.23625 7.755 0 9 0C10.245 0 11.415 0.23625 12.51 0.70875C13.605 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8187 4.395 17.2912 5.49C17.7638 6.585 18 7.755 18 9C18 10.245 17.7638 11.415 17.2912 12.51C16.8187 13.605 16.1775 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8187 12.51 17.2912C11.415 17.7638 10.245 18 9 18Z"
                  fill="#E63946"
                />
              </svg>
              Full 7 advanced moocs
            </li>
          </ul>
        </div>
        <div className="experience__step">
          <span>Experience</span>
          <h2>Trial</h2>
          <small>Just 50VND and Cancel anytime</small>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="red"
              >
                <path
                  d="M5.76 13.5L9 10.26L12.24 13.5L13.5 12.24L10.26 9L13.5 5.76L12.24 4.5L9 7.74L5.76 4.5L4.5 5.76L7.74 9L4.5 12.24L5.76 13.5ZM9 18C7.755 18 6.585 17.7638 5.49 17.2912C4.395 16.8187 3.4425 16.1775 2.6325 15.3675C1.8225 14.5575 1.18125 13.605 0.70875 12.51C0.23625 11.415 0 10.245 0 9C0 7.755 0.23625 6.585 0.70875 5.49C1.18125 4.395 1.8225 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.18125 5.49 0.70875C6.585 0.23625 7.755 0 9 0C10.245 0 11.415 0.23625 12.51 0.70875C13.605 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8187 4.395 17.2912 5.49C17.7638 6.585 18 7.755 18 9C18 10.245 17.7638 11.415 17.2912 12.51C16.8187 13.605 16.1775 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8187 12.51 17.2912C11.415 17.7638 10.245 18 9 18Z"
                  fill="#E63946"
                />
              </svg>
              Experience about yourself
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M7.74 13.14L14.085 6.795L12.825 5.535L7.74 10.62L5.175 8.055L3.915 9.315L7.74 13.14ZM9 18C7.755 18 6.585 17.7637 5.49 17.2912C4.395 16.8187 3.4425 16.1775 2.6325 15.3675C1.8225 14.5575 1.18125 13.605 0.70875 12.51C0.23625 11.415 0 10.245 0 9C0 7.755 0.23625 6.585 0.70875 5.49C1.18125 4.395 1.8225 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.18125 5.49 0.70875C6.585 0.23625 7.755 0 9 0C10.245 0 11.415 0.23625 12.51 0.70875C13.605 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8187 4.395 17.2912 5.49C17.7637 6.585 18 7.755 18 9C18 10.245 17.7637 11.415 17.2912 12.51C16.8187 13.605 16.1775 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8187 12.51 17.2912C11.415 17.7637 10.245 18 9 18Z"
                  fill="#1D3557"
                />
              </svg>
              Full lessons (1 Mooc )
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M7.74 13.14L14.085 6.795L12.825 5.535L7.74 10.62L5.175 8.055L3.915 9.315L7.74 13.14ZM9 18C7.755 18 6.585 17.7637 5.49 17.2912C4.395 16.8187 3.4425 16.1775 2.6325 15.3675C1.8225 14.5575 1.18125 13.605 0.70875 12.51C0.23625 11.415 0 10.245 0 9C0 7.755 0.23625 6.585 0.70875 5.49C1.18125 4.395 1.8225 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.18125 5.49 0.70875C6.585 0.23625 7.755 0 9 0C10.245 0 11.415 0.23625 12.51 0.70875C13.605 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8187 4.395 17.2912 5.49C17.7637 6.585 18 7.755 18 9C18 10.245 17.7637 11.415 17.2912 12.51C16.8187 13.605 16.1775 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8187 12.51 17.2912C11.415 17.7637 10.245 18 9 18Z"
                  fill="#1D3557"
                />
              </svg>
              Full reading (1 Mooc )
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M7.74 13.14L14.085 6.795L12.825 5.535L7.74 10.62L5.175 8.055L3.915 9.315L7.74 13.14ZM9 18C7.755 18 6.585 17.7637 5.49 17.2912C4.395 16.8187 3.4425 16.1775 2.6325 15.3675C1.8225 14.5575 1.18125 13.605 0.70875 12.51C0.23625 11.415 0 10.245 0 9C0 7.755 0.23625 6.585 0.70875 5.49C1.18125 4.395 1.8225 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.18125 5.49 0.70875C6.585 0.23625 7.755 0 9 0C10.245 0 11.415 0.23625 12.51 0.70875C13.605 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8187 4.395 17.2912 5.49C17.7637 6.585 18 7.755 18 9C18 10.245 17.7637 11.415 17.2912 12.51C16.8187 13.605 16.1775 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8187 12.51 17.2912C11.415 17.7637 10.245 18 9 18Z"
                  fill="#1D3557"
                />
              </svg>
              Exercises (1 Mooc )
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M7.74 13.14L14.085 6.795L12.825 5.535L7.74 10.62L5.175 8.055L3.915 9.315L7.74 13.14ZM9 18C7.755 18 6.585 17.7637 5.49 17.2912C4.395 16.8187 3.4425 16.1775 2.6325 15.3675C1.8225 14.5575 1.18125 13.605 0.70875 12.51C0.23625 11.415 0 10.245 0 9C0 7.755 0.23625 6.585 0.70875 5.49C1.18125 4.395 1.8225 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.18125 5.49 0.70875C6.585 0.23625 7.755 0 9 0C10.245 0 11.415 0.23625 12.51 0.70875C13.605 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8187 4.395 17.2912 5.49C17.7637 6.585 18 7.755 18 9C18 10.245 17.7637 11.415 17.2912 12.51C16.8187 13.605 16.1775 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8187 12.51 17.2912C11.415 17.7637 10.245 18 9 18Z"
                  fill="#1D3557"
                />
              </svg>
              Q&A (1 Mooc )
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="red"
              >
                <path
                  d="M5.76 13.5L9 10.26L12.24 13.5L13.5 12.24L10.26 9L13.5 5.76L12.24 4.5L9 7.74L5.76 4.5L4.5 5.76L7.74 9L4.5 12.24L5.76 13.5ZM9 18C7.755 18 6.585 17.7638 5.49 17.2912C4.395 16.8187 3.4425 16.1775 2.6325 15.3675C1.8225 14.5575 1.18125 13.605 0.70875 12.51C0.23625 11.415 0 10.245 0 9C0 7.755 0.23625 6.585 0.70875 5.49C1.18125 4.395 1.8225 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.18125 5.49 0.70875C6.585 0.23625 7.755 0 9 0C10.245 0 11.415 0.23625 12.51 0.70875C13.605 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8187 4.395 17.2912 5.49C17.7638 6.585 18 7.755 18 9C18 10.245 17.7638 11.415 17.2912 12.51C16.8187 13.605 16.1775 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8187 12.51 17.2912C11.415 17.7638 10.245 18 9 18Z"
                  fill="#E63946"
                />
              </svg>
              Full 3 basics moocs
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="red"
              >
                <path
                  d="M5.76 13.5L9 10.26L12.24 13.5L13.5 12.24L10.26 9L13.5 5.76L12.24 4.5L9 7.74L5.76 4.5L4.5 5.76L7.74 9L4.5 12.24L5.76 13.5ZM9 18C7.755 18 6.585 17.7638 5.49 17.2912C4.395 16.8187 3.4425 16.1775 2.6325 15.3675C1.8225 14.5575 1.18125 13.605 0.70875 12.51C0.23625 11.415 0 10.245 0 9C0 7.755 0.23625 6.585 0.70875 5.49C1.18125 4.395 1.8225 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.18125 5.49 0.70875C6.585 0.23625 7.755 0 9 0C10.245 0 11.415 0.23625 12.51 0.70875C13.605 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8187 4.395 17.2912 5.49C17.7638 6.585 18 7.755 18 9C18 10.245 17.7638 11.415 17.2912 12.51C16.8187 13.605 16.1775 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8187 12.51 17.2912C11.415 17.7638 10.245 18 9 18Z"
                  fill="#E63946"
                />
              </svg>
              Full 7 advanced moocs
            </li>
          </ul>
        </div>
        <div className="premium__step">
          <span>
            Premium
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.5 19C14.7467 19 19 14.7467 19 9.5C19 4.25329 14.7467 0 9.5 0C4.25329 0 0 4.25329 0 9.5C0 14.7467 4.25329 19 9.5 19ZM4.31809 4.91163L5.4696 11.4429H13.5302L14.6817 4.91163L11.5151 7.88038L9.49991 4.31788L7.48475 7.88038L4.31809 4.91163ZM12.9545 13.8179C13.2999 13.8179 13.5302 13.5804 13.5302 13.2241V12.6304H5.4696V13.2241C5.4696 13.5804 5.69991 13.8179 6.04536 13.8179H12.9545Z"
                fill="#FFB703"
              />
            </svg>
          </span>
          <h2>590k/full 10 moocs</h2>
          <small>Buy once, ...</small>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M7.74 13.14L14.085 6.795L12.825 5.535L7.74 10.62L5.175 8.055L3.915 9.315L7.74 13.14ZM9 18C7.755 18 6.585 17.7637 5.49 17.2912C4.395 16.8187 3.4425 16.1775 2.6325 15.3675C1.8225 14.5575 1.18125 13.605 0.70875 12.51C0.23625 11.415 0 10.245 0 9C0 7.755 0.23625 6.585 0.70875 5.49C1.18125 4.395 1.8225 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.18125 5.49 0.70875C6.585 0.23625 7.755 0 9 0C10.245 0 11.415 0.23625 12.51 0.70875C13.605 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8187 4.395 17.2912 5.49C17.7637 6.585 18 7.755 18 9C18 10.245 17.7637 11.415 17.2912 12.51C16.8187 13.605 16.1775 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8187 12.51 17.2912C11.415 17.7637 10.245 18 9 18Z"
                  fill="#1D3557"
                />
              </svg>
              Experience about yourself
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M7.74 13.14L14.085 6.795L12.825 5.535L7.74 10.62L5.175 8.055L3.915 9.315L7.74 13.14ZM9 18C7.755 18 6.585 17.7637 5.49 17.2912C4.395 16.8187 3.4425 16.1775 2.6325 15.3675C1.8225 14.5575 1.18125 13.605 0.70875 12.51C0.23625 11.415 0 10.245 0 9C0 7.755 0.23625 6.585 0.70875 5.49C1.18125 4.395 1.8225 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.18125 5.49 0.70875C6.585 0.23625 7.755 0 9 0C10.245 0 11.415 0.23625 12.51 0.70875C13.605 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8187 4.395 17.2912 5.49C17.7637 6.585 18 7.755 18 9C18 10.245 17.7637 11.415 17.2912 12.51C16.8187 13.605 16.1775 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8187 12.51 17.2912C11.415 17.7637 10.245 18 9 18Z"
                  fill="#1D3557"
                />
              </svg>
              Full lessons (1 Mooc )
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M7.74 13.14L14.085 6.795L12.825 5.535L7.74 10.62L5.175 8.055L3.915 9.315L7.74 13.14ZM9 18C7.755 18 6.585 17.7637 5.49 17.2912C4.395 16.8187 3.4425 16.1775 2.6325 15.3675C1.8225 14.5575 1.18125 13.605 0.70875 12.51C0.23625 11.415 0 10.245 0 9C0 7.755 0.23625 6.585 0.70875 5.49C1.18125 4.395 1.8225 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.18125 5.49 0.70875C6.585 0.23625 7.755 0 9 0C10.245 0 11.415 0.23625 12.51 0.70875C13.605 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8187 4.395 17.2912 5.49C17.7637 6.585 18 7.755 18 9C18 10.245 17.7637 11.415 17.2912 12.51C16.8187 13.605 16.1775 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8187 12.51 17.2912C11.415 17.7637 10.245 18 9 18Z"
                  fill="#1D3557"
                />
              </svg>
              Full reading (1 Mooc )
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M7.74 13.14L14.085 6.795L12.825 5.535L7.74 10.62L5.175 8.055L3.915 9.315L7.74 13.14ZM9 18C7.755 18 6.585 17.7637 5.49 17.2912C4.395 16.8187 3.4425 16.1775 2.6325 15.3675C1.8225 14.5575 1.18125 13.605 0.70875 12.51C0.23625 11.415 0 10.245 0 9C0 7.755 0.23625 6.585 0.70875 5.49C1.18125 4.395 1.8225 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.18125 5.49 0.70875C6.585 0.23625 7.755 0 9 0C10.245 0 11.415 0.23625 12.51 0.70875C13.605 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8187 4.395 17.2912 5.49C17.7637 6.585 18 7.755 18 9C18 10.245 17.7637 11.415 17.2912 12.51C16.8187 13.605 16.1775 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8187 12.51 17.2912C11.415 17.7637 10.245 18 9 18Z"
                  fill="#1D3557"
                />
              </svg>
              Exercises (1 Mooc )
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M7.74 13.14L14.085 6.795L12.825 5.535L7.74 10.62L5.175 8.055L3.915 9.315L7.74 13.14ZM9 18C7.755 18 6.585 17.7637 5.49 17.2912C4.395 16.8187 3.4425 16.1775 2.6325 15.3675C1.8225 14.5575 1.18125 13.605 0.70875 12.51C0.23625 11.415 0 10.245 0 9C0 7.755 0.23625 6.585 0.70875 5.49C1.18125 4.395 1.8225 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.18125 5.49 0.70875C6.585 0.23625 7.755 0 9 0C10.245 0 11.415 0.23625 12.51 0.70875C13.605 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8187 4.395 17.2912 5.49C17.7637 6.585 18 7.755 18 9C18 10.245 17.7637 11.415 17.2912 12.51C16.8187 13.605 16.1775 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8187 12.51 17.2912C11.415 17.7637 10.245 18 9 18Z"
                  fill="#1D3557"
                />
              </svg>
              Q&A (1 Mooc )
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M7.74 13.14L14.085 6.795L12.825 5.535L7.74 10.62L5.175 8.055L3.915 9.315L7.74 13.14ZM9 18C7.755 18 6.585 17.7637 5.49 17.2912C4.395 16.8187 3.4425 16.1775 2.6325 15.3675C1.8225 14.5575 1.18125 13.605 0.70875 12.51C0.23625 11.415 0 10.245 0 9C0 7.755 0.23625 6.585 0.70875 5.49C1.18125 4.395 1.8225 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.18125 5.49 0.70875C6.585 0.23625 7.755 0 9 0C10.245 0 11.415 0.23625 12.51 0.70875C13.605 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8187 4.395 17.2912 5.49C17.7637 6.585 18 7.755 18 9C18 10.245 17.7637 11.415 17.2912 12.51C16.8187 13.605 16.1775 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8187 12.51 17.2912C11.415 17.7637 10.245 18 9 18Z"
                  fill="#1D3557"
                />
              </svg>
              Full 3 basics moocs
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M7.74 13.14L14.085 6.795L12.825 5.535L7.74 10.62L5.175 8.055L3.915 9.315L7.74 13.14ZM9 18C7.755 18 6.585 17.7637 5.49 17.2912C4.395 16.8187 3.4425 16.1775 2.6325 15.3675C1.8225 14.5575 1.18125 13.605 0.70875 12.51C0.23625 11.415 0 10.245 0 9C0 7.755 0.23625 6.585 0.70875 5.49C1.18125 4.395 1.8225 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.18125 5.49 0.70875C6.585 0.23625 7.755 0 9 0C10.245 0 11.415 0.23625 12.51 0.70875C13.605 1.18125 14.5575 1.8225 15.3675 2.6325C16.1775 3.4425 16.8187 4.395 17.2912 5.49C17.7637 6.585 18 7.755 18 9C18 10.245 17.7637 11.415 17.2912 12.51C16.8187 13.605 16.1775 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8187 12.51 17.2912C11.415 17.7637 10.245 18 9 18Z"
                  fill="#1D3557"
                />
              </svg>
              Full 7 advanced moocs
            </li>
            <div className="btn__payment">
              <Button className="btn__pay" onClick={handlePayment}>
                <img src={vnpay} alt="" />
                Pay now
              </Button>
              <Link to="/payment">
                <Button className="btn__pay" onClick={handlePayment}>
                  <img src={momo} alt="" />
                  Pay now
                </Button>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Premium;
