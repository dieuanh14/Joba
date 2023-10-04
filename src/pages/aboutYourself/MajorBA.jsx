import React from "react";
import NavBar from "../../components/NavBar";
import "../../scss/majorMobile.scss";
import BA from "../../assets/img/florid-school-science-project.gif";
function MajorBA() {
  return (
    <div className="about__yourself major__BA">
      <NavBar />
      <h1>Software Engeenering</h1>
      {/* <small>Finding Yourself</small> */}
      <div
        className="main__content"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          width: "67rem",
          alignItems: "center",
        }}
      >
        <div>
          <img src={BA} alt="" className="mobile__dev" />
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-2rem",
            }}
            className="major__name"
          >
            Business Analyst
          </span>
        </div>
        <div className="ba__definition">
          <span className="first__txt"> Business Analyst:</span>
          <span>
            <span></span>còn có tên gọi khác là chuyên viên phân tích nghiệp vụ.
            Nhiệm vụ chính của Business Analyst là phân tích nhu cầu của khách
            hàng và phối hợp với nội bộ công ty để đưa ra phương án giải quyết
            phù hợp.
          </span>
          <span className="first__txt">Để trở thành:</span>
          <span>
            <span></span> Business Analyst cần phải đưa ra các giải pháp vận
            hành doanh nghiệp bằng phần mềm và bảo mật thông tin kinh doanh. Do
            vậy, để theo đuổi công việc này, bạn có thể theo học các ngành như
            khoa học máy tính, kỹ thuật phần mềm, truyền thông - mạng máy tính…
          </span>
          <span className="first__txt">Công việc: </span>
          <span>
            <span></span>nhân sự cần am hiểu tốt và thành thạo các ứng dụng:
            Excel, powerpoint ,xử lý sự cố hệ thống (debugging) Writing queries
            data modeling skills, sequence diagrams… Song song đó là các kỹ năng
            mềm
          </span>
          <span className="first__txt">Thu nhập :</span>
          <span>
            <span></span> trung bình năm dao động từ $40,000 – $90,000. Dựa vào
            phân loại theo trình độ kinh nghiệm cũng sẽ ảnh hưởng đến thu nhập.
          </span>
        </div>
      </div>
    </div>
  );
}

export default MajorBA;
