import React from "react";
import NavBar from "../components/NavBar";
import { Breadcrumbs } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Carousel from "../components/Carousel";
const SLIDES = [
  {
    definition: "Những điều cần biết về....",
    title: "Kỹ thuật phần mềm là gì ?",
    description:
      "Kĩ thuật phần mềm là sự áp dụng một cách tiếp cận có hệ thống, có kỷ luật và định lượng được cho việc phát triển sử dụng và bảo trì phần mềm. Ngành kĩ thuật phần mềm bao trùm kiến thức, các phương pháp cho việc định nghĩa yêu cầu phần mềm, thực hiện các tác vụ thiết kế, xây dựng và bảo trì phần mềm. ",
    description1:
      "Ngoài kiến thức nền tảng, sinh viên còn được cung cấp các kiến thức chuyên sâu để xây dựng các dự án phần mềm. Có khả năng tổ chức thực hiện công việc trong lĩnh vực kĩ thuật phần mềm.",
  },
  {
    definition: "Những điều cần biết về....",
    title: "Những tố chất cần có?",
    description: "- Đam mê công nghệ ",
    description1: "- Tư duy logic chặt chẽ",
    description2: "- Óc sáng tạo",
    description3: "- Biết lắng nghe",
    description4: "- Khả năng ngoại ngữ",
  },
  {
    definition: "Những điều cần biết về....",
    title: "Cơ hội nghề nghiệp",
    description: "Cơ hội nghề nghiệp ngành kĩ thuật phần mềm",
    description1: "- Lập trình viên ứng dụng",
    description2: "- Kỹ sư hệ thống phần mềm",
    description3: "-  Kỹ sư đảm bảo chất lượng phần mềm",
    description4: "- Kỹ sư kiểm thử phần mềm",
    description5: "- Chuyên viên phân tích",
    description6: "- Thiết kế hệ thống thông tin",
    description7: "- Chuyên viên phân tích",
    description8: "- Thiết kế dữ liệu",
    description9: "- Giám đốc kỹ thuật",
  },
];
function DefinitionSE() {
  return (
    <div>
      <NavBar/>

      <Container maxWidth="xl">
        <Breadcrumbs
		style={{marginLeft:'7rem'}}
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link color="inherit" href="/course" underline="hover">
            Courses
          </Link>
          <Link color="inherit" href="/aboutSE" underline="hover">
            Software Engeneering
          </Link>
          <Link color="inherit" href="#" underline="hover">
            Beginning
          </Link>
          <Typography color="#8ECAE6">Reading</Typography>
        </Breadcrumbs>
        <Carousel slides={SLIDES} />
      </Container>
    </div>
  );
}

export default DefinitionSE;
