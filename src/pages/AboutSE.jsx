import React from "react";
import NavBar from "../components/NavBar";
import EmblaCarousel from "../js/EmblaCarousel";

const SLIDES = [
  {
    definition: "Definition",
    title: "Nhánh nhỏ của khoa học máy tính",
    description:
      "Thiết kế, phát triển, thử nghiệm và bảo trì các ứng dụng phần mềm",
    description1: "Sử dụng ngôn ngữ lập trình để xây dựng và sửa lỗi phần mềm",
  },
  {
    definition: "Definition",
    title: "Kỹ sư phần mềm - “chiến thần” tạo phần mềm",
    description: "Sử dụng quản lý cấu hình phần mềm để kiểm soát hệ thống",
    description1:
      "Khả năng đặc biệt: Nói chuyện và am hiểu ngôn ngữ máy (ngôn ngữ lập trình)",
  },
  {
    definition: "Definition",
    title: "Kỹ thuật phầm mềm - cội nguồn công nghệ",
    description: "Sản phầm có thể được bảo trì",
    description1: "Sản phầm phải đáng tin cậy",
    description2: "Sản phầm phải được tối ưu hóa ",
    description3: "Sản phầm dễ dàng sử dụng",
  },
  {
    definition: "Diffticulties",
    title: "Luôn cập nhật và tiếp cận công nghệ mới mỗi ngày,",
    description: "Đau đầu vì thuật toán, coding dài như sớ.",
    description1: "Mất ăn, mất ngủ vì chiếc bug “xinh” ",
  },
  {
    definition: "Opportunities",
    title: "Kỹ thuật máy tính",
    description: "Kỹ sư hệ thống",
    description1: "Quản lý dự án",
    description2: "Quản lý chất lượng",
    description3: "Công thái học phần mềm",
  },
  {
    definition: "Universities & Academy",
    title: "Đại học Công nghệ thông tin",
    description: "Đại học Bách Khoa",
    description1: "Đại học Hutech",
    description2: "Đại học FPT",
    description3: "Đại học RMIT",
    home:'Return home'
  },
];

function AboutSE() {
  return (
    <div>
      <NavBar />
      <EmblaCarousel slides={SLIDES} />
      {/* <Carousel/> */}
    </div>
  );
}

export default AboutSE;
